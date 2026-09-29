"use client";

/**
 * Gestor de categorías del almacén.
 *
 * Permite añadir, renombrar y eliminar las categorías de producto que
 * alimentan el desplegable de la ficha de producto y los filtros de la
 * vista de almacén. Al eliminar una categoría, sus productos pasan a la
 * de repliegue («Otros» si existe). Los cambios se guardan al instante.
 */

import { useState } from "react";
import { useStore } from "../state/store";
import { useUI } from "../state/ui";
import Modal, { inputCls } from "./aura-modal";
import { IcAlert, IcCheck, IcPlus, IcTrash, IcX } from "./icons";

export default function CategoryManagerModal({ onClose }: { onClose: () => void }) {
  const { db, addProductCategory, renameProductCategory, deleteProductCategory } =
    useStore();
  const { toast, confirm } = useUI();

  const [newName, setNewName] = useState("");
  const [renaming, setRenaming] = useState<string | null>(null);
  const [renameValue, setRenameValue] = useState("");

  const counts = new Map<string, number>();
  for (const p of db.products)
    counts.set(p.category, (counts.get(p.category) ?? 0) + 1);

  function add() {
    const created = addProductCategory(newName);
    if (!created) {
      toast(
        newName.trim()
          ? "Ya existe una categoría con ese nombre"
          : "Escribe un nombre para la categoría",
        "err"
      );
      return;
    }
    toast(`Categoría «${created.name}» creada`);
    setNewName("");
  }

  function startRename(id: string, current: string) {
    setRenaming(id);
    setRenameValue(current);
  }

  function commitRename(id: string) {
    const ok = renameProductCategory(id, renameValue);
    if (!ok) toast("Nombre vacío o ya usado por otra categoría", "err");
    setRenaming(null);
  }

  async function remove(id: string, name: string, n: number) {
    const ok = await confirm({
      title: "Eliminar categoría",
      message: n
        ? `«${name}» tiene ${n} ${n === 1 ? "producto asociado" : "productos asociados"}. Al eliminarla, esos productos pasarán a otra categoría. ¿Continuar?`
        : `¿Eliminar la categoría «${name}»?`,
      confirmLabel: "Eliminar",
      danger: true,
    });
    if (!ok) return;
    if (deleteProductCategory(id)) {
      toast(`Categoría «${name}» eliminada`, "info");
    } else {
      toast("Debe quedar al menos una categoría", "err");
    }
  }

  return (
    <Modal
      title="Categorías del almacén"
      subtitle="Añade, renombra o elimina las categorías de tus productos"
      onClose={onClose}
      z={62}
      maxW="max-w-md"
    >
      <div className="space-y-4">
        {/* listado editable */}
        <div className="rounded-xl border border-line overflow-hidden">
          {db.productCategories.map((c, i) => {
            const n = counts.get(c.id) ?? 0;
            return (
              <div
                key={c.id}
                className={`flex items-center gap-2.5 px-3 py-2.5 ${i > 0 ? "border-t border-line" : ""} bg-card`}
              >
                <span
                  className="w-4 h-4 rounded-full shrink-0 ring-2 ring-paper"
                  style={{ background: c.bg, boxShadow: `inset 0 0 0 3px ${c.fg}` }}
                  aria-hidden
                />
                {renaming === c.id ? (
                  <>
                    <input
                      autoFocus
                      value={renameValue}
                      onChange={(e) => setRenameValue(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") commitRename(c.id);
                        if (e.key === "Escape") setRenaming(null);
                      }}
                      className={`${inputCls} py-1.5 flex-1 min-w-0`}
                      aria-label={`Nuevo nombre para ${c.name}`}
                    />
                    <button
                      onClick={() => commitRename(c.id)}
                      className="p-1.5 rounded-lg text-moss hover:bg-mint transition-colors shrink-0"
                      title="Guardar nombre"
                      aria-label={`Guardar nombre de ${c.name}`}
                    >
                      <IcCheck size={15} />
                    </button>
                    <button
                      onClick={() => setRenaming(null)}
                      className="p-1.5 rounded-lg text-faint hover:text-danger hover:bg-dangersoft transition-colors shrink-0"
                      title="Cancelar"
                      aria-label="Cancelar renombrado"
                    >
                      <IcX size={15} />
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => startRename(c.id, c.name)}
                      className="min-w-0 flex-1 text-left text-sm font-semibold text-ink truncate hover:text-pine transition-colors"
                      title={`Renombrar «${c.name}»`}
                    >
                      {c.name}
                    </button>
                    <span className="text-[10px] font-bold num text-faint bg-paper border border-line rounded-full px-2 py-0.5 shrink-0">
                      {n} {n === 1 ? "prod." : "prods."}
                    </span>
                    <button
                      onClick={() => remove(c.id, c.name, n)}
                      disabled={db.productCategories.length <= 1}
                      className={`p-1.5 rounded-lg transition-colors shrink-0 ${
                        db.productCategories.length <= 1
                          ? "text-faint/40 cursor-not-allowed"
                          : "text-faint hover:text-danger hover:bg-dangersoft"
                      }`}
                      title={
                        db.productCategories.length <= 1
                          ? "Debe quedar al menos una categoría"
                          : `Eliminar «${c.name}»`
                      }
                      aria-label={`Eliminar categoría ${c.name}`}
                    >
                      <IcTrash size={14} />
                    </button>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* añadir nueva */}
        <div className="flex items-center gap-2">
          <input
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && add()}
            placeholder="Nombre de la nueva categoría…"
            className={`${inputCls} flex-1 min-w-0`}
            aria-label="Nombre de la nueva categoría"
          />
          <button
            onClick={add}
            className="inline-flex items-center gap-1.5 rounded-lg bg-pine text-paper px-3.5 py-2.5 text-xs font-bold hover:bg-pine2 active:scale-[0.98] transition-all shadow-sm shrink-0"
          >
            <IcPlus size={14} /> Añadir
          </button>
        </div>

        <p className="flex items-start gap-2 text-[11px] text-faint leading-snug">
          <IcAlert size={13} className="shrink-0 mt-0.5" />
          Al eliminar una categoría, sus productos pasan automáticamente a otra
          categoría (siempre que quede más de una). Los cambios se aplican al
          instante en la ficha de producto y en los filtros del almacén.
        </p>

        <button
          onClick={onClose}
          className="w-full rounded-lg bg-pine text-paper px-4 py-2.5 text-sm font-bold hover:bg-pine2 active:scale-[0.98] transition-all shadow-sm"
        >
          Listo
        </button>
      </div>
    </Modal>
  );
}
