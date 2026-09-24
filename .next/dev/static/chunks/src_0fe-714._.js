(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/appointment-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AppointmentModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/date-utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/store.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/ui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/aura-modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function ClientPicker({ clients, value, onChange, onNew }) {
    _s();
    const [q, setQ] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const sel = clients.find((c)=>c.id === value);
    const filtered = clients.filter((c)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["norm"])(`${c.name} ${c.phone} ${c.city}`).includes((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["norm"])(q)));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            sel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>onChange(""),
                className: "absolute left-2.5 top-1/2 -translate-y-1/2 p-0.5 rounded text-faint hover:text-ink transition-colors",
                title: "Quitar selección",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcChevronL"], {
                    size: 14
                }, void 0, false, {
                    fileName: "[project]/src/components/appointment-modal.tsx",
                    lineNumber: 44,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/appointment-modal.tsx",
                lineNumber: 38,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputCls"]} ${sel ? "pl-8" : ""}`,
                placeholder: sel ? sel.name : "Buscar por nombre o teléfono…",
                value: open ? q : sel?.name ?? "",
                autoFocus: true,
                onChange: (e)=>setQ(e.target.value),
                onFocus: ()=>{
                    setOpen(true);
                    setQ("");
                },
                onBlur: ()=>setTimeout(()=>setOpen(false), 140)
            }, void 0, false, {
                fileName: "[project]/src/components/appointment-modal.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute z-10 mt-1.5 w-full max-h-56 overflow-y-auto rounded-lg border border-linedark bg-card shadow-xl anim-fade",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onMouseDown: (e)=>{
                            e.preventDefault();
                            onNew();
                        },
                        className: "w-full flex items-center gap-2 px-3 py-2.5 text-sm font-semibold text-moss hover:bg-mint/70 border-b border-line transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcUserPlus"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/components/appointment-modal.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this),
                            " Nuevo cliente…"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/appointment-modal.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this),
                    filtered.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "px-3 py-3 text-sm text-faint",
                        children: [
                            "Sin resultados para «",
                            q,
                            "»"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/appointment-modal.tsx",
                        lineNumber: 71,
                        columnNumber: 37
                    }, this),
                    filtered.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onMouseDown: (e)=>{
                                e.preventDefault();
                                onChange(c.id);
                                setOpen(false);
                            },
                            className: `w-full text-left px-3 py-2 text-sm hover:bg-mint/70 transition-colors flex items-center justify-between gap-2 ${c.id === value ? "bg-mint" : ""}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium truncate",
                                    children: c.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/appointment-modal.tsx",
                                    lineNumber: 85,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-faint num shrink-0",
                                    children: c.phone
                                }, void 0, false, {
                                    fileName: "[project]/src/components/appointment-modal.tsx",
                                    lineNumber: 86,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, c.id, true, {
                            fileName: "[project]/src/components/appointment-modal.tsx",
                            lineNumber: 73,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/appointment-modal.tsx",
                lineNumber: 60,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/appointment-modal.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(ClientPicker, "PrvDbIFJFZxjicR2vujkcKio8QE=");
_c = ClientPicker;
function AppointmentModal({ preset, onClose }) {
    _s1();
    const { db, addAppointment, updateAppointment, deleteAppointment, clientById } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])();
    const { toast, confirm, openClient } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUI"])();
    const editing = preset.appt;
    const openMin = db.settings.openHour * 60;
    const closeMin = db.settings.closeHour * 60;
    const step = db.settings.step;
    const [clientId, setClientId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(editing?.clientId ?? preset.clientId ?? "");
    const [serviceId, setServiceId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "AppointmentModal.useState": ()=>editing ? db.services.find({
                "AppointmentModal.useState": (s)=>s.name === editing.serviceName
            }["AppointmentModal.useState"])?.id ?? db.services[0]?.id ?? "" : db.services[0]?.id ?? ""
    }["AppointmentModal.useState"]);
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(editing?.date ?? preset.date ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["todayKey"])());
    const [start, setStart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(editing?.start ?? preset.start ?? openMin);
    const [duration, setDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(editing?.duration ?? db.services[0]?.duration ?? 45);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(editing?.status ?? "confirmada");
    const [notes, setNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(editing?.notes ?? "");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const service = db.services.find((s)=>s.id === serviceId);
    const slots = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AppointmentModal.useMemo[slots]": ()=>{
            const out = [];
            for(let m = openMin; m < closeMin; m += step)out.push(m);
            return out;
        }
    }["AppointmentModal.useMemo[slots]"], [
        openMin,
        closeMin,
        step
    ]);
    function changeService(id) {
        setServiceId(id);
        const s = db.services.find((x)=>x.id === id);
        if (s) setDuration(s.duration);
    }
    function save() {
        if (!clientId) {
            setError("Selecciona un cliente para la cita.");
            return;
        }
        if (!service) {
            setError("Selecciona un servicio.");
            return;
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDayOpen"])(date, db.settings.openDays, db.settings.closedDates)) {
            setError("El salón está cerrado ese día (festivo o día no laboral). Elige otra fecha.");
            return;
        }
        const clash = db.appointments.find((a)=>a.id !== editing?.id && a.date === date && a.status !== "cancelada" && start < a.start + a.duration && a.start < start + duration);
        if (clash) {
            const other = clientById(clash.clientId)?.name ?? "otro cliente";
            setError(`Se solapa con la cita de ${other} (${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rangeLabel"])(clash.start, clash.duration)}). Elige otra hora.`);
            return;
        }
        const data = {
            clientId,
            date,
            start,
            duration,
            status,
            notes: notes.trim(),
            serviceName: service.name,
            price: service.price,
            color: service.color
        };
        if (editing) {
            updateAppointment(editing.id, data);
            toast("Cita actualizada");
        } else {
            addAppointment(data);
            const who = clientById(clientId)?.name.split(" ")[0] ?? "";
            toast(`Cita creada · ${who} a las ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minutesToLabel"])(start)}`);
        }
        onClose();
    }
    async function remove() {
        const who = clientById(editing.clientId)?.name ?? "este cliente";
        const ok = await confirm({
            title: "Eliminar cita",
            message: `¿Seguro que quieres eliminar la cita de ${who} del día ${date}? Esta acción no se puede deshacer.`,
            confirmLabel: "Eliminar",
            danger: true
        });
        if (!ok) return;
        deleteAppointment(editing.id);
        toast("Cita eliminada", "info");
        onClose();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: editing ? "Editar cita" : "Nueva cita",
        subtitle: editing ? `Creada el ${editing.createdAt.slice(0, 10)}` : "Reserva un hueco en la agenda",
        onClose: onClose,
        z: 50,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                    label: "Cliente *",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ClientPicker, {
                        clients: db.clients,
                        value: clientId,
                        onChange: (id)=>{
                            setClientId(id);
                            setError("");
                        },
                        onNew: ()=>openClient(null, (id)=>{
                                setClientId(id);
                                setError("");
                            })
                    }, void 0, false, {
                        fileName: "[project]/src/components/appointment-modal.tsx",
                        lineNumber: 206,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/appointment-modal.tsx",
                    lineNumber: 205,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                    label: "Servicio",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputCls"],
                        value: serviceId,
                        onChange: (e)=>changeService(e.target.value),
                        children: db.services.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: s.id,
                                children: [
                                    s.name,
                                    " · ",
                                    s.duration,
                                    " min · ",
                                    s.price,
                                    " €"
                                ]
                            }, s.id, true, {
                                fileName: "[project]/src/components/appointment-modal.tsx",
                                lineNumber: 225,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/appointment-modal.tsx",
                        lineNumber: 223,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/appointment-modal.tsx",
                    lineNumber: 222,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 sm:grid-cols-3 gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                            label: "Fecha",
                            hint: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDayOpen"])(date, db.settings.openDays, db.settings.closedDates) ? undefined : "⚠ El salón está cerrado ese día",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "date",
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputCls"]} ${!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDayOpen"])(date, db.settings.openDays, db.settings.closedDates) ? "border-danger ring-2 ring-danger/20" : ""}`,
                                value: date,
                                onChange: (e)=>e.target.value && setDate(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/src/components/appointment-modal.tsx",
                                lineNumber: 241,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/appointment-modal.tsx",
                            lineNumber: 233,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                            label: "Hora",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputCls"],
                                value: start,
                                onChange: (e)=>setStart(Number(e.target.value)),
                                children: slots.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: m,
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minutesToLabel"])(m)
                                    }, m, false, {
                                        fileName: "[project]/src/components/appointment-modal.tsx",
                                        lineNumber: 255,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/appointment-modal.tsx",
                                lineNumber: 253,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/appointment-modal.tsx",
                            lineNumber: 252,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                            label: "Duración",
                            hint: `Termina a las ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minutesToLabel"])(start + duration)}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center rounded-lg border border-linedark bg-white/70 overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setDuration((d)=>Math.max(15, d - 15)),
                                        className: "px-3 py-2 text-soft hover:bg-mint hover:text-ink transition-colors font-bold",
                                        "aria-label": "Restar 15 minutos",
                                        children: "−"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/appointment-modal.tsx",
                                        lineNumber: 263,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex-1 text-center text-sm font-semibold num",
                                        children: [
                                            duration,
                                            " min"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/appointment-modal.tsx",
                                        lineNumber: 271,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setDuration((d)=>Math.min(360, d + 15)),
                                        className: "px-3 py-2 text-soft hover:bg-mint hover:text-ink transition-colors font-bold",
                                        "aria-label": "Sumar 15 minutos",
                                        children: "+"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/appointment-modal.tsx",
                                        lineNumber: 272,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/appointment-modal.tsx",
                                lineNumber: 262,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/appointment-modal.tsx",
                            lineNumber: 261,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/appointment-modal.tsx",
                    lineNumber: 232,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                    label: "Estado",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 sm:grid-cols-4 gap-1.5",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATUS_ORDER"].map((s)=>{
                            const meta = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATUS_META"][s];
                            const active = status === s;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setStatus(s),
                                className: "rounded-lg px-2 py-2 text-xs font-semibold border transition-all active:scale-[0.97]",
                                style: active ? {
                                    background: meta.bg,
                                    color: meta.fg,
                                    borderColor: meta.fg,
                                    boxShadow: "0 1px 0 rgba(0,0,0,0.04)"
                                } : {
                                    background: "transparent",
                                    color: "#5f6d65",
                                    borderColor: "#c6cfc0"
                                },
                                children: meta.label
                            }, s, false, {
                                fileName: "[project]/src/components/appointment-modal.tsx",
                                lineNumber: 290,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/appointment-modal.tsx",
                        lineNumber: 285,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/appointment-modal.tsx",
                    lineNumber: 284,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                    label: "Notas",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputCls"],
                        value: notes,
                        onChange: (e)=>setNotes(e.target.value),
                        placeholder: "p. ej. mechas tonos caramelo, alérgica a amoniaco…"
                    }, void 0, false, {
                        fileName: "[project]/src/components/appointment-modal.tsx",
                        lineNumber: 309,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/appointment-modal.tsx",
                    lineNumber: 308,
                    columnNumber: 9
                }, this),
                service && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2.5 rounded-lg bg-mint/60 border border-line px-3 py-2.5 text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "w-2.5 h-2.5 rounded-full shrink-0",
                            style: {
                                background: service.color
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/appointment-modal.tsx",
                            lineNumber: 319,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-medium",
                            children: service.name
                        }, void 0, false, {
                            fileName: "[project]/src/components/appointment-modal.tsx",
                            lineNumber: 320,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "ml-auto num font-display font-bold text-pine",
                            children: [
                                service.price,
                                " €"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/appointment-modal.tsx",
                            lineNumber: 321,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/appointment-modal.tsx",
                    lineNumber: 318,
                    columnNumber: 11
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs font-medium text-danger bg-dangersoft border border-danger/20 rounded-lg px-3 py-2 anim-fade",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/src/components/appointment-modal.tsx",
                    lineNumber: 326,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2 pt-1",
                    children: [
                        editing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: remove,
                            className: "rounded-lg border border-danger/30 text-danger px-3 py-2.5 text-sm font-semibold hover:bg-dangersoft transition-colors",
                            title: "Eliminar cita",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcTrash"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/components/appointment-modal.tsx",
                                lineNumber: 338,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/appointment-modal.tsx",
                            lineNumber: 333,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "flex-1 rounded-lg border border-linedark px-4 py-2.5 text-sm font-semibold text-soft hover:bg-mint/60 hover:text-ink transition-colors",
                            children: "Cancelar"
                        }, void 0, false, {
                            fileName: "[project]/src/components/appointment-modal.tsx",
                            lineNumber: 341,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: save,
                            className: "flex-1 rounded-lg bg-pine text-paper px-4 py-2.5 text-sm font-semibold hover:bg-pine2 active:scale-[0.98] transition-all shadow-sm",
                            children: editing ? "Guardar cambios" : "Crear cita"
                        }, void 0, false, {
                            fileName: "[project]/src/components/appointment-modal.tsx",
                            lineNumber: 347,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/appointment-modal.tsx",
                    lineNumber: 331,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/appointment-modal.tsx",
            lineNumber: 204,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/appointment-modal.tsx",
        lineNumber: 198,
        columnNumber: 5
    }, this);
}
_s1(AppointmentModal, "U7vAA6F4RHSjKMFaQqau9vLCvkY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUI"]
    ];
});
_c1 = AppointmentModal;
var _c, _c1;
__turbopack_context__.k.register(_c, "ClientPicker");
__turbopack_context__.k.register(_c1, "AppointmentModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/aura-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Field",
    ()=>Field,
    "default",
    ()=>Modal,
    "inputCls",
    ()=>inputCls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Modal({ title, subtitle, onClose, children, z = 50, maxW = "max-w-lg" }) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Modal.useEffect": ()=>{
            const onKey = {
                "Modal.useEffect.onKey": (e)=>{
                    if (e.key === "Escape") onClose();
                }
            }["Modal.useEffect.onKey"];
            window.addEventListener("keydown", onKey);
            const prev = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            return ({
                "Modal.useEffect": ()=>{
                    window.removeEventListener("keydown", onKey);
                    document.body.style.overflow = prev;
                }
            })["Modal.useEffect"];
        }
    }["Modal.useEffect"], [
        onClose
    ]);
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 flex items-end sm:items-center justify-center p-0 sm:p-6",
        style: {
            zIndex: z
        },
        role: "dialog",
        "aria-modal": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                "aria-label": "Cerrar",
                className: "absolute inset-0 bg-pine/45 backdrop-blur-[2px] anim-fade cursor-default",
                onClick: onClose,
                tabIndex: -1
            }, void 0, false, {
                fileName: "[project]/src/components/aura-modal.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `relative w-full ${maxW} bg-card border border-line rounded-t-2xl sm:rounded-xl shadow-[0_24px_60px_-20px_rgba(22,60,44,0.45)] anim-pop max-h-[92dvh] flex flex-col overflow-hidden`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between gap-4 px-5 pt-4 pb-3 border-b border-line shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-display font-bold text-lg leading-tight text-ink",
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/aura-modal.tsx",
                                        lineNumber: 48,
                                        columnNumber: 13
                                    }, this),
                                    subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-soft mt-0.5",
                                        children: subtitle
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/aura-modal.tsx",
                                        lineNumber: 49,
                                        columnNumber: 26
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/aura-modal.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "p-1.5 rounded-lg text-soft hover:text-ink hover:bg-mint transition-colors",
                                "aria-label": "Cerrar ventana",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcX"], {
                                    size: 17
                                }, void 0, false, {
                                    fileName: "[project]/src/components/aura-modal.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/aura-modal.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/aura-modal.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-h-0 overflow-y-auto px-5 py-4",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/src/components/aura-modal.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/aura-modal.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/aura-modal.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
    return typeof document === "undefined" ? null : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(content, document.body);
}
_s(Modal, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Modal;
function Field({ label, children, hint }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: "block",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "block text-[11px] font-semibold uppercase tracking-[0.08em] text-soft mb-1.5",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/aura-modal.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            children,
            hint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "block text-[11px] text-faint mt-1",
                children: hint
            }, void 0, false, {
                fileName: "[project]/src/components/aura-modal.tsx",
                lineNumber: 72,
                columnNumber: 16
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/aura-modal.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_c1 = Field;
const inputCls = "w-full rounded-lg border border-linedark bg-white/70 px-3 py-2 text-sm text-ink placeholder:text-faint outline-none transition-shadow focus:border-moss focus:ring-2 focus:ring-moss/25";
var _c, _c1;
__turbopack_context__.k.register(_c, "Modal");
__turbopack_context__.k.register(_c1, "Field");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/client-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClientModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/store.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/ui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/aura-modal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ClientModal({ preset, onSaved, onClose }) {
    _s();
    const { addClient, updateClient } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUI"])();
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(preset?.name ?? "");
    const [phone, setPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(preset?.phone ?? "");
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(preset?.email ?? "");
    const [street, setStreet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(preset?.street ?? "");
    const [zip, setZip] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(preset?.zip ?? "");
    const [city, setCity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(preset?.city ?? "");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    function save() {
        if (!name.trim() || !phone.trim()) {
            setError("El nombre y el teléfono son obligatorios.");
            return;
        }
        const mail = email.trim();
        if (mail && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(mail)) {
            setError("El correo electrónico no parece válido. Revísalo.");
            return;
        }
        const data = {
            name: name.trim(),
            phone: phone.trim(),
            email: mail,
            street: street.trim(),
            zip: zip.trim(),
            city: city.trim()
        };
        if (preset) {
            updateClient(preset.id, data);
            toast("Cliente actualizado");
            onSaved?.(preset.id);
        } else {
            const c = addClient(data);
            toast(`Cliente añadido: ${c.name.split(" ")[0]}`);
            onSaved?.(c.id);
        }
        onClose();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: preset ? "Editar cliente" : "Nuevo cliente",
        subtitle: preset ? "Actualiza los datos de contacto" : "Nombre, teléfono, correo y dirección",
        onClose: onClose,
        z: 60,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                    label: "Nombre completo *",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputCls"],
                        value: name,
                        autoFocus: true,
                        onChange: (e)=>setName(e.target.value),
                        placeholder: "p. ej. María Fernández López",
                        onKeyDown: (e)=>e.key === "Enter" && save()
                    }, void 0, false, {
                        fileName: "[project]/src/components/client-modal.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/client-modal.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                    label: "Teléfono *",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputCls"],
                        value: phone,
                        onChange: (e)=>setPhone(e.target.value),
                        placeholder: "p. ej. 612 345 678",
                        inputMode: "tel",
                        onKeyDown: (e)=>e.key === "Enter" && save()
                    }, void 0, false, {
                        fileName: "[project]/src/components/client-modal.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/client-modal.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                    label: "Correo electrónico",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputCls"],
                        value: email,
                        onChange: (e)=>setEmail(e.target.value),
                        placeholder: "p. ej. maria.fernandez@correo.com",
                        inputMode: "email",
                        autoComplete: "email",
                        onKeyDown: (e)=>e.key === "Enter" && save()
                    }, void 0, false, {
                        fileName: "[project]/src/components/client-modal.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/client-modal.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                    label: "Calle y número",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputCls"],
                        value: street,
                        onChange: (e)=>setStreet(e.target.value),
                        placeholder: "Calle, número, piso…"
                    }, void 0, false, {
                        fileName: "[project]/src/components/client-modal.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/client-modal.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-[110px_1fr] gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                            label: "C. Postal",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputCls"],
                                value: zip,
                                onChange: (e)=>setZip(e.target.value),
                                placeholder: "28012",
                                inputMode: "numeric"
                            }, void 0, false, {
                                fileName: "[project]/src/components/client-modal.tsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/client-modal.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                            label: "Ciudad",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputCls"],
                                value: city,
                                onChange: (e)=>setCity(e.target.value),
                                placeholder: "Madrid"
                            }, void 0, false, {
                                fileName: "[project]/src/components/client-modal.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/client-modal.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/client-modal.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs font-medium text-danger bg-dangersoft border border-danger/20 rounded-lg px-3 py-2 anim-fade",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/src/components/client-modal.tsx",
                    lineNumber: 102,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2 pt-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "flex-1 rounded-lg border border-linedark px-4 py-2.5 text-sm font-semibold text-soft hover:bg-mint/60 hover:text-ink transition-colors",
                            children: "Cancelar"
                        }, void 0, false, {
                            fileName: "[project]/src/components/client-modal.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: save,
                            className: "flex-1 rounded-lg bg-pine text-paper px-4 py-2.5 text-sm font-semibold hover:bg-pine2 active:scale-[0.98] transition-all shadow-sm",
                            children: preset ? "Guardar cambios" : "Añadir cliente"
                        }, void 0, false, {
                            fileName: "[project]/src/components/client-modal.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/client-modal.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/client-modal.tsx",
            lineNumber: 57,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/client-modal.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_s(ClientModal, "Y3kOd2BfSVWQeR5wj+iKdzrkST0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUI"]
    ];
});
_c = ClientModal;
var _c;
__turbopack_context__.k.register(_c, "ClientModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/drive-sync-provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DriveSyncProvider,
    "useDriveSyncContext",
    ()=>useDriveSyncContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/store.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$drive$2d$sync$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-drive-sync.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const DriveSyncContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function DriveSyncProvider({ children }) {
    _s();
    const { db, loading, replaceAll } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])();
    const dbRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(db);
    const replaceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(replaceAll);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DriveSyncProvider.useEffect": ()=>{
            dbRef.current = db;
            replaceRef.current = replaceAll;
        }
    }["DriveSyncProvider.useEffect"], [
        db,
        replaceAll
    ]);
    const sync = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$drive$2d$sync$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDriveSync"])({
        getDb: {
            "DriveSyncProvider.useDriveSync[sync]": ()=>dbRef.current
        }["DriveSyncProvider.useDriveSync[sync]"],
        replaceDb: {
            "DriveSyncProvider.useDriveSync[sync]": (next)=>replaceRef.current(next)
        }["DriveSyncProvider.useDriveSync[sync]"],
        dbVersion: loading ? "" : JSON.stringify(db),
        autoReconcile: true
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DriveSyncContext.Provider, {
        value: sync,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/drive-sync-provider.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(DriveSyncProvider, "/lOIoLJGdgBwrijoe8RFUm2ZZu8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$drive$2d$sync$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDriveSync"]
    ];
});
_c = DriveSyncProvider;
function useDriveSyncContext() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(DriveSyncContext);
    if (!context) throw new Error("useDriveSyncContext fuera de DriveSyncProvider");
    return context;
}
_s1(useDriveSyncContext, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "DriveSyncProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/icons.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IcAlert",
    ()=>IcAlert,
    "IcArrowL",
    ()=>IcArrowL,
    "IcBan",
    ()=>IcBan,
    "IcBarberPole",
    ()=>IcBarberPole,
    "IcCalendar",
    ()=>IcCalendar,
    "IcCheck",
    ()=>IcCheck,
    "IcChevronL",
    ()=>IcChevronL,
    "IcChevronR",
    ()=>IcChevronR,
    "IcClock",
    ()=>IcClock,
    "IcCog",
    ()=>IcCog,
    "IcDownload",
    ()=>IcDownload,
    "IcEuro",
    ()=>IcEuro,
    "IcFileText",
    ()=>IcFileText,
    "IcGrid",
    ()=>IcGrid,
    "IcList",
    ()=>IcList,
    "IcMail",
    ()=>IcMail,
    "IcMobile",
    ()=>IcMobile,
    "IcMonitor",
    ()=>IcMonitor,
    "IcMoon",
    ()=>IcMoon,
    "IcPenNib",
    ()=>IcPenNib,
    "IcPencil",
    ()=>IcPencil,
    "IcPhone",
    ()=>IcPhone,
    "IcPin",
    ()=>IcPin,
    "IcPlus",
    ()=>IcPlus,
    "IcRotate",
    ()=>IcRotate,
    "IcScissors",
    ()=>IcScissors,
    "IcSearch",
    ()=>IcSearch,
    "IcShieldCheck",
    ()=>IcShieldCheck,
    "IcSparkle",
    ()=>IcSparkle,
    "IcSun",
    ()=>IcSun,
    "IcTrash",
    ()=>IcTrash,
    "IcUpload",
    ()=>IcUpload,
    "IcUserPlus",
    ()=>IcUserPlus,
    "IcUsers",
    ()=>IcUsers,
    "IcWifi",
    ()=>IcWifi,
    "IcX",
    ()=>IcX
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
function base({ size = 18, ...rest }, children, filled = false) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: filled ? "currentColor" : "none",
        stroke: filled ? "none" : "currentColor",
        strokeWidth: 1.9,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        ...rest,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
const IcScissors = (p)=>base(p, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "6",
                cy: "6",
                r: "2.6"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "6",
                cy: "18",
                r: "2.6"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.2 7.6 20 19M8.2 16.4 20 5M14.2 10.1l1.9 1.9"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c = IcScissors;
const IcCalendar = (p)=>base(p, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3.5",
                y: "5",
                width: "17",
                height: "16",
                rx: "2.5"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3.5 10h17M8 2.8V7M16 2.8V7"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = IcCalendar;
const IcUsers = (p)=>base(p, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "9",
                cy: "8",
                r: "3.4"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2.8 20.2c.7-3.3 3.2-5.2 6.2-5.2s5.5 1.9 6.2 5.2"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M15.5 4.9a3.4 3.4 0 0 1 0 6.2M17.8 15.4c1.7.8 3 2.3 3.4 4.8"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c2 = IcUsers;
const IcCog = (p)=>base(p, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "3.2"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M19.2 12a7.2 7.2 0 0 0-.1-1.2l2-1.5-2-3.4-2.3 1a7.3 7.3 0 0 0-2-1.2L14.4 3h-4l-.4 2.5a7.3 7.3 0 0 0-2 1.2l-2.3-1-2 3.4 2 1.5a7.2 7.2 0 0 0 0 2.4l-2 1.5 2 3.4 2.3-1a7.3 7.3 0 0 0 2 1.2l.4 2.5h4l.4-2.5a7.3 7.3 0 0 0 2-1.2l2.3 1 2-3.4-2-1.5c.1-.4.1-.8.1-1.2Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = IcCog;
const IcPlus = (p)=>base(p, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
        d: "M12 5v14M5 12h14"
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 62,
        columnNumber: 41
    }, ("TURBOPACK compile-time value", void 0)));
_c4 = IcPlus;
const IcX = (p)=>base(p, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
        d: "m6 6 12 12M18 6 6 18"
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 63,
        columnNumber: 38
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = IcX;
const IcChevronL = (p)=>base(p, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
        d: "m14.5 5.5-6.5 6.5 6.5 6.5"
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 64,
        columnNumber: 45
    }, ("TURBOPACK compile-time value", void 0)));
_c6 = IcChevronL;
const IcChevronR = (p)=>base(p, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
        d: "m9.5 5.5 6.5 6.5-6.5 6.5"
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 65,
        columnNumber: 45
    }, ("TURBOPACK compile-time value", void 0)));
_c7 = IcChevronR;
const IcArrowL = (p)=>base(p, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
        d: "M19 12H5m6-7-7 7 7 7"
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 66,
        columnNumber: 43
    }, ("TURBOPACK compile-time value", void 0)));
_c8 = IcArrowL;
const IcClock = (p)=>base(p, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "8.5"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 7.5V12l3 2"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c9 = IcClock;
const IcPhone = (p)=>base(p, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
        d: "M5.5 3.5h3l1.7 4.2-2.1 1.6a12.5 12.5 0 0 0 6.6 6.6l1.6-2.1 4.2 1.7v3a2 2 0 0 1-2.1 2A16.5 16.5 0 0 1 3.5 5.6a2 2 0 0 1 2-2.1Z"
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c10 = IcPhone;
const IcPin = (p)=>base(p, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 21s-6.8-6-6.8-11a6.8 6.8 0 0 1 13.6 0c0 5-6.8 11-6.8 11Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "9.8",
                r: "2.4"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c11 = IcPin;
const IcSearch = (p)=>base(p, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "10.8",
                cy: "10.8",
                r: "6.3"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m15.5 15.5 5 5"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c12 = IcSearch;
const IcTrash = (p)=>base(p, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M4 6.5h16M9.5 6.5V4.8A1.3 1.3 0 0 1 10.8 3.5h2.4a1.3 1.3 0 0 1 1.3 1.3v1.7M6.2 6.5l.9 12.6a2 2 0 0 0 2 1.9h5.8a2 2 0 0 0 2-1.9l.9-12.6M10 10.8v6M14 10.8v6"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 105,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 104,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c13 = IcTrash;
const IcPencil = (p)=>base(p, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
        d: "M4 20h4.2L19.5 8.7a2.1 2.1 0 0 0-3-3L5.3 17 4 20ZM14.5 7.5l2 2"
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 110,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0)));
_c14 = IcPencil;
const IcCheck = (p)=>base(p, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
        d: "m5 12.5 4.5 4.5L19 7.5"
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 112,
        columnNumber: 42
    }, ("TURBOPACK compile-time value", void 0)));
_c15 = IcCheck;
const IcDownload = (p)=>base(p, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
        d: "M12 4v11m0 0 4.5-4.5M12 15l-4.5-4.5M4.5 19.5h15"
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 115,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0)));
_c16 = IcDownload;
const IcUpload = (p)=>base(p, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
        d: "M12 15V4m0 0 4.5 4.5M12 4 7.5 8.5M4.5 19.5h15"
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 118,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0)));
_c17 = IcUpload;
const IcAlert = (p)=>base(p, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 3.5 22 20H2L12 3.5Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 10v4.2M12 17.3v.2"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 123,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c18 = IcAlert;
const IcMobile = (p)=>base(p, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "7",
                y: "2.8",
                width: "10",
                height: "18.4",
                rx: "2.4"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11 18h2"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 132,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c19 = IcMobile;
const IcMonitor = (p)=>base(p, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "4",
                width: "18",
                height: "12.5",
                rx: "2"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 20.5h6M12 16.5v4"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 141,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c20 = IcMonitor;
const IcList = (p)=>base(p, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
        d: "M8.5 6h12M8.5 12h12M8.5 18h12M3.8 6h.4M3.8 12h.4M3.8 18h.4"
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 148,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0)));
_c21 = IcList;
const IcGrid = (p)=>base(p, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3.5",
                y: "3.5",
                width: "7.3",
                height: "7.3",
                rx: "1.4"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "13.2",
                y: "3.5",
                width: "7.3",
                height: "7.3",
                rx: "1.4"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3.5",
                y: "13.2",
                width: "7.3",
                height: "7.3",
                rx: "1.4"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 156,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "13.2",
                y: "13.2",
                width: "7.3",
                height: "7.3",
                rx: "1.4"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 153,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c22 = IcGrid;
const IcUserPlus = (p)=>base(p, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "10",
                cy: "8",
                r: "3.4"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3.5 20.2c.7-3.3 3.2-5.2 6.5-5.2 1.4 0 2.7.3 3.8 1M18.5 13.5v5M16 16h5"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 166,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 164,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c23 = IcUserPlus;
const IcRotate = (p)=>base(p, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
        d: "M4.5 12a7.5 7.5 0 1 1 2.2 5.3M4.5 12V6.8M4.5 12h5.2"
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 171,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0)));
_c24 = IcRotate;
const IcBan = (p)=>base(p, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "8.5"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6 6l12 12"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 178,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 176,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c25 = IcBan;
const IcSun = (p)=>base(p, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "4"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4m11.4-11.4 1.4-1.4"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 187,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 185,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c26 = IcSun;
const IcMoon = (p)=>base(p, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
        d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 192,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0)));
_c27 = IcMoon;
const IcSparkle = (p)=>base(p, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
        d: "M12 3.5c.6 3.8 2.7 5.9 6.5 6.5-3.8.6-5.9 2.7-6.5 6.5-.6-3.8-2.7-5.9-6.5-6.5 3.8-.6 5.9-2.7 6.5-6.5ZM19 15.5c.3 1.8 1.2 2.7 3 3-1.8.3-2.7 1.2-3 3-.3-1.8-1.2-2.7-3-3 1.8-.3 2.7-1.2 3-3Z"
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 195,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0)));
_c28 = IcSparkle;
const IcEuro = (p)=>base(p, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
        d: "M17.5 5.5A7.3 7.3 0 0 0 6.8 8.5a7.6 7.6 0 0 0 0 7 7.3 7.3 0 0 0 10.7 3M4.5 10.3h9M4.5 13.7h8"
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 198,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0)));
_c29 = IcEuro;
const IcWifi = (p)=>base(p, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
        d: "M3 9.5a13.5 13.5 0 0 1 18 0M6.2 13a9 9 0 0 1 11.6 0M9.4 16.4a4.5 4.5 0 0 1 5.2 0M12 19.5v.1"
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 201,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0)));
_c30 = IcWifi;
const IcMail = (p)=>base(p, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "5",
                width: "18",
                height: "14",
                rx: "2.2"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 207,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m3.8 7 7.1 5.3a2 2 0 0 0 2.2 0L20.2 7"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 208,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 206,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c31 = IcMail;
const IcShieldCheck = (p)=>base(p, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 3.2 19 6v5.3c0 4.6-3 7.9-7 9.5-4-1.6-7-4.9-7-9.5V6l7-2.8Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 216,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m8.8 12 2.2 2.2 4.2-4.4"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 217,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 215,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c32 = IcShieldCheck;
const IcFileText = (p)=>base(p, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6 3.5h8L19 8.5v12H6v-17Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 225,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14 3.5v5h5M9 12.5h6M9 16h6"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 226,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 224,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c33 = IcFileText;
const IcPenNib = (p)=>base(p, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m14.8 4.2 5 5L9 20H4v-5L14.8 4.2Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 234,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m12.5 6.5 5 5M4 20l3.5-3.5"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 235,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 233,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c34 = IcPenNib;
function IcBarberPole({ size = 18, ...rest }) {
    _s();
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        ...rest,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                    id: id,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "9.3",
                        y: "5.2",
                        width: "5.4",
                        height: "16.4",
                        rx: "2.7"
                    }, void 0, false, {
                        fileName: "[project]/src/components/icons.tsx",
                        lineNumber: 252,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/icons.tsx",
                    lineNumber: 251,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 250,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "3",
                r: "1.7",
                fill: "#fff",
                stroke: "currentColor",
                strokeWidth: "1.3"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 256,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                clipPath: `url(#${id})`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "9.3",
                        y: "5.2",
                        width: "5.4",
                        height: "16.4",
                        fill: "#ffffff"
                    }, void 0, false, {
                        fileName: "[project]/src/components/icons.tsx",
                        lineNumber: 259,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M7.4 10.4 17 7v2.9L7.4 13.3z",
                        fill: "#b3364d"
                    }, void 0, false, {
                        fileName: "[project]/src/components/icons.tsx",
                        lineNumber: 260,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M7.4 14.9 17 11.5v2.9L7.4 17.8z",
                        fill: "#34558b"
                    }, void 0, false, {
                        fileName: "[project]/src/components/icons.tsx",
                        lineNumber: 261,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M7.4 19.4 17 16v2.9L7.4 22.3z",
                        fill: "#b3364d"
                    }, void 0, false, {
                        fileName: "[project]/src/components/icons.tsx",
                        lineNumber: 262,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 258,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "9.3",
                y: "5.2",
                width: "5.4",
                height: "16.4",
                rx: "2.7",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.5"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 265,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 243,
        columnNumber: 5
    }, this);
}
_s(IcBarberPole, "WhsuKpSQZEWeFcB7gWlfDRQktoQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c35 = IcBarberPole;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23, _c24, _c25, _c26, _c27, _c28, _c29, _c30, _c31, _c32, _c33, _c34, _c35;
__turbopack_context__.k.register(_c, "IcScissors");
__turbopack_context__.k.register(_c1, "IcCalendar");
__turbopack_context__.k.register(_c2, "IcUsers");
__turbopack_context__.k.register(_c3, "IcCog");
__turbopack_context__.k.register(_c4, "IcPlus");
__turbopack_context__.k.register(_c5, "IcX");
__turbopack_context__.k.register(_c6, "IcChevronL");
__turbopack_context__.k.register(_c7, "IcChevronR");
__turbopack_context__.k.register(_c8, "IcArrowL");
__turbopack_context__.k.register(_c9, "IcClock");
__turbopack_context__.k.register(_c10, "IcPhone");
__turbopack_context__.k.register(_c11, "IcPin");
__turbopack_context__.k.register(_c12, "IcSearch");
__turbopack_context__.k.register(_c13, "IcTrash");
__turbopack_context__.k.register(_c14, "IcPencil");
__turbopack_context__.k.register(_c15, "IcCheck");
__turbopack_context__.k.register(_c16, "IcDownload");
__turbopack_context__.k.register(_c17, "IcUpload");
__turbopack_context__.k.register(_c18, "IcAlert");
__turbopack_context__.k.register(_c19, "IcMobile");
__turbopack_context__.k.register(_c20, "IcMonitor");
__turbopack_context__.k.register(_c21, "IcList");
__turbopack_context__.k.register(_c22, "IcGrid");
__turbopack_context__.k.register(_c23, "IcUserPlus");
__turbopack_context__.k.register(_c24, "IcRotate");
__turbopack_context__.k.register(_c25, "IcBan");
__turbopack_context__.k.register(_c26, "IcSun");
__turbopack_context__.k.register(_c27, "IcMoon");
__turbopack_context__.k.register(_c28, "IcSparkle");
__turbopack_context__.k.register(_c29, "IcEuro");
__turbopack_context__.k.register(_c30, "IcWifi");
__turbopack_context__.k.register(_c31, "IcMail");
__turbopack_context__.k.register(_c32, "IcShieldCheck");
__turbopack_context__.k.register(_c33, "IcFileText");
__turbopack_context__.k.register(_c34, "IcPenNib");
__turbopack_context__.k.register(_c35, "IcBarberPole");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/pwa-registration.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PwaRegistration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function PwaRegistration() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PwaRegistration.useEffect": ()=>{
            if ("serviceWorker" in navigator) {
                const basePath = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_BASE_PATH || "";
                navigator.serviceWorker.register(`${basePath}/sw.js`).catch({
                    "PwaRegistration.useEffect": ()=>{
                    // La aplicación sigue funcionando aunque el navegador no permita PWA.
                    }
                }["PwaRegistration.useEffect"]);
            }
        }
    }["PwaRegistration.useEffect"], []);
    return null;
}
_s(PwaRegistration, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = PwaRegistration;
var _c;
__turbopack_context__.k.register(_c, "PwaRegistration");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/use-drive-sync.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDriveSync",
    ()=>useDriveSync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sqlite$2d$export$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sqlite-export.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2d$sync$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/drive-sync.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const DEBOUNCE_MS = 3_000;
function useDriveSync({ getDb, replaceDb, dbVersion, autoReconcile = true }) {
    _s();
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [lastSyncAt, setLastSyncAt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2d$sync$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLastSyncAt"])());
    const [isAuthenticated, setIsAuthenticated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const debounceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const busyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const mountedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    const [isConfigured, setIsConfigured] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useDriveSync.useState": ()=>!!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2d$sync$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStoredClientId"])()
    }["useDriveSync.useState"]);
    // Comprobar sesión al montar
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDriveSync.useEffect": ()=>{
            mountedRef.current = true;
            if (!isConfigured) {
                setIsAuthenticated(false);
                return;
            }
            const { token, expiry } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2d$sync$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStoredTokenInfo"])();
            setIsAuthenticated(!!token && Date.now() < expiry - 60_000);
            return ({
                "useDriveSync.useEffect": ()=>{
                    mountedRef.current = false;
                }
            })["useDriveSync.useEffect"];
        }
    }["useDriveSync.useEffect"], [
        isConfigured
    ]);
    const refreshAuthState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDriveSync.useCallback[refreshAuthState]": ()=>{
            if (!mountedRef.current) return;
            const { token, expiry } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2d$sync$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStoredTokenInfo"])();
            setIsAuthenticated(!!token && Date.now() < expiry - 60_000);
        }
    }["useDriveSync.useCallback[refreshAuthState]"], []);
    const signIn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDriveSync.useCallback[signIn]": async ()=>{
            const clientId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2d$sync$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStoredClientId"])();
            if (!clientId) {
                setPhase("error");
                setMessage("Falta el Client ID de Google.");
                return false;
            }
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2d$sync$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["requestAccessToken"])(clientId, "");
                setIsConfigured(true);
                setIsAuthenticated(true);
                setPhase("idle");
                setMessage("Sesión iniciada en Drive.");
                return true;
            } catch (e) {
                setPhase("error");
                setMessage(e instanceof Error ? e.message : "Error al iniciar sesión.");
                return false;
            }
        }
    }["useDriveSync.useCallback[signIn]"], []);
    const requestConsent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDriveSync.useCallback[requestConsent]": async ()=>{
            const clientId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2d$sync$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStoredClientId"])();
            if (!clientId) return false;
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2d$sync$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["requestAccessToken"])(clientId, "consent");
                setIsConfigured(true);
                setIsAuthenticated(true);
                return true;
            } catch  {
                return false;
            }
        }
    }["useDriveSync.useCallback[requestConsent]"], []);
    const push = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDriveSync.useCallback[push]": async ()=>{
            if (busyRef.current) return;
            busyRef.current = true;
            setPhase("uploading");
            setMessage("Subiendo copia a Drive…");
            try {
                const db = getDb();
                const blob = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sqlite$2d$export$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exportToSQLiteBlob"])(db);
                const bytes = new Uint8Array(await blob.arrayBuffer());
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2d$sync$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadDb"])(bytes);
                const t = Date.now();
                setLastSyncAt(t);
                setPhase("idle");
                setMessage("Copia subida a Drive.");
            } catch (e) {
                setPhase("error");
                setMessage(e instanceof Error ? e.message : "Error al subir.");
                refreshAuthState();
            } finally{
                busyRef.current = false;
            }
        }
    }["useDriveSync.useCallback[push]"], [
        getDb,
        refreshAuthState
    ]);
    const pull = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDriveSync.useCallback[pull]": async ()=>{
            if (busyRef.current) return;
            busyRef.current = true;
            setPhase("downloading");
            setMessage("Descargando de Drive…");
            try {
                const bytes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2d$sync$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["downloadDb"])();
                const file = new File([
                    bytes
                ], "peluqueria-marisa-db.sqlite", {
                    type: "application/x-sqlite3"
                });
                const { clients, appointments, services, consents, salon } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sqlite$2d$export$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["importFromSQLiteBlob"])(file);
                const newDb = {
                    version: 1,
                    clients,
                    appointments,
                    services: services.length > 0 ? services : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SERVICES"].map({
                        "useDriveSync.useCallback[pull]": (s)=>({
                                ...s
                            })
                    }["useDriveSync.useCallback[pull]"]),
                    consents,
                    // El salon viaja en el SQLite; si el archivo es antiguo se conserva el local
                    salon: salon ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeSalon"])(getDb().salon),
                    settings: {
                        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SETTINGS"]
                    }
                };
                replaceDb(newDb);
                const t = Date.now();
                setLastSyncAt(t);
                setPhase("idle");
                setMessage("Copia descargada de Drive.");
            } catch (e) {
                setPhase("error");
                setMessage(e instanceof Error ? e.message : "Error al descargar.");
                refreshAuthState();
            } finally{
                busyRef.current = false;
            }
        }
    }["useDriveSync.useCallback[pull]"], [
        replaceDb,
        refreshAuthState
    ]);
    const reconcile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDriveSync.useCallback[reconcile]": async ()=>{
            if (busyRef.current) return;
            busyRef.current = true;
            setPhase("checking");
            setMessage("Comprobando Drive…");
            try {
                const driveTime = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2d$sync$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDriveModifiedTime"])();
                setIsAuthenticated(true);
                const localTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2d$sync$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLastSyncAt"])();
                const driveMs = driveTime ? Date.parse(driveTime) : 0;
                const localMs = localTime || 0;
                if (driveTime === null) {
                    busyRef.current = false;
                    await push();
                    return;
                }
                if (driveMs > localMs) {
                    busyRef.current = false;
                    await pull();
                    return;
                }
                setPhase("idle");
                setMessage("Todo sincronizado.");
            } catch (e) {
                setPhase("error");
                setMessage(e instanceof Error ? e.message : "Error al reconciliar.");
                refreshAuthState();
            } finally{
                busyRef.current = false;
            }
        }
    }["useDriveSync.useCallback[reconcile]"], [
        push,
        pull,
        refreshAuthState
    ]);
    // Auto-reconcile al montar. Si el token no está en memoria, Drive intenta
    // recuperarlo silenciosamente con la autorización ya concedida.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDriveSync.useEffect": ()=>{
            if (!autoReconcile || !isConfigured) return;
            void reconcile();
        }
    }["useDriveSync.useEffect"], [
        autoReconcile,
        isConfigured,
        reconcile
    ]);
    // Auto-push con debounce cuando dbVersion cambia
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDriveSync.useEffect": ()=>{
            if (!isConfigured || !isAuthenticated) return;
            if (!dbVersion) return; // skip carga inicial
            if (debounceRef.current) clearTimeout(debounceRef.current);
            debounceRef.current = setTimeout({
                "useDriveSync.useEffect": ()=>{
                    void push();
                }
            }["useDriveSync.useEffect"], DEBOUNCE_MS);
            return ({
                "useDriveSync.useEffect": ()=>{
                    if (debounceRef.current) clearTimeout(debounceRef.current);
                }
            })["useDriveSync.useEffect"];
        }
    }["useDriveSync.useEffect"], [
        dbVersion,
        isConfigured,
        isAuthenticated,
        push
    ]);
    // Último intento de respaldo al abandonar la página. El guardado principal
    // ocurre antes, con debounce, porque los navegadores no garantizan que una
    // petición asíncrona termine durante beforeunload.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDriveSync.useEffect": ()=>{
            const flush = {
                "useDriveSync.useEffect.flush": ()=>{
                    if (debounceRef.current) clearTimeout(debounceRef.current);
                    if (isConfigured && isAuthenticated) void push();
                }
            }["useDriveSync.useEffect.flush"];
            window.addEventListener("pagehide", flush);
            return ({
                "useDriveSync.useEffect": ()=>window.removeEventListener("pagehide", flush)
            })["useDriveSync.useEffect"];
        }
    }["useDriveSync.useEffect"], [
        isConfigured,
        isAuthenticated,
        push
    ]);
    const state = {
        phase,
        message,
        lastSyncAt,
        isConfigured,
        isAuthenticated
    };
    return {
        state,
        signIn,
        requestConsent,
        push,
        pull,
        reconcile
    };
}
_s(useDriveSync, "OzDDcesSKXCFBVbj76/ZC8Tl+Rc=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/consent-pdf.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Generación del PDF de consentimiento informado (RGPD / LOPDGDD).
 *
 * El documento se construye íntegramente en el navegador con pdf-lib y se
 * guarda en la base de datos de la aplicación (IndexedDB) codificado en
 * base64, de modo que queda disponible para consulta y descarga offline.
 *
 * El documento está diseñado para ocupar UNA sola página A4 e incluye los
 * datos fiscales reales del salón configurados en Ajustes.
 */ __turbopack_context__.s([
    "base64ToBytes",
    ()=>base64ToBytes,
    "buildConsentPdf",
    ()=>buildConsentPdf,
    "bytesToBase64",
    ()=>bytesToBase64,
    "consentToObjectUrl",
    ()=>consentToObjectUrl,
    "getConsentClauses",
    ()=>getConsentClauses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/types.ts [app-client] (ecmascript)");
;
function getConsentClauses(salon) {
    const nombre = salon.fiscalName || salon.name;
    const domicilio = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["salonAddress"])(salon);
    const contacto = [
        salon.email,
        salon.phone ? `teléfono ${salon.phone}` : ""
    ].filter(Boolean).join(", ");
    const identificacion = [
        nombre,
        salon.nif ? `NIF/CIF ${salon.nif}` : "",
        domicilio ? `con domicilio en ${domicilio}` : ""
    ].filter(Boolean).join(", ");
    return [
        {
            title: "1. Responsable del tratamiento",
            body: [
                `${identificacion}, en su condición de responsable del tratamiento, trata los datos personales facilitados por sus clientes con la finalidad de prestar el servicio solicitado y gestionar la relación comercial.`
            ]
        },
        {
            title: "2. Finalidad del tratamiento",
            body: [
                "a) Gestionar la agenda de citas, el historial de servicios y la relación comercial con el cliente.",
                "b) Remitir recordatorios de cita por los medios de contacto facilitados (teléfono, correo electrónico).",
                "c) Enviar comunicaciones comerciales y novedades del salón, únicamente si el cliente marca la casilla de aceptación correspondiente."
            ]
        },
        {
            title: "3. Legitimación",
            body: [
                "La base jurídica del tratamiento es la ejecución de la relación contractual o la aplicación de medidas precontractuales (art. 6.1.b RGPD) para las finalidades de gestión, y el consentimiento expreso del cliente (art. 6.1.a RGPD) para las comunicaciones comerciales."
            ]
        },
        {
            title: "4. Destinatarios",
            body: [
                "No se cederán datos personales a terceros, salvo obligación legal. Los datos pueden alojarse en proveedores de servicios en la nube debidamente contratados conforme al art. 28 RGPD."
            ]
        },
        {
            title: "5. Plazos de conservación",
            body: [
                "Los datos se conservarán mientras exista relación comercial entre el cliente y el salón y, posteriormente, durante los plazos de prescripción de las responsabilidades legales aplicables."
            ]
        },
        {
            title: "6. Derechos",
            body: [
                `El cliente podrá ejercer en cualquier momento sus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad dirigiéndose por escrito a ${nombre}${contacto ? ` (${contacto})` : ""}. Asimismo, podrá presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es) si considera que el tratamiento no se ajusta a la normativa vigente.`
            ]
        },
        {
            title: "7. Procedencia de los datos",
            body: [
                "Los datos personales tratados proceden del propio interesado, facilitados al formalizar la cita o durante la prestación del servicio."
            ]
        }
    ];
}
function bytesToBase64(bytes) {
    let binary = "";
    const CHUNK = 0x8000; // 32.768 bytes por iteración
    for(let i = 0; i < bytes.length; i += CHUNK){
        binary += String.fromCharCode(...bytes.subarray(i, i + CHUNK));
    }
    return btoa(binary);
}
function base64ToBytes(b64) {
    const binary = atob(b64);
    const buffer = new ArrayBuffer(binary.length);
    const bytes = new Uint8Array(buffer);
    for(let i = 0; i < binary.length; i++)bytes[i] = binary.charCodeAt(i);
    return bytes;
}
function consentToObjectUrl(pdfBase64) {
    const bytes = base64ToBytes(pdfBase64);
    const blob = new Blob([
        bytes
    ], {
        type: "application/pdf"
    });
    return URL.createObjectURL(blob);
}
/* ------------------------------------------------------------------ */ /* Construcción del PDF (una sola página A4)                           */ /* ------------------------------------------------------------------ */ const PAGE_W = 595.28; // A4 en puntos pdf-lib
const PAGE_H = 841.89;
const MARGIN = 40;
const CONTENT_W = PAGE_W - MARGIN * 2;
/** Divide un texto en líneas que caben en el ancho disponible. */ function wrapText(text, font, size, maxWidth) {
    const words = text.split(/\s+/).filter(Boolean);
    const lines = [];
    let line = "";
    for (const word of words){
        const candidate = line ? `${line} ${word}` : word;
        if (font.widthOfTextAtSize(candidate, size) <= maxWidth || !line) {
            line = candidate;
        } else {
            lines.push(line);
            line = word;
        }
    }
    if (line) lines.push(line);
    return lines;
}
/** Sustituye caracteres no soportados por la codificación WinAnsi. */ function sanitize(text) {
    return text.replace(/[\u2018\u2019\u201B]/g, "'").replace(/[\u201C\u201D]/g, '"').replace(/\u2026/g, "...").replace(/\u00A0/g, " ").replace(/[^\u0000-\u00FF\u2013\u2014\u20AC\u2022]/g, "");
}
async function buildConsentPdf(opts) {
    // Importación dinámica: pdf-lib solo se carga al firmar
    const { PDFDocument, StandardFonts, rgb } = await __turbopack_context__.A("[project]/node_modules/pdf-lib/es/index.js [app-client] (ecmascript, async loader)");
    const { client, salon } = opts;
    const doc = await PDFDocument.create();
    doc.setTitle(`Consentimiento informado - ${sanitize(salon.name)}`);
    doc.setAuthor(sanitize(salon.fiscalName || salon.name));
    doc.setSubject("Consentimiento RGPD");
    doc.setCreator(`${sanitize(salon.name)} - Gestión de citas`);
    doc.setProducer(`${sanitize(salon.name)} - Gestión de citas`);
    const font = await doc.embedFont(StandardFonts.Helvetica);
    const fontBold = await doc.embedFont(StandardFonts.HelveticaBold);
    const cPine = rgb(0x2e / 255, 0x6e / 255, 0x4f / 255);
    const cGold = rgb(0xb8 / 255, 0x6c / 255, 0x8a / 255);
    const cInk = rgb(0x1b / 255, 0x26 / 255, 0x21 / 255);
    const cSoft = rgb(0x5c / 255, 0x6b / 255, 0x64 / 255);
    const cLine = rgb(0xc9 / 255, 0xd6 / 255, 0xce / 255);
    const cRed = rgb(0xb3 / 255, 0x36 / 255, 0x4d / 255);
    const cBlue = rgb(0x34 / 255, 0x55 / 255, 0x8b / 255);
    const cWhite = rgb(1, 1, 1);
    const page = doc.addPage([
        PAGE_W,
        PAGE_H
    ]);
    let y = PAGE_H - MARGIN;
    /** Dibuja una casilla de verificación cuadrada (marcada o vacía). */ const checkbox = (x, yy, checked)=>{
        const s = 8;
        page.drawRectangle({
            x,
            y: yy,
            width: s,
            height: s,
            borderColor: cInk,
            borderWidth: 0.9
        });
        if (checked) {
            page.drawLine({
                start: {
                    x: x + 1.8,
                    y: yy + 2.2
                },
                end: {
                    x: x + s / 2,
                    y: yy + s - 2.6
                },
                thickness: 1.1,
                color: cInk
            });
            page.drawLine({
                start: {
                    x: x + s / 2,
                    y: yy + s - 2.6
                },
                end: {
                    x: x + s - 1.6,
                    y: yy + 1.4
                },
                thickness: 1.1,
                color: cInk
            });
        }
    };
    const draw = (text, x, yy, size, f, color = cInk)=>{
        page.drawText(sanitize(text), {
            x,
            y: yy,
            size,
            font: f,
            color
        });
    };
    const now = new Date();
    const dateLong = now.toLocaleDateString("es-ES", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
    const timeLong = now.toLocaleTimeString("es-ES", {
        hour: "2-digit",
        minute: "2-digit"
    });
    /* --- Cabecera con poste de peluquero --- */ const poleW = 11;
    const poleH = 27;
    const poleX = MARGIN;
    const poleTop = y - 2;
    // bola superior
    page.drawCircle({
        x: poleX + poleW / 2,
        y: poleTop + 3.4,
        size: 3.4,
        color: cGold,
        borderColor: cInk,
        borderWidth: 0.7
    });
    // cuerpo blanco
    page.drawRectangle({
        x: poleX,
        y: poleTop - poleH,
        width: poleW,
        height: poleH,
        color: cWhite,
        borderColor: cInk,
        borderWidth: 0.9
    });
    // franjas diagonales (roja, azul, roja)
    const stripes = [
        {
            off: 4.6,
            color: cRed
        },
        {
            off: 10.6,
            color: cBlue
        },
        {
            off: 16.6,
            color: cRed
        }
    ];
    for (const s of stripes){
        page.drawLine({
            start: {
                x: poleX + 1.4,
                y: poleTop - poleH + s.off
            },
            end: {
                x: poleX + poleW - 1.4,
                y: poleTop - poleH + s.off + 3.4
            },
            thickness: 2.6,
            color: s.color
        });
    }
    draw(salon.name, MARGIN + poleW + 9, poleTop - 15, 14.5, fontBold, cPine);
    draw("Gestión de citas", MARGIN + poleW + 9, poleTop - 25, 7, font, cGold);
    const dateStr = `En ${dateLong}`;
    draw(dateStr, PAGE_W - MARGIN - font.widthOfTextAtSize(sanitize(dateStr), 8), poleTop - 12, 8, font, cSoft);
    const timeStr = `a las ${timeLong}`;
    draw(timeStr, PAGE_W - MARGIN - font.widthOfTextAtSize(sanitize(timeStr), 8), poleTop - 23, 8, font, cSoft);
    y = poleTop - poleH - 8;
    /* --- Título --- */ page.drawLine({
        start: {
            x: MARGIN,
            y
        },
        end: {
            x: PAGE_W - MARGIN,
            y
        },
        thickness: 1.2,
        color: cGold
    });
    y -= 15;
    draw("CONSENTIMIENTO INFORMADO", MARGIN, y, 12.5, fontBold, cInk);
    y -= 12;
    draw("Tratamiento de datos personales · RGPD (UE) 2016/679 y LOPDGDD 3/2018", MARGIN, y, 7.6, font, cSoft);
    y -= 15;
    /* --- Datos del responsable y del cliente --- */ const colW = (CONTENT_W - 14) / 2;
    const col2X = MARGIN + colW + 14;
    const infoBox = (title, height)=>{
        page.drawRectangle({
            x: MARGIN,
            y: y - height,
            width: CONTENT_W,
            height,
            color: rgb(0.96, 0.98, 0.96),
            borderColor: cLine,
            borderWidth: 0.6
        });
        draw(title, MARGIN + 9, y - 13, 7.6, fontBold, cPine);
        y -= 24;
    };
    const info = (label, value, x, width)=>{
        draw(label, x, y, 6.5, fontBold, cSoft);
        const lines = wrapText(value || "No facilitado", font, 7.8, width).slice(0, 2);
        lines.forEach((line, i)=>draw(line, x, y - 9 - i * 8.5, 7.8, font, cInk));
    };
    infoBox("RESPONSABLE DEL TRATAMIENTO", 64);
    info("Nombre comercial", salon.name, MARGIN + 9, colW - 9);
    info("Razón social / NIF-CIF", [
        salon.fiscalName && salon.fiscalName !== salon.name ? salon.fiscalName : "",
        salon.nif
    ].filter(Boolean).join(" · "), col2X, colW - 9);
    y -= 24;
    info("Domicilio", (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["salonAddress"])(salon), MARGIN + 9, colW - 9);
    info("Contacto", [
        salon.phone,
        salon.email
    ].filter(Boolean).join(" · "), col2X, colW - 9);
    y -= 27;
    infoBox("DATOS DEL CLIENTE", 64);
    info("Nombre completo", client.name, MARGIN + 9, colW - 9);
    info("Teléfono", client.phone, col2X, colW - 9);
    y -= 24;
    info("Correo electrónico", client.email, MARGIN + 9, colW - 9);
    info("Dirección", [
        client.street,
        [
            client.zip,
            client.city
        ].filter(Boolean).join(" ")
    ].filter(Boolean).join(", "), col2X, colW - 9);
    y -= 27;
    /* --- Cláusulas (compactas, una columna) --- */ for (const clause of getConsentClauses(salon)){
        const bodyLines = clause.body.flatMap((p)=>wrapText(p, font, 7.7, CONTENT_W - 8));
        draw(clause.title, MARGIN, y, 8.2, fontBold, cPine);
        y -= 10.2;
        for (const ln of bodyLines){
            draw(ln, MARGIN + 8, y, 7.7, font, cInk);
            y -= 9.6;
        }
        y -= 3.4;
    }
    /* --- Bloque de aceptaciones --- */ y -= 2;
    const acceptanceMain = `El/la cliente manifiesta haber leído y comprendido la información anterior y CONSENTE el tratamiento de sus datos personales por ${salon.name} para la gestión de la relación comercial y la prestación del servicio.`;
    const accLines = wrapText(acceptanceMain, font, 7.7, CONTENT_W - 30);
    const marketingText = opts.marketing ? "Acepto recibir comunicaciones comerciales y novedades del salón." : "NO acepto recibir comunicaciones comerciales del salón.";
    const boxPad = 7;
    const boxH = boxPad + accLines.length * 9.6 + 9.6 + 4 + boxPad;
    // Fondo suave del color de acento de la aplicación.
    page.drawRectangle({
        x: MARGIN,
        y: y - boxH,
        width: CONTENT_W,
        height: boxH,
        color: rgb(0xf4 / 255, 0xe3 / 255, 0xe8 / 255),
        borderColor: cGold,
        borderWidth: 0.6
    });
    y -= boxPad;
    // casilla principal (marcada)
    checkbox(MARGIN + 8, y - 7.4, true);
    accLines.forEach((ln, i)=>{
        draw(ln, MARGIN + 24, y - i * 9.6, 7.7, font, cInk);
    });
    y -= accLines.length * 9.6 + 4;
    // casilla marketing
    checkbox(MARGIN + 8, y - 7.4, opts.marketing);
    draw(marketingText, MARGIN + 24, y, 7.7, font, cInk);
    y -= 9.6 + boxPad + 8;
    /* --- Firma (misma página) --- */ // Si por datos muy largos el contenido bajara demasiado, fijamos el bloque
    // de firma por encima del pie para no saltar de página.
    const sigH = 62;
    const captionSpace = 13;
    const footerY = 64;
    if (y - sigH - captionSpace - 12 < footerY + 6) {
        y = footerY + 6 + sigH + captionSpace + 12;
    }
    const sigMaxW = 205;
    let sigW = sigMaxW;
    let sigH2 = 52;
    try {
        const sigPng = await doc.embedPng(opts.signatureDataUrl);
        const ratio = sigPng.width / sigPng.height;
        sigW = Math.min(sigMaxW - 14, ratio * (sigH - 10));
        sigH2 = sigW / ratio;
        if (sigH2 > sigH - 10) {
            sigH2 = sigH - 10;
            sigW = sigH2 * ratio;
        }
        page.drawRectangle({
            x: MARGIN,
            y: y - sigH,
            width: sigMaxW,
            height: sigH,
            color: rgb(0.985, 0.985, 0.975),
            borderColor: cLine,
            borderWidth: 0.8
        });
        page.drawImage(sigPng, {
            x: MARGIN + (sigMaxW - sigW) / 2,
            y: y - sigH + (sigH - sigH2) / 2,
            width: sigW,
            height: sigH2
        });
    } catch  {
        page.drawRectangle({
            x: MARGIN,
            y: y - sigH,
            width: sigMaxW,
            height: sigH,
            color: rgb(0.985, 0.985, 0.975),
            borderColor: cLine,
            borderWidth: 0.8
        });
    }
    draw("Firma del cliente/a", MARGIN + 2, y - sigH - 10, 7, fontBold, cSoft);
    // Bloque de datos a la derecha de la firma
    const fx = MARGIN + sigMaxW + 26;
    const fw = PAGE_W - MARGIN - fx;
    draw("Lugar y fecha de firma", fx, y - 6, 7, fontBold, cSoft);
    y -= 16;
    for (const ln of wrapText(`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["salonAddress"])(salon) || salon.name}, ${dateLong}`, font, 8.4, fw).slice(0, 2)){
        draw(ln, fx, y, 8.4, font, cInk);
        y -= 10.5;
    }
    draw(`Hora: ${timeLong}`, fx, y, 8.4, font, cInk);
    y -= 10.5;
    draw(opts.marketing ? "Comunicaciones comerciales: Aceptadas" : "Comunicaciones comerciales: Rechazadas", fx, y, 7.2, font, cSoft);
    y -= 9.5;
    if (salon.nif) {
        draw(`NIF/CIF: ${salon.nif}`, fx, y, 7.2, font, cSoft);
        y -= 9.5;
    }
    /* --- Pie --- */ page.drawLine({
        start: {
            x: MARGIN,
            y: footerY + 10
        },
        end: {
            x: PAGE_W - MARGIN,
            y: footerY + 10
        },
        thickness: 0.7,
        color: cLine
    });
    draw(`Documento generado electrónicamente por ${salon.fiscalName || salon.name} · Versión del texto: v${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONSENT_TEXT_VERSION"]}`, MARGIN, footerY, 6.6, font, cSoft);
    return doc.save();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/date-utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addDaysKey",
    ()=>addDaysKey,
    "capitalize",
    ()=>capitalize,
    "fmtDayNum",
    ()=>fmtDayNum,
    "fmtLong",
    ()=>fmtLong,
    "fmtMonth",
    ()=>fmtMonth,
    "fmtShort",
    ()=>fmtShort,
    "fmtShortDate",
    ()=>fmtShortDate,
    "fmtWeekday",
    ()=>fmtWeekday,
    "fromKey",
    ()=>fromKey,
    "getMonthMatrix",
    ()=>getMonthMatrix,
    "inLabel",
    ()=>inLabel,
    "isDayOpen",
    ()=>isDayOpen,
    "minutesToLabel",
    ()=>minutesToLabel,
    "nextOpenDay",
    ()=>nextOpenDay,
    "norm",
    ()=>norm,
    "nowMinutes",
    ()=>nowMinutes,
    "rangeLabel",
    ()=>rangeLabel,
    "startOfWeekKey",
    ()=>startOfWeekKey,
    "toKey",
    ()=>toKey,
    "todayKey",
    ()=>todayKey,
    "weekdayOf",
    ()=>weekdayOf
]);
const pad = (n)=>String(n).padStart(2, "0");
function toKey(d) {
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}
function fromKey(key) {
    const [y, m, d] = key.split("-").map(Number);
    return new Date(y, m - 1, d);
}
function todayKey() {
    return toKey(new Date());
}
function addDaysKey(key, days) {
    const d = fromKey(key);
    d.setDate(d.getDate() + days);
    return toKey(d);
}
function startOfWeekKey(key) {
    const d = fromKey(key);
    const day = (d.getDay() + 6) % 7; // lunes = 0
    d.setDate(d.getDate() - day);
    return toKey(d);
}
function nowMinutes() {
    const n = new Date();
    return n.getHours() * 60 + n.getMinutes();
}
function minutesToLabel(min) {
    return `${pad(Math.floor(min / 60))}:${pad(min % 60)}`;
}
function rangeLabel(start, duration) {
    return `${minutesToLabel(start)}–${minutesToLabel(start + duration)}`;
}
const longFmt = new Intl.DateTimeFormat("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long"
});
const shortFmt = new Intl.DateTimeFormat("es-ES", {
    weekday: "short",
    day: "numeric"
});
const monthFmt = new Intl.DateTimeFormat("es-ES", {
    month: "long",
    year: "numeric"
});
const weekdayFmt = new Intl.DateTimeFormat("es-ES", {
    weekday: "short"
});
const dayNumFmt = new Intl.DateTimeFormat("es-ES", {
    day: "numeric"
});
const shortDateFmt = new Intl.DateTimeFormat("es-ES", {
    day: "numeric",
    month: "short"
});
function fmtLong(key) {
    return longFmt.format(fromKey(key));
}
function fmtShort(key) {
    return shortFmt.format(fromKey(key));
}
function fmtMonth(key) {
    return monthFmt.format(fromKey(key));
}
function fmtWeekday(key) {
    return weekdayFmt.format(fromKey(key));
}
function fmtDayNum(key) {
    return dayNumFmt.format(fromKey(key));
}
function fmtShortDate(key) {
    return shortDateFmt.format(fromKey(key));
}
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
function inLabel(minutesFromNow) {
    if (minutesFromNow <= 0) return "ahora";
    const h = Math.floor(minutesFromNow / 60);
    const m = minutesFromNow % 60;
    if (h === 0) return `en ${m} min`;
    return m === 0 ? `en ${h} h` : `en ${h} h ${m} min`;
}
function norm(s) {
    return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function weekdayOf(key) {
    return fromKey(key).getDay();
}
function isDayOpen(key, openDays, closedDates) {
    if (closedDates.includes(key)) return false;
    return openDays.includes(weekdayOf(key));
}
function nextOpenDay(key, openDays, closedDates, maxIterations = 60) {
    let current = key;
    let i = 0;
    while(i < maxIterations){
        if (isDayOpen(current, openDays, closedDates)) return current;
        current = addDaysKey(current, 1);
        i++;
    }
    return key;
}
function getMonthMatrix(year, month// 0-indexed
) {
    const first = new Date(year, month, 1);
    const offset = (first.getDay() + 6) % 7; // 0 si lunes
    const start = new Date(year, month, 1 - offset);
    const weeks = [];
    const cursor = new Date(start);
    for(let w = 0; w < 6; w++){
        const row = [];
        for(let d = 0; d < 7; d++){
            const date = new Date(cursor);
            row.push({
                key: toKey(date),
                date,
                inMonth: date.getMonth() === month
            });
            cursor.setDate(cursor.getDate() + 1);
        }
        weeks.push(row);
    }
    return weeks;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/drive-sync.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DRIVE_CONSTANTS",
    ()=>DRIVE_CONSTANTS,
    "downloadDb",
    ()=>downloadDb,
    "findDbFile",
    ()=>findDbFile,
    "getDriveModifiedTime",
    ()=>getDriveModifiedTime,
    "getLastSyncAt",
    ()=>getLastSyncAt,
    "getStoredClientId",
    ()=>getStoredClientId,
    "getStoredFileId",
    ()=>getStoredFileId,
    "getStoredTokenInfo",
    ()=>getStoredTokenInfo,
    "getSyncStatus",
    ()=>getSyncStatus,
    "hasValidToken",
    ()=>hasValidToken,
    "loadGis",
    ()=>loadGis,
    "requestAccessToken",
    ()=>requestAccessToken,
    "setStoredClientId",
    ()=>setStoredClientId,
    "signOut",
    ()=>signOut,
    "uploadDb",
    ()=>uploadDb
]);
/**
 * Sincronización con Google Drive mediante OAuth 2.0 + Drive REST API.
 *
 * Patrón "local-first":
 *  - IndexedDB es la fuente de verdad local (ya gestionada por store.tsx).
 *  - Google Drive guarda una réplica del archivo .sqlite exportado.
 *  - La resolución de conflictos se hace por modifiedTime: gana el más nuevo.
 *  - Subida segura: sube a un archivo temporal y luego renombra,
 *    evitando corrupción si la subida falla a medias.
 */ const DRIVE_FILE_NAME = "peluqueria-marisa-db.sqlite";
const DRIVE_FILE_NAME_TMP = "peluqueria-marisa-db.sqlite.tmp";
const DRIVE_FIELDS = "id,name,modifiedTime,size";
const STORAGE_KEY_CLIENT_ID = "peluqueria-marisa-drive-client-id";
const STORAGE_KEY_FILE_ID = "peluqueria-marisa-drive-file-id";
const STORAGE_KEY_LAST_SYNC = "peluqueria-marisa-drive-last-sync";
let gisLoaded = false;
let gisPromise = null;
function loadGis() {
    if (gisLoaded) return Promise.resolve();
    if (gisPromise) return gisPromise;
    gisPromise = new Promise((resolve, reject)=>{
        const existing = document.getElementById("google-gis-script");
        if (existing) {
            existing.addEventListener("load", ()=>{
                gisLoaded = true;
                resolve();
            });
            return;
        }
        const script = document.createElement("script");
        script.id = "google-gis-script";
        script.src = "https://accounts.google.com/gsi/client";
        script.async = true;
        script.defer = true;
        script.onload = ()=>{
            gisLoaded = true;
            resolve();
        };
        script.onerror = ()=>reject(new Error("No se pudo cargar Google Identity Services"));
        document.head.appendChild(script);
    });
    return gisPromise;
}
function getStoredClientId() {
    try {
        return localStorage.getItem(STORAGE_KEY_CLIENT_ID) || "";
    } catch  {
        return "";
    }
}
function setStoredClientId(id) {
    try {
        if (id) localStorage.setItem(STORAGE_KEY_CLIENT_ID, id.trim());
        else localStorage.removeItem(STORAGE_KEY_CLIENT_ID);
        // Al cambiar de cliente, olvidamos el file id guardado
        localStorage.removeItem(STORAGE_KEY_FILE_ID);
    } catch  {
    /* ignore */ }
}
function getStoredFileId() {
    try {
        return localStorage.getItem(STORAGE_KEY_FILE_ID) || "";
    } catch  {
        return "";
    }
}
function setStoredFileId(id) {
    try {
        if (id) localStorage.setItem(STORAGE_KEY_FILE_ID, id);
        else localStorage.removeItem(STORAGE_KEY_FILE_ID);
    } catch  {
    /* ignore */ }
}
function getLastSyncAt() {
    try {
        const v = localStorage.getItem(STORAGE_KEY_LAST_SYNC);
        return v ? Number(v) : null;
    } catch  {
        return null;
    }
}
function setLastSyncAt(t) {
    try {
        localStorage.setItem(STORAGE_KEY_LAST_SYNC, String(t));
    } catch  {
    /* ignore */ }
}
/* ============ OAuth ============ */ let currentToken = null;
let tokenExpiry = 0;
function hasValidToken() {
    return !!currentToken && Date.now() < tokenExpiry - 60_000;
}
function getStoredTokenInfo() {
    return {
        token: currentToken,
        expiry: tokenExpiry
    };
}
async function requestAccessToken(clientId, prompt = "") {
    if (!clientId) throw new Error("Falta el Client ID de Google OAuth.");
    await loadGis();
    const oauth2 = window.google?.accounts?.oauth2;
    if (!oauth2) {
        throw new Error("Google Identity Services no disponible.");
    }
    return new Promise((resolve, reject)=>{
        const client = oauth2.initTokenClient({
            client_id: clientId,
            scope: "https://www.googleapis.com/auth/drive.file",
            callback: (response)=>{
                if (response.error || !response.access_token) {
                    reject(new Error("No se pudo obtener el access token."));
                    return;
                }
                currentToken = response.access_token;
                tokenExpiry = Date.now() + response.expires_in * 1000;
                resolve(response.access_token);
            },
            error_callback: ()=>{
                reject(new Error("El usuario canceló o falló la autenticación."));
            }
        });
        client.requestAccessToken({
            prompt
        });
    });
}
function signOut() {
    currentToken = null;
    tokenExpiry = 0;
    // Revocar el token en el servidor de Google (best effort)
    if (currentToken) {
        fetch(`https://oauth2.googleapis.com/revoke?token=${currentToken}`, {
            method: "POST"
        }).catch(()=>{});
    }
}
async function ensureToken() {
    if (hasValidToken()) return currentToken;
    const clientId = getStoredClientId();
    if (!clientId) throw new Error("Configura primero el Client ID en Ajustes.");
    return requestAccessToken(clientId, "none");
}
async function driveFetch(url, init = {}) {
    const token = await ensureToken();
    const res = await fetch(url, {
        ...init,
        headers: {
            Authorization: `Bearer ${token}`,
            ...init.headers || {}
        }
    });
    if (res.status === 401) {
        // Token expirado o inválido: reintentar una vez
        currentToken = null;
        const fresh = await ensureToken();
        return fetch(url, {
            ...init,
            headers: {
                Authorization: `Bearer ${fresh}`,
                ...init.headers || {}
            }
        });
    }
    return res;
}
async function findDbFile() {
    // Comprueba primero el ID cacheado
    const cachedId = getStoredFileId();
    if (cachedId) {
        try {
            const res = await driveFetch(`https://www.googleapis.com/drive/v3/files/${cachedId}?fields=${DRIVE_FIELDS}`);
            if (res.ok) {
                const f = await res.json();
                if (f && f.id) return f;
            }
        } catch  {
        /* file eliminado, seguimos buscando */ }
    }
    const q = encodeURIComponent(`name = '${DRIVE_FILE_NAME}' and trashed = false`);
    const res = await driveFetch(`https://www.googleapis.com/drive/v3/files?q=${q}&fields=files(${DRIVE_FIELDS})&orderBy=modifiedTime desc`);
    if (!res.ok) {
        const err = await res.text();
        throw new Error(`Drive list error: ${err}`);
    }
    const data = await res.json();
    const file = data.files?.[0] || null;
    if (file) setStoredFileId(file.id);
    return file;
}
async function uploadDb(bytes) {
    // Pasada 1: subir como tmp (siempre, así nunca corrompemos el principal)
    const tmpFile = await uploadMultipart(DRIVE_FILE_NAME_TMP, bytes);
    // Pasada 2: buscar el archivo principal existente
    const existing = await findDbFileByName(DRIVE_FILE_NAME);
    let finalFile;
    if (existing) {
        // PATCH: actualizar contenido del archivo existente
        finalFile = await patchFileContent(existing.id, DRIVE_FILE_NAME, bytes);
        // Borrar el tmp
        await safeDelete(tmpFile.id);
    } else {
        // Crear archivo definitivo copiando el tmp y renombrándolo
        finalFile = await copyAndRename(tmpFile.id, DRIVE_FILE_NAME);
        // Borrar el tmp
        await safeDelete(tmpFile.id);
    }
    setStoredFileId(finalFile.id);
    const now = Date.now();
    setLastSyncAt(now);
    return finalFile;
}
async function findDbFileByName(name) {
    const q = encodeURIComponent(`name = '${name}' and trashed = false`);
    const res = await driveFetch(`https://www.googleapis.com/drive/v3/files?q=${q}&fields=files(${DRIVE_FIELDS})&orderBy=modifiedTime desc`);
    if (!res.ok) {
        const err = await res.text();
        throw new Error(`Drive list error: ${err}`);
    }
    const data = await res.json();
    return data.files?.[0] || null;
}
async function uploadMultipart(name, bytes) {
    const metadata = {
        name,
        mimeType: "application/x-sqlite3"
    };
    const boundary = "peluqueria_marisa_" + Math.random().toString(36).slice(2);
    const body = new Uint8Array([
        ...new TextEncoder().encode(`--${boundary}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n${JSON.stringify(metadata)}\r\n--${boundary}\r\nContent-Type: application/x-sqlite3\r\n\r\n`),
        ...bytes,
        ...new TextEncoder().encode(`\r\n--${boundary}--\r\n`)
    ]);
    const res = await driveFetch("https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=" + DRIVE_FIELDS, {
        method: "POST",
        headers: {
            "Content-Type": `multipart/related; boundary=${boundary}`
        },
        body
    });
    if (!res.ok) {
        const err = await res.text();
        throw new Error(`Drive upload error: ${err}`);
    }
    return await res.json();
}
async function patchFileContent(fileId, name, bytes) {
    const metadata = {
        name
    };
    const boundary = "peluqueria_marisa_" + Math.random().toString(36).slice(2);
    const body = new Uint8Array([
        ...new TextEncoder().encode(`--${boundary}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n${JSON.stringify(metadata)}\r\n--${boundary}\r\nContent-Type: application/x-sqlite3\r\n\r\n`),
        ...bytes,
        ...new TextEncoder().encode(`\r\n--${boundary}--\r\n`)
    ]);
    const res = await driveFetch(`https://www.googleapis.com/upload/drive/v3/files/${fileId}?uploadType=multipart&fields=${DRIVE_FIELDS}`, {
        method: "PATCH",
        headers: {
            "Content-Type": `multipart/related; boundary=${boundary}`
        },
        body
    });
    if (!res.ok) {
        const err = await res.text();
        throw new Error(`Drive update error: ${err}`);
    }
    return await res.json();
}
async function copyAndRename(sourceId, newName) {
    // Copiar el archivo tmp con el nombre final
    const res = await driveFetch(`https://www.googleapis.com/drive/v3/files/${sourceId}/copy?fields=${DRIVE_FIELDS}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: newName
        })
    });
    if (!res.ok) {
        const err = await res.text();
        throw new Error(`Drive copy error: ${err}`);
    }
    return await res.json();
}
async function safeDelete(fileId) {
    try {
        await driveFetch(`https://www.googleapis.com/drive/v3/files/${fileId}`, {
            method: "DELETE"
        });
    } catch  {
    /* best effort */ }
}
async function downloadDb() {
    const file = await findDbFile();
    if (!file) throw new Error("No hay archivo .sqlite en Drive todavía.");
    const res = await driveFetch(`https://www.googleapis.com/drive/v3/files/${file.id}?alt=media`);
    if (!res.ok) {
        const err = await res.text();
        throw new Error(`Drive download error: ${err}`);
    }
    const buf = await res.arrayBuffer();
    setLastSyncAt(Date.now());
    return new Uint8Array(buf);
}
async function getDriveModifiedTime() {
    const file = await findDbFile();
    return file?.modifiedTime || null;
}
async function getSyncStatus() {
    try {
        const file = await findDbFile();
        return {
            driveHasFile: !!file,
            driveModifiedTime: file?.modifiedTime || null,
            lastSyncAt: getLastSyncAt(),
            fileId: file?.id || null
        };
    } catch  {
        return {
            driveHasFile: false,
            driveModifiedTime: null,
            lastSyncAt: getLastSyncAt(),
            fileId: null
        };
    }
}
const DRIVE_CONSTANTS = {
    DRIVE_FILE_NAME,
    DRIVE_FILE_NAME_TMP
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/indexeddb.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dbSizeKB",
    ()=>dbSizeKB,
    "freshDB",
    ()=>freshDB,
    "loadDB",
    ()=>loadDB,
    "saveDB",
    ()=>saveDB,
    "seedDB",
    ()=>seedDB,
    "uid",
    ()=>uid,
    "wipeAllData",
    ()=>wipeAllData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$idb$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/idb/build/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/date-utils.ts [app-client] (ecmascript)");
;
;
;
const DB_NAME = "salon-aura-db";
const DB_VERSION = 1;
const STORAGE_KEY = "salon-aura-db-v1";
let dbPromise = null;
function getDB() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (!dbPromise) {
        dbPromise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$idb$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openDB"])(DB_NAME, DB_VERSION, {
            upgrade (db) {
                if (!db.objectStoreNames.contains("state")) {
                    db.createObjectStore("state");
                }
            }
        });
    }
    return dbPromise;
}
function uid() {
    if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
    return `id-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 9)}`;
}
/* ---------- seed inicial ---------- */ const SEED_CLIENTS = [
    {
        id: "c-maria",
        name: "María Fernández López",
        phone: "612 345 678",
        email: "maria.fernandez@example.com",
        street: "Calle del Olivo 14, 3ºB",
        zip: "28012",
        city: "Madrid",
        createdAt: "2024-09-12"
    },
    {
        id: "c-carmen",
        name: "Carmen Ruiz Delgado",
        phone: "655 210 987",
        email: "carmen.ruiz@example.com",
        street: "Av. de la Constitución 48",
        zip: "41001",
        city: "Sevilla",
        createdAt: "2024-10-02"
    },
    {
        id: "c-lucia",
        name: "Lucía Gómez Navarro",
        phone: "699 481 230",
        email: "lucia.gomez@example.com",
        street: "Carrer de Sants 92",
        zip: "08014",
        city: "Barcelona",
        createdAt: "2024-11-20"
    },
    {
        id: "c-antonio",
        name: "Antonio Mora Vega",
        phone: "622 903 114",
        email: "antonio.mora@example.com",
        street: "Calle Larios 5, 1ºA",
        zip: "29005",
        city: "Málaga",
        createdAt: "2025-01-15"
    },
    {
        id: "c-isabel",
        name: "Isabel Castro Rey",
        phone: "688 154 762",
        email: "isabel.castro@example.com",
        street: "Rúa do Franco 21",
        zip: "15702",
        city: "Santiago de Compostela",
        createdAt: "2025-02-08"
    },
    {
        id: "c-paula",
        name: "Paula Navarro Sanz",
        phone: "611 876 540",
        email: "paula.navarro@example.com",
        street: "Calle Mayor 33, bajo",
        zip: "46001",
        city: "Valencia",
        createdAt: "2025-03-27"
    },
    {
        id: "c-elena",
        name: "Elena Vidal Prats",
        phone: "677 320 459",
        email: "elena.vidal@example.com",
        street: "Paseo de Zorrilla 101",
        zip: "47007",
        city: "Valladolid",
        createdAt: "2025-05-19"
    },
    {
        id: "c-rocio",
        name: "Rocío Blanco Torres",
        phone: "633 587 201",
        email: "rocio.blanco@example.com",
        street: "Calle San Vicente 8, 4ºC",
        zip: "03002",
        city: "Alicante",
        createdAt: "2025-06-30"
    }
];
function seedAppointments() {
    const today = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["todayKey"])();
    const mk = (id, clientId, date, start, duration, status, serviceName, price, color, notes = "")=>({
            id,
            clientId,
            date,
            start,
            duration,
            status,
            notes,
            serviceName,
            price,
            color,
            createdAt: date
        });
    return [
        mk("a-1", "c-maria", today, 600, 45, "confirmada", "Corte y peinado", 22, "#2e6e4f", "Como siempre, puntas"),
        mk("a-2", "c-lucia", today, 690, 120, "pendiente", "Mechas balayage", 85, "#96701f", "Tonos caramelo"),
        mk("a-3", "c-carmen", today, 1020, 60, "confirmada", "Tinte raíz", 35, "#b3364d"),
        mk("a-4", "c-paula", (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDaysKey"])(today, 1), 630, 40, "pendiente", "Manicura semipermanente", 18, "#a16207"),
        mk("a-5", "c-antonio", (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDaysKey"])(today, 1), 720, 45, "pendiente", "Corte y peinado", 22, "#2e6e4f"),
        mk("a-6", "c-elena", (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDaysKey"])(today, 3), 750, 45, "confirmada", "Corte y peinado", 22, "#2e6e4f"),
        mk("a-7", "c-isabel", (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDaysKey"])(today, -1), 660, 90, "completada", "Tratamiento de keratina", 60, "#5b5bd6"),
        mk("a-8", "c-rocio", (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDaysKey"])(today, -1), 1080, 50, "cancelada", "Peinado de evento", 30, "#0e7490", "Avisó con antelación"),
        mk("a-9", "c-maria", (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDaysKey"])(today, -6), 600, 45, "completada", "Corte y peinado", 22, "#2e6e4f")
    ];
}
function freshDB() {
    return {
        version: 1,
        clients: [],
        appointments: [],
        services: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SERVICES"].map((s)=>({
                ...s
            })),
        consents: [],
        salon: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SALON"]
        },
        settings: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SETTINGS"]
        }
    };
}
function seedDB() {
    return {
        version: 1,
        clients: SEED_CLIENTS,
        appointments: seedAppointments(),
        services: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SERVICES"].map((s)=>({
                ...s
            })),
        consents: [],
        salon: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SALON"]
        },
        settings: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SETTINGS"]
        }
    };
}
async function loadDB() {
    // 1. Intentar leer de IndexedDB
    try {
        const db = await getDB();
        const stored = await db.get("state", "main");
        if (stored) return normalize(stored);
    } catch  {
    /* fallback abajo */ }
    // 2. Migrar desde localStorage si existe
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
            const parsed = JSON.parse(raw);
            const norm = normalize(parsed);
            await saveDB(norm);
            return norm;
        }
    } catch  {
    /* ignore */ }
    // 3. Sembrar base inicial
    const seeded = seedDB();
    await saveDB(seeded);
    return seeded;
}
async function saveDB(db) {
    try {
        const idb = await getDB();
        await idb.put("state", db, "main");
        // Mantener localStorage como mirror para accesos rápidos / migración
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
        } catch  {
        /* sin espacio */ }
    } catch  {
        // Sin IndexedDB: guardar solo en localStorage
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
        } catch  {
        /* sin almacenamiento */ }
    }
}
async function wipeAllData() {
    try {
        const idb = await getDB();
        await idb.delete("state", "main");
    } catch  {
    /* ignore */ }
    try {
        localStorage.removeItem(STORAGE_KEY);
    } catch  {
    /* ignore */ }
}
function normalize(parsed) {
    if (!parsed || typeof parsed !== "object") return seedDB();
    const p = parsed;
    if (!Array.isArray(p.clients) || !Array.isArray(p.appointments)) {
        return seedDB();
    }
    const settings = p.settings || {};
    return {
        version: 1,
        // Migración: clientes antiguos sin correo electrónico
        clients: p.clients.map((c)=>({
                ...c,
                email: typeof c.email === "string" ? c.email : ""
            })),
        appointments: p.appointments,
        services: Array.isArray(p.services) && p.services.length ? p.services : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SERVICES"].map((s)=>({
                ...s
            })),
        consents: Array.isArray(p.consents) ? p.consents : [],
        // Migración: bases antiguas sin datos del salón
        salon: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeSalon"])(p.salon),
        settings: {
            openHour: typeof settings.openHour === "number" ? settings.openHour : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SETTINGS"].openHour,
            closeHour: typeof settings.closeHour === "number" ? settings.closeHour : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SETTINGS"].closeHour,
            step: typeof settings.step === "number" ? settings.step : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SETTINGS"].step,
            openDays: Array.isArray(settings.openDays) ? settings.openDays : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SETTINGS"].openDays,
            closedDates: Array.isArray(settings.closedDates) ? settings.closedDates : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SETTINGS"].closedDates
        }
    };
}
function dbSizeKB(db) {
    try {
        return (JSON.stringify(db).length / 1024).toFixed(1);
    } catch  {
        return "0";
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/sqlite-export.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "exportToSQLiteBlob",
    ()=>exportToSQLiteBlob,
    "importFromSQLiteBlob",
    ()=>importFromSQLiteBlob
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sql$2e$js$2f$dist$2f$sql$2d$wasm$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sql.js/dist/sql-wasm-browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2d$pdf$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/consent-pdf.ts [app-client] (ecmascript)");
;
;
;
let SQL = null;
async function getSQL() {
    if (SQL) return SQL;
    SQL = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sql$2e$js$2f$dist$2f$sql$2d$wasm$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        locateFile: (file)=>`https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.14.0/${file}`
    });
    return SQL;
}
async function exportToSQLiteBlob(db) {
    const sql = await getSQL();
    const sqlite = new sql.Database();
    sqlite.run(`
    CREATE TABLE clients (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      phone TEXT NOT NULL,
      email TEXT NOT NULL DEFAULT '',
      street TEXT,
      zip TEXT,
      city TEXT,
      createdAt TEXT NOT NULL
    );
    CREATE INDEX idx_clients_name ON clients(name);
    CREATE INDEX idx_clients_phone ON clients(phone);
    CREATE INDEX idx_clients_email ON clients(email);

    CREATE TABLE services (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      duration INTEGER NOT NULL,
      price REAL NOT NULL,
      color TEXT
    );

    CREATE TABLE appointments (
      id TEXT PRIMARY KEY,
      clientId TEXT NOT NULL,
      date TEXT NOT NULL,
      start INTEGER NOT NULL,
      duration INTEGER NOT NULL,
      status TEXT NOT NULL,
      notes TEXT,
      serviceName TEXT NOT NULL,
      price REAL NOT NULL,
      color TEXT,
      createdAt TEXT NOT NULL,
      FOREIGN KEY (clientId) REFERENCES clients(id) ON DELETE CASCADE
    );
    CREATE INDEX idx_appointments_date ON appointments(date);
    CREATE INDEX idx_appointments_clientId ON appointments(clientId);

    CREATE TABLE consents (
      id TEXT PRIMARY KEY,
      clientId TEXT NOT NULL,
      signedAt TEXT NOT NULL,
      textVersion INTEGER NOT NULL DEFAULT ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONSENT_TEXT_VERSION"]},
      marketing INTEGER NOT NULL DEFAULT 0,
      clientName TEXT NOT NULL DEFAULT '',
      pdf BLOB,
      FOREIGN KEY (clientId) REFERENCES clients(id) ON DELETE CASCADE
    );
    CREATE INDEX idx_consents_clientId ON consents(clientId);

    CREATE TABLE salon (
      id INTEGER PRIMARY KEY CHECK (id = 1),
      name TEXT NOT NULL DEFAULT '',
      fiscalName TEXT NOT NULL DEFAULT '',
      nif TEXT NOT NULL DEFAULT '',
      phone TEXT NOT NULL DEFAULT '',
      email TEXT NOT NULL DEFAULT '',
      street TEXT NOT NULL DEFAULT '',
      zip TEXT NOT NULL DEFAULT '',
      city TEXT NOT NULL DEFAULT ''
    );
  `);
    const insertSalon = sqlite.prepare(`INSERT INTO salon (id, name, fiscalName, nif, phone, email, street, zip, city) VALUES (1, ?, ?, ?, ?, ?, ?, ?, ?)`);
    insertSalon.run([
        db.salon?.name || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SALON"].name,
        db.salon?.fiscalName || "",
        db.salon?.nif || "",
        db.salon?.phone || "",
        db.salon?.email || "",
        db.salon?.street || "",
        db.salon?.zip || "",
        db.salon?.city || ""
    ]);
    insertSalon.free();
    const insertClient = sqlite.prepare(`INSERT INTO clients (id, name, phone, email, street, zip, city, createdAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`);
    for (const c of db.clients){
        insertClient.run([
            c.id,
            c.name,
            c.phone,
            c.email || "",
            c.street || "",
            c.zip || "",
            c.city || "",
            c.createdAt
        ]);
    }
    insertClient.free();
    const insertService = sqlite.prepare(`INSERT INTO services (id, name, duration, price, color) VALUES (?, ?, ?, ?, ?)`);
    for (const s of db.services){
        insertService.run([
            s.id,
            s.name,
            s.duration,
            s.price,
            s.color
        ]);
    }
    insertService.free();
    const insertAppt = sqlite.prepare(`INSERT INTO appointments (id, clientId, date, start, duration, status, notes, serviceName, price, color, createdAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`);
    for (const a of db.appointments){
        insertAppt.run([
            a.id,
            a.clientId,
            a.date,
            a.start,
            a.duration,
            a.status,
            a.notes || "",
            a.serviceName,
            a.price,
            a.color,
            a.createdAt
        ]);
    }
    insertAppt.free();
    const insertConsent = sqlite.prepare(`INSERT INTO consents (id, clientId, signedAt, textVersion, marketing, clientName, pdf) VALUES (?, ?, ?, ?, ?, ?, ?)`);
    for (const c of db.consents){
        insertConsent.run([
            c.id,
            c.clientId,
            c.signedAt,
            c.textVersion ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONSENT_TEXT_VERSION"],
            c.marketing ? 1 : 0,
            c.clientName || "",
            c.pdfBase64 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2d$pdf$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["base64ToBytes"])(c.pdfBase64) : new Uint8Array(0)
        ]);
    }
    insertConsent.free();
    const binary = sqlite.export();
    sqlite.close();
    return new Blob([
        binary
    ], {
        type: "application/x-sqlite3"
    });
}
async function importFromSQLiteBlob(file) {
    const sql = await getSQL();
    const buffer = await file.arrayBuffer();
    const sqlite = new sql.Database(new Uint8Array(buffer));
    try {
        const clients = queryAll(sqlite, "SELECT * FROM clients").map((c)=>({
                ...c,
                email: typeof c.email === "string" ? c.email : ""
            }));
        const services = queryAll(sqlite, "SELECT * FROM services");
        const appointments = queryAll(sqlite, "SELECT * FROM appointments");
        // La tabla consents puede no existir en copias antiguas
        let consents = [];
        try {
            consents = queryAll(sqlite, "SELECT * FROM consents").map(rowToConsent);
        } catch  {
            consents = [];
        }
        // La tabla salon puede no existir en copias antiguas
        let salon;
        try {
            const rows = queryAll(sqlite, "SELECT * FROM salon WHERE id = 1");
            if (rows.length > 0) salon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeSalon"])(rows[0]);
        } catch  {
            salon = undefined;
        }
        return {
            clients,
            appointments,
            services,
            consents,
            salon
        };
    } finally{
        sqlite.close();
    }
}
function rowToConsent(r) {
    return {
        id: r.id,
        clientId: r.clientId,
        signedAt: r.signedAt,
        textVersion: typeof r.textVersion === "number" ? r.textVersion : 1,
        marketing: !!r.marketing,
        clientName: r.clientName || "",
        pdfBase64: r.pdf && r.pdf instanceof Uint8Array && r.pdf.length ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2d$pdf$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToBase64"])(r.pdf) : ""
    };
}
function queryAll(db, sql) {
    const result = db.exec(sql);
    if (result.length === 0) return [];
    const { columns, values } = result[0];
    return values.map((row)=>{
        const obj = {};
        columns.forEach((col, i)=>{
            obj[col] = row[i];
        });
        return obj;
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CONSENT_TEXT_VERSION",
    ()=>CONSENT_TEXT_VERSION,
    "DEFAULT_SALON",
    ()=>DEFAULT_SALON,
    "DEFAULT_SERVICES",
    ()=>DEFAULT_SERVICES,
    "DEFAULT_SETTINGS",
    ()=>DEFAULT_SETTINGS,
    "SERVICE_COLORS",
    ()=>SERVICE_COLORS,
    "STATUS_META",
    ()=>STATUS_META,
    "STATUS_ORDER",
    ()=>STATUS_ORDER,
    "WEEKDAY_LABELS",
    ()=>WEEKDAY_LABELS,
    "normalizeSalon",
    ()=>normalizeSalon,
    "salonAddress",
    ()=>salonAddress
]);
const DEFAULT_SALON = {
    name: "Peluquería Marisa",
    fiscalName: "",
    nif: "",
    phone: "",
    email: "",
    street: "",
    zip: "",
    city: ""
};
const CONSENT_TEXT_VERSION = 3;
const STATUS_META = {
    pendiente: {
        label: "Pendiente",
        fg: "#a16207",
        bg: "#f7ecd2"
    },
    confirmada: {
        label: "Confirmada",
        fg: "#1d7a46",
        bg: "#dcefe2"
    },
    completada: {
        label: "Completada",
        fg: "#46564f",
        bg: "#e5eae4"
    },
    cancelada: {
        label: "Cancelada",
        fg: "#b3364d",
        bg: "#f8e1e6"
    }
};
const STATUS_ORDER = [
    "pendiente",
    "confirmada",
    "completada",
    "cancelada"
];
const SERVICE_COLORS = [
    "#2e6e4f",
    "#b3364d",
    "#96701f",
    "#0e7490",
    "#a16207",
    "#5b5bd6"
];
const DEFAULT_SERVICES = [
    {
        id: "srv-corte",
        name: "Corte y peinado",
        duration: 45,
        price: 22,
        color: "#2e6e4f"
    },
    {
        id: "srv-tinte",
        name: "Tinte raíz",
        duration: 60,
        price: 35,
        color: "#b3364d"
    },
    {
        id: "srv-mechas",
        name: "Mechas balayage",
        duration: 120,
        price: 85,
        color: "#96701f"
    },
    {
        id: "srv-peinado",
        name: "Peinado de evento",
        duration: 50,
        price: 30,
        color: "#0e7490"
    },
    {
        id: "srv-manicura",
        name: "Manicura semipermanente",
        duration: 40,
        price: 18,
        color: "#a16207"
    },
    {
        id: "srv-keratina",
        name: "Tratamiento de keratina",
        duration: 90,
        price: 60,
        color: "#5b5bd6"
    }
];
const DEFAULT_SETTINGS = {
    openHour: 9,
    closeHour: 20,
    step: 30,
    openDays: [
        1,
        2,
        3,
        4,
        5,
        6
    ],
    closedDates: []
};
function normalizeSalon(raw) {
    const s = raw && typeof raw === "object" ? raw : {};
    const str = (v)=>typeof v === "string" ? v : "";
    return {
        name: str(s.name).trim() || DEFAULT_SALON.name,
        fiscalName: str(s.fiscalName),
        nif: str(s.nif),
        phone: str(s.phone),
        email: str(s.email),
        street: str(s.street),
        zip: str(s.zip),
        city: str(s.city)
    };
}
function salonAddress(s) {
    return [
        s.street,
        [
            s.zip,
            s.city
        ].filter(Boolean).join(" ")
    ].filter(Boolean).join(", ");
}
const WEEKDAY_LABELS = [
    "Dom",
    "Lun",
    "Mar",
    "Mié",
    "Jue",
    "Vie",
    "Sáb"
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/state/store.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StoreProvider",
    ()=>StoreProvider,
    "useStore",
    ()=>useStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$indexeddb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/indexeddb.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const Ctx = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function StoreProvider({ children }) {
    _s();
    const [db, setDb] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$indexeddb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["freshDB"]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Cargar DB al montar
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StoreProvider.useEffect": ()=>{
            let cancelled = false;
            ({
                "StoreProvider.useEffect": async ()=>{
                    const loaded = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$indexeddb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadDB"])();
                    if (!cancelled) {
                        setDb(loaded);
                        setLoading(false);
                    }
                }
            })["StoreProvider.useEffect"]();
            return ({
                "StoreProvider.useEffect": ()=>{
                    cancelled = true;
                }
            })["StoreProvider.useEffect"];
        }
    }["StoreProvider.useEffect"], []);
    // Guardar DB al cambiar
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StoreProvider.useEffect": ()=>{
            if (loading) return;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$indexeddb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveDB"])(db);
        }
    }["StoreProvider.useEffect"], [
        db,
        loading
    ]);
    const api = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "StoreProvider.useMemo[api]": ()=>({
                db,
                loading,
                addClient (data) {
                    const client = {
                        ...data,
                        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$indexeddb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uid"])(),
                        createdAt: new Date().toISOString()
                    };
                    setDb({
                        "StoreProvider.useMemo[api]": (d)=>({
                                ...d,
                                clients: [
                                    ...d.clients,
                                    client
                                ]
                            })
                    }["StoreProvider.useMemo[api]"]);
                    return client;
                },
                updateClient (id, patch) {
                    setDb({
                        "StoreProvider.useMemo[api]": (d)=>({
                                ...d,
                                clients: d.clients.map({
                                    "StoreProvider.useMemo[api]": (c)=>c.id === id ? {
                                            ...c,
                                            ...patch
                                        } : c
                                }["StoreProvider.useMemo[api]"])
                            })
                    }["StoreProvider.useMemo[api]"]);
                },
                deleteClient (id) {
                    setDb({
                        "StoreProvider.useMemo[api]": (d)=>({
                                ...d,
                                clients: d.clients.filter({
                                    "StoreProvider.useMemo[api]": (c)=>c.id !== id
                                }["StoreProvider.useMemo[api]"]),
                                appointments: d.appointments.filter({
                                    "StoreProvider.useMemo[api]": (a)=>a.clientId !== id
                                }["StoreProvider.useMemo[api]"]),
                                consents: d.consents.filter({
                                    "StoreProvider.useMemo[api]": (c)=>c.clientId !== id
                                }["StoreProvider.useMemo[api]"])
                            })
                    }["StoreProvider.useMemo[api]"]);
                },
                addConsent (data) {
                    const consent = {
                        ...data,
                        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$indexeddb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uid"])()
                    };
                    setDb({
                        "StoreProvider.useMemo[api]": (d)=>({
                                ...d,
                                consents: [
                                    ...d.consents,
                                    consent
                                ]
                            })
                    }["StoreProvider.useMemo[api]"]);
                    return consent;
                },
                deleteConsent (id) {
                    setDb({
                        "StoreProvider.useMemo[api]": (d)=>({
                                ...d,
                                consents: d.consents.filter({
                                    "StoreProvider.useMemo[api]": (c)=>c.id !== id
                                }["StoreProvider.useMemo[api]"])
                            })
                    }["StoreProvider.useMemo[api]"]);
                },
                consentsOf (clientId) {
                    return db.consents.filter({
                        "StoreProvider.useMemo[api]": (c)=>c.clientId === clientId
                    }["StoreProvider.useMemo[api]"]).sort({
                        "StoreProvider.useMemo[api]": (a, b)=>b.signedAt.localeCompare(a.signedAt)
                    }["StoreProvider.useMemo[api]"]);
                },
                addAppointment (data) {
                    const appt = {
                        ...data,
                        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$indexeddb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uid"])(),
                        createdAt: new Date().toISOString()
                    };
                    setDb({
                        "StoreProvider.useMemo[api]": (d)=>({
                                ...d,
                                appointments: [
                                    ...d.appointments,
                                    appt
                                ]
                            })
                    }["StoreProvider.useMemo[api]"]);
                    return appt;
                },
                updateAppointment (id, patch) {
                    setDb({
                        "StoreProvider.useMemo[api]": (d)=>({
                                ...d,
                                appointments: d.appointments.map({
                                    "StoreProvider.useMemo[api]": (a)=>a.id === id ? {
                                            ...a,
                                            ...patch
                                        } : a
                                }["StoreProvider.useMemo[api]"])
                            })
                    }["StoreProvider.useMemo[api]"]);
                },
                deleteAppointment (id) {
                    setDb({
                        "StoreProvider.useMemo[api]": (d)=>({
                                ...d,
                                appointments: d.appointments.filter({
                                    "StoreProvider.useMemo[api]": (a)=>a.id !== id
                                }["StoreProvider.useMemo[api]"])
                            })
                    }["StoreProvider.useMemo[api]"]);
                },
                setAppointmentStatus (id, status) {
                    setDb({
                        "StoreProvider.useMemo[api]": (d)=>({
                                ...d,
                                appointments: d.appointments.map({
                                    "StoreProvider.useMemo[api]": (a)=>a.id === id ? {
                                            ...a,
                                            status
                                        } : a
                                }["StoreProvider.useMemo[api]"])
                            })
                    }["StoreProvider.useMemo[api]"]);
                },
                addService (data) {
                    const service = {
                        ...data,
                        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$indexeddb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uid"])()
                    };
                    setDb({
                        "StoreProvider.useMemo[api]": (d)=>({
                                ...d,
                                services: [
                                    ...d.services,
                                    service
                                ]
                            })
                    }["StoreProvider.useMemo[api]"]);
                    return service;
                },
                updateService (id, patch) {
                    setDb({
                        "StoreProvider.useMemo[api]": (d)=>({
                                ...d,
                                services: d.services.map({
                                    "StoreProvider.useMemo[api]": (s)=>s.id === id ? {
                                            ...s,
                                            ...patch
                                        } : s
                                }["StoreProvider.useMemo[api]"])
                            })
                    }["StoreProvider.useMemo[api]"]);
                },
                deleteService (id) {
                    setDb({
                        "StoreProvider.useMemo[api]": (d)=>({
                                ...d,
                                services: d.services.filter({
                                    "StoreProvider.useMemo[api]": (s)=>s.id !== id
                                }["StoreProvider.useMemo[api]"])
                            })
                    }["StoreProvider.useMemo[api]"]);
                },
                setSettings (patch) {
                    setDb({
                        "StoreProvider.useMemo[api]": (d)=>({
                                ...d,
                                settings: {
                                    ...d.settings,
                                    ...patch
                                }
                            })
                    }["StoreProvider.useMemo[api]"]);
                },
                setSalon (patch) {
                    setDb({
                        "StoreProvider.useMemo[api]": (d)=>({
                                ...d,
                                salon: {
                                    ...d.salon,
                                    ...patch
                                }
                            })
                    }["StoreProvider.useMemo[api]"]);
                },
                replaceAll (next) {
                    setDb({
                        ...next,
                        version: 1
                    });
                },
                wipeAll () {
                    setDb((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$indexeddb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["freshDB"])());
                },
                clientById (id) {
                    return db.clients.find({
                        "StoreProvider.useMemo[api]": (c)=>c.id === id
                    }["StoreProvider.useMemo[api]"]);
                }
            })
    }["StoreProvider.useMemo[api]"], [
        db,
        loading
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Ctx.Provider, {
        value: api,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/state/store.tsx",
        lineNumber: 187,
        columnNumber: 10
    }, this);
}
_s(StoreProvider, "g5pJ0m4//TweKM/hK5NK4/mbrk8=");
_c = StoreProvider;
function useStore() {
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(Ctx);
    if (!ctx) throw new Error("useStore fuera de StoreProvider");
    return ctx;
}
_s1(useStore, "/dMy7t63NXD4eYACoT93CePwGrg=");
var _c;
__turbopack_context__.k.register(_c, "StoreProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/state/theme.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "THEMES",
    ()=>THEMES,
    "ThemeProvider",
    ()=>ThemeProvider,
    "themeInitScript",
    ()=>themeInitScript,
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
/** Claves CSS a mostrar en las tarjetas de previsualización */ const SWATCH_KEYS = {
    pine: "--color-pine",
    gold: "--color-gold",
    paper: "--color-paper",
    ink: "--color-ink"
};
const THEMES = [
    {
        id: "rosa",
        label: "Rosa",
        description: "Rosa viejo y crema · romántico y suave",
        swatches: [
            {
                name: "pine",
                color: "#8c4a64"
            },
            {
                name: "gold",
                color: "#c47b8a"
            },
            {
                name: "paper",
                color: "#faf3f1"
            },
            {
                name: "ink",
                color: "#4a2c30"
            }
        ]
    },
    {
        id: "noche",
        label: "Noche",
        description: "Negro y rosa · elegante y premium",
        swatches: [
            {
                name: "pine",
                color: "#191317"
            },
            {
                name: "gold",
                color: "#d98aa6"
            },
            {
                name: "paper",
                color: "#0d0a0c"
            },
            {
                name: "ink",
                color: "#f2dce3"
            }
        ]
    }
];
const STORAGE_KEY = "salon-aura-theme";
function applyTheme(theme) {
    const root = document.documentElement;
    root.classList.remove("theme-aura", "theme-rosa", "theme-noche");
    root.classList.add(`theme-${theme}`);
    // Actualiza meta theme-color para móvil
    const meta = document.querySelector('meta[name="theme-color"]');
    const colors = {
        rosa: "#8c4a64",
        noche: "#0d0a0c"
    };
    if (meta) meta.setAttribute("content", colors[theme]);
}
function readStoredTheme() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const stored = localStorage.getItem(STORAGE_KEY);
    // Los temas antiguos no disponibles pasan a Rosa.
    if (stored === "noche") return "noche";
    return "rosa";
}
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    theme: "rosa",
    setTheme: ()=>{},
    toggleTheme: ()=>{}
});
function ThemeProvider({ children }) {
    _s();
    const [theme, setThemeState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("rosa");
    // Aplicar tema al montar (desde localStorage)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeProvider.useEffect": ()=>{
            const stored = readStoredTheme();
            setThemeState(stored);
            applyTheme(stored);
        }
    }["ThemeProvider.useEffect"], []);
    // Script inline para aplicar el tema antes del primer render (evita flash)
    // Se ejecuta como <script> en <head> desde layout.tsx
    const setTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ThemeProvider.useCallback[setTheme]": (t)=>{
            setThemeState(t);
            try {
                localStorage.setItem(STORAGE_KEY, t);
            } catch  {
            /* ignore */ }
            applyTheme(t);
            window.dispatchEvent(new Event("theme-changed"));
        }
    }["ThemeProvider.useCallback[setTheme]"], []);
    const toggleTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ThemeProvider.useCallback[toggleTheme]": ()=>{
            setThemeState({
                "ThemeProvider.useCallback[toggleTheme]": (current)=>{
                    const next = current === "noche" ? "rosa" : "noche";
                    try {
                        localStorage.setItem(STORAGE_KEY, next);
                    } catch  {
                    /* ignore */ }
                    applyTheme(next);
                    window.dispatchEvent(new Event("theme-changed"));
                    return next;
                }
            }["ThemeProvider.useCallback[toggleTheme]"]);
        }
    }["ThemeProvider.useCallback[toggleTheme]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
        value: {
            theme,
            setTheme,
            toggleTheme
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/state/theme.tsx",
        lineNumber: 129,
        columnNumber: 5
    }, this);
}
_s(ThemeProvider, "22Pr4x2GS59j7KQhgrIW19fR4tA=");
_c = ThemeProvider;
function useTheme() {
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
}
_s1(useTheme, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
const themeInitScript = `
(function(){
  try {
    var t = localStorage.getItem('${STORAGE_KEY}');
    // Los temas antiguos no disponibles pasan a Rosa.
    if (t !== 'rosa' && t !== 'noche') t = 'rosa';
    var root = document.documentElement;
    root.classList.remove('theme-aura', 'theme-rosa', 'theme-noche');
    root.classList.add('theme-' + t);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      var colors = { rosa: '#8c4a64', noche: '#0d0a0c' };
      meta.setAttribute('content', colors[t]);
    }
  } catch (e) {}
})();
`;
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/state/ui.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UIProvider",
    ()=>UIProvider,
    "useUI",
    ()=>useUI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$indexeddb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/indexeddb.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$appointment$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/appointment-modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$client$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/client-modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const Ctx = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function UIProvider({ children }) {
    _s();
    const [toasts, setToasts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [apptPreset, setApptPreset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [clientModal, setClientModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [confirmState, setConfirmState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [installAvailable, setInstallAvailable] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [standalone, setStandalone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const deferred = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const toast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UIProvider.useCallback[toast]": (msg, tone = "ok")=>{
            const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$indexeddb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uid"])();
            setToasts({
                "UIProvider.useCallback[toast]": (t)=>[
                        ...t.slice(-2),
                        {
                            id,
                            msg,
                            tone
                        }
                    ]
            }["UIProvider.useCallback[toast]"]);
            window.setTimeout({
                "UIProvider.useCallback[toast]": ()=>setToasts({
                        "UIProvider.useCallback[toast]": (t)=>t.filter({
                                "UIProvider.useCallback[toast]": (x)=>x.id !== id
                            }["UIProvider.useCallback[toast]"])
                    }["UIProvider.useCallback[toast]"])
            }["UIProvider.useCallback[toast]"], 3400);
        }
    }["UIProvider.useCallback[toast]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UIProvider.useEffect": ()=>{
            const onBip = {
                "UIProvider.useEffect.onBip": (e)=>{
                    e.preventDefault();
                    deferred.current = e;
                    setInstallAvailable(true);
                }
            }["UIProvider.useEffect.onBip"];
            const onInstalled = {
                "UIProvider.useEffect.onInstalled": ()=>{
                    setInstallAvailable(false);
                    toast("Aplicación instalada. ¡Ya la tienes en tu pantalla!", "ok");
                }
            }["UIProvider.useEffect.onInstalled"];
            window.addEventListener("beforeinstallprompt", onBip);
            window.addEventListener("appinstalled", onInstalled);
            try {
                if (window.matchMedia("(display-mode: standalone)").matches) setStandalone(true);
            } catch  {
            /* opcional */ }
            return ({
                "UIProvider.useEffect": ()=>{
                    window.removeEventListener("beforeinstallprompt", onBip);
                    window.removeEventListener("appinstalled", onInstalled);
                }
            })["UIProvider.useEffect"];
        }
    }["UIProvider.useEffect"], [
        toast
    ]);
    const install = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UIProvider.useCallback[install]": async ()=>{
            const e = deferred.current;
            if (!e) return;
            await e.prompt();
            const choice = await e.userChoice;
            if (choice.outcome === "accepted") setInstallAvailable(false);
            deferred.current = null;
        }
    }["UIProvider.useCallback[install]"], []);
    const api = {
        toast,
        openAppointment: (preset)=>setApptPreset(preset ?? {}),
        openClient: (preset, onSaved)=>setClientModal({
                preset: preset ?? null,
                onSaved
            }),
        confirm: (opts)=>new Promise((resolve)=>setConfirmState({
                    opts,
                    resolve
                })),
        install,
        installAvailable,
        standalone
    };
    const closeConfirm = (v)=>{
        confirmState?.resolve(v);
        setConfirmState(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Ctx.Provider, {
        value: api,
        children: [
            children,
            apptPreset && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$appointment$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                preset: apptPreset,
                onClose: ()=>setApptPreset(null)
            }, void 0, false, {
                fileName: "[project]/src/state/ui.tsx",
                lineNumber: 130,
                columnNumber: 9
            }, this),
            clientModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$client$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                preset: clientModal.preset,
                onSaved: clientModal.onSaved,
                onClose: ()=>setClientModal(null)
            }, void 0, false, {
                fileName: "[project]/src/state/ui.tsx",
                lineNumber: 137,
                columnNumber: 9
            }, this),
            confirmState && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 flex items-center justify-center p-6",
                style: {
                    zIndex: 65
                },
                role: "alertdialog",
                "aria-modal": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        "aria-label": "Cerrar",
                        className: "absolute inset-0 bg-pine/45 backdrop-blur-[2px] anim-fade cursor-default",
                        onClick: ()=>closeConfirm(false),
                        tabIndex: -1
                    }, void 0, false, {
                        fileName: "[project]/src/state/ui.tsx",
                        lineNumber: 151,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full max-w-sm bg-card border border-line rounded-xl shadow-2xl anim-pop p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-display font-bold text-lg text-ink",
                                children: confirmState.opts.title
                            }, void 0, false, {
                                fileName: "[project]/src/state/ui.tsx",
                                lineNumber: 158,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-soft mt-1.5 leading-relaxed",
                                children: confirmState.opts.message
                            }, void 0, false, {
                                fileName: "[project]/src/state/ui.tsx",
                                lineNumber: 161,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 mt-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>closeConfirm(false),
                                        className: "flex-1 rounded-lg border border-linedark px-4 py-2.5 text-sm font-semibold text-soft hover:bg-mint/60 hover:text-ink transition-colors",
                                        children: "Cancelar"
                                    }, void 0, false, {
                                        fileName: "[project]/src/state/ui.tsx",
                                        lineNumber: 165,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>closeConfirm(true),
                                        className: `flex-1 rounded-lg px-4 py-2.5 text-sm font-semibold text-paper active:scale-[0.98] transition-all shadow-sm ${confirmState.opts.danger ? "bg-danger hover:bg-[#9c2d42]" : "bg-pine hover:bg-pine2"}`,
                                        children: confirmState.opts.confirmLabel ?? "Aceptar"
                                    }, void 0, false, {
                                        fileName: "[project]/src/state/ui.tsx",
                                        lineNumber: 171,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/state/ui.tsx",
                                lineNumber: 164,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/state/ui.tsx",
                        lineNumber: 157,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/state/ui.tsx",
                lineNumber: 145,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-24 lg:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none",
                style: {
                    zIndex: 80
                },
                children: toasts.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "anim-toast flex items-center gap-2.5 rounded-full bg-ink text-paper pl-2 pr-4 py-2 text-sm font-medium shadow-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${t.tone === "ok" ? "bg-moss" : t.tone === "err" ? "bg-danger" : "bg-moss text-paper"}`,
                                children: [
                                    t.tone === "ok" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcCheck"], {
                                        size: 13
                                    }, void 0, false, {
                                        fileName: "[project]/src/state/ui.tsx",
                                        lineNumber: 204,
                                        columnNumber: 35
                                    }, this),
                                    t.tone === "err" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcAlert"], {
                                        size: 13
                                    }, void 0, false, {
                                        fileName: "[project]/src/state/ui.tsx",
                                        lineNumber: 205,
                                        columnNumber: 36
                                    }, this),
                                    t.tone === "info" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcSparkle"], {
                                        size: 13
                                    }, void 0, false, {
                                        fileName: "[project]/src/state/ui.tsx",
                                        lineNumber: 206,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/state/ui.tsx",
                                lineNumber: 195,
                                columnNumber: 13
                            }, this),
                            t.msg
                        ]
                    }, t.id, true, {
                        fileName: "[project]/src/state/ui.tsx",
                        lineNumber: 191,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/state/ui.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/state/ui.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, this);
}
_s(UIProvider, "2XYeffYprccOUcKbMwiqXtqeINk=");
_c = UIProvider;
function useUI() {
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(Ctx);
    if (!ctx) throw new Error("useUI fuera de UIProvider");
    return ctx;
}
_s1(useUI, "/dMy7t63NXD4eYACoT93CePwGrg=");
var _c;
__turbopack_context__.k.register(_c, "UIProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0fe-714._.js.map