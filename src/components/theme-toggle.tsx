"use client";

/* Botón de modo claro/oscuro del topbar.
   Alterna entre el tema claro (Rosa) y el oscuro (Noche).
   Muestra icono de luna cuando está en modo claro y sol cuando está en modo oscuro. */

import { useTheme } from "@/state/theme";
import { IcMoon, IcSun } from "@/components/icons";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const dark = theme === "noche";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={dark ? "Activar modo claro" : "Activar modo oscuro"}
      title={dark ? "Modo claro" : "Modo oscuro"}
      className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 flex items-center justify-center text-paper transition-all shrink-0"
    >
      {dark ? <IcSun size={17} /> : <IcMoon size={17} />}
    </button>
  );
}
