(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$agenda$2d$view$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/views/agenda-view.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$clients$2d$view$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/views/clients-view.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$settings$2d$view$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/views/settings-view.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$month$2d$calendar$2d$view$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/views/month-calendar-view.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/store.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$update$2d$indicator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/update-indicator.tsx [app-client] (ecmascript)");
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
;
const TABS = [
    {
        id: "agenda",
        label: "Agenda",
        icon: (s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcCalendar"], {
                size: s
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 26,
                columnNumber: 49
            }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: "calendario",
        label: "Calendario",
        icon: (s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcGrid"], {
                size: s
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 27,
                columnNumber: 57
            }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: "clientes",
        label: "Clientes",
        icon: (s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcUsers"], {
                size: s
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 28,
                columnNumber: 53
            }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: "ajustes",
        label: "Ajustes",
        icon: (s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcCog"], {
                size: s
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 29,
                columnNumber: 51
            }, ("TURBOPACK compile-time value", void 0))
    }
];
function Clock() {
    _s();
    const [now, setNow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "Clock.useState": ()=>new Date()
    }["Clock.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Clock.useEffect": ()=>{
            const t = window.setInterval({
                "Clock.useEffect.t": ()=>setNow(new Date())
            }["Clock.useEffect.t"], 1000);
            return ({
                "Clock.useEffect": ()=>window.clearInterval(t)
            })["Clock.useEffect"];
        }
    }["Clock.useEffect"], []);
    const pad = (n)=>String(n).padStart(2, "0");
    const dateStr = new Intl.DateTimeFormat("es-ES", {
        weekday: "short",
        day: "numeric",
        month: "short"
    }).format(now);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-right leading-none select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-display font-bold text-base num text-paper",
                children: [
                    pad(now.getHours()),
                    ":",
                    pad(now.getMinutes()),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-paper/50 text-xs num",
                        children: [
                            ":",
                            pad(now.getSeconds())
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[10px] text-paper/55 font-medium mt-0.5 capitalize",
                children: dateStr
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(Clock, "aIQ63u2pSAvMwtVQMX73MhWGFJ4=");
_c = Clock;
function Shell() {
    _s1();
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("agenda");
    const [agendaDay, setAgendaDay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const { db } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])();
    const salonName = db.salon?.name || "Peluquería Marisa";
    // Título de la pestaña del navegador con el nombre del salón
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Shell.useEffect": ()=>{
            document.title = `${salonName} · Gestión de citas`;
        }
    }["Shell.useEffect"], [
        salonName
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "app-bg min-h-dvh",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "sticky top-0 z-40 bg-pine text-paper shadow-[0_10px_30px_-12px_rgba(22,60,44,0.55)]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto px-4 h-16 flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2.5 min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-9 h-9 rounded-xl bg-moss flex items-center justify-center shadow-inner shrink-0 text-paper",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcBarberPole"], {
                                        size: 21
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "leading-none min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-display font-extrabold text-lg tracking-tight truncate",
                                            children: salonName
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 78,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[9px] font-bold uppercase tracking-[0.22em] text-moss mt-0.5 hidden sm:block",
                                            children: "Gestión de citas"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "hidden md:flex items-center gap-0.5 mx-auto rounded-full bg-white/10 p-1",
                            children: TABS.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setTab(t.id),
                                    className: `flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold transition-all ${tab === t.id ? "bg-paper text-pine shadow" : "text-paper/70 hover:text-paper"}`,
                                    children: [
                                        t.icon(14),
                                        t.label
                                    ]
                                }, t.id, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 89,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 ml-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$update$2d$indicator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this),
                                !standalone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setInstallModalOpen(true),
                                    className: "inline-flex items-center gap-1.5 rounded-full bg-moss text-paper px-3 py-1.5 text-[11px] font-bold hover:bg-pine2 active:scale-[0.97] transition-all shadow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IcDownload, {
                                            size: 13
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 111,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hidden sm:inline",
                                            children: "Instalar app"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 112,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 107,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden sm:block",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Clock, {}, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 116,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-6xl mx-auto px-4 py-5 pb-28 lg:pb-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "anim-fade",
                    children: [
                        tab === "calendario" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$month$2d$calendar$2d$view$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            onOpenAgenda: (day)=>{
                                setAgendaDay(day);
                                setTab("agenda");
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 126,
                            columnNumber: 13
                        }, this),
                        tab === "agenda" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$agenda$2d$view$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            initialDay: agendaDay
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 133,
                            columnNumber: 32
                        }, this),
                        tab === "clientes" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$clients$2d$view$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 134,
                            columnNumber: 34
                        }, this),
                        tab === "ajustes" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$settings$2d$view$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 135,
                            columnNumber: 33
                        }, this)
                    ]
                }, tab, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 124,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "max-w-6xl mx-auto px-4 pb-24 lg:pb-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center text-[11px] text-faint",
                    children: [
                        salonName,
                        " · los datos se guardan en este dispositivo — exporta copias desde Ajustes"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-card border-t border-line shadow-[0_-8px_24px_-12px_rgba(27,38,33,0.25)]",
                style: {
                    paddingBottom: "env(safe-area-inset-bottom)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-4",
                    children: TABS.map((t)=>{
                        const active = tab === t.id;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setTab(t.id),
                            className: "relative flex flex-col items-center gap-0.5 py-2.5 transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `absolute top-0 h-0.5 w-10 rounded-full transition-all ${active ? "bg-moss" : "bg-transparent"}`
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 159,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `transition-colors ${active ? "text-pine" : "text-faint"}`,
                                    children: t.icon(20)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 164,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `text-[10px] font-bold ${active ? "text-pine" : "text-faint"}`,
                                    children: t.label
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 171,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, t.id, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 154,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 150,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            installModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InstallModal, {
                onClose: ()=>setInstallModalOpen(false),
                onInstall: ()=>{
                    setInstallModalOpen(false);
                    install();
                },
                installAvailable: installAvailable
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 185,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_s1(Shell, "1s2B553ImAcRSys9LKCdBI+Yv7E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
    ];
});
_c1 = Shell;
function HomePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Shell, {}, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 199,
        columnNumber: 10
    }, this);
}
_c2 = HomePage;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Clock");
__turbopack_context__.k.register(_c1, "Shell");
__turbopack_context__.k.register(_c2, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/consent-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ConsentModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/store.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/ui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/aura-modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$signature$2d$pad$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/signature-pad.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2d$pdf$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/consent-pdf.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function ConsentModal({ client, onClose }) {
    _s();
    const { addConsent, db } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUI"])();
    const salon = db.salon;
    const clauses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2d$pdf$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConsentClauses"])(salon);
    const sigApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [accepted, setAccepted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [marketing, setMarketing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasSignature, setHasSignature] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    async function save() {
        setError("");
        if (!accepted) {
            setError("El cliente debe marcar la casilla de consentimiento.");
            return;
        }
        const signature = sigApi.current?.toPng();
        if (!signature) {
            setError("Falta la firma manuscrita del cliente.");
            return;
        }
        setSaving(true);
        try {
            const bytes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2d$pdf$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildConsentPdf"])({
                client,
                salon,
                signatureDataUrl: signature,
                marketing
            });
            addConsent({
                clientId: client.id,
                signedAt: new Date().toISOString(),
                textVersion: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONSENT_TEXT_VERSION"],
                marketing,
                clientName: client.name,
                pdfBase64: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2d$pdf$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToBase64"])(bytes)
            });
            toast("Consentimiento firmado y guardado en PDF");
            onClose();
        } catch (e) {
            console.error(e);
            setError("No se pudo generar el PDF del consentimiento. Inténtalo de nuevo.");
            setSaving(false);
        }
    }
    const cbx = "mt-0.5 w-4.5 h-4.5 shrink-0 rounded border-2 border-linedark bg-white text-pine focus:ring-moss/40 cursor-pointer";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: "Consentimiento de protección de datos",
        subtitle: `${client.name} · se generará un PDF firmado y quedará guardado en la base de datos`,
        onClose: onClose,
        z: 1000,
        maxW: "max-w-xl",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start gap-2.5 rounded-lg bg-mint/70 border border-moss/25 px-3 py-2.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcShieldCheck"], {
                            size: 16,
                            className: "text-moss mt-0.5 shrink-0"
                        }, void 0, false, {
                            fileName: "[project]/src/components/consent-modal.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[11px] leading-relaxed text-moss",
                            children: [
                                "Entrega el teléfono al cliente: debe leer la información, marcar su conformidad y ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "firmar con el dedo en la pantalla táctil"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/consent-modal.tsx",
                                    lineNumber: 91,
                                    columnNumber: 27
                                }, this),
                                ". El documento se archiva automáticamente en su ficha."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/consent-modal.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/consent-modal.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-xl border border-line bg-paper/70 overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-4 py-2.5 bg-pine/95 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcFileText"], {
                                    size: 14,
                                    className: "text-moss shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/consent-modal.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-bold text-paper",
                                    children: "Información previa · RGPD (UE) 2016/679 y LOPDGDD 3/2018"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/consent-modal.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/consent-modal.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-h-56 overflow-y-auto px-4 py-3 space-y-3",
                            children: clauses.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] font-bold text-pine",
                                            children: c.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/consent-modal.tsx",
                                            lineNumber: 107,
                                            columnNumber: 17
                                        }, this),
                                        c.body.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11.5px] leading-relaxed text-soft mt-0.5",
                                                children: p
                                            }, i, false, {
                                                fileName: "[project]/src/components/consent-modal.tsx",
                                                lineNumber: 109,
                                                columnNumber: 19
                                            }, this))
                                    ]
                                }, c.title, true, {
                                    fileName: "[project]/src/components/consent-modal.tsx",
                                    lineNumber: 106,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/consent-modal.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/consent-modal.tsx",
                    lineNumber: 97,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "flex items-start gap-2.5 cursor-pointer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    checked: accepted,
                                    onChange: (e)=>setAccepted(e.target.checked),
                                    className: cbx,
                                    style: {
                                        width: 18,
                                        height: 18
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/consent-modal.tsx",
                                    lineNumber: 121,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs leading-relaxed text-ink",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "He leído y acepto"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/consent-modal.tsx",
                                            lineNumber: 129,
                                            columnNumber: 15
                                        }, this),
                                        " el tratamiento de mis datos personales por ",
                                        salon.name,
                                        " para gestionar citas, historial de servicios y la relación comercial. *"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/consent-modal.tsx",
                                    lineNumber: 128,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/consent-modal.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "flex items-start gap-2.5 cursor-pointer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    checked: marketing,
                                    onChange: (e)=>setMarketing(e.target.checked),
                                    className: cbx,
                                    style: {
                                        width: 18,
                                        height: 18
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/consent-modal.tsx",
                                    lineNumber: 135,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs leading-relaxed text-soft",
                                    children: [
                                        "Acepto recibir ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "comunicaciones comerciales"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/consent-modal.tsx",
                                            lineNumber: 143,
                                            columnNumber: 30
                                        }, this),
                                        " y novedades del salón (opcional)."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/consent-modal.tsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/consent-modal.tsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/consent-modal.tsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[11px] font-semibold uppercase tracking-[0.08em] text-soft mb-1.5",
                            children: "Firma del cliente/a *"
                        }, void 0, false, {
                            fileName: "[project]/src/components/consent-modal.tsx",
                            lineNumber: 151,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$signature$2d$pad$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            apiRef: sigApi,
                            onChange: setHasSignature
                        }, void 0, false, {
                            fileName: "[project]/src/components/consent-modal.tsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/consent-modal.tsx",
                    lineNumber: 150,
                    columnNumber: 9
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs font-medium text-danger bg-dangersoft border border-danger/20 rounded-lg px-3 py-2 anim-fade",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/src/components/consent-modal.tsx",
                    lineNumber: 158,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2 pt-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            disabled: saving,
                            className: "flex-1 rounded-lg border border-linedark px-4 py-2.5 text-sm font-semibold text-soft hover:bg-mint/60 hover:text-ink transition-colors disabled:opacity-50",
                            children: "Cancelar"
                        }, void 0, false, {
                            fileName: "[project]/src/components/consent-modal.tsx",
                            lineNumber: 164,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: save,
                            disabled: saving || !accepted || !hasSignature,
                            className: "flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-pine text-paper px-4 py-2.5 text-sm font-semibold hover:bg-pine2 active:scale-[0.98] transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed",
                            children: saving ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-block w-3.5 h-3.5 border-2 border-paper/40 border-t-paper rounded-full animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/consent-modal.tsx",
                                        lineNumber: 178,
                                        columnNumber: 17
                                    }, this),
                                    "Generando PDF…"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/consent-modal.tsx",
                                lineNumber: 177,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcPenNib"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/consent-modal.tsx",
                                        lineNumber: 183,
                                        columnNumber: 17
                                    }, this),
                                    " Firmar y guardar"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/consent-modal.tsx",
                                lineNumber: 182,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/consent-modal.tsx",
                            lineNumber: 171,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/consent-modal.tsx",
                    lineNumber: 163,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[10px] text-faint text-center",
                    children: accepted && hasSignature && !saving ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-flex items-center gap-1 text-moss",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcCheck"], {
                                size: 11
                            }, void 0, false, {
                                fileName: "[project]/src/components/consent-modal.tsx",
                                lineNumber: 192,
                                columnNumber: 15
                            }, this),
                            " Listo para firmar"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/consent-modal.tsx",
                        lineNumber: 191,
                        columnNumber: 13
                    }, this) : "Campos obligatorios: casilla de aceptación y firma manuscrita"
                }, void 0, false, {
                    fileName: "[project]/src/components/consent-modal.tsx",
                    lineNumber: 189,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/consent-modal.tsx",
            lineNumber: 85,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/consent-modal.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
_s(ConsentModal, "rJYhc318rhmido7lWNBhhpP0FJQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUI"]
    ];
});
_c = ConsentModal;
var _c;
__turbopack_context__.k.register(_c, "ConsentModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/consent-viewer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ConsentViewer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * Visor del PDF de consentimiento guardado en la base de datos.
 * Muestra el documento embebido y permite descargarlo o abrirlo aparte.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2d$pdf$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/consent-pdf.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/aura-modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ConsentViewer({ consent, onClose }) {
    _s();
    const [url, setUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [failed, setFailed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConsentViewer.useEffect": ()=>{
            let objectUrl = null;
            try {
                objectUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2d$pdf$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["consentToObjectUrl"])(consent.pdfBase64);
                setUrl(objectUrl);
            } catch  {
                setFailed(true);
            }
            return ({
                "ConsentViewer.useEffect": ()=>{
                    if (objectUrl) URL.revokeObjectURL(objectUrl);
                }
            })["ConsentViewer.useEffect"];
        }
    }["ConsentViewer.useEffect"], [
        consent
    ]);
    const fileName = `consentimiento-${consent.clientName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}-${consent.signedAt.slice(0, 10)}.pdf`;
    function download() {
        if (!url) return;
        const a = document.createElement("a");
        a.href = url;
        a.download = fileName;
        a.click();
    }
    const signed = new Date(consent.signedAt).toLocaleDateString("es-ES", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: "Consentimiento firmado",
        subtitle: `${consent.clientName} · firmado el ${signed}${consent.marketing ? " · acepta comunicaciones comerciales" : ""}`,
        onClose: onClose,
        z: 60,
        maxW: "max-w-2xl",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-xl border border-line bg-paper/70 overflow-hidden",
                    children: url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                        src: url,
                        title: `Consentimiento de ${consent.clientName}`,
                        className: "w-full h-[calc(100dvh-10rem)] min-h-[65dvh] bg-white"
                    }, void 0, false, {
                        fileName: "[project]/src/components/consent-viewer.tsx",
                        lineNumber: 70,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-64 flex flex-col items-center justify-center text-center px-6",
                        children: failed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcSparkle"], {
                                    size: 26,
                                    className: "text-moss mb-2"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/consent-viewer.tsx",
                                    lineNumber: 79,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-semibold text-ink",
                                    children: "No se puede mostrar el documento"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/consent-viewer.tsx",
                                    lineNumber: 80,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-soft mt-1",
                                    children: "El PDF está dañado o no se puede abrir en este visor. Prueba a descargarlo."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/consent-viewer.tsx",
                                    lineNumber: 83,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/consent-viewer.tsx",
                            lineNumber: 78,
                            columnNumber: 17
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-8 h-8 border-[3px] border-moss/25 border-t-moss rounded-full animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/consent-viewer.tsx",
                                    lineNumber: 90,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-faint",
                                    children: "Abriendo documento…"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/consent-viewer.tsx",
                                    lineNumber: 91,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/consent-viewer.tsx",
                            lineNumber: 89,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/consent-viewer.tsx",
                        lineNumber: 76,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/consent-viewer.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "flex-1 rounded-lg border border-linedark px-4 py-2.5 text-sm font-semibold text-soft hover:bg-mint/60 hover:text-ink transition-colors",
                            children: "Cerrar"
                        }, void 0, false, {
                            fileName: "[project]/src/components/consent-viewer.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>url && window.open(url, "_blank"),
                            disabled: !url,
                            className: "flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg border border-linedark px-4 py-2.5 text-sm font-semibold text-soft hover:bg-mint hover:text-ink transition-colors disabled:opacity-50",
                            children: "Abrir visor PDF"
                        }, void 0, false, {
                            fileName: "[project]/src/components/consent-viewer.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: download,
                            disabled: !url,
                            className: "flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-pine text-paper px-4 py-2.5 text-sm font-semibold hover:bg-pine2 active:scale-[0.98] transition-all shadow-sm disabled:opacity-50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcDownload"], {
                                    size: 15
                                }, void 0, false, {
                                    fileName: "[project]/src/components/consent-viewer.tsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this),
                                " Descargar PDF"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/consent-viewer.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/consent-viewer.tsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/consent-viewer.tsx",
            lineNumber: 67,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/consent-viewer.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_s(ConsentViewer, "K1QJPxrzKR+vQrzjf+2TSWUlZfM=");
_c = ConsentViewer;
var _c;
__turbopack_context__.k.register(_c, "ConsentViewer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/install-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InstallModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/aura-modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function InstallModal({ onClose, onInstall, installAvailable }) {
    _s();
    const [appUrl, setAppUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [secureContext, setSecureContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InstallModal.useEffect": ()=>{
            const fallback = window.location.href;
            const publishedUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_PWA_URL?.trim();
            setAppUrl(publishedUrl || fallback);
            setSecureContext(window.isSecureContext);
            if (publishedUrl) return;
            fetch("/api").then({
                "InstallModal.useEffect": (response)=>response.ok ? response.json() : null
            }["InstallModal.useEffect"]).then({
                "InstallModal.useEffect": (data)=>{
                    if (data?.pwaUrl || data?.httpsUrl || data?.url) {
                        setAppUrl(data.pwaUrl || data.httpsUrl || data.url || fallback);
                    }
                }
            }["InstallModal.useEffect"]).catch({
                "InstallModal.useEffect": ()=>{
                // Se mantiene la URL actual como alternativa.
                }
            }["InstallModal.useEffect"]);
        }
    }["InstallModal.useEffect"], []);
    const qrUrl = appUrl ? `https://api.qrserver.com/v1/create-qr-code/?size=320x320&margin=12&data=${encodeURIComponent(appUrl)}` : "";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: "Instalar la aplicación",
        subtitle: "Escanea este código con la cámara del móvil",
        onClose: onClose,
        z: 70,
        maxW: "max-w-md",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center text-center gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-2xl border border-line bg-white p-3 shadow-sm",
                    children: qrUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: qrUrl,
                        alt: "Código QR para abrir la aplicación en el móvil",
                        width: 240,
                        height: 240,
                        className: "block w-56 h-56 sm:w-60 sm:h-60"
                    }, void 0, false, {
                        fileName: "[project]/src/components/install-modal.tsx",
                        lineNumber: 50,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-56 h-56 bg-mint rounded-xl",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/src/components/install-modal.tsx",
                        lineNumber: 58,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/install-modal.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-semibold text-ink",
                            children: "Abre el enlace y añade la app a la pantalla de inicio."
                        }, void 0, false, {
                            fileName: "[project]/src/components/install-modal.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-soft leading-relaxed",
                            children: "En Android usa el menú de Chrome y elige «Instalar aplicación» o «Añadir a pantalla de inicio». En iPhone, pulsa Compartir y después «Añadir a pantalla de inicio»."
                        }, void 0, false, {
                            fileName: "[project]/src/components/install-modal.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/install-modal.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this),
                installAvailable && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onInstall,
                    className: "w-full inline-flex items-center justify-center gap-2 rounded-lg bg-moss text-paper font-display font-bold text-sm px-4 py-2.5 hover:bg-pine2 active:scale-[0.98] transition-all shadow-md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcDownload"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/src/components/install-modal.tsx",
                            lineNumber: 76,
                            columnNumber: 13
                        }, this),
                        " Instalar en este dispositivo"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/install-modal.tsx",
                    lineNumber: 72,
                    columnNumber: 11
                }, this),
                !secureContext && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "w-full rounded-lg border border-warnfg/30 bg-warnsoft px-3 py-2 text-xs text-warnfg leading-relaxed",
                    children: "Se ha preparado un acceso HTTPS local temporal. La primera vez que abras el enlace en el móvil tendrás que aceptar el aviso del certificado local para poder instalarla como PWA."
                }, void 0, false, {
                    fileName: "[project]/src/components/install-modal.tsx",
                    lineNumber: 80,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "inline-flex items-center gap-1.5 text-[11px] text-faint",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcMobile"], {
                            size: 13
                        }, void 0, false, {
                            fileName: "[project]/src/components/install-modal.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this),
                        " La aplicación funciona también sin conexión."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/install-modal.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/install-modal.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/install-modal.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(InstallModal, "zi4iWvLCtBrPD9AS5aoiVNgygD8=");
_c = InstallModal;
var _c;
__turbopack_context__.k.register(_c, "InstallModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/signature-pad.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SignaturePad
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * Lienzo de firma manuscrita para pantalla táctil (dedo o stylus) y ratón.
 * Usa Pointer Events + `touch-action: none` para que trazar la firma no
 * haga scroll en el móvil. Expone su API a través de `apiRef`.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const INK_COLOR = "#1f2a25";
const INK_WIDTH = 2.4;
function SignaturePad({ apiRef, onChange, height = 190 }) {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const wrapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const drawing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const strokes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const lastPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [hasInk, setHasInk] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const inkChanged = (v)=>{
        setHasInk(v);
        onChange?.(v);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SignaturePad.useEffect": ()=>{
            const canvas = canvasRef.current;
            const wrap = wrapRef.current;
            if (!canvas || !wrap) return;
            const setup = {
                "SignaturePad.useEffect.setup": ()=>{
                    const dpr = Math.max(1, Math.min(3, window.devicePixelRatio || 1));
                    const cssW = Math.max(1, wrap.clientWidth);
                    const cssH = height;
                    canvas.width = Math.round(cssW * dpr);
                    canvas.height = Math.round(cssH * dpr);
                    canvas.style.width = "100%";
                    canvas.style.height = `${cssH}px`;
                    const ctx = canvas.getContext("2d");
                    if (!ctx) return;
                    ctx.scale(dpr, dpr);
                    ctx.lineWidth = INK_WIDTH;
                    ctx.lineCap = "round";
                    ctx.lineJoin = "round";
                    ctx.strokeStyle = INK_COLOR;
                    strokes.current = 0;
                    inkChanged(false);
                }
            }["SignaturePad.useEffect.setup"];
            setup();
            const posOf = {
                "SignaturePad.useEffect.posOf": (e)=>{
                    const rect = canvas.getBoundingClientRect();
                    return {
                        x: e.clientX - rect.left,
                        y: e.clientY - rect.top
                    };
                }
            }["SignaturePad.useEffect.posOf"];
            const onDown = {
                "SignaturePad.useEffect.onDown": (e)=>{
                    if (e.button !== undefined && e.button !== 0 && e.pointerType === "mouse") return;
                    e.preventDefault();
                    canvas.setPointerCapture(e.pointerId);
                    drawing.current = true;
                    const p = posOf(e);
                    lastPoint.current = p;
                    strokes.current++;
                    inkChanged(true);
                }
            }["SignaturePad.useEffect.onDown"];
            const onMove = {
                "SignaturePad.useEffect.onMove": (e)=>{
                    if (!drawing.current || !lastPoint.current) return;
                    e.preventDefault();
                    const ctx = canvas.getContext("2d");
                    const p = posOf(e);
                    if (!ctx) return;
                    ctx.beginPath();
                    ctx.moveTo(lastPoint.current.x, lastPoint.current.y);
                    ctx.lineTo(p.x, p.y);
                    ctx.stroke();
                    lastPoint.current = p;
                }
            }["SignaturePad.useEffect.onMove"];
            const onUp = {
                "SignaturePad.useEffect.onUp": (e)=>{
                    if (!drawing.current) return;
                    drawing.current = false;
                    lastPoint.current = null;
                    try {
                        canvas.releasePointerCapture(e.pointerId);
                    } catch  {
                    /* el puntero ya se liberó */ }
                }
            }["SignaturePad.useEffect.onUp"];
            canvas.addEventListener("pointerdown", onDown);
            canvas.addEventListener("pointermove", onMove);
            canvas.addEventListener("pointerup", onUp);
            canvas.addEventListener("pointercancel", onUp);
            const ro = new ResizeObserver(setup);
            ro.observe(wrap);
            apiRef.current = {
                hasInk: ({
                    "SignaturePad.useEffect": ()=>strokes.current > 0
                })["SignaturePad.useEffect"],
                toPng: ({
                    "SignaturePad.useEffect": ()=>{
                        if (strokes.current === 0) return null;
                        try {
                            const ctx = canvas.getContext("2d");
                            if (!ctx) return null;
                            const { width: w, height: h } = canvas;
                            const data = ctx.getImageData(0, 0, w, h).data;
                            let minX = w;
                            let minY = h;
                            let maxX = -1;
                            let maxY = -1;
                            for(let y = 0; y < h; y++){
                                for(let x = 0; x < w; x++){
                                    if (data[(y * w + x) * 4 + 3] > 12) {
                                        if (x < minX) minX = x;
                                        if (x > maxX) maxX = x;
                                        if (y < minY) minY = y;
                                        if (y > maxY) maxY = y;
                                    }
                                }
                            }
                            if (maxX < 0) return null;
                            const pad = 12;
                            minX = Math.max(0, minX - pad);
                            minY = Math.max(0, minY - pad);
                            maxX = Math.min(w - 1, maxX + pad);
                            maxY = Math.min(h - 1, maxY + pad);
                            const cw = maxX - minX + 1;
                            const ch = maxY - minY + 1;
                            const out = document.createElement("canvas");
                            out.width = cw;
                            out.height = ch;
                            const octx = out.getContext("2d");
                            if (!octx) return null;
                            octx.drawImage(canvas, minX, minY, cw, ch, 0, 0, cw, ch);
                            return out.toDataURL("image/png");
                        } catch  {
                            return null;
                        }
                    }
                })["SignaturePad.useEffect"],
                clear: ({
                    "SignaturePad.useEffect": ()=>{
                        const ctx = canvas.getContext("2d");
                        if (!ctx) return;
                        ctx.save();
                        ctx.setTransform(1, 0, 0, 1, 0, 0);
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        ctx.restore();
                        strokes.current = 0;
                        inkChanged(false);
                    }
                })["SignaturePad.useEffect"]
            };
            return ({
                "SignaturePad.useEffect": ()=>{
                    canvas.removeEventListener("pointerdown", onDown);
                    canvas.removeEventListener("pointermove", onMove);
                    canvas.removeEventListener("pointerup", onUp);
                    canvas.removeEventListener("pointercancel", onUp);
                    ro.disconnect();
                    apiRef.current = null;
                }
            })["SignaturePad.useEffect"];
        }
    }["SignaturePad.useEffect"], [
        height
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-1.5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: wrapRef,
                className: "relative rounded-xl border-2 border-dashed border-linedark bg-white/80 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                        ref: canvasRef,
                        className: "block w-full",
                        style: {
                            touchAction: "none"
                        },
                        "aria-label": "Área de firma del cliente",
                        role: "img"
                    }, void 0, false, {
                        fileName: "[project]/src/components/signature-pad.tsx",
                        lineNumber: 192,
                        columnNumber: 9
                    }, this),
                    !hasInk && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs text-faint/70 select-none",
                        children: "Firma aquí con el dedo"
                    }, void 0, false, {
                        fileName: "[project]/src/components/signature-pad.tsx",
                        lineNumber: 200,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/signature-pad.tsx",
                lineNumber: 188,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] text-faint",
                        children: "Entrega el teléfono al cliente para que firme en la pantalla táctil."
                    }, void 0, false, {
                        fileName: "[project]/src/components/signature-pad.tsx",
                        lineNumber: 206,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>apiRef.current?.clear(),
                        className: "inline-flex items-center gap-1 rounded-lg border border-linedark px-2.5 py-1.5 text-[11px] font-bold text-soft hover:bg-mint hover:text-ink transition-colors shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcRotate"], {
                                size: 12
                            }, void 0, false, {
                                fileName: "[project]/src/components/signature-pad.tsx",
                                lineNumber: 214,
                                columnNumber: 11
                            }, this),
                            " Borrar firma"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/signature-pad.tsx",
                        lineNumber: 209,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/signature-pad.tsx",
                lineNumber: 205,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/signature-pad.tsx",
        lineNumber: 187,
        columnNumber: 5
    }, this);
}
_s(SignaturePad, "m6oBYD7nNPDvBBzy5SgtBaxsy30=");
_c = SignaturePad;
var _c;
__turbopack_context__.k.register(_c, "SignaturePad");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/status-pill.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StatusPill
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/types.ts [app-client] (ecmascript)");
;
;
function StatusPill({ status }) {
    const m = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATUS_META"][status];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "inline-flex items-center gap-1 rounded-full text-[9px] font-bold uppercase tracking-wide px-1.5 py-px shrink-0",
        style: {
            background: m.bg,
            color: m.fg
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "w-1 h-1 rounded-full",
                style: {
                    background: m.fg
                }
            }, void 0, false, {
                fileName: "[project]/src/components/status-pill.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            m.label
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/status-pill.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = StatusPill;
var _c;
__turbopack_context__.k.register(_c, "StatusPill");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/update-indicator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UpdateIndicator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/ui.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const CHECK_INTERVAL_MS = 10 * 60 * 1000; // comprobación periódica cada 10 min
function IcRefresh({ size = 14 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2.2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M21 12a9 9 0 1 1-2.64-6.36M21 3v6h-6"
        }, void 0, false, {
            fileName: "[project]/src/components/update-indicator.tsx",
            lineNumber: 37,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/update-indicator.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c = IcRefresh;
function UpdateIndicator() {
    _s();
    const { toast, confirm } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUI"])();
    const [info, setInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [updating, setUpdating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pollingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const updatingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const fetchStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UpdateIndicator.useCallback[fetchStatus]": async (checkRemote)=>{
            try {
                const res = await fetch(`/api/update${checkRemote ? "?check=1" : ""}`, {
                    cache: "no-store"
                });
                if (!res.ok) return;
                const data = await res.json();
                setInfo(data);
                if (updatingRef.current && data.state.status === "running") {
                // sigue en curso
                } else if (updatingRef.current && data.state.status === "done") {
                    updatingRef.current = false;
                    setUpdating(false);
                    toast("Aplicación actualizada. Recargando…", "ok");
                    window.setTimeout({
                        "UpdateIndicator.useCallback[fetchStatus]": ()=>window.location.reload()
                    }["UpdateIndicator.useCallback[fetchStatus]"], 4000);
                } else if (updatingRef.current && data.state.status === "error") {
                    updatingRef.current = false;
                    setUpdating(false);
                    toast(`La actualización falló: ${data.state.message ?? "error desconocido"}`, "err");
                }
            } catch  {
            // sin conexión con el servidor local: ignorar
            }
        }
    }["UpdateIndicator.useCallback[fetchStatus]"], [
        toast
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UpdateIndicator.useEffect": ()=>{
            fetchStatus(true);
            const interval = setInterval({
                "UpdateIndicator.useEffect.interval": ()=>{
                    if (!updatingRef.current) fetchStatus(true);
                }
            }["UpdateIndicator.useEffect.interval"], CHECK_INTERVAL_MS);
            return ({
                "UpdateIndicator.useEffect": ()=>clearInterval(interval)
            })["UpdateIndicator.useEffect"];
        }
    }["UpdateIndicator.useEffect"], [
        fetchStatus
    ]);
    // Mientras se actualiza, consultar el estado con frecuencia.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UpdateIndicator.useEffect": ()=>{
            if (!updating) {
                if (pollingRef.current) {
                    clearInterval(pollingRef.current);
                    pollingRef.current = null;
                }
                return;
            }
            pollingRef.current = setInterval({
                "UpdateIndicator.useEffect": ()=>fetchStatus(false)
            }["UpdateIndicator.useEffect"], 5000);
            return ({
                "UpdateIndicator.useEffect": ()=>{
                    if (pollingRef.current) clearInterval(pollingRef.current);
                }
            })["UpdateIndicator.useEffect"];
        }
    }["UpdateIndicator.useEffect"], [
        updating,
        fetchStatus
    ]);
    const available = Boolean(info?.canUpdate && info.remoteAhead && info.state.status !== "running");
    const startUpdate = async ()=>{
        if (!info) return;
        const ok = await confirm({
            title: "Actualizar la aplicación",
            message: "Se descargará e instalará la última versión disponible. La aplicación se cerrará y volverá a abrirse automáticamente en unos minutos. Los datos de las clientas no se modifican.",
            confirmLabel: "Actualizar ahora"
        });
        if (!ok) return;
        try {
            const res = await fetch("/api/update", {
                method: "POST"
            });
            const data = await res.json();
            if (data.ok) {
                updatingRef.current = true;
                setUpdating(true);
                toast("Actualización iniciada. No cierres la aplicación.", "info");
            } else {
                toast(data.message ?? "No se pudo iniciar la actualización.", "err");
            }
        } catch  {
            toast("No se pudo contactar con el servidor de la aplicación.", "err");
        }
    };
    if (!info?.canUpdate) return null;
    if (updating || info.state.status === "running") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "inline-flex items-center gap-1.5 rounded-full bg-white/10 text-paper/80 px-3 py-1.5 text-[11px] font-bold",
            title: "Actualizando la aplicación…",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "animate-spin",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IcRefresh, {
                        size: 13
                    }, void 0, false, {
                        fileName: "[project]/src/components/update-indicator.tsx",
                        lineNumber: 130,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/update-indicator.tsx",
                    lineNumber: 129,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "hidden sm:inline",
                    children: "Actualizando…"
                }, void 0, false, {
                    fileName: "[project]/src/components/update-indicator.tsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/update-indicator.tsx",
            lineNumber: 125,
            columnNumber: 7
        }, this);
    }
    if (!available) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: startUpdate,
        className: "relative inline-flex items-center gap-1.5 rounded-full bg-amber-400 text-pine px-3 py-1.5 text-[11px] font-bold hover:bg-amber-300 active:scale-[0.97] transition-all shadow",
        title: `Nueva versión disponible (${info.localCommit ?? "?"} → ${info.remoteCommit ?? "?"})`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"
                    }, void 0, false, {
                        fileName: "[project]/src/components/update-indicator.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500"
                    }, void 0, false, {
                        fileName: "[project]/src/components/update-indicator.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/update-indicator.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IcRefresh, {
                size: 13
            }, void 0, false, {
                fileName: "[project]/src/components/update-indicator.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "hidden sm:inline",
                children: "Actualizar"
            }, void 0, false, {
                fileName: "[project]/src/components/update-indicator.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/update-indicator.tsx",
        lineNumber: 140,
        columnNumber: 5
    }, this);
}
_s(UpdateIndicator, "GP+LYgfc08ZKOW95XoAjSlz4JcQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUI"]
    ];
});
_c1 = UpdateIndicator;
var _c, _c1;
__turbopack_context__.k.register(_c, "IcRefresh");
__turbopack_context__.k.register(_c1, "UpdateIndicator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/calendar-pdf.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Calendario laboral: importación de festivos desde PDF y exportación
 * del calendario del salón a PDF.
 *
 * - Importar: usa pdf.js (CDN) para leer el calendario, localiza los
 *   bloques de cada mes y detecta los días cuya casilla está marcada en
 *   color (festivos), igual que en los calendarios laborales oficiales.
 * - Exportar: genera con pdf-lib un calendario A4 vertical de 12 meses
 *   (3 columnas × 4 filas) con los festivos marcados con la casilla
 *   completa en color.
 */ __turbopack_context__.s([
    "exportCalendarPdf",
    ()=>exportCalendarPdf,
    "importHolidaysFromPdf",
    ()=>importHolidaysFromPdf
]);
/* ------------------------------------------------------------------ */ /* pdf.js desde CDN (carga diferida)                                   */ /* ------------------------------------------------------------------ */ const PDFJS_VER = "3.11.174";
const PDFJS_URL = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${PDFJS_VER}/pdf.min.js`;
const PDFJS_WORKER = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${PDFJS_VER}/pdf.worker.min.js`;
let pdfjsPromise = null;
async function loadPdfjs() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (window.pdfjsLib) return window.pdfjsLib;
    if (pdfjsPromise) return pdfjsPromise;
    pdfjsPromise = new Promise((resolve, reject)=>{
        const existing = document.getElementById("pdfjs-script");
        const script = existing ?? document.createElement("script");
        if (!existing) {
            script.id = "pdfjs-script";
            script.src = PDFJS_URL;
            document.head.appendChild(script);
        }
        const onReady = ()=>{
            if (!window.pdfjsLib) {
                reject(new Error("No se pudo cargar el lector de PDF."));
                return;
            }
            window.pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS_WORKER;
            resolve(window.pdfjsLib);
        };
        if (window.pdfjsLib) onReady();
        else {
            script.addEventListener("load", onReady, {
                once: true
            });
            script.addEventListener("error", ()=>reject(new Error("No se pudo cargar el lector de PDF.")), {
                once: true
            });
        }
    });
    return pdfjsPromise;
}
/* ------------------------------------------------------------------ */ /* Importación de festivos                                             */ /* ------------------------------------------------------------------ */ const MONTH_NAMES = [
    "ENERO",
    "FEBRERO",
    "MARZO",
    "ABRIL",
    "MAYO",
    "JUNIO",
    "JULIO",
    "AGOSTO",
    "SEPTIEMBRE",
    "OCTUBRE",
    "NOVIEMBRE",
    "DICIEMBRE"
];
/** Agrupa una lista ordenada de números en clusters separados por un hueco mínimo. */ function clusterByGap(sorted, gap) {
    const out = [];
    let cur = [
        sorted[0]
    ];
    for(let i = 1; i < sorted.length; i++){
        if (sorted[i] - sorted[i - 1] > gap) {
            out.push(cur);
            cur = [];
        }
        cur.push(sorted[i]);
    }
    out.push(cur);
    return out;
}
async function importHolidaysFromPdf(file) {
    const pdfjs = await loadPdfjs();
    const buffer = await file.arrayBuffer();
    const doc = await pdfjs.getDocument({
        data: new Uint8Array(buffer)
    }).promise;
    const page = await doc.getPage(1);
    // Render de la página para poder muestrear el color de las casillas
    const RENDER_SCALE = 2;
    const viewport = page.getViewport({
        scale: RENDER_SCALE
    });
    const canvas = document.createElement("canvas");
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    const ctx = canvas.getContext("2d", {
        willReadFrequently: true
    });
    if (!ctx) throw new Error("No se pudo preparar el lienzo de lectura.");
    await page.render({
        canvasContext: ctx,
        viewport
    }).promise;
    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    const pageH = viewport.height / RENDER_SCALE;
    const sampleColor = (x, y)=>{
        const px = Math.round(x * RENDER_SCALE);
        const py = Math.round((pageH - y) * RENDER_SCALE);
        if (px < 0 || py < 0 || px >= canvas.width || py >= canvas.height) return null;
        const i = (py * canvas.width + px) * 4;
        return [
            pixels[i],
            pixels[i + 1],
            pixels[i + 2]
        ];
    };
    /** ¿Es un píxel de color (saturado y no oscuro)? → casilla de festivo. */ const isColored = (c)=>{
        if (!c) return false;
        const [r, g, b] = c;
        const mx = Math.max(r, g, b);
        const mn = Math.min(r, g, b);
        return mx - mn >= 45 && mx >= 90;
    };
    // Textos con posiciones (coords PDF: origen abajo-izquierda)
    const tc = await page.getTextContent();
    const items = tc.items.map((it)=>({
            str: it.str.trim(),
            x: it.transform[4],
            y: it.transform[5],
            w: it.width || 0,
            h: it.height || 8
        })).filter((it)=>it.str.length > 0);
    // Año del calendario
    let year = new Date().getFullYear();
    for (const it of items){
        const m = it.str.match(/(19|20)\d{2}/);
        if (m) {
            year = parseInt(m[0], 10);
            break;
        }
    }
    // Bloques de mes: cabeceras ENERO…DICIEMBRE
    const monthItems = items.filter((it)=>MONTH_NAMES.includes(it.str.toUpperCase()));
    if (monthItems.length < 12) {
        throw new Error("No se reconocieron los 12 meses del calendario. Asegúrate de subir un calendario anual (enero a diciembre).");
    }
    // Columnas por posición x y filas por posición y (agrupación por huecos)
    const colCenters = clusterByGap(monthItems.map((m)=>m.x).sort((a, b)=>a - b), 90).map((c)=>c.reduce((s, v)=>s + v, 0) / c.length);
    const rowTops = clusterByGap(monthItems.map((m)=>m.y).sort((a, b)=>a - b), 60).map((c)=>Math.max(...c));
    const colOf = (x)=>{
        let best = 0;
        let bd = Infinity;
        colCenters.forEach((cx, i)=>{
            const d = Math.abs(cx - x);
            if (d < bd) {
                bd = d;
                best = i;
            }
        });
        return best;
    };
    /** Fila cuya cabecera queda justo por encima del número (mayor y ≤ dayY). */ const rowOf = (y)=>{
        let best = -1;
        rowTops.forEach((ry, i)=>{
            if (ry >= y - 6 && (best === -1 || ry < rowTops[best])) best = i;
        });
        return best;
    };
    // Números de día con la casilla coloreada → festivos
    const holidays = new Set();
    const numbers = items.filter((it)=>/^\d{1,2}$/.test(it.str) && +it.str >= 1 && +it.str <= 31 && it.w > 0 && it.w < 40);
    for (const n of numbers){
        const day = +n.str;
        const cx = n.x + n.w / 2;
        const cy = n.y + n.h / 2;
        // Anillo de puntos alrededor del número (unidades PDF)
        const offs = [
            [
                -8,
                -5
            ],
            [
                8,
                -5
            ],
            [
                -8,
                4
            ],
            [
                8,
                4
            ],
            [
                0,
                -7
            ],
            [
                0,
                6
            ],
            [
                -5,
                0
            ],
            [
                5,
                0
            ],
            [
                9,
                0
            ],
            [
                -9,
                0
            ]
        ];
        let colored = 0;
        for (const [dx, dy] of offs){
            if (isColored(sampleColor(cx + dx, cy + dy))) colored++;
        }
        if (colored < 2) continue;
        const col = colOf(n.x);
        const row = rowOf(n.y);
        if (row < 0) continue;
        const mi = monthItems.find((m)=>colOf(m.x) === col && rowOf(m.y) === row);
        if (!mi) continue;
        const month = MONTH_NAMES.indexOf(mi.str.toUpperCase()) + 1;
        const date = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
        // Validar fecha real (evita 31 de febrero, etc.)
        const check = new Date(year, month - 1, day);
        if (check.getMonth() === month - 1) holidays.add(date);
    }
    const list = Array.from(holidays).sort();
    if (list.length === 0) {
        throw new Error("No se detectó ningún día marcado en color. El calendario debe marcar los festivos con la casilla coloreada.");
    }
    return {
        year,
        holidays: list,
        monthsFound: monthItems.length
    };
}
/* ------------------------------------------------------------------ */ /* Exportación a PDF (formato calendario laboral A4 vertical)          */ /* ------------------------------------------------------------------ */ const MONTH_LABELS = [
    "ENERO",
    "FEBRERO",
    "MARZO",
    "ABRIL",
    "MAYO",
    "JUNIO",
    "JULIO",
    "AGOSTO",
    "SEPTIEMBRE",
    "OCTUBRE",
    "NOVIEMBRE",
    "DICIEMBRE"
];
const WEEKDAY_LETTERS = [
    "L",
    "M",
    "X",
    "J",
    "V",
    "S",
    "D"
];
const MONTH_SHORT = [
    "ene",
    "feb",
    "mar",
    "abr",
    "may",
    "jun",
    "jul",
    "ago",
    "sep",
    "oct",
    "nov",
    "dic"
];
function sanitizePdf(text) {
    return text.replace(/[\u2018\u2019\u201B]/g, "'").replace(/[\u201C\u201D]/g, '"').replace(/\u2026/g, "...").replace(/\u00A0/g, " ").replace(/[^\u0000-\u00FF\u2013\u2014\u20AC\u2022]/g, "");
}
async function exportCalendarPdf(opts) {
    const { PDFDocument, StandardFonts, rgb } = await __turbopack_context__.A("[project]/node_modules/pdf-lib/es/index.js [app-client] (ecmascript, async loader)");
    const { year, salon } = opts;
    const festive = new Set(opts.holidays.filter((d)=>d.startsWith(String(year))));
    const doc = await PDFDocument.create();
    doc.setTitle(`Calendario laboral ${year} - ${sanitizePdf(salon.name)}`);
    doc.setAuthor(sanitizePdf(salon.fiscalName || salon.name));
    doc.setCreator(`${sanitizePdf(salon.name)} · Gestión de citas`);
    const font = await doc.embedFont(StandardFonts.Helvetica);
    const fontBold = await doc.embedFont(StandardFonts.HelveticaBold);
    // Paleta (coherente con el tema rosa del salón)
    const cPine = rgb(0x8c / 255, 0x4a / 255, 0x64 / 255);
    const cHoliday = rgb(0xb3 / 255, 0x36 / 255, 0x4d / 255);
    const cInk = rgb(0x2f / 255, 0x24 / 255, 0x28 / 255);
    const cSoft = rgb(0x7a / 255, 0x55 / 255, 0x60 / 255);
    const cFaint = rgb(0xa9 / 255, 0x8a / 255, 0x93 / 255);
    const cLine = rgb(0xe0 / 255, 0xc2 / 255, 0xc8 / 255);
    const cWeekend = rgb(0xf5 / 255, 0xee / 255, 0xf0 / 255);
    const cWhite = rgb(1, 1, 1);
    const page = doc.addPage([
        595.28,
        841.89
    ]);
    const W = page.getWidth();
    const draw = (text, x, y, size, f, color = cInk)=>page.drawText(sanitizePdf(text), {
            x,
            y,
            size,
            font: f,
            color
        });
    /* --- Cabecera --- */ let y = 812;
    const title = `Calendario ${year}`;
    draw(title, 47, y, 21, fontBold, cPine);
    draw(salon.name, W - 47 - font.widthOfTextAtSize(sanitizePdf(salon.name), 9), y + 2, 9, fontBold, cSoft);
    const salonBits = [
        salon.fiscalName && salon.fiscalName !== salon.name ? salon.fiscalName : "",
        salon.nif ? `NIF/CIF ${salon.nif}` : "",
        [
            salon.street,
            [
                salon.zip,
                salon.city
            ].filter(Boolean).join(" ")
        ].filter(Boolean).join(", "),
        salon.phone,
        salon.email
    ].filter(Boolean).join("  ·  ");
    if (salonBits) {
        draw(salonBits, 47, y - 14, 7, font, cFaint);
    }
    y -= 30;
    draw(`Calendario laboral del salón · los días marcados en color son festivos o días de cierre.`, 47, y, 7.5, font, cSoft);
    /* --- Rejilla de meses: 3 columnas × 4 filas --- */ const GRID_TOP = 758;
    const GRID_BOTTOM = 118;
    const MARGIN = 47;
    const GAP_X = 14;
    const GAP_Y = 14;
    const colW = (W - MARGIN * 2 - GAP_X * 2) / 3;
    const rowH = (GRID_TOP - GRID_BOTTOM - GAP_Y * 3) / 4;
    const headerH = 15;
    const weekdayH = 12;
    const cellW = colW / 7;
    for(let m = 0; m < 12; m++){
        const col = m % 3;
        const rowIdx = Math.floor(m / 3);
        const bx = MARGIN + col * (colW + GAP_X);
        const byTop = GRID_TOP - rowIdx * (rowH + GAP_Y);
        // Cabecera del mes
        page.drawRectangle({
            x: bx,
            y: byTop - headerH,
            width: colW,
            height: headerH,
            color: cPine
        });
        const label = MONTH_LABELS[m];
        draw(label, bx + (colW - fontBold.widthOfTextAtSize(label, 8.5)) / 2, byTop - headerH + 4.2, 8.5, fontBold, cWhite);
        // Días de la semana
        const wy = byTop - headerH - weekdayH + 3;
        WEEKDAY_LETTERS.forEach((d, i)=>{
            const isWeekend = i >= 5;
            draw(d, bx + i * cellW + (cellW - font.widthOfTextAtSize(d, 7.5)) / 2, wy, 7.5, fontBold, isWeekend ? cHoliday : cSoft);
        });
        // Casillas de días (lunes primero)
        const daysInMonth = new Date(year, m + 1, 0).getDate();
        const startCol = (new Date(year, m, 1).getDay() + 6) % 7; // 0 = lunes
        const gridTopY = byTop - headerH - weekdayH;
        const rowsNeeded = Math.ceil((startCol + daysInMonth) / 7);
        const cellH = Math.min((gridTopY - (byTop - rowH)) / rowsNeeded, 16.5);
        for(let d = 1; d <= daysInMonth; d++){
            const gi = startCol + d - 1;
            const gc = gi % 7;
            const gr = Math.floor(gi / 7);
            const isWeekend = gc >= 5;
            const key = `${year}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
            const isFestive = festive.has(key);
            const cx = bx + gc * cellW;
            const cyTop = gridTopY - gr * cellH;
            if (isFestive) {
                // Festivo: casilla completa en color con número blanco
                page.drawRectangle({
                    x: cx + 0.5,
                    y: cyTop - cellH + 0.5,
                    width: cellW - 1,
                    height: cellH - 1,
                    color: cHoliday
                });
                const t = String(d);
                draw(t, cx + (cellW - fontBold.widthOfTextAtSize(t, 8.5)) / 2, cyTop - cellH + (cellH - 6) / 2, 8.5, fontBold, cWhite);
            } else {
                if (isWeekend) {
                    page.drawRectangle({
                        x: cx + 0.5,
                        y: cyTop - cellH + 0.5,
                        width: cellW - 1,
                        height: cellH - 1,
                        color: cWeekend
                    });
                }
                const t = String(d);
                draw(t, cx + (cellW - font.widthOfTextAtSize(t, 8)) / 2, cyTop - cellH + (cellH - 6) / 2, 8, font, isWeekend ? cFaint : cInk);
            }
        }
    }
    /* --- Leyenda inferior --- */ const legendY = 96;
    page.drawLine({
        start: {
            x: MARGIN,
            y: legendY + 26
        },
        end: {
            x: W - MARGIN,
            y: legendY + 26
        },
        thickness: 0.8,
        color: cLine
    });
    // Muestra de casilla festiva
    page.drawRectangle({
        x: MARGIN,
        y: legendY + 8,
        width: 16,
        height: 11,
        color: cHoliday
    });
    draw("Festivo / día de cierre", MARGIN + 22, legendY + 10.5, 7.5, fontBold, cSoft);
    page.drawRectangle({
        x: MARGIN + 140,
        y: legendY + 8,
        width: 16,
        height: 11,
        color: cWeekend,
        borderColor: cLine,
        borderWidth: 0.5
    });
    draw("Fin de semana", MARGIN + 162, legendY + 10.5, 7.5, font, cSoft);
    // Listado de fechas
    const dates = Array.from(festive).sort();
    const dateLabels = dates.map((d)=>{
        const [, mm, dd] = d.split("-");
        return `${+dd} ${MONTH_SHORT[+mm - 1]}`;
    });
    if (dateLabels.length > 0) {
        let lx = MARGIN;
        let ly = legendY - 6;
        draw("Días marcados:", lx, ly, 7.5, fontBold, cSoft);
        lx += fontBold.widthOfTextAtSize("Días marcados:", 7.5) + 8;
        for (const lab of dateLabels){
            const wLab = font.widthOfTextAtSize(lab, 7.5) + 10;
            if (lx + wLab > W - MARGIN) {
                lx = MARGIN + 4;
                ly -= 11;
            }
            draw(lab, lx, ly, 7.5, font, cInk);
            lx += wLab;
        }
    }
    // Pie
    draw(`Documento generado electrónicamente por ${salon.fiscalName || salon.name} · ${new Date().toLocaleDateString("es-ES")}`, MARGIN, 40, 6.5, font, cFaint);
    return doc.save();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/views/agenda-view.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AgendaView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/date-utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/store.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/ui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const PXH = 64;
/* ---------- disposición de citas solapadas en columnas ---------- */ function layoutItems(items) {
    const sorted = [
        ...items
    ].sort((x, y)=>x.start - y.start || y.duration - x.duration);
    const clusters = [];
    let cur = [];
    let curEnd = -1;
    for (const a of sorted){
        if (cur.length && a.start >= curEnd) {
            clusters.push(cur);
            cur = [];
            curEnd = -1;
        }
        cur.push(a);
        curEnd = Math.max(curEnd, a.start + a.duration);
    }
    if (cur.length) clusters.push(cur);
    const out = [];
    for (const cl of clusters){
        const colEnds = [];
        const placed = cl.map((a)=>{
            let col = colEnds.findIndex((end)=>end <= a.start);
            if (col === -1) {
                col = colEnds.length;
                colEnds.push(a.start + a.duration);
            } else {
                colEnds[col] = a.start + a.duration;
            }
            return {
                a,
                col,
                cols: 0
            };
        });
        placed.forEach((p)=>p.cols = colEnds.length);
        out.push(...placed);
    }
    return out;
}
function StatusChip({ status, tiny }) {
    const m = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATUS_META"][status];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `inline-flex items-center gap-1 rounded-full font-bold uppercase tracking-wide ${tiny ? "text-[9px] px-1.5 py-px" : "text-[10px] px-2 py-0.5"}`,
        style: {
            background: m.bg,
            color: m.fg
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "w-1.5 h-1.5 rounded-full",
                style: {
                    background: m.fg
                }
            }, void 0, false, {
                fileName: "[project]/src/views/agenda-view.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            m.label
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/agenda-view.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
_c = StatusChip;
/* ---------- franja semanal ---------- */ function WeekStrip({ selected, onSelect }) {
    _s();
    const { db } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])();
    const weekStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfWeekKey"])(selected);
    const days = Array.from({
        length: 7
    }, (_, i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDaysKey"])(weekStart, i));
    const counts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "WeekStrip.useMemo[counts]": ()=>{
            const m = new Map();
            for (const a of db.appointments)m.set(a.date, (m.get(a.date) ?? 0) + 1);
            return m;
        }
    }["WeekStrip.useMemo[counts]"], [
        db.appointments
    ]);
    const tKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["todayKey"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-stretch gap-1.5 rounded-xl border border-line bg-card p-1.5 shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onSelect((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDaysKey"])(weekStart, -7)),
                className: "px-2 rounded-lg text-soft hover:bg-mint hover:text-ink transition-colors",
                "aria-label": "Semana anterior",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcChevronL"], {
                    size: 18
                }, void 0, false, {
                    fileName: "[project]/src/views/agenda-view.tsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/agenda-view.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-7 flex-1 gap-1",
                children: days.map((k)=>{
                    const sel = k === selected;
                    const today = k === tKey;
                    const closed = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDayOpen"])(k, db.settings.openDays, db.settings.closedDates);
                    const n = counts.get(k) ?? 0;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onSelect(k),
                        className: `relative rounded-lg py-1.5 sm:py-2 flex flex-col items-center gap-0.5 transition-all active:scale-[0.97] ${sel ? closed ? "bg-danger text-paper shadow-md" : "bg-pine text-paper shadow-md" : closed ? "bg-dangersoft/70 text-danger hover:bg-dangersoft" : "hover:bg-mint/70"}`,
                        "aria-label": `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmtWeekday"])(k)} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmtDayNum"])(k)}${closed ? ", salón cerrado" : ""}`,
                        children: [
                            closed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `absolute right-1 top-1 flex items-center gap-0.5 rounded-full px-1 py-px text-[7px] font-extrabold uppercase tracking-wide ${sel ? "bg-paper/20 text-paper" : "bg-danger/15 text-danger"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcBan"], {
                                        size: 8
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/agenda-view.tsx",
                                        lineNumber: 132,
                                        columnNumber: 19
                                    }, this),
                                    " cerrado"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/agenda-view.tsx",
                                lineNumber: 131,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `text-[10px] font-semibold uppercase tracking-wide ${sel ? "text-paper/70" : closed ? "text-danger/70" : "text-faint"}`,
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmtWeekday"])(k)
                            }, void 0, false, {
                                fileName: "[project]/src/views/agenda-view.tsx",
                                lineNumber: 135,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `font-display font-bold text-base sm:text-lg leading-none num ${today && !sel && !closed ? "text-moss" : ""}`,
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmtDayNum"])(k)
                            }, void 0, false, {
                                fileName: "[project]/src/views/agenda-view.tsx",
                                lineNumber: 138,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "h-1 flex items-center",
                                children: [
                                    n > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `min-w-[14px] h-[14px] px-0.5 rounded-full text-[9px] font-bold flex items-center justify-center num ${sel ? "bg-moss text-paper" : closed ? "bg-danger text-paper" : "bg-moss/15 text-moss"}`,
                                        children: n
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/agenda-view.tsx",
                                        lineNumber: 143,
                                        columnNumber: 19
                                    }, this),
                                    today && n === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `w-1.5 h-1.5 rounded-full ${closed ? "bg-danger" : "bg-moss"}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/agenda-view.tsx",
                                        lineNumber: 147,
                                        columnNumber: 38
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/agenda-view.tsx",
                                lineNumber: 141,
                                columnNumber: 15
                            }, this)
                        ]
                    }, k, true, {
                        fileName: "[project]/src/views/agenda-view.tsx",
                        lineNumber: 118,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/views/agenda-view.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onSelect((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDaysKey"])(weekStart, 7)),
                className: "px-2 rounded-lg text-soft hover:bg-mint hover:text-ink transition-colors",
                "aria-label": "Semana siguiente",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcChevronR"], {
                    size: 18
                }, void 0, false, {
                    fileName: "[project]/src/views/agenda-view.tsx",
                    lineNumber: 158,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/agenda-view.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/agenda-view.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, this);
}
_s(WeekStrip, "pwhsQ2+3c8efhHMUvn8plyOr8JQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
    ];
});
_c1 = WeekStrip;
/* ---------- línea de tiempo ---------- */ function Timeline({ dayKey, items, onSlot, onEdit, onNew }) {
    _s1();
    const { db, clientById } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])();
    const { openHour, closeHour, step } = db.settings;
    const openMin = openHour * 60;
    const closeMin = closeHour * 60;
    const H = (closeHour - openHour) * PXH;
    const nowMin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nowMinutes"])();
    const isToday = dayKey === (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["todayKey"])();
    const placed = layoutItems(items);
    const areaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    function handleClick(e) {
        const r = areaRef.current?.getBoundingClientRect();
        if (!r) return;
        const y = e.clientY - r.top;
        const mins = openMin + Math.floor(y / PXH * 60 / step) * step;
        if (mins >= openMin && mins <= closeMin - step) onSlot(mins);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex rounded-xl border border-line bg-card overflow-hidden shadow-sm anim-rise",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-12 sm:w-14 shrink-0 border-r border-line bg-paper/70 select-none",
                style: {
                    height: H
                },
                children: [
                    Array.from({
                        length: closeHour - openHour + 1
                    }, (_, i)=>openHour + i).map((h, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "absolute right-2 text-[10px] sm:text-[11px] font-semibold text-faint num",
                            style: {
                                top: i * PXH + (i === 0 ? 4 : -7)
                            },
                            children: [
                                h,
                                ":00"
                            ]
                        }, h, true, {
                            fileName: "[project]/src/views/agenda-view.tsx",
                            lineNumber: 201,
                            columnNumber: 11
                        }, this)),
                    isToday && nowMin >= openMin && nowMin <= closeMin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute right-1.5 text-[9px] font-bold uppercase text-moss bg-mint rounded px-1 py-px",
                        style: {
                            top: (nowMin - openMin) / 60 * PXH - 8
                        },
                        children: "ahora"
                    }, void 0, false, {
                        fileName: "[project]/src/views/agenda-view.tsx",
                        lineNumber: 210,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/agenda-view.tsx",
                lineNumber: 199,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: areaRef,
                className: "relative flex-1 cursor-copy",
                style: {
                    height: H
                },
                onClick: handleClick,
                title: "Haz clic en un hueco para crear una cita",
                children: [
                    Array.from({
                        length: closeHour - openHour + 1
                    }, (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute left-0 right-0 border-t border-line",
                            style: {
                                top: i * PXH
                            }
                        }, `h${i}`, false, {
                            fileName: "[project]/src/views/agenda-view.tsx",
                            lineNumber: 222,
                            columnNumber: 11
                        }, this)),
                    Array.from({
                        length: closeHour - openHour
                    }, (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute left-0 right-0 border-t border-dashed border-line/70",
                            style: {
                                top: i * PXH + PXH / 2
                            }
                        }, `m${i}`, false, {
                            fileName: "[project]/src/views/agenda-view.tsx",
                            lineNumber: 225,
                            columnNumber: 11
                        }, this)),
                    placed.map(({ a, col, cols })=>{
                        const top = (a.start - openMin) / 60 * PXH;
                        const h = a.duration / 60 * PXH;
                        const cancelled = a.status === "cancelada";
                        const done = a.status === "completada";
                        const client = clientById(a.clientId);
                        // Hasta una hora: una sola línea equilibrada. En tarjetas estrechas
                        // el bloque central se recorta, pero nunca desplaza la hora o el estado.
                        const compact = a.duration <= 60;
                        const compactTextSize = a.duration === 60 ? "text-xs sm:text-sm" : "text-[11px] sm:text-xs";
                        const phone = client?.phone?.trim();
                        const clientName = client?.name ?? "Cliente eliminado";
                        const compactLabel = `${clientName}${phone ? ` · ${phone}` : ""} · ${a.serviceName}${a.notes ? ` · ${a.notes}` : ""}`;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute group",
                            style: {
                                top: top + 2,
                                height: Math.max(h - 4, 22),
                                left: `calc(${col / cols * 100}% + 5px)`,
                                width: `calc(${100 / cols}% - 10px)`,
                                zIndex: 10 + col
                            },
                            onClick: (e)=>{
                                e.stopPropagation();
                                onEdit(a);
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `h-full rounded-lg border border-line overflow-hidden cursor-pointer transition-all duration-150 hover:shadow-lg hover:-translate-y-px ${cancelled ? "opacity-55" : ""} ${compact ? "px-2 py-0.5" : "px-2.5 py-2"}`,
                                style: {
                                    borderLeft: `3px solid ${a.color}`,
                                    background: `${a.color}16`
                                },
                                children: compact ? // Línea única: hora / cliente + servicio / estado.
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex items-center gap-1.5 ${compactTextSize} leading-tight h-full min-w-0`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `font-extrabold num shrink-0 ${cancelled ? "line-through" : ""}`,
                                            style: {
                                                color: a.color
                                            },
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minutesToLabel"])(a.start)
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/agenda-view.tsx",
                                            lineNumber: 266,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "h-3 border-l border-line/80 shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/agenda-view.tsx",
                                            lineNumber: 272,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            title: compactLabel,
                                            className: `min-w-0 truncate font-bold tracking-tight ${cancelled ? "line-through text-soft" : "text-ink"}`,
                                            children: clientName
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/agenda-view.tsx",
                                            lineNumber: 273,
                                            columnNumber: 21
                                        }, this),
                                        phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `tel:${phone.replace(/\s/g, "")}`,
                                            title: `Llamar a ${clientName}: ${phone}`,
                                            "aria-label": `Llamar a ${clientName}: ${phone}`,
                                            onClick: (e)=>e.stopPropagation(),
                                            className: "inline-flex items-center gap-0.5 shrink-0 text-[10px] sm:text-[11px] font-bold text-pine hover:text-moss hover:underline num",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcPhone"], {
                                                    size: 11
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/agenda-view.tsx",
                                                    lineNumber: 287,
                                                    columnNumber: 25
                                                }, this),
                                                " ",
                                                phone
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/agenda-view.tsx",
                                            lineNumber: 280,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "min-w-0 flex-1 truncate text-soft",
                                            title: a.serviceName,
                                            children: [
                                                "· ",
                                                a.serviceName
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/agenda-view.tsx",
                                            lineNumber: 290,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "shrink-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusChip, {
                                                status: a.status,
                                                tiny: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/agenda-view.tsx",
                                                lineNumber: 294,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/agenda-view.tsx",
                                            lineNumber: 293,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/agenda-view.tsx",
                                    lineNumber: 265,
                                    columnNumber: 19
                                }, this) : // Tarjetas altas: contenido centrado y con separación estable.
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full flex flex-col justify-center gap-1 min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-[10px] font-bold num ${cancelled ? "line-through" : ""}`,
                                                    style: {
                                                        color: a.color
                                                    },
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minutesToLabel"])(a.start)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/agenda-view.tsx",
                                                    lineNumber: 301,
                                                    columnNumber: 23
                                                }, this),
                                                h >= 52 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] text-faint num",
                                                    children: [
                                                        "–",
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minutesToLabel"])(a.start + a.duration)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/agenda-view.tsx",
                                                    lineNumber: 308,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-auto",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusChip, {
                                                        status: a.status,
                                                        tiny: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/agenda-view.tsx",
                                                        lineNumber: 313,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/agenda-view.tsx",
                                                    lineNumber: 312,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/agenda-view.tsx",
                                            lineNumber: 300,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `text-base sm:text-lg font-bold leading-tight truncate ${cancelled ? "line-through text-soft" : "text-ink"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: clientName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/agenda-view.tsx",
                                                    lineNumber: 321,
                                                    columnNumber: 23
                                                }, this),
                                                phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: `tel:${phone.replace(/\s/g, "")}`,
                                                    title: `Llamar a ${clientName}: ${phone}`,
                                                    "aria-label": `Llamar a ${clientName}: ${phone}`,
                                                    onClick: (e)=>e.stopPropagation(),
                                                    className: "inline-flex items-center gap-1 ml-2 align-middle text-[11px] font-bold text-pine hover:text-moss hover:underline num",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcPhone"], {
                                                            size: 12
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/agenda-view.tsx",
                                                            lineNumber: 330,
                                                            columnNumber: 27
                                                        }, this),
                                                        " ",
                                                        phone
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/agenda-view.tsx",
                                                    lineNumber: 323,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/agenda-view.tsx",
                                            lineNumber: 316,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs sm:text-sm text-soft truncate flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-1.5 h-1.5 rounded-full shrink-0",
                                                    style: {
                                                        background: a.color
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/agenda-view.tsx",
                                                    lineNumber: 335,
                                                    columnNumber: 23
                                                }, this),
                                                a.serviceName,
                                                done && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcCheck"], {
                                                    size: 11,
                                                    className: "text-moss shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/agenda-view.tsx",
                                                    lineNumber: 340,
                                                    columnNumber: 32
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/agenda-view.tsx",
                                            lineNumber: 334,
                                            columnNumber: 21
                                        }, this),
                                        a.notes && h >= 78 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] text-faint truncate italic",
                                            children: a.notes
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/agenda-view.tsx",
                                            lineNumber: 343,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/agenda-view.tsx",
                                    lineNumber: 299,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/views/agenda-view.tsx",
                                lineNumber: 259,
                                columnNumber: 15
                            }, this)
                        }, a.id, false, {
                            fileName: "[project]/src/views/agenda-view.tsx",
                            lineNumber: 244,
                            columnNumber: 13
                        }, this);
                    }),
                    isToday && nowMin >= openMin && nowMin <= closeMin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-0 right-0 z-30 pointer-events-none",
                        style: {
                            top: (nowMin - openMin) / 60 * PXH
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-[2px] bg-moss shadow-[0_0_8px_rgba(184,108,138,0.7)]"
                            }, void 0, false, {
                                fileName: "[project]/src/views/agenda-view.tsx",
                                lineNumber: 355,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute -left-1 -top-[3.5px] w-2 h-2 rounded-full bg-moss pulse-gold"
                            }, void 0, false, {
                                fileName: "[project]/src/views/agenda-view.tsx",
                                lineNumber: 356,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/agenda-view.tsx",
                        lineNumber: 354,
                        columnNumber: 11
                    }, this),
                    items.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex items-center justify-center pointer-events-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center anim-fade",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-flex w-12 h-12 rounded-full bg-mint text-moss items-center justify-center mb-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcCalendar"], {
                                        size: 22
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/agenda-view.tsx",
                                        lineNumber: 364,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/views/agenda-view.tsx",
                                    lineNumber: 363,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-display font-bold text-lg text-ink",
                                    children: "Día libre"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/agenda-view.tsx",
                                    lineNumber: 366,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-soft mb-3",
                                    children: "Haz clic en cualquier hueco para añadir una cita"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/agenda-view.tsx",
                                    lineNumber: 367,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: (e)=>{
                                        e.stopPropagation();
                                        onNew();
                                    },
                                    className: "pointer-events-auto inline-flex items-center gap-1.5 rounded-lg bg-pine text-paper px-4 py-2 text-sm font-semibold hover:bg-pine2 active:scale-[0.98] transition-all shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcPlus"], {
                                            size: 15
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/agenda-view.tsx",
                                            lineNumber: 375,
                                            columnNumber: 17
                                        }, this),
                                        " Añadir la primera cita"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/agenda-view.tsx",
                                    lineNumber: 368,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/agenda-view.tsx",
                            lineNumber: 362,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/views/agenda-view.tsx",
                        lineNumber: 361,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/agenda-view.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/agenda-view.tsx",
        lineNumber: 197,
        columnNumber: 5
    }, this);
}
_s1(Timeline, "VC36aSxfiLO5WDUmLeVePFHvLQQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
    ];
});
_c2 = Timeline;
/* ---------- modo lista ---------- */ function DayList({ items, onEdit }) {
    _s2();
    const { clientById, setAppointmentStatus, deleteAppointment } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])();
    const { toast, confirm } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUI"])();
    async function remove(a) {
        const ok = await confirm({
            title: "Eliminar cita",
            message: `¿Eliminar la cita de ${clientById(a.clientId)?.name ?? "cliente"} a las ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minutesToLabel"])(a.start)}?`,
            confirmLabel: "Eliminar",
            danger: true
        });
        if (ok) {
            deleteAppointment(a.id);
            toast("Cita eliminada", "info");
        }
    }
    if (items.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-xl border border-dashed border-linedark bg-card/60 py-14 text-center anim-rise",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-display font-bold text-lg text-ink",
                    children: "Sin citas este día"
                }, void 0, false, {
                    fileName: "[project]/src/views/agenda-view.tsx",
                    lineNumber: 406,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-soft",
                    children: "Cambia de día en la franja superior o crea una cita nueva."
                }, void 0, false, {
                    fileName: "[project]/src/views/agenda-view.tsx",
                    lineNumber: 407,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/views/agenda-view.tsx",
            lineNumber: 405,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2",
        children: items.map((a, i)=>{
            const c = clientById(a.clientId);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "anim-rise flex items-center gap-3 rounded-xl border border-line bg-card p-3 shadow-sm hover:shadow-md transition-shadow",
                style: {
                    animationDelay: `${i * 40}ms`
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "self-stretch w-1 rounded-full shrink-0",
                        style: {
                            background: a.color
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/views/agenda-view.tsx",
                        lineNumber: 422,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-14 shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-display font-bold text-sm num leading-none",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minutesToLabel"])(a.start)
                            }, void 0, false, {
                                fileName: "[project]/src/views/agenda-view.tsx",
                                lineNumber: 424,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] text-faint num mt-0.5",
                                children: [
                                    a.duration,
                                    " min"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/agenda-view.tsx",
                                lineNumber: 425,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/agenda-view.tsx",
                        lineNumber: 423,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "flex-1 min-w-0 text-left",
                        onClick: ()=>onEdit(a),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `text-sm font-semibold truncate ${a.status === "cancelada" ? "line-through text-soft" : "text-ink"}`,
                                children: c?.name ?? "Cliente eliminado"
                            }, void 0, false, {
                                fileName: "[project]/src/views/agenda-view.tsx",
                                lineNumber: 428,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs truncate flex items-center gap-1",
                                children: [
                                    c?.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-pine font-semibold num shrink-0 inline-flex items-center gap-0.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcPhone"], {
                                                size: 11
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/agenda-view.tsx",
                                                lineNumber: 434,
                                                columnNumber: 21
                                            }, this),
                                            " ",
                                            c.phone
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/agenda-view.tsx",
                                        lineNumber: 433,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-soft truncate",
                                        children: [
                                            c?.phone ? " · " : "",
                                            a.serviceName,
                                            " · ",
                                            a.price,
                                            " €",
                                            a.notes ? ` · ${a.notes}` : ""
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/agenda-view.tsx",
                                        lineNumber: 437,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/agenda-view.tsx",
                                lineNumber: 431,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/agenda-view.tsx",
                        lineNumber: 427,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusChip, {
                        status: a.status
                    }, void 0, false, {
                        fileName: "[project]/src/views/agenda-view.tsx",
                        lineNumber: 442,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-0.5 shrink-0",
                        children: [
                            (a.status === "pendiente" || a.status === "confirmada") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        title: "Marcar completada",
                                        onClick: ()=>{
                                            setAppointmentStatus(a.id, "completada");
                                            toast("Cita completada");
                                        },
                                        className: "p-1.5 rounded-lg text-soft hover:text-moss hover:bg-oksoft transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcCheck"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/agenda-view.tsx",
                                            lineNumber: 454,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/agenda-view.tsx",
                                        lineNumber: 446,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        title: "Cancelar cita",
                                        onClick: ()=>{
                                            setAppointmentStatus(a.id, "cancelada");
                                            toast("Cita cancelada", "info");
                                        },
                                        className: "p-1.5 rounded-lg text-soft hover:text-danger hover:bg-dangersoft transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcBan"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/agenda-view.tsx",
                                            lineNumber: 464,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/agenda-view.tsx",
                                        lineNumber: 456,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/agenda-view.tsx",
                                lineNumber: 445,
                                columnNumber: 17
                            }, this),
                            (a.status === "completada" || a.status === "cancelada") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                title: "Reabrir como pendiente",
                                onClick: ()=>{
                                    setAppointmentStatus(a.id, "pendiente");
                                    toast("Cita reabierta", "info");
                                },
                                className: "p-1.5 rounded-lg text-soft hover:text-warnfg hover:bg-warnsoft transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcRotate"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/views/agenda-view.tsx",
                                    lineNumber: 477,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/views/agenda-view.tsx",
                                lineNumber: 469,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                title: "Editar",
                                onClick: ()=>onEdit(a),
                                className: "p-1.5 rounded-lg text-soft hover:text-ink hover:bg-mint transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcPencil"], {
                                    size: 15
                                }, void 0, false, {
                                    fileName: "[project]/src/views/agenda-view.tsx",
                                    lineNumber: 481,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/views/agenda-view.tsx",
                                lineNumber: 480,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                title: "Eliminar",
                                onClick: ()=>remove(a),
                                className: "p-1.5 rounded-lg text-soft hover:text-danger hover:bg-dangersoft transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcTrash"], {
                                    size: 15
                                }, void 0, false, {
                                    fileName: "[project]/src/views/agenda-view.tsx",
                                    lineNumber: 484,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/views/agenda-view.tsx",
                                lineNumber: 483,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/agenda-view.tsx",
                        lineNumber: 443,
                        columnNumber: 13
                    }, this)
                ]
            }, a.id, true, {
                fileName: "[project]/src/views/agenda-view.tsx",
                lineNumber: 417,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/views/agenda-view.tsx",
        lineNumber: 413,
        columnNumber: 5
    }, this);
}
_s2(DayList, "bMA6bkobY//3JRkpP7rCcsB1Yxw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUI"]
    ];
});
_c3 = DayList;
/* ---------- panel lateral ---------- */ function SidePanel({ dayKey, items, onEdit, defaultStart }) {
    _s3();
    const { db, clientById } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])();
    const { openAppointment } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUI"])();
    const nowMin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nowMinutes"])();
    const isToday = dayKey === (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["todayKey"])();
    const active = items.filter((a)=>a.status !== "cancelada");
    const income = active.reduce((s, a)=>s + a.price, 0);
    const busyMin = active.reduce((s, a)=>s + a.duration, 0);
    const totalMin = (db.settings.closeHour - db.settings.openHour) * 60;
    const occupancy = Math.min(100, Math.round(busyMin / totalMin * 100));
    const upcoming = (isToday ? items.filter((a)=>a.start + a.duration >= nowMin) : items).filter((a)=>a.status !== "cancelada").sort((x, y)=>x.start - y.start).slice(0, 4);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border border-line bg-card p-4 shadow-sm anim-rise",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-[11px] font-bold uppercase tracking-[0.1em] text-faint mb-3",
                        children: "El día en cifras"
                    }, void 0, false, {
                        fileName: "[project]/src/views/agenda-view.tsx",
                        lineNumber: 515,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-end gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-display font-extrabold text-4xl leading-none num text-pine",
                                        children: active.length
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/agenda-view.tsx",
                                        lineNumber: 518,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-soft font-medium mt-1",
                                        children: "citas activas"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/agenda-view.tsx",
                                        lineNumber: 519,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/agenda-view.tsx",
                                lineNumber: 517,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-10 w-px bg-line"
                            }, void 0, false, {
                                fileName: "[project]/src/views/agenda-view.tsx",
                                lineNumber: 521,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-display font-extrabold text-2xl leading-none num text-moss",
                                        children: [
                                            income,
                                            " €"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/agenda-view.tsx",
                                        lineNumber: 523,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-soft font-medium mt-1",
                                        children: "estimados"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/agenda-view.tsx",
                                        lineNumber: 524,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/agenda-view.tsx",
                                lineNumber: 522,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/agenda-view.tsx",
                        lineNumber: 516,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between text-[11px] font-medium text-soft mb-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Ocupación"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/agenda-view.tsx",
                                        lineNumber: 529,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "num font-bold",
                                        children: [
                                            occupancy,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/agenda-view.tsx",
                                        lineNumber: 530,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/agenda-view.tsx",
                                lineNumber: 528,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-2 rounded-full bg-mint overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full rounded-full bg-moss transition-all duration-700",
                                    style: {
                                        width: `${occupancy}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/views/agenda-view.tsx",
                                    lineNumber: 533,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/views/agenda-view.tsx",
                                lineNumber: 532,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/agenda-view.tsx",
                        lineNumber: 527,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/agenda-view.tsx",
                lineNumber: 514,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border border-line bg-card p-4 shadow-sm anim-rise",
                style: {
                    animationDelay: "60ms"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-[11px] font-bold uppercase tracking-[0.1em] text-faint mb-2.5",
                        children: isToday ? "Lo que viene" : "Citas del día"
                    }, void 0, false, {
                        fileName: "[project]/src/views/agenda-view.tsx",
                        lineNumber: 539,
                        columnNumber: 9
                    }, this),
                    upcoming.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-faint py-2",
                        children: "Nada pendiente por aquí."
                    }, void 0, false, {
                        fileName: "[project]/src/views/agenda-view.tsx",
                        lineNumber: 543,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1",
                        children: upcoming.map((a)=>{
                            const c = clientById(a.clientId);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onEdit(a),
                                className: "w-full flex items-center gap-2.5 rounded-lg px-2 py-2 hover:bg-mint/70 transition-colors text-left group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-display font-bold text-sm num w-11 shrink-0",
                                        style: {
                                            color: a.color
                                        },
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minutesToLabel"])(a.start)
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/agenda-view.tsx",
                                        lineNumber: 554,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "min-w-0 flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block text-sm font-semibold truncate group-hover:text-pine transition-colors",
                                                children: c?.name ?? "Cliente"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/agenda-view.tsx",
                                                lineNumber: 558,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block text-[11px] text-faint truncate",
                                                children: a.serviceName
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/agenda-view.tsx",
                                                lineNumber: 561,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/agenda-view.tsx",
                                        lineNumber: 557,
                                        columnNumber: 19
                                    }, this),
                                    isToday && a.status !== "completada" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-bold text-moss bg-mint rounded-full px-2 py-0.5 num shrink-0",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inLabel"])(a.start - nowMin)
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/agenda-view.tsx",
                                        lineNumber: 564,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, a.id, true, {
                                fileName: "[project]/src/views/agenda-view.tsx",
                                lineNumber: 549,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/views/agenda-view.tsx",
                        lineNumber: 545,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/agenda-view.tsx",
                lineNumber: 538,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>openAppointment({
                        date: dayKey,
                        start: defaultStart
                    }),
                className: "w-full flex items-center justify-center gap-2 rounded-xl bg-moss text-paper font-display font-bold text-sm px-4 py-3 hover:bg-pine2 active:scale-[0.98] transition-all shadow-md anim-rise",
                style: {
                    animationDelay: "120ms"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcPlus"], {
                        size: 17
                    }, void 0, false, {
                        fileName: "[project]/src/views/agenda-view.tsx",
                        lineNumber: 580,
                        columnNumber: 9
                    }, this),
                    " Nueva cita"
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/agenda-view.tsx",
                lineNumber: 575,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/agenda-view.tsx",
        lineNumber: 513,
        columnNumber: 5
    }, this);
}
_s3(SidePanel, "xSQbhOW40EYyixmyZC+A/FbS8DM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUI"]
    ];
});
_c4 = SidePanel;
function AgendaView({ initialDay }) {
    _s4();
    const { db } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])();
    const { openAppointment } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUI"])();
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialDay ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["todayKey"])());
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("agenda");
    const [, setTick] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AgendaView.useEffect": ()=>{
            const t = window.setInterval({
                "AgendaView.useEffect.t": ()=>setTick({
                        "AgendaView.useEffect.t": (x)=>x + 1
                    }["AgendaView.useEffect.t"])
            }["AgendaView.useEffect.t"], 30_000);
            return ({
                "AgendaView.useEffect": ()=>window.clearInterval(t)
            })["AgendaView.useEffect"];
        }
    }["AgendaView.useEffect"], []);
    const dayItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AgendaView.useMemo[dayItems]": ()=>db.appointments.filter({
                "AgendaView.useMemo[dayItems]": (a)=>a.date === selected
            }["AgendaView.useMemo[dayItems]"]).sort({
                "AgendaView.useMemo[dayItems]": (x, y)=>x.start - y.start || y.duration - x.duration
            }["AgendaView.useMemo[dayItems]"])
    }["AgendaView.useMemo[dayItems]"], [
        db.appointments,
        selected
    ]);
    const isToday = selected === (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["todayKey"])();
    const isClosed = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDayOpen"])(selected, db.settings.openDays, db.settings.closedDates);
    const nextSlot = (()=>{
        const base = isToday ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nowMinutes"])() + 5 : db.settings.openHour * 60;
        const step = db.settings.step;
        return Math.min(Math.max(Math.ceil(base / step) * step, db.settings.openHour * 60), db.settings.closeHour * 60 - step);
    })();
    const newDefault = ()=>openAppointment({
            date: selected,
            start: nextSlot
        });
    const onSlot = (start)=>openAppointment({
            date: selected,
            start
        });
    const onEdit = (a)=>openAppointment({
            appt: a
        });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WeekStrip, {
                selected: selected,
                onSelect: setSelected
            }, void 0, false, {
                fileName: "[project]/src/views/agenda-view.tsx",
                lineNumber: 618,
                columnNumber: 7
            }, this),
            isClosed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 rounded-xl border border-danger/25 bg-dangersoft px-3.5 py-2.5 text-danger anim-fade",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcBan"], {
                        size: 16
                    }, void 0, false, {
                        fileName: "[project]/src/views/agenda-view.tsx",
                        lineNumber: 622,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-extrabold uppercase tracking-wide",
                                children: "Salón cerrado"
                            }, void 0, false, {
                                fileName: "[project]/src/views/agenda-view.tsx",
                                lineNumber: 624,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-danger/80",
                                children: "Este día está marcado como no laborable."
                            }, void 0, false, {
                                fileName: "[project]/src/views/agenda-view.tsx",
                                lineNumber: 625,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/agenda-view.tsx",
                        lineNumber: 623,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/agenda-view.tsx",
                lineNumber: 621,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0 flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2.5 flex-wrap",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "font-display font-extrabold text-2xl sm:text-[28px] leading-tight text-ink capitalize",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmtLong"])(selected)
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/agenda-view.tsx",
                                        lineNumber: 633,
                                        columnNumber: 13
                                    }, this),
                                    !isToday && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSelected((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["todayKey"])()),
                                        className: "text-[11px] font-bold uppercase tracking-wide text-moss bg-mint hover:bg-moss/20 rounded-full px-2.5 py-1 transition-colors",
                                        children: "volver a hoy"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/agenda-view.tsx",
                                        lineNumber: 637,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/agenda-view.tsx",
                                lineNumber: 632,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-soft mt-0.5",
                                children: dayItems.length === 0 ? "Ninguna cita registrada" : `${dayItems.length} ${dayItems.length === 1 ? "cita" : "citas"} · ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["capitalize"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmtShortDate"])(selected))}`
                            }, void 0, false, {
                                fileName: "[project]/src/views/agenda-view.tsx",
                                lineNumber: 645,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/agenda-view.tsx",
                        lineNumber: 631,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex rounded-lg border border-line bg-card p-0.5 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setMode("agenda"),
                                        className: `flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-bold transition-all ${mode === "agenda" ? "bg-pine text-paper shadow" : "text-soft hover:text-ink"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcGrid"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/agenda-view.tsx",
                                                lineNumber: 660,
                                                columnNumber: 15
                                            }, this),
                                            " Agenda"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/agenda-view.tsx",
                                        lineNumber: 654,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setMode("lista"),
                                        className: `flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-bold transition-all ${mode === "lista" ? "bg-pine text-paper shadow" : "text-soft hover:text-ink"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcList"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/agenda-view.tsx",
                                                lineNumber: 668,
                                                columnNumber: 15
                                            }, this),
                                            " Lista"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/agenda-view.tsx",
                                        lineNumber: 662,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/agenda-view.tsx",
                                lineNumber: 653,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: newDefault,
                                className: "hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-pine text-paper px-3.5 py-2 text-xs font-bold hover:bg-pine2 active:scale-[0.98] transition-all shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcPlus"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/agenda-view.tsx",
                                        lineNumber: 675,
                                        columnNumber: 13
                                    }, this),
                                    " Nueva cita"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/agenda-view.tsx",
                                lineNumber: 671,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/agenda-view.tsx",
                        lineNumber: 652,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/agenda-view.tsx",
                lineNumber: 630,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid lg:grid-cols-[1fr_300px] gap-4 items-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0",
                        children: [
                            mode === "agenda" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Timeline, {
                                dayKey: selected,
                                items: dayItems,
                                onSlot: onSlot,
                                onEdit: onEdit,
                                onNew: newDefault
                            }, void 0, false, {
                                fileName: "[project]/src/views/agenda-view.tsx",
                                lineNumber: 683,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DayList, {
                                items: dayItems,
                                onEdit: onEdit
                            }, void 0, false, {
                                fileName: "[project]/src/views/agenda-view.tsx",
                                lineNumber: 685,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-faint mt-2 hidden lg:flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcSparkle"], {
                                        size: 12,
                                        className: "text-moss"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/agenda-view.tsx",
                                        lineNumber: 688,
                                        columnNumber: 13
                                    }, this),
                                    "Consejo: haz clic en un hueco libre de la agenda para crear una cita a esa hora."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/agenda-view.tsx",
                                lineNumber: 687,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/agenda-view.tsx",
                        lineNumber: 681,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SidePanel, {
                        dayKey: selected,
                        items: dayItems,
                        onEdit: onEdit,
                        defaultStart: nextSlot
                    }, void 0, false, {
                        fileName: "[project]/src/views/agenda-view.tsx",
                        lineNumber: 692,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/agenda-view.tsx",
                lineNumber: 680,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/agenda-view.tsx",
        lineNumber: 617,
        columnNumber: 5
    }, this);
}
_s4(AgendaView, "1KssDYXwIDmsDYe/tf0snfbCT0M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUI"]
    ];
});
_c5 = AgendaView;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "StatusChip");
__turbopack_context__.k.register(_c1, "WeekStrip");
__turbopack_context__.k.register(_c2, "Timeline");
__turbopack_context__.k.register(_c3, "DayList");
__turbopack_context__.k.register(_c4, "SidePanel");
__turbopack_context__.k.register(_c5, "AgendaView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/views/clients-view.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Avatar",
    ()=>Avatar,
    "default",
    ()=>ClientsView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/date-utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/store.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/ui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$status$2d$pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/status-pill.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$consent$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/consent-modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$consent$2d$viewer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/consent-viewer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2d$pdf$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/consent-pdf.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
function initials(name) {
    const parts = name.trim().split(/\s+/);
    return ((parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "")).toUpperCase();
}
function hueOf(name) {
    let h = 0;
    for (const ch of name)h = (h * 31 + ch.charCodeAt(0)) % 360;
    return h;
}
function Avatar({ name, size = 40 }) {
    const h = hueOf(name);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "rounded-full flex items-center justify-center font-display font-bold text-paper shrink-0 select-none",
        style: {
            width: size,
            height: size,
            fontSize: size * 0.38,
            background: `linear-gradient(135deg, hsl(${h} 36% 38%), hsl(${h} 42% 28%))`
        },
        children: initials(name)
    }, void 0, false, {
        fileName: "[project]/src/views/clients-view.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_c = Avatar;
function ClientsView() {
    _s();
    const { db, deleteClient, clientById, deleteConsent } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])();
    const { toast, confirm, openAppointment, openClient } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUI"])();
    const [q, setQ] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedId, setSelectedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [consentFor, setConsentFor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [viewConsent, setViewConsent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const today = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["todayKey"])();
    const stats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ClientsView.useMemo[stats]": ()=>{
            const m = new Map();
            for (const c of db.clients)m.set(c.id, {
                count: 0
            });
            for (const a of db.appointments){
                const s = m.get(a.clientId);
                if (!s) continue;
                s.count++;
                const isPast = a.date < today || a.date === today && a.start + a.duration < new Date().getHours() * 60 + new Date().getMinutes();
                if (!isPast && a.status !== "cancelada") {
                    if (!s.next || a.date < s.next.date || a.date === s.next.date && a.start < s.next.start) s.next = a;
                }
                if (isPast || a.status === "completada") {
                    if (!s.last || a.date > s.last.date || a.date === s.last.date && a.start > s.last.start) s.last = a;
                }
            }
            return m;
        }
    }["ClientsView.useMemo[stats]"], [
        db.appointments,
        db.clients,
        today
    ]);
    const clients = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ClientsView.useMemo[clients]": ()=>{
            const term = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["norm"])(q.trim());
            return db.clients.filter({
                "ClientsView.useMemo[clients]": (c)=>!term || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["norm"])(`${c.name} ${c.phone} ${c.email} ${c.city} ${c.street} ${c.zip}`).includes(term)
            }["ClientsView.useMemo[clients]"]).sort({
                "ClientsView.useMemo[clients]": (a, b)=>a.name.localeCompare(b.name, "es")
            }["ClientsView.useMemo[clients]"]);
        }
    }["ClientsView.useMemo[clients]"], [
        db.clients,
        q
    ]);
    const selected = selectedId ? clientById(selectedId) : undefined;
    const selectedAppts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ClientsView.useMemo[selectedAppts]": ()=>selected ? db.appointments.filter({
                "ClientsView.useMemo[selectedAppts]": (a)=>a.clientId === selected.id
            }["ClientsView.useMemo[selectedAppts]"]).sort({
                "ClientsView.useMemo[selectedAppts]": (x, y)=>(y.date + String(y.start).padStart(4, "0")).localeCompare(x.date + String(x.start).padStart(4, "0"))
            }["ClientsView.useMemo[selectedAppts]"]) : []
    }["ClientsView.useMemo[selectedAppts]"], [
        db.appointments,
        selected
    ]);
    const clientConsents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ClientsView.useMemo[clientConsents]": ()=>selected ? db.consents.filter({
                "ClientsView.useMemo[clientConsents]": (c)=>c.clientId === selected.id
            }["ClientsView.useMemo[clientConsents]"]).sort({
                "ClientsView.useMemo[clientConsents]": (a, b)=>b.signedAt.localeCompare(a.signedAt)
            }["ClientsView.useMemo[clientConsents]"]) : []
    }["ClientsView.useMemo[clientConsents]"], [
        db.consents,
        selected
    ]);
    async function removeClient(c) {
        const n = stats.get(c.id)?.count ?? 0;
        const nc = db.consents.filter((x)=>x.clientId === c.id).length;
        const ok = await confirm({
            title: "Eliminar cliente",
            message: n > 0 ? `Se eliminará a ${c.name}, sus ${n} ${n === 1 ? "cita registrada" : "citas registradas"}${nc > 0 ? ` y ${nc} ${nc === 1 ? "consentimiento firmado" : "consentimientos firmados"}` : ""}. ¿Continuar?` : `¿Seguro que quieres eliminar a ${c.name}?`,
            confirmLabel: "Eliminar",
            danger: true
        });
        if (!ok) return;
        deleteClient(c.id);
        setSelectedId(null);
        toast("Cliente eliminado", "info");
    }
    async function removeConsent(c) {
        const ok = await confirm({
            title: "Eliminar consentimiento",
            message: "Se borrará el consentimiento firmado y su PDF de la base de datos. Esta acción no se puede deshacer. ¿Continuar?",
            confirmLabel: "Eliminar",
            danger: true
        });
        if (!ok) return;
        deleteConsent(c.id);
        if (viewConsent?.id === c.id) setViewConsent(null);
        toast("Consentimiento eliminado", "info");
    }
    function downloadConsent(c) {
        try {
            const url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2d$pdf$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["consentToObjectUrl"])(c.pdfBase64);
            const a = document.createElement("a");
            a.href = url;
            a.download = `consentimiento-${c.clientName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}-${c.signedAt.slice(0, 10)}.pdf`;
            a.click();
            setTimeout(()=>URL.revokeObjectURL(url), 4000);
        } catch  {
            toast("No se pudo descargar el PDF", "err");
        }
    }
    function openConsentInBrowser(c) {
        const popup = window.open("about:blank", "_blank");
        if (!popup) {
            setViewConsent(c);
            toast("El navegador ha bloqueado la nueva pestaña. Usa el visor integrado.", "info");
            return;
        }
        try {
            const url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$consent$2d$pdf$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["consentToObjectUrl"])(c.pdfBase64);
            popup.location.href = url;
            window.setTimeout(()=>URL.revokeObjectURL(url), 10 * 60 * 1000);
        } catch  {
            popup.close();
            toast("No se pudo abrir el PDF", "err");
        }
    }
    const fmtConsentDate = (iso)=>new Date(iso).toLocaleDateString("es-ES", {
            day: "numeric",
            month: "short",
            year: "numeric"
        });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            consentFor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$consent$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                client: consentFor,
                onClose: ()=>setConsentFor(null)
            }, void 0, false, {
                fileName: "[project]/src/views/clients-view.tsx",
                lineNumber: 186,
                columnNumber: 9
            }, this),
            viewConsent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$consent$2d$viewer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                consent: viewConsent,
                onClose: ()=>setViewConsent(null)
            }, void 0, false, {
                fileName: "[project]/src/views/clients-view.tsx",
                lineNumber: 189,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0 flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-display font-extrabold text-2xl sm:text-[28px] leading-tight text-ink",
                                children: "Clientes"
                            }, void 0, false, {
                                fileName: "[project]/src/views/clients-view.tsx",
                                lineNumber: 196,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-soft mt-0.5",
                                children: [
                                    db.clients.length,
                                    " ",
                                    db.clients.length === 1 ? "cliente" : "clientes",
                                    " en tu base de datos"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/clients-view.tsx",
                                lineNumber: 197,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/clients-view.tsx",
                        lineNumber: 195,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full sm:w-72 order-3 sm:order-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcSearch"], {
                                size: 16,
                                className: "absolute left-3 top-1/2 -translate-y-1/2 text-faint"
                            }, void 0, false, {
                                fileName: "[project]/src/views/clients-view.tsx",
                                lineNumber: 202,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: q,
                                onChange: (e)=>setQ(e.target.value),
                                placeholder: "Buscar nombre, teléfono, ciudad…",
                                className: "w-full rounded-lg border border-linedark bg-card pl-9 pr-3 py-2 text-sm outline-none focus:border-moss focus:ring-2 focus:ring-moss/25 transition-shadow placeholder:text-faint shadow-sm"
                            }, void 0, false, {
                                fileName: "[project]/src/views/clients-view.tsx",
                                lineNumber: 203,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/clients-view.tsx",
                        lineNumber: 201,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>openClient(),
                        className: "inline-flex items-center gap-1.5 rounded-lg bg-pine text-paper px-3.5 py-2 text-xs font-bold hover:bg-pine2 active:scale-[0.98] transition-all shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcUserPlus"], {
                                size: 15
                            }, void 0, false, {
                                fileName: "[project]/src/views/clients-view.tsx",
                                lineNumber: 214,
                                columnNumber: 11
                            }, this),
                            " Nuevo cliente"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/clients-view.tsx",
                        lineNumber: 210,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/clients-view.tsx",
                lineNumber: 194,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 items-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0 space-y-2",
                        children: [
                            clients.length === 0 && db.clients.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl border border-dashed border-linedark bg-card/60 py-16 text-center anim-rise",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-flex w-14 h-14 rounded-full bg-mint text-moss items-center justify-center mb-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcUsers"], {
                                            size: 26
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/clients-view.tsx",
                                            lineNumber: 224,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/clients-view.tsx",
                                        lineNumber: 223,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-display font-bold text-lg text-ink",
                                        children: "Aún no hay clientes"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/clients-view.tsx",
                                        lineNumber: 226,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-soft mb-4",
                                        children: "Añade tu primer cliente con nombre, dirección y teléfono."
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/clients-view.tsx",
                                        lineNumber: 227,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>openClient(),
                                        className: "inline-flex items-center gap-1.5 rounded-lg bg-pine text-paper px-4 py-2.5 text-sm font-semibold hover:bg-pine2 transition-colors shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcUserPlus"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/clients-view.tsx",
                                                lineNumber: 232,
                                                columnNumber: 17
                                            }, this),
                                            " Añadir cliente"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/clients-view.tsx",
                                        lineNumber: 228,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/clients-view.tsx",
                                lineNumber: 222,
                                columnNumber: 13
                            }, this),
                            clients.length === 0 && db.clients.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl border border-dashed border-linedark bg-card/60 py-12 text-center anim-fade",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-display font-bold text-ink",
                                        children: [
                                            "Sin resultados para «",
                                            q,
                                            "»"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/clients-view.tsx",
                                        lineNumber: 238,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-soft",
                                        children: "Prueba con otro nombre o número de teléfono."
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/clients-view.tsx",
                                        lineNumber: 239,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/clients-view.tsx",
                                lineNumber: 237,
                                columnNumber: 13
                            }, this),
                            clients.map((c, i)=>{
                                const s = stats.get(c.id);
                                const active = c.id === selectedId;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSelectedId(c.id),
                                    className: `anim-rise w-full flex items-center gap-3 rounded-xl border p-3 text-left transition-all hover:shadow-md hover:-translate-y-px ${active ? "border-moss bg-mint/50 shadow-sm ring-1 ring-moss/40" : "border-line bg-card shadow-sm"}`,
                                    style: {
                                        animationDelay: `${Math.min(i, 10) * 40}ms`
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Avatar, {
                                            name: c.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/clients-view.tsx",
                                            lineNumber: 254,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "min-w-0 flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block text-sm font-semibold text-ink truncate",
                                                    children: c.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/clients-view.tsx",
                                                    lineNumber: 256,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block text-xs text-soft truncate",
                                                    children: [
                                                        c.phone,
                                                        c.city ? ` · ${c.city}` : ""
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/clients-view.tsx",
                                                    lineNumber: 257,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/clients-view.tsx",
                                            lineNumber: 255,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-right shrink-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block text-[11px] font-bold text-moss bg-mint rounded-full px-2 py-0.5 num",
                                                    children: [
                                                        s?.count ?? 0,
                                                        " ",
                                                        s?.count === 1 ? "cita" : "citas"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/clients-view.tsx",
                                                    lineNumber: 263,
                                                    columnNumber: 19
                                                }, this),
                                                s?.next && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block text-[10px] text-faint mt-1 num",
                                                    children: [
                                                        "próxima: ",
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmtShortDate"])(s.next.date),
                                                        " ",
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minutesToLabel"])(s.next.start)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/clients-view.tsx",
                                                    lineNumber: 267,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/clients-view.tsx",
                                            lineNumber: 262,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, c.id, true, {
                                    fileName: "[project]/src/views/clients-view.tsx",
                                    lineNumber: 246,
                                    columnNumber: 15
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/clients-view.tsx",
                        lineNumber: 220,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: selected ? "fixed inset-0 z-[100] flex items-start justify-center px-3 pt-24 pb-5 sm:px-6" : "hidden",
                        children: selected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    "aria-label": "Cerrar ficha del cliente",
                                    className: "absolute inset-0 bg-pine/45 backdrop-blur-[2px] anim-fade cursor-default",
                                    onClick: ()=>setSelectedId(null),
                                    tabIndex: -1
                                }, void 0, false, {
                                    fileName: "[project]/src/views/clients-view.tsx",
                                    lineNumber: 281,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-full max-w-6xl max-h-[calc(100dvh-7rem)] overflow-y-auto rounded-2xl border border-line bg-card shadow-2xl anim-pop",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-pine px-4 py-4 flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setSelectedId(null),
                                                    className: "p-1 -ml-1 rounded text-paper/70 hover:text-paper",
                                                    "aria-label": "Cerrar ficha",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcArrowL"], {
                                                        size: 18
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/clients-view.tsx",
                                                        lineNumber: 291,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/clients-view.tsx",
                                                    lineNumber: 290,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Avatar, {
                                                    name: selected.name,
                                                    size: 46
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/clients-view.tsx",
                                                    lineNumber: 293,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-display font-bold text-paper leading-tight truncate",
                                                            children: selected.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/clients-view.tsx",
                                                            lineNumber: 295,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[11px] text-paper/60",
                                                            children: [
                                                                "Cliente desde ",
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmtShortDate"])(selected.createdAt.slice(0, 10))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/views/clients-view.tsx",
                                                            lineNumber: 296,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/clients-view.tsx",
                                                    lineNumber: 294,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/clients-view.tsx",
                                            lineNumber: 289,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 grid lg:grid-cols-2 gap-5 items-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: `tel:${selected.phone.replace(/\s/g, "")}`,
                                                                    className: "flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-mint text-moss border border-moss/40 px-3 py-2 text-xs font-bold hover:bg-moss/15 transition-colors",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcPhone"], {
                                                                            size: 14
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/views/clients-view.tsx",
                                                                            lineNumber: 307,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        " Llamar"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/views/clients-view.tsx",
                                                                    lineNumber: 303,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>openClient(selected),
                                                                    className: "flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg border border-linedark px-3 py-2 text-xs font-bold text-soft hover:bg-mint hover:text-ink transition-colors",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcPencil"], {
                                                                            size: 14
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/views/clients-view.tsx",
                                                                            lineNumber: 313,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        " Editar"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/views/clients-view.tsx",
                                                                    lineNumber: 309,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>removeClient(selected),
                                                                    className: "inline-flex items-center justify-center rounded-lg border border-danger/30 text-danger px-3 py-2 hover:bg-dangersoft transition-colors",
                                                                    title: "Eliminar cliente",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcTrash"], {
                                                                        size: 14
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/clients-view.tsx",
                                                                        lineNumber: 320,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/views/clients-view.tsx",
                                                                    lineNumber: 315,
                                                                    columnNumber: 19
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/views/clients-view.tsx",
                                                            lineNumber: 302,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "rounded-lg bg-paper/80 border border-line p-3 space-y-1.5 text-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcPhone"], {
                                                                            size: 14,
                                                                            className: "text-faint shrink-0"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/views/clients-view.tsx",
                                                                            lineNumber: 326,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "num font-medium",
                                                                            children: selected.phone || "—"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/views/clients-view.tsx",
                                                                            lineNumber: 327,
                                                                            columnNumber: 21
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/views/clients-view.tsx",
                                                                    lineNumber: 325,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcMail"], {
                                                                            size: 14,
                                                                            className: "text-faint shrink-0"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/views/clients-view.tsx",
                                                                            lineNumber: 330,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        selected.email ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                            href: `mailto:${selected.email}`,
                                                                            className: "font-medium text-moss hover:underline break-all",
                                                                            children: selected.email
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/views/clients-view.tsx",
                                                                            lineNumber: 332,
                                                                            columnNumber: 23
                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-faint",
                                                                            children: "Sin correo registrado"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/views/clients-view.tsx",
                                                                            lineNumber: 339,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/views/clients-view.tsx",
                                                                    lineNumber: 329,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "flex items-start gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcPin"], {
                                                                            size: 14,
                                                                            className: "text-faint shrink-0 mt-0.5"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/views/clients-view.tsx",
                                                                            lineNumber: 343,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-soft",
                                                                            children: [
                                                                                selected.street || "Dirección sin registrar",
                                                                                (selected.zip || selected.city) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                                            fileName: "[project]/src/views/clients-view.tsx",
                                                                                            lineNumber: 348,
                                                                                            columnNumber: 27
                                                                                        }, this),
                                                                                        [
                                                                                            selected.zip,
                                                                                            selected.city
                                                                                        ].filter(Boolean).join(" · ")
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/views/clients-view.tsx",
                                                                                    lineNumber: 347,
                                                                                    columnNumber: 25
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/views/clients-view.tsx",
                                                                            lineNumber: 344,
                                                                            columnNumber: 21
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/views/clients-view.tsx",
                                                                    lineNumber: 342,
                                                                    columnNumber: 19
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/views/clients-view.tsx",
                                                            lineNumber: 324,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-3 gap-2 text-center",
                                                            children: [
                                                                {
                                                                    v: String(stats.get(selected.id)?.count ?? 0),
                                                                    l: "citas"
                                                                },
                                                                {
                                                                    v: stats.get(selected.id)?.next ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmtShortDate"])(stats.get(selected.id).next.date) : "—",
                                                                    l: "próxima"
                                                                },
                                                                {
                                                                    v: stats.get(selected.id)?.last ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmtShortDate"])(stats.get(selected.id).last.date) : "—",
                                                                    l: "última"
                                                                }
                                                            ].map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "rounded-lg bg-mint/50 border border-line py-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "font-display font-bold text-sm num leading-none text-pine",
                                                                            children: x.v
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/views/clients-view.tsx",
                                                                            lineNumber: 363,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[10px] text-soft mt-1",
                                                                            children: x.l
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/views/clients-view.tsx",
                                                                            lineNumber: 364,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, x.l, true, {
                                                                    fileName: "[project]/src/views/clients-view.tsx",
                                                                    lineNumber: 362,
                                                                    columnNumber: 21
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/clients-view.tsx",
                                                            lineNumber: 356,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>openAppointment({
                                                                    clientId: selected.id
                                                                }),
                                                            className: "w-full inline-flex items-center justify-center gap-1.5 rounded-lg bg-pine text-paper px-3 py-2.5 text-xs font-bold hover:bg-pine2 active:scale-[0.98] transition-all shadow-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcPlus"], {
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/views/clients-view.tsx",
                                                                    lineNumber: 373,
                                                                    columnNumber: 19
                                                                }, this),
                                                                " Nueva cita para ",
                                                                selected.name.split(" ")[0]
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/views/clients-view.tsx",
                                                            lineNumber: 369,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/clients-view.tsx",
                                                    lineNumber: 301,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between mb-1.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "text-[11px] font-bold uppercase tracking-[0.1em] text-faint",
                                                                    children: "Protección de datos (RGPD)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/views/clients-view.tsx",
                                                                    lineNumber: 380,
                                                                    columnNumber: 21
                                                                }, this),
                                                                clientConsents.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "inline-flex items-center gap-1 rounded-full bg-mint text-moss text-[10px] font-bold px-2 py-0.5",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcShieldCheck"], {
                                                                            size: 11
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/views/clients-view.tsx",
                                                                            lineNumber: 385,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        " Firmado"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/views/clients-view.tsx",
                                                                    lineNumber: 384,
                                                                    columnNumber: 23
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "inline-flex items-center gap-1 rounded-full bg-mint text-moss text-[10px] font-bold px-2 py-0.5",
                                                                    children: "Pendiente"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/views/clients-view.tsx",
                                                                    lineNumber: 388,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/views/clients-view.tsx",
                                                            lineNumber: 379,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setConsentFor(selected),
                                                            className: "w-full inline-flex items-center justify-center gap-1.5 rounded-lg bg-pine text-paper px-3 py-2.5 text-xs font-bold hover:bg-pine2 active:scale-[0.98] transition-all shadow-sm mb-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcPenNib"], {
                                                                    size: 13
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/views/clients-view.tsx",
                                                                    lineNumber: 398,
                                                                    columnNumber: 21
                                                                }, this),
                                                                " Nueva firma / renovar"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/views/clients-view.tsx",
                                                            lineNumber: 394,
                                                            columnNumber: 19
                                                        }, this),
                                                        clientConsents.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "rounded-lg border border-dashed border-moss/50 bg-mint/50 px-3 py-3 text-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs font-bold text-moss",
                                                                    children: "Sin consentimiento firmado"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/views/clients-view.tsx",
                                                                    lineNumber: 403,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[11px] text-soft mt-0.5 mb-2.5 leading-relaxed",
                                                                    children: "El cliente debe firmar el consentimiento de tratamiento de datos en la pantalla táctil."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/views/clients-view.tsx",
                                                                    lineNumber: 406,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/views/clients-view.tsx",
                                                            lineNumber: 402,
                                                            columnNumber: 21
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-1.5",
                                                            children: clientConsents.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2 rounded-lg border border-line bg-paper/60 px-2.5 py-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "w-7 h-7 rounded-lg bg-mint text-moss flex items-center justify-center shrink-0",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcShieldCheck"], {
                                                                                size: 14
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/views/clients-view.tsx",
                                                                                lineNumber: 419,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/views/clients-view.tsx",
                                                                            lineNumber: 418,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "flex-1 min-w-0",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "block text-xs font-semibold text-ink",
                                                                                    children: [
                                                                                        fmtConsentDate(c.signedAt),
                                                                                        i === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "ml-1.5 text-[9px] font-bold uppercase tracking-wide text-moss bg-mint rounded-full px-1.5 py-0.5",
                                                                                            children: "vigente"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/views/clients-view.tsx",
                                                                                            lineNumber: 425,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/views/clients-view.tsx",
                                                                                    lineNumber: 422,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "block text-[10px] text-faint truncate",
                                                                                    children: [
                                                                                        c.marketing ? "Acepta comunicaciones comerciales" : "Sin comunicaciones comerciales",
                                                                                        " ",
                                                                                        "· PDF guardado"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/views/clients-view.tsx",
                                                                                    lineNumber: 430,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/views/clients-view.tsx",
                                                                            lineNumber: 421,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>openConsentInBrowser(c),
                                                                            className: "p-1.5 rounded-lg text-soft hover:text-ink hover:bg-mint transition-colors shrink-0",
                                                                            title: "Ver PDF del consentimiento",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcFileText"], {
                                                                                size: 14
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/views/clients-view.tsx",
                                                                                lineNumber: 442,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/views/clients-view.tsx",
                                                                            lineNumber: 437,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>downloadConsent(c),
                                                                            className: "p-1.5 rounded-lg text-soft hover:text-ink hover:bg-mint transition-colors shrink-0",
                                                                            title: "Descargar PDF",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcDownload"], {
                                                                                size: 14
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/views/clients-view.tsx",
                                                                                lineNumber: 449,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/views/clients-view.tsx",
                                                                            lineNumber: 444,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>removeConsent(c),
                                                                            className: "p-1.5 rounded-lg text-soft hover:text-danger hover:bg-dangersoft transition-colors shrink-0",
                                                                            title: "Eliminar consentimiento",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcTrash"], {
                                                                                size: 14
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/views/clients-view.tsx",
                                                                                lineNumber: 456,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/views/clients-view.tsx",
                                                                            lineNumber: 451,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, c.id, true, {
                                                                    fileName: "[project]/src/views/clients-view.tsx",
                                                                    lineNumber: 414,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/clients-view.tsx",
                                                            lineNumber: 412,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/clients-view.tsx",
                                                    lineNumber: 378,
                                                    columnNumber: 17
                                                }, this),
                                                selectedAppts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-[11px] font-bold uppercase tracking-[0.1em] text-faint mb-1.5",
                                                            children: "Historial de citas"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/clients-view.tsx",
                                                            lineNumber: 466,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-1 max-h-64 overflow-y-auto pr-1",
                                                            children: selectedAppts.slice(0, 12).map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>openAppointment({
                                                                            appt: a
                                                                        }),
                                                                    className: "w-full flex items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-mint/70 transition-colors text-left",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "w-1.5 h-1.5 rounded-full shrink-0",
                                                                            style: {
                                                                                background: a.color
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/views/clients-view.tsx",
                                                                            lineNumber: 474,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs font-semibold num w-20 shrink-0",
                                                                            children: [
                                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmtShortDate"])(a.date),
                                                                                " · ",
                                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minutesToLabel"])(a.start)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/views/clients-view.tsx",
                                                                            lineNumber: 475,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs text-soft truncate flex-1",
                                                                            children: a.serviceName
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/views/clients-view.tsx",
                                                                            lineNumber: 478,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$status$2d$pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            status: a.status
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/views/clients-view.tsx",
                                                                            lineNumber: 479,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, a.id, true, {
                                                                    fileName: "[project]/src/views/clients-view.tsx",
                                                                    lineNumber: 469,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/clients-view.tsx",
                                                            lineNumber: 467,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/clients-view.tsx",
                                                    lineNumber: 465,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/clients-view.tsx",
                                            lineNumber: 300,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/clients-view.tsx",
                                    lineNumber: 288,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/clients-view.tsx",
                            lineNumber: 280,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/views/clients-view.tsx",
                        lineNumber: 278,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/clients-view.tsx",
                lineNumber: 218,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/clients-view.tsx",
        lineNumber: 184,
        columnNumber: 5
    }, this);
}
_s(ClientsView, "8UWGBn4pAP1wleWMS9fyzBbG45g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUI"]
    ];
});
_c1 = ClientsView;
var _c, _c1;
__turbopack_context__.k.register(_c, "Avatar");
__turbopack_context__.k.register(_c1, "ClientsView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/views/month-calendar-view.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MonthCalendarView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/date-utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/store.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/ui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$status$2d$pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/status-pill.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const WEEK_HEADERS = [
    "Lun",
    "Mar",
    "Mié",
    "Jue",
    "Vie",
    "Sáb",
    "Dom"
];
const DOT_COLOR = {
    pendiente: "#D97706",
    confirmada: "#059669",
    completada: "#374151",
    cancelada: "#DB2777"
};
/* ---------- KPI pill ---------- */ function Kpi({ value, label, highlight }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 rounded-xl border border-line bg-card px-3 py-2 shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: `font-display font-extrabold text-xl leading-none num ${highlight ? "text-moss" : "text-pine"}`,
                children: value
            }, void 0, false, {
                fileName: "[project]/src/views/month-calendar-view.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[10px] uppercase tracking-wide text-faint font-semibold mt-1",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/views/month-calendar-view.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/month-calendar-view.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Kpi;
/* ---------- tarjeta de cita del día seleccionado ---------- */ function DayApptCard({ appt, clientName, clientPhone, onEdit }) {
    const cancelled = appt.status === "cancelada";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: ()=>onEdit(appt),
        className: "w-full anim-rise flex items-stretch gap-3 rounded-lg border border-line bg-card px-3 py-2 hover:shadow-md hover:-translate-y-px transition-all text-left",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "w-1 rounded-full shrink-0",
                style: {
                    background: appt.color
                }
            }, void 0, false, {
                fileName: "[project]/src/views/month-calendar-view.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 flex-wrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-display font-bold text-sm num text-ink shrink-0",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rangeLabel"])(appt.start, appt.duration)
                            }, void 0, false, {
                                fileName: "[project]/src/views/month-calendar-view.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$status$2d$pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                status: appt.status
                            }, void 0, false, {
                                fileName: "[project]/src/views/month-calendar-view.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/month-calendar-view.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `text-sm font-semibold truncate ${cancelled ? "line-through text-soft" : "text-ink"}`,
                        children: clientName
                    }, void 0, false, {
                        fileName: "[project]/src/views/month-calendar-view.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    clientPhone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] text-pine font-semibold num truncate flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcPhone"], {
                                size: 11
                            }, void 0, false, {
                                fileName: "[project]/src/views/month-calendar-view.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this),
                            " ",
                            clientPhone
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/month-calendar-view.tsx",
                        lineNumber: 104,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-soft truncate",
                        children: [
                            appt.serviceName,
                            " · ",
                            appt.price,
                            " €"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/month-calendar-view.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    appt.notes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] text-faint italic truncate mt-0.5",
                        children: [
                            "“",
                            appt.notes,
                            "”"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/month-calendar-view.tsx",
                        lineNumber: 112,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/month-calendar-view.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/month-calendar-view.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
}
_c1 = DayApptCard;
function MonthCalendarView({ onOpenAgenda }) {
    _s();
    const { db, clientById } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])();
    const { openAppointment } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUI"])();
    const today = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["todayKey"])();
    const initial = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromKey"])(today);
    const [year, setYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initial.getFullYear());
    const [month, setMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initial.getMonth());
    const [selectedDay, setSelectedDay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(today);
    const weeks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MonthCalendarView.useMemo[weeks]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMonthMatrix"])(year, month)
    }["MonthCalendarView.useMemo[weeks]"], [
        year,
        month
    ]);
    // Mapa fecha -> citas
    const byDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MonthCalendarView.useMemo[byDate]": ()=>{
            const m = new Map();
            for (const a of db.appointments){
                const list = m.get(a.date) || [];
                list.push(a);
                m.set(a.date, list);
            }
            m.forEach({
                "MonthCalendarView.useMemo[byDate]": (list)=>list.sort({
                        "MonthCalendarView.useMemo[byDate]": (x, y)=>x.start - y.start || y.duration - x.duration
                    }["MonthCalendarView.useMemo[byDate]"])
            }["MonthCalendarView.useMemo[byDate]"]);
            return m;
        }
    }["MonthCalendarView.useMemo[byDate]"], [
        db.appointments
    ]);
    // KPIs del mes visible
    const monthStats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MonthCalendarView.useMemo[monthStats]": ()=>{
            const monthPrefix = `${year}-${String(month + 1).padStart(2, "0")}-`;
            const inMonth = db.appointments.filter({
                "MonthCalendarView.useMemo[monthStats].inMonth": (a)=>a.date.startsWith(monthPrefix)
            }["MonthCalendarView.useMemo[monthStats].inMonth"]);
            const active = inMonth.filter({
                "MonthCalendarView.useMemo[monthStats].active": (a)=>a.status !== "cancelada"
            }["MonthCalendarView.useMemo[monthStats].active"]);
            const completed = inMonth.filter({
                "MonthCalendarView.useMemo[monthStats].completed": (a)=>a.status === "completada"
            }["MonthCalendarView.useMemo[monthStats].completed"]);
            const income = active.reduce({
                "MonthCalendarView.useMemo[monthStats].income": (s, a)=>s + a.price
            }["MonthCalendarView.useMemo[monthStats].income"], 0);
            return {
                total: inMonth.length,
                active: active.length,
                completed: completed.length,
                income
            };
        }
    }["MonthCalendarView.useMemo[monthStats]"], [
        db.appointments,
        year,
        month
    ]);
    // Citas del día seleccionado
    const selectedAppts = byDate.get(selectedDay) || [];
    function prevMonth() {
        if (month === 0) {
            setMonth(11);
            setYear((y)=>y - 1);
        } else setMonth((m)=>m - 1);
    }
    function nextMonth() {
        if (month === 11) {
            setMonth(0);
            setYear((y)=>y + 1);
        } else setMonth((m)=>m + 1);
    }
    function goToday() {
        const t = new Date();
        setYear(t.getFullYear());
        setMonth(t.getMonth());
        setSelectedDay((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["todayKey"])());
    }
    function handleDayClick(key) {
        setSelectedDay(key);
    }
    function openDayAgenda() {
        onOpenAgenda(selectedDay);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0 flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-display font-extrabold text-2xl sm:text-[28px] leading-tight text-ink capitalize",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["capitalize"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmtMonth"])(toKeyOfMonth(year, month)))
                            }, void 0, false, {
                                fileName: "[project]/src/views/month-calendar-view.tsx",
                                lineNumber: 202,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] uppercase tracking-[0.18em] font-bold text-faint mt-0.5",
                                children: "Calendario completo"
                            }, void 0, false, {
                                fileName: "[project]/src/views/month-calendar-view.tsx",
                                lineNumber: 205,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/month-calendar-view.tsx",
                        lineNumber: 201,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1 rounded-lg border border-linedark bg-card p-0.5 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: prevMonth,
                                className: "p-1.5 rounded-md text-soft hover:bg-mint hover:text-ink transition-colors",
                                "aria-label": "Mes anterior",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcChevronL"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/views/month-calendar-view.tsx",
                                    lineNumber: 215,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/views/month-calendar-view.tsx",
                                lineNumber: 210,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: goToday,
                                className: "px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-soft hover:text-ink transition-colors",
                                children: "Hoy"
                            }, void 0, false, {
                                fileName: "[project]/src/views/month-calendar-view.tsx",
                                lineNumber: 217,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: nextMonth,
                                className: "p-1.5 rounded-md text-soft hover:bg-mint hover:text-ink transition-colors",
                                "aria-label": "Mes siguiente",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcChevronR"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/views/month-calendar-view.tsx",
                                    lineNumber: 228,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/views/month-calendar-view.tsx",
                                lineNumber: 223,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/month-calendar-view.tsx",
                        lineNumber: 209,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/month-calendar-view.tsx",
                lineNumber: 200,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Kpi, {
                        value: monthStats.active,
                        label: "Citas activas"
                    }, void 0, false, {
                        fileName: "[project]/src/views/month-calendar-view.tsx",
                        lineNumber: 235,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Kpi, {
                        value: monthStats.completed,
                        label: "Completadas"
                    }, void 0, false, {
                        fileName: "[project]/src/views/month-calendar-view.tsx",
                        lineNumber: 239,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Kpi, {
                        value: `${monthStats.income} €`,
                        label: "Ingresos del mes",
                        highlight: true
                    }, void 0, false, {
                        fileName: "[project]/src/views/month-calendar-view.tsx",
                        lineNumber: 243,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/month-calendar-view.tsx",
                lineNumber: 234,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border border-line bg-card shadow-sm overflow-hidden anim-rise",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-7 border-b border-line bg-paper/60",
                        children: WEEK_HEADERS.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-1 py-2 text-center text-[10px] sm:text-xs font-bold uppercase tracking-wide text-faint",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hidden sm:inline",
                                        children: d
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/month-calendar-view.tsx",
                                        lineNumber: 259,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "sm:hidden",
                                        children: d.charAt(0)
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/month-calendar-view.tsx",
                                        lineNumber: 260,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, d, true, {
                                fileName: "[project]/src/views/month-calendar-view.tsx",
                                lineNumber: 255,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/views/month-calendar-view.tsx",
                        lineNumber: 253,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-7 grid-rows-6",
                        children: weeks.flat().map(({ key, date, inMonth })=>{
                            const isToday = key === today;
                            const isSelected = key === selectedDay;
                            const isOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDayOpen"])(key, db.settings.openDays, db.settings.closedDates);
                            const dayAppts = byDate.get(key) || [];
                            const isFestive = db.settings.closedDates.includes(key);
                            // Estados para renderizado
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>handleDayClick(key),
                                className: `relative min-h-[78px] sm:min-h-[100px] p-1.5 text-left align-top border-b border-r border-line transition-all ${isSelected ? "bg-mint/60 ring-2 ring-inset ring-moss z-10" : isOpen ? "hover:bg-mint/40 cursor-pointer" : "bg-paper/40 cursor-not-allowed"} ${!inMonth ? "opacity-50" : ""}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `calendar-daynum text-xs sm:text-sm font-bold inline-flex items-center justify-center w-6 h-6 rounded-full num ${isToday ? "bg-moss text-paper" : !isOpen ? "text-faint line-through" : "text-ink"}`,
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmtDayNum"])(key)
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/month-calendar-view.tsx",
                                                lineNumber: 294,
                                                columnNumber: 19
                                            }, this),
                                            dayAppts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `min-w-[16px] h-[16px] px-1 rounded-full text-[9px] font-bold flex items-center justify-center num ${isSelected ? "bg-pine text-paper" : "bg-moss/15 text-moss"}`,
                                                children: dayAppts.length
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/month-calendar-view.tsx",
                                                lineNumber: 307,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/month-calendar-view.tsx",
                                        lineNumber: 293,
                                        columnNumber: 17
                                    }, this),
                                    !isOpen && inMonth && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sm:hidden inline-flex w-[18px] h-[18px] rounded items-center justify-center text-danger/80 bg-dangersoft/70",
                                                title: isFestive ? "Festivo" : "Cerrado",
                                                children: isFestive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcSparkle"], {
                                                    size: 10
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/month-calendar-view.tsx",
                                                    lineNumber: 327,
                                                    columnNumber: 36
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcBan"], {
                                                    size: 10
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/month-calendar-view.tsx",
                                                    lineNumber: 327,
                                                    columnNumber: 62
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/month-calendar-view.tsx",
                                                lineNumber: 323,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "hidden sm:inline text-[9px] font-bold uppercase tracking-wide text-danger/70 bg-dangersoft/60 px-1 py-0.5 rounded",
                                                children: isFestive ? "Festivo" : "Cerrado"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/month-calendar-view.tsx",
                                                lineNumber: 330,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/month-calendar-view.tsx",
                                        lineNumber: 321,
                                        columnNumber: 19
                                    }, this),
                                    isOpen && dayAppts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-1.5 left-1.5 right-1.5 flex items-center gap-1 flex-wrap",
                                        children: [
                                            dayAppts.slice(0, 6).map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-1.5 h-1.5 rounded-full",
                                                    style: {
                                                        background: DOT_COLOR[a.status]
                                                    },
                                                    title: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minutesToLabel"])(a.start)} · ${a.serviceName} · ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATUS_META"][a.status].label}`
                                                }, a.id, false, {
                                                    fileName: "[project]/src/views/month-calendar-view.tsx",
                                                    lineNumber: 340,
                                                    columnNumber: 23
                                                }, this)),
                                            dayAppts.length > 6 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[8px] text-faint num",
                                                children: [
                                                    "+",
                                                    dayAppts.length - 6
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/month-calendar-view.tsx",
                                                lineNumber: 348,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/month-calendar-view.tsx",
                                        lineNumber: 338,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, key, true, {
                                fileName: "[project]/src/views/month-calendar-view.tsx",
                                lineNumber: 280,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/views/month-calendar-view.tsx",
                        lineNumber: 266,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-line bg-paper/60 px-3 py-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px]",
                        children: Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATUS_META"]).map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-1.5 h-1.5 rounded-full",
                                        style: {
                                            background: DOT_COLOR[s]
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/month-calendar-view.tsx",
                                        lineNumber: 363,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-soft font-medium",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATUS_META"][s].label
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/month-calendar-view.tsx",
                                        lineNumber: 367,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, s, true, {
                                fileName: "[project]/src/views/month-calendar-view.tsx",
                                lineNumber: 362,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/views/month-calendar-view.tsx",
                        lineNumber: 360,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/month-calendar-view.tsx",
                lineNumber: 251,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border border-line bg-card shadow-sm overflow-hidden anim-rise",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "px-4 py-3 border-b border-line bg-paper/60 flex items-center justify-between gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] uppercase tracking-[0.18em] font-bold text-faint",
                                        children: "Día seleccionado"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/month-calendar-view.tsx",
                                        lineNumber: 379,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-display font-bold text-base sm:text-lg text-ink capitalize truncate mt-0.5",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["capitalize"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmtLong"])(selectedDay))
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/month-calendar-view.tsx",
                                        lineNumber: 382,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/month-calendar-view.tsx",
                                lineNumber: 378,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "shrink-0 text-[10px] font-bold uppercase tracking-wide bg-mint text-moss rounded-full px-2 py-1 num",
                                children: [
                                    selectedAppts.length,
                                    " ",
                                    selectedAppts.length === 1 ? "cita" : "citas"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/month-calendar-view.tsx",
                                lineNumber: 386,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/month-calendar-view.tsx",
                        lineNumber: 377,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 sm:p-4 space-y-2",
                        children: [
                            selectedAppts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "py-8 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-flex w-12 h-12 rounded-full bg-mint text-moss items-center justify-center mb-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcSparkle"], {
                                            size: 22
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/month-calendar-view.tsx",
                                            lineNumber: 396,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/month-calendar-view.tsx",
                                        lineNumber: 395,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-display font-bold text-base text-ink",
                                        children: "Sin citas este día"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/month-calendar-view.tsx",
                                        lineNumber: 398,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-soft mt-0.5",
                                        children: [
                                            "Añade una cita para el ",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["capitalize"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmtLong"])(selectedDay)),
                                            "."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/month-calendar-view.tsx",
                                        lineNumber: 401,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/month-calendar-view.tsx",
                                lineNumber: 394,
                                columnNumber: 13
                            }, this) : selectedAppts.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DayApptCard, {
                                    appt: a,
                                    clientName: clientById(a.clientId)?.name ?? "Cliente eliminado",
                                    clientPhone: clientById(a.clientId)?.phone ?? "",
                                    onEdit: (appt)=>openAppointment({
                                            appt
                                        })
                                }, a.id, false, {
                                    fileName: "[project]/src/views/month-calendar-view.tsx",
                                    lineNumber: 407,
                                    columnNumber: 15
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-2 space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: openDayAgenda,
                                        className: "w-full inline-flex items-center justify-center gap-2 rounded-lg bg-pine text-paper px-4 py-2.5 text-sm font-bold hover:bg-pine2 active:scale-[0.98] transition-all shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcCalendar"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/month-calendar-view.tsx",
                                                lineNumber: 425,
                                                columnNumber: 15
                                            }, this),
                                            " Abrir agenda del día"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/month-calendar-view.tsx",
                                        lineNumber: 421,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>openAppointment({
                                                date: selectedDay,
                                                start: db.settings.openHour * 60
                                            }),
                                        disabled: !(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDayOpen"])(selectedDay, db.settings.openDays, db.settings.closedDates),
                                        className: "w-full inline-flex items-center justify-center gap-2 rounded-lg border-2 border-dashed border-linedark text-moss px-4 py-2.5 text-sm font-bold hover:bg-mint hover:border-moss/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcPlus"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/month-calendar-view.tsx",
                                                lineNumber: 443,
                                                columnNumber: 15
                                            }, this),
                                            " Nueva cita este día"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/month-calendar-view.tsx",
                                        lineNumber: 427,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/month-calendar-view.tsx",
                                lineNumber: 420,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/month-calendar-view.tsx",
                        lineNumber: 392,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/month-calendar-view.tsx",
                lineNumber: 376,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/month-calendar-view.tsx",
        lineNumber: 198,
        columnNumber: 5
    }, this);
}
_s(MonthCalendarView, "vnqCs8WP0/TXYHXuhrFjrXbOXrg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUI"]
    ];
});
_c2 = MonthCalendarView;
function toKeyOfMonth(year, month) {
    const pad = (n)=>String(n).padStart(2, "0");
    return `${year}-${pad(month + 1)}-01`;
}
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Kpi");
__turbopack_context__.k.register(_c1, "DayApptCard");
__turbopack_context__.k.register(_c2, "MonthCalendarView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/views/settings-view.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SettingsView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$indexeddb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/indexeddb.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/store.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/ui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sqlite$2d$export$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sqlite-export.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$calendar$2d$pdf$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/calendar-pdf.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2d$sync$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/drive-sync.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$drive$2d$sync$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/drive-sync-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$theme$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/theme.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/aura-modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$install$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/install-modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
function Section({ title, icon, children, desc, defaultOpen = false }) {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultOpen);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "rounded-xl border border-line bg-card shadow-sm overflow-hidden anim-rise",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>setOpen((value)=>!value),
                className: "w-full flex items-center justify-between gap-2.5 px-4 py-3 bg-paper/60 cursor-pointer select-none text-left hover:bg-mint/30 transition-colors",
                "aria-expanded": open,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-2.5 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-7 h-7 rounded-lg bg-mint text-moss flex items-center justify-center",
                                children: icon
                            }, void 0, false, {
                                fileName: "[project]/src/views/settings-view.tsx",
                                lineNumber: 71,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-display font-bold text-sm leading-none text-ink",
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/settings-view.tsx",
                                        lineNumber: 75,
                                        columnNumber: 11
                                    }, this),
                                    desc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-faint mt-0.5",
                                        children: desc
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/settings-view.tsx",
                                        lineNumber: 78,
                                        columnNumber: 20
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/settings-view.tsx",
                                lineNumber: 74,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/settings-view.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `text-moss text-lg leading-none transition-transform ${open ? "rotate-180" : ""}`,
                        "aria-hidden": "true",
                        children: "⌄"
                    }, void 0, false, {
                        fileName: "[project]/src/views/settings-view.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/settings-view.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/views/settings-view.tsx",
                lineNumber: 83,
                columnNumber: 16
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/settings-view.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
_s(Section, "pG0khZI24VrkSmCZcWM9qqrVMh4=");
_c = Section;
/** Valida y normaliza una lista de consentimientos leída de un backup JSON. */ function parseConsents(raw) {
    if (!Array.isArray(raw)) return [];
    return raw.filter((c)=>!!c && typeof c === "object" && typeof c.id === "string" && typeof c.clientId === "string" && typeof c.signedAt === "string" && typeof c.pdfBase64 === "string");
}
/* ---------- sección de datos del salón ---------- */ function SalonSection() {
    _s1();
    const { db, setSalon } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUI"])();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "SalonSection.useState": ()=>({
                ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SALON"],
                ...db.salon
            })
    }["SalonSection.useState"]);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const set = (k)=>(e)=>setForm((f)=>({
                    ...f,
                    [k]: e.target.value
                }));
    function save() {
        if (!form.name.trim()) {
            setError("El nombre comercial del salón es obligatorio.");
            return;
        }
        const mail = form.email.trim();
        if (mail && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(mail)) {
            setError("El correo electrónico del salón no parece válido.");
            return;
        }
        setError("");
        setSalon({
            ...form,
            name: form.name.trim(),
            email: mail
        });
        toast("Datos del salón actualizados");
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
        title: "Datos del salón",
        desc: "Nombre y datos fiscales: se muestran en la aplicación y se usan en los documentos legales",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcBarberPole"], {
            size: 15
        }, void 0, false, {
            fileName: "[project]/src/views/settings-view.tsx",
            lineNumber: 140,
            columnNumber: 13
        }, this),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                            label: "Nombre comercial *",
                            hint: "Aparece en la cabecera de la app",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputCls"],
                                value: form.name,
                                onChange: set("name"),
                                placeholder: "Peluquería Marisa",
                                onKeyDown: (e)=>e.key === "Enter" && save()
                            }, void 0, false, {
                                fileName: "[project]/src/views/settings-view.tsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/views/settings-view.tsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                            label: "Nombre fiscal / razón social",
                            hint: "Solo si difiere del comercial",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputCls"],
                                value: form.fiscalName,
                                onChange: set("fiscalName"),
                                placeholder: "p. ej. Marisa López García",
                                onKeyDown: (e)=>e.key === "Enter" && save()
                            }, void 0, false, {
                                fileName: "[project]/src/views/settings-view.tsx",
                                lineNumber: 154,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/views/settings-view.tsx",
                            lineNumber: 153,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/settings-view.tsx",
                    lineNumber: 143,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 sm:grid-cols-4 gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                            label: "NIF/CIF",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputCls"] + " uppercase",
                                value: form.nif,
                                onChange: set("nif"),
                                placeholder: "12345678A",
                                autoCapitalize: "characters",
                                onKeyDown: (e)=>e.key === "Enter" && save()
                            }, void 0, false, {
                                fileName: "[project]/src/views/settings-view.tsx",
                                lineNumber: 165,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/views/settings-view.tsx",
                            lineNumber: 164,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                            label: "Teléfono",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputCls"],
                                value: form.phone,
                                onChange: set("phone"),
                                placeholder: "612 345 678",
                                inputMode: "tel",
                                onKeyDown: (e)=>e.key === "Enter" && save()
                            }, void 0, false, {
                                fileName: "[project]/src/views/settings-view.tsx",
                                lineNumber: 175,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/views/settings-view.tsx",
                            lineNumber: 174,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-span-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                label: "Correo electrónico",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputCls"],
                                    value: form.email,
                                    onChange: set("email"),
                                    placeholder: "peluqueriamarisa@correo.com",
                                    inputMode: "email",
                                    onKeyDown: (e)=>e.key === "Enter" && save()
                                }, void 0, false, {
                                    fileName: "[project]/src/views/settings-view.tsx",
                                    lineNumber: 186,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/views/settings-view.tsx",
                                lineNumber: 185,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/views/settings-view.tsx",
                            lineNumber: 184,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/settings-view.tsx",
                    lineNumber: 163,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                    label: "Calle y número",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputCls"],
                        value: form.street,
                        onChange: set("street"),
                        placeholder: "Calle, número, piso…",
                        onKeyDown: (e)=>e.key === "Enter" && save()
                    }, void 0, false, {
                        fileName: "[project]/src/views/settings-view.tsx",
                        lineNumber: 198,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/views/settings-view.tsx",
                    lineNumber: 197,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-[110px_1fr] gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                            label: "C. Postal",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputCls"],
                                value: form.zip,
                                onChange: set("zip"),
                                placeholder: "28012",
                                inputMode: "numeric",
                                onKeyDown: (e)=>e.key === "Enter" && save()
                            }, void 0, false, {
                                fileName: "[project]/src/views/settings-view.tsx",
                                lineNumber: 208,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/views/settings-view.tsx",
                            lineNumber: 207,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                            label: "Ciudad",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputCls"],
                                value: form.city,
                                onChange: set("city"),
                                placeholder: "Madrid",
                                onKeyDown: (e)=>e.key === "Enter" && save()
                            }, void 0, false, {
                                fileName: "[project]/src/views/settings-view.tsx",
                                lineNumber: 218,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/views/settings-view.tsx",
                            lineNumber: 217,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/settings-view.tsx",
                    lineNumber: 206,
                    columnNumber: 9
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs font-medium text-danger bg-dangersoft border border-danger/20 rounded-lg px-3 py-2 anim-fade",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/src/views/settings-view.tsx",
                    lineNumber: 229,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between gap-3 pt-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[11px] text-faint leading-relaxed",
                            children: "Estos datos alimentan el consentimiento RGPD y los PDF firmados."
                        }, void 0, false, {
                            fileName: "[project]/src/views/settings-view.tsx",
                            lineNumber: 235,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: save,
                            className: "shrink-0 rounded-lg bg-pine text-paper px-4 py-2.5 text-sm font-semibold hover:bg-pine2 active:scale-[0.98] transition-all shadow-sm",
                            children: "Guardar datos"
                        }, void 0, false, {
                            fileName: "[project]/src/views/settings-view.tsx",
                            lineNumber: 238,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/settings-view.tsx",
                    lineNumber: 234,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/views/settings-view.tsx",
            lineNumber: 142,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/views/settings-view.tsx",
        lineNumber: 137,
        columnNumber: 5
    }, this);
}
_s1(SalonSection, "dZlWNgMhD3wfTUnDh1ysYCz9Ja0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUI"]
    ];
});
_c1 = SalonSection;
/* ---------- sección de calendario laboral ---------- */ const MONTH_SHORT_NAMES = [
    "ene",
    "feb",
    "mar",
    "abr",
    "may",
    "jun",
    "jul",
    "ago",
    "sep",
    "oct",
    "nov",
    "dic"
];
function CalendarSection() {
    _s2();
    const { db, setSettings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUI"])();
    const pdfInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [importing, setImporting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [preview, setPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [exporting, setExporting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Años disponibles: año actual + años presentes en los días cerrados
    const years = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CalendarSection.useMemo[years]": ()=>{
            const ys = new Set([
                new Date().getFullYear()
            ]);
            for (const d of db.settings.closedDates){
                const y = +d.slice(0, 4);
                if (y > 1990 && y < 2200) ys.add(y);
            }
            return Array.from(ys).sort({
                "CalendarSection.useMemo[years]": (a, b)=>a - b
            }["CalendarSection.useMemo[years]"]);
        }
    }["CalendarSection.useMemo[years]"], [
        db.settings.closedDates
    ]);
    // Por defecto: el año con más festivos configurados (o el actual)
    const [exportYear, setExportYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "CalendarSection.useState": ()=>{
            const counts = new Map();
            for (const d of db.settings.closedDates){
                const y = +d.slice(0, 4);
                counts.set(y, (counts.get(y) ?? 0) + 1);
            }
            let best = new Date().getFullYear();
            let bestN = 0;
            counts.forEach({
                "CalendarSection.useState": (n, y)=>{
                    if (n > bestN) {
                        best = y;
                        bestN = n;
                    }
                }
            }["CalendarSection.useState"]);
            return best;
        }
    }["CalendarSection.useState"]);
    async function onImportPdf(e) {
        const f = e.target.files?.[0];
        if (!f) return;
        setImporting(true);
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$calendar$2d$pdf$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["importHolidaysFromPdf"])(f);
            setPreview(res);
        } catch (err) {
            toast(err instanceof Error ? err.message : "No se pudo leer el calendario.", "err");
        } finally{
            setImporting(false);
            e.target.value = "";
        }
    }
    function applyImport(mode) {
        if (!preview) return;
        const year = preview.year;
        let next;
        if (mode === "add") {
            next = Array.from(new Set([
                ...db.settings.closedDates,
                ...preview.holidays
            ])).sort();
        } else {
            next = Array.from(new Set([
                ...db.settings.closedDates.filter((d)=>+d.slice(0, 4) !== year),
                ...preview.holidays
            ])).sort();
        }
        const added = next.filter((d)=>!db.settings.closedDates.includes(d)).length;
        setSettings({
            closedDates: next
        });
        setPreview(null);
        toast(mode === "add" ? `${added} ${added === 1 ? "festivo añadido" : "festivos añadidos"} al ${year}` : `Festivos del ${year} actualizados (${preview.holidays.length} días)`);
    }
    async function doExport() {
        setExporting(true);
        try {
            const bytes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$calendar$2d$pdf$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exportCalendarPdf"])({
                year: exportYear,
                holidays: db.settings.closedDates,
                salon: db.salon
            });
            const blob = new Blob([
                bytes
            ], {
                type: "application/pdf"
            });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `calendario-laboral-${exportYear}.pdf`;
            a.click();
            setTimeout(()=>URL.revokeObjectURL(url), 4000);
            toast(`Calendario ${exportYear} exportado a PDF`);
        } catch (err) {
            toast(err instanceof Error ? err.message : "Error al exportar el calendario.", "err");
        } finally{
            setExporting(false);
        }
    }
    const holidayCount = db.settings.closedDates.filter((d)=>+d.slice(0, 4) === exportYear).length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                title: "Calendario laboral",
                desc: "Importa los festivos de un calendario oficial en PDF y exporta el tuyo",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcCalendar"], {
                    size: 15
                }, void 0, false, {
                    fileName: "[project]/src/views/settings-view.tsx",
                    lineNumber: 358,
                    columnNumber: 15
                }, this),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-lg border border-line bg-paper/60 p-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start justify-between gap-3 flex-wrap",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-bold text-ink",
                                                    children: "Importar festivos desde PDF"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/settings-view.tsx",
                                                    lineNumber: 365,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-soft mt-0.5 leading-relaxed",
                                                    children: "Sube un calendario laboral (tipo calendarios.ideal.es) y se volcarán automáticamente los días marcados en color a tus días cerrados."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/settings-view.tsx",
                                                    lineNumber: 366,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/settings-view.tsx",
                                            lineNumber: 364,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>pdfInputRef.current?.click(),
                                            disabled: importing,
                                            className: "shrink-0 inline-flex items-center gap-1.5 rounded-lg bg-pine text-paper px-3.5 py-2 text-xs font-bold hover:bg-pine2 active:scale-[0.98] transition-all shadow-sm disabled:opacity-60",
                                            children: importing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-3.5 h-3.5 border-2 border-paper/40 border-t-paper rounded-full animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/settings-view.tsx",
                                                        lineNumber: 378,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Leyendo…"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/settings-view.tsx",
                                                lineNumber: 377,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcUpload"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/settings-view.tsx",
                                                        lineNumber: 383,
                                                        columnNumber: 21
                                                    }, this),
                                                    " Importar PDF"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/settings-view.tsx",
                                                lineNumber: 382,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/settings-view.tsx",
                                            lineNumber: 371,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/settings-view.tsx",
                                    lineNumber: 363,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    ref: pdfInputRef,
                                    type: "file",
                                    accept: "application/pdf,.pdf",
                                    className: "hidden",
                                    onChange: onImportPdf
                                }, void 0, false, {
                                    fileName: "[project]/src/views/settings-view.tsx",
                                    lineNumber: 388,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/settings-view.tsx",
                            lineNumber: 362,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-lg border border-line bg-paper/60 p-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between gap-3 flex-wrap",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-bold text-ink",
                                                children: "Exportar calendario a PDF"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/settings-view.tsx",
                                                lineNumber: 401,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-soft mt-0.5 leading-relaxed",
                                                children: [
                                                    "Genera el calendario anual del salón (A4, 12 meses) con los festivos marcados en color.",
                                                    holidayCount > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            " El ",
                                                            exportYear,
                                                            " tiene ",
                                                            holidayCount,
                                                            " ",
                                                            holidayCount === 1 ? "día marcado" : "días marcados",
                                                            "."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/settings-view.tsx",
                                                        lineNumber: 406,
                                                        columnNumber: 21
                                                    }, this) : null
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/settings-view.tsx",
                                                lineNumber: 402,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/settings-view.tsx",
                                        lineNumber: 400,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "shrink-0 flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                className: "rounded-lg border border-linedark bg-white/70 px-2.5 py-2 text-xs font-bold text-ink outline-none focus:border-moss focus:ring-2 focus:ring-moss/25 num",
                                                value: exportYear,
                                                onChange: (e)=>setExportYear(Number(e.target.value)),
                                                "aria-label": "Año a exportar",
                                                children: years.map((yy)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: yy,
                                                        children: yy
                                                    }, yy, false, {
                                                        fileName: "[project]/src/views/settings-view.tsx",
                                                        lineNumber: 418,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/settings-view.tsx",
                                                lineNumber: 411,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: doExport,
                                                disabled: exporting,
                                                className: "inline-flex items-center gap-1.5 rounded-lg border-2 border-dashed border-linedark text-moss px-3.5 py-2 text-xs font-bold hover:bg-mint hover:border-moss/50 transition-all disabled:opacity-60",
                                                children: exporting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "w-3.5 h-3.5 border-2 border-moss/40 border-t-moss rounded-full animate-spin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/settings-view.tsx",
                                                            lineNumber: 430,
                                                            columnNumber: 23
                                                        }, this),
                                                        "Generando…"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/settings-view.tsx",
                                                    lineNumber: 429,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcDownload"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/settings-view.tsx",
                                                            lineNumber: 435,
                                                            columnNumber: 23
                                                        }, this),
                                                        " Exportar PDF"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/settings-view.tsx",
                                                    lineNumber: 434,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/settings-view.tsx",
                                                lineNumber: 423,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/settings-view.tsx",
                                        lineNumber: 410,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/settings-view.tsx",
                                lineNumber: 399,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/views/settings-view.tsx",
                            lineNumber: 398,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/settings-view.tsx",
                    lineNumber: 360,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/settings-view.tsx",
                lineNumber: 355,
                columnNumber: 7
            }, this),
            preview && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: `Festivos detectados · ${preview.year}`,
                subtitle: `${preview.holidays.length} días marcados en color en el calendario`,
                onClose: ()=>setPreview(null),
                z: 60,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-1.5 max-h-56 overflow-y-auto pr-1",
                            children: preview.holidays.map((d)=>{
                                const [, mm, dd] = d.split("-");
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold num ${db.settings.closedDates.includes(d) ? "bg-mint text-moss" : "bg-dangersoft text-danger"}`,
                                    children: [
                                        +dd,
                                        " ",
                                        MONTH_SHORT_NAMES[+mm - 1],
                                        db.settings.closedDates.includes(d) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcCheck"], {
                                            size: 11,
                                            className: "opacity-70"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/settings-view.tsx",
                                            lineNumber: 468,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, d, true, {
                                    fileName: "[project]/src/views/settings-view.tsx",
                                    lineNumber: 458,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/views/settings-view.tsx",
                            lineNumber: 454,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[11px] text-faint",
                            children: "En verde: días que ya tenías configurados. En rojo: festivos nuevos que se añadirán."
                        }, void 0, false, {
                            fileName: "[project]/src/views/settings-view.tsx",
                            lineNumber: 474,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row gap-2 pt-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setPreview(null),
                                    className: "flex-1 rounded-lg border border-linedark px-4 py-2.5 text-sm font-semibold text-soft hover:bg-mint/60 hover:text-ink transition-colors",
                                    children: "Cancelar"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/settings-view.tsx",
                                    lineNumber: 478,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>applyImport("replace"),
                                    className: "flex-1 rounded-lg border border-linedark px-4 py-2.5 text-sm font-semibold text-soft hover:bg-mint/60 hover:text-ink transition-colors",
                                    children: [
                                        "Reemplazar ",
                                        preview.year
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/settings-view.tsx",
                                    lineNumber: 484,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>applyImport("add"),
                                    className: "flex-1 rounded-lg bg-pine text-paper px-4 py-2.5 text-sm font-semibold hover:bg-pine2 active:scale-[0.98] transition-all shadow-sm",
                                    children: "Añadir festivos"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/settings-view.tsx",
                                    lineNumber: 490,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/settings-view.tsx",
                            lineNumber: 477,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/settings-view.tsx",
                    lineNumber: 453,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/settings-view.tsx",
                lineNumber: 447,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/settings-view.tsx",
        lineNumber: 354,
        columnNumber: 5
    }, this);
}
_s2(CalendarSection, "KakiZ4tC0fu5TsIOFreZlnPlJP4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUI"]
    ];
});
_c2 = CalendarSection;
/* ---------- modal de servicio ---------- */ function ServiceModal({ preset, onClose }) {
    _s3();
    const { addService, updateService } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUI"])();
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(preset?.name ?? "");
    const [duration, setDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(preset?.duration ?? 45);
    const [price, setPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(String(preset?.price ?? 20));
    const [color, setColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(preset?.color ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SERVICE_COLORS"][0]);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    function save() {
        if (!name.trim()) {
            setError("Ponle un nombre al servicio.");
            return;
        }
        const p = Math.max(0, Number(price) || 0);
        const data = {
            name: name.trim(),
            duration,
            price: p,
            color
        };
        if (preset) {
            updateService(preset.id, data);
            toast("Servicio actualizado");
        } else {
            addService(data);
            toast("Servicio añadido");
        }
        onClose();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: preset ? "Editar servicio" : "Nuevo servicio",
        subtitle: "Los precios y duraciones se usan al crear citas",
        onClose: onClose,
        z: 60,
        maxW: "max-w-md",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                    label: "Nombre *",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputCls"],
                        value: name,
                        autoFocus: true,
                        onChange: (e)=>setName(e.target.value),
                        placeholder: "p. ej. Corte y peinado",
                        onKeyDown: (e)=>e.key === "Enter" && save()
                    }, void 0, false, {
                        fileName: "[project]/src/views/settings-view.tsx",
                        lineNumber: 554,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/views/settings-view.tsx",
                    lineNumber: 553,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                            label: "Duración",
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
                                        fileName: "[project]/src/views/settings-view.tsx",
                                        lineNumber: 566,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex-1 text-center text-sm font-semibold num",
                                        children: [
                                            duration,
                                            " min"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/settings-view.tsx",
                                        lineNumber: 574,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setDuration((d)=>Math.min(360, d + 15)),
                                        className: "px-3 py-2 text-soft hover:bg-mint hover:text-ink transition-colors font-bold",
                                        "aria-label": "Sumar 15 minutos",
                                        children: "+"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/settings-view.tsx",
                                        lineNumber: 577,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/settings-view.tsx",
                                lineNumber: 565,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/views/settings-view.tsx",
                            lineNumber: 564,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                            label: "Precio (€)",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputCls"],
                                type: "number",
                                min: 0,
                                step: 1,
                                value: price,
                                onChange: (e)=>setPrice(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/src/views/settings-view.tsx",
                                lineNumber: 588,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/views/settings-view.tsx",
                            lineNumber: 587,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/settings-view.tsx",
                    lineNumber: 563,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                    label: "Color en la agenda",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SERVICE_COLORS"].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setColor(c),
                                className: `w-8 h-8 rounded-full transition-all flex items-center justify-center ${color === c ? "ring-2 ring-offset-2 ring-ink scale-110" : "hover:scale-110"}`,
                                style: {
                                    background: c
                                },
                                "aria-label": `Color ${c}`,
                                children: color === c && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcCheck"], {
                                    size: 14,
                                    className: "text-paper"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/settings-view.tsx",
                                    lineNumber: 613,
                                    columnNumber: 33
                                }, this)
                            }, c, false, {
                                fileName: "[project]/src/views/settings-view.tsx",
                                lineNumber: 601,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/views/settings-view.tsx",
                        lineNumber: 599,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/views/settings-view.tsx",
                    lineNumber: 598,
                    columnNumber: 9
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs font-medium text-danger bg-dangersoft border border-danger/20 rounded-lg px-3 py-2 anim-fade",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/src/views/settings-view.tsx",
                    lineNumber: 619,
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
                            fileName: "[project]/src/views/settings-view.tsx",
                            lineNumber: 624,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: save,
                            className: "flex-1 rounded-lg bg-pine text-paper px-4 py-2.5 text-sm font-semibold hover:bg-pine2 active:scale-[0.98] transition-all shadow-sm",
                            children: preset ? "Guardar cambios" : "Añadir servicio"
                        }, void 0, false, {
                            fileName: "[project]/src/views/settings-view.tsx",
                            lineNumber: 630,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/settings-view.tsx",
                    lineNumber: 623,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/views/settings-view.tsx",
            lineNumber: 552,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/views/settings-view.tsx",
        lineNumber: 545,
        columnNumber: 5
    }, this);
}
_s3(ServiceModal, "j+Sw4zR+XH+6FzecXL7Sg41WDyY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUI"]
    ];
});
_c3 = ServiceModal;
/* ---------- tarjetas de tema ---------- */ function ThemeCard({ id, label, description, swatches, active, onSelect }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: onSelect,
        className: `relative rounded-xl border p-3 text-left transition-all hover:-translate-y-px hover:shadow-md ${active ? "border-moss bg-mint/50 ring-1 ring-moss/40" : "border-line bg-paper/60 hover:border-linedark"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-1 mb-2.5 h-14 rounded-lg overflow-hidden border border-line",
                children: swatches.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex items-end justify-center pb-1",
                        style: {
                            background: s.color
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[8px] font-bold uppercase tracking-wide",
                            style: {
                                color: s.name === "paper" || s.name === "gold" ? "rgba(0,0,0,0.45)" : "rgba(255,255,255,0.85)"
                            },
                            children: s.name
                        }, void 0, false, {
                            fileName: "[project]/src/views/settings-view.tsx",
                            lineNumber: 676,
                            columnNumber: 13
                        }, this)
                    }, i, false, {
                        fileName: "[project]/src/views/settings-view.tsx",
                        lineNumber: 671,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/views/settings-view.tsx",
                lineNumber: 669,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-display font-bold text-sm text-ink flex items-center gap-1.5",
                children: [
                    label,
                    active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcCheck"], {
                        size: 14,
                        className: "text-moss"
                    }, void 0, false, {
                        fileName: "[project]/src/views/settings-view.tsx",
                        lineNumber: 692,
                        columnNumber: 20
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/settings-view.tsx",
                lineNumber: 690,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[11px] text-soft mt-0.5",
                children: description
            }, void 0, false, {
                fileName: "[project]/src/views/settings-view.tsx",
                lineNumber: 694,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/settings-view.tsx",
        lineNumber: 659,
        columnNumber: 5
    }, this);
}
_c4 = ThemeCard;
function SettingsView() {
    _s4();
    const { db, setSettings, deleteService, replaceAll, wipeAll } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])();
    const { toast, confirm, install, installAvailable, standalone } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUI"])();
    const [installModalOpen, setInstallModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [serviceModal, setServiceModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        open: false,
        preset: null
    });
    const fileRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sqliteRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const s = db.settings;
    // Tema
    const { theme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$theme$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    // Drive sync
    const [clientIdInput, setClientIdInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "SettingsView.useState": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2d$sync$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStoredClientId"])()
    }["SettingsView.useState"]);
    const [clientIdSaved, setClientIdSaved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // El sincronizador es global: también detecta cambios hechos desde Agenda
    // y Clientes, no solo los realizados desde esta pantalla.
    const sync = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$drive$2d$sync$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDriveSyncContext"])();
    function changeOpen(v) {
        if (v >= s.closeHour) {
            toast("La apertura debe ser anterior al cierre", "err");
            return;
        }
        setSettings({
            openHour: v
        });
    }
    function changeClose(v) {
        if (v <= s.openHour) {
            toast("El cierre debe ser posterior a la apertura", "err");
            return;
        }
        setSettings({
            closeHour: v
        });
    }
    function exportData() {
        const blob = new Blob([
            JSON.stringify(db, null, 2)
        ], {
            type: "application/json"
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `peluqueria-marisa-datos-${new Date().toISOString().slice(0, 10)}.json`;
        a.click();
        URL.revokeObjectURL(url);
        toast("Copia de seguridad JSON descargada");
    }
    async function exportSQLite() {
        try {
            const blob = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sqlite$2d$export$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exportToSQLiteBlob"])(db);
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `peluqueria-marisa-${new Date().toISOString().slice(0, 10)}.sqlite`;
            a.click();
            URL.revokeObjectURL(url);
            toast("Base de datos SQLite descargada");
        } catch (e) {
            toast("Error al exportar SQLite: " + e.message, "err");
        }
    }
    function onImport(e) {
        const f = e.target.files?.[0];
        if (!f) return;
        const r = new FileReader();
        r.onload = ()=>{
            try {
                const parsed = JSON.parse(String(r.result));
                if (!parsed || !Array.isArray(parsed.clients) || !Array.isArray(parsed.appointments)) throw new Error("formato");
                replaceAll({
                    version: 1,
                    clients: parsed.clients,
                    appointments: parsed.appointments,
                    services: Array.isArray(parsed.services) && parsed.services.length ? parsed.services : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SERVICES"].map((x)=>({
                            ...x
                        })),
                    consents: parseConsents(parsed.consents),
                    salon: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeSalon"])(parsed.salon),
                    settings: {
                        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SETTINGS"],
                        ...parsed.settings || {}
                    }
                });
                toast(`Datos importados: ${parsed.clients.length} clientes y ${parsed.appointments.length} citas`);
            } catch  {
                toast("El archivo no tiene el formato esperado", "err");
            }
        };
        r.readAsText(f);
        e.target.value = "";
    }
    async function onImportSQLite(e) {
        const f = e.target.files?.[0];
        if (!f) return;
        try {
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sqlite$2d$export$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["importFromSQLiteBlob"])(f);
            replaceAll({
                version: 1,
                clients: data.clients,
                appointments: data.appointments,
                services: data.services.length > 0 ? data.services : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SERVICES"].map((x)=>({
                        ...x
                    })),
                consents: data.consents,
                // El salon viaja en el SQLite; si es un archivo antiguo se conserva el local
                salon: data.salon ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeSalon"])(db.salon),
                settings: {
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SETTINGS"]
                }
            });
            toast(`SQLite importado: ${data.clients.length} clientes, ${data.appointments.length} citas${data.consents.length ? ` y ${data.consents.length} consentimientos` : ""}`);
        } catch (err) {
            toast("Error al importar SQLite: " + err.message, "err");
        } finally{
            e.target.value = "";
        }
    }
    async function eraseAll() {
        const ok = await confirm({
            title: "Borrar todos los datos",
            message: `Se eliminarán ${db.clients.length} clientes, ${db.appointments.length} citas y ${db.consents.length} consentimientos firmados de este dispositivo. Te recomendamos exportar una copia antes. ¿Continuar?`,
            confirmLabel: "Borrar todo",
            danger: true
        });
        if (!ok) return;
        wipeAll();
        toast("Datos borrados. Base de datos vacía.", "info");
    }
    async function removeService(srv) {
        const ok = await confirm({
            title: "Eliminar servicio",
            message: `¿Eliminar «${srv.name}»? Las citas ya creadas conservarán su nombre y precio.`,
            confirmLabel: "Eliminar",
            danger: true
        });
        if (!ok) return;
        deleteService(srv.id);
        toast("Servicio eliminado", "info");
    }
    function saveClientId() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2d$sync$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setStoredClientId"])(clientIdInput.trim());
        setClientIdSaved(true);
        toast("Client ID guardado. Ya puedes iniciar sesión en Drive.");
    }
    async function handleSignIn() {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$drive$2d$sync$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStoredClientId"])()) {
            toast("Guarda primero el Client ID", "err");
            return;
        }
        const ok = await sync.signIn();
        if (!ok) toast("No se pudo iniciar sesión en Drive", "err");
        else toast("Sesión iniciada en Drive");
    }
    async function handlePush() {
        if (!sync.state.isAuthenticated) {
            const ok = await sync.signIn();
            if (!ok) return;
        }
        await sync.push();
        toast(sync.state.phase === "error" ? "Error al subir: " + sync.state.message : "Copia subida a Drive");
    }
    async function handlePull() {
        if (!sync.state.isAuthenticated) {
            const ok = await sync.signIn();
            if (!ok) return;
        }
        await sync.pull();
        toast(sync.state.phase === "error" ? "Error al descargar: " + sync.state.message : "Copia descargada de Drive");
    }
    async function handleReconcile() {
        if (!sync.state.isAuthenticated) {
            const ok = await sync.signIn();
            if (!ok) return;
        }
        await sync.reconcile();
        if (sync.state.phase === "error") {
            toast("Sync: " + sync.state.message, "err");
        } else {
            toast(sync.state.message || "Sincronización completada");
        }
    }
    // Días de apertura
    function toggleOpenDay(day) {
        const current = new Set(s.openDays);
        if (current.has(day)) current.delete(day);
        else current.add(day);
        const sorted = Array.from(current).sort((a, b)=>a - b);
        if (sorted.length === 0) {
            toast("Debe haber al menos un día abierto", "err");
            return;
        }
        setSettings({
            openDays: sorted
        });
    }
    // Festivos
    const [newHoliday, setNewHoliday] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    function addHoliday() {
        const d = newHoliday.trim();
        if (!d) return;
        if (s.closedDates.includes(d)) {
            toast("Ese día ya está marcado como cerrado", "err");
            return;
        }
        setSettings({
            closedDates: [
                ...s.closedDates,
                d
            ].sort()
        });
        setNewHoliday("");
        toast("Día cerrado añadido");
    }
    function removeHoliday(d) {
        setSettings({
            closedDates: s.closedDates.filter((x)=>x !== d)
        });
    }
    function clearAllHolidays() {
        if (s.closedDates.length === 0) return;
        setSettings({
            closedDates: []
        });
        toast("Lista de festivos vaciada", "info");
    }
    const hours = (from, to)=>Array.from({
            length: to - from + 1
        }, (_, i)=>from + i);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-3xl mx-auto space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "font-display font-extrabold text-2xl sm:text-[28px] leading-tight text-ink",
                        children: "Ajustes"
                    }, void 0, false, {
                        fileName: "[project]/src/views/settings-view.tsx",
                        lineNumber: 957,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-soft mt-0.5",
                        children: "Apariencia, datos del salón, horario, servicios y sincronización"
                    }, void 0, false, {
                        fileName: "[project]/src/views/settings-view.tsx",
                        lineNumber: 960,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/settings-view.tsx",
                lineNumber: 956,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                title: "Apariencia",
                desc: "Elige la paleta de colores del salón. Se guarda en este dispositivo.",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcMonitor"], {
                    size: 15
                }, void 0, false, {
                    fileName: "[project]/src/views/settings-view.tsx",
                    lineNumber: 969,
                    columnNumber: 15
                }, this),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-3 gap-3",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$theme$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEMES"].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeCard, {
                            id: t.id,
                            label: t.label,
                            description: t.description,
                            swatches: t.swatches.map((s)=>({
                                    name: s.name,
                                    color: s.color
                                })),
                            active: theme === t.id,
                            onSelect: ()=>{
                                setTheme(t.id);
                                toast(`Tema cambiado a «${t.label}»`);
                            }
                        }, t.id, false, {
                            fileName: "[project]/src/views/settings-view.tsx",
                            lineNumber: 973,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/views/settings-view.tsx",
                    lineNumber: 971,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/settings-view.tsx",
                lineNumber: 966,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SalonSection, {}, void 0, false, {
                fileName: "[project]/src/views/settings-view.tsx",
                lineNumber: 993,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                title: "Horario del salón",
                desc: `La agenda muestra de ${s.openHour}:00 a ${s.closeHour}:00 en huecos de ${s.step} min`,
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcMonitor"], {
                    size: 15
                }, void 0, false, {
                    fileName: "[project]/src/views/settings-view.tsx",
                    lineNumber: 999,
                    columnNumber: 15
                }, this),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-3 gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                label: "Apertura",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputCls"],
                                    value: s.openHour,
                                    onChange: (e)=>changeOpen(Number(e.target.value)),
                                    children: hours(7, 13).map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: h,
                                            children: [
                                                h,
                                                ":00"
                                            ]
                                        }, h, true, {
                                            fileName: "[project]/src/views/settings-view.tsx",
                                            lineNumber: 1009,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/views/settings-view.tsx",
                                    lineNumber: 1003,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/views/settings-view.tsx",
                                lineNumber: 1002,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                label: "Cierre",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputCls"],
                                    value: s.closeHour,
                                    onChange: (e)=>changeClose(Number(e.target.value)),
                                    children: hours(15, 22).map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: h,
                                            children: [
                                                h,
                                                ":00"
                                            ]
                                        }, h, true, {
                                            fileName: "[project]/src/views/settings-view.tsx",
                                            lineNumber: 1022,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/views/settings-view.tsx",
                                    lineNumber: 1016,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/views/settings-view.tsx",
                                lineNumber: 1015,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                label: "Hueco de cita",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputCls"],
                                    value: s.step,
                                    onChange: (e)=>setSettings({
                                            step: Number(e.target.value)
                                        }),
                                    children: [
                                        15,
                                        30,
                                        60
                                    ].map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: m,
                                            children: [
                                                m,
                                                " min"
                                            ]
                                        }, m, true, {
                                            fileName: "[project]/src/views/settings-view.tsx",
                                            lineNumber: 1035,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/views/settings-view.tsx",
                                    lineNumber: 1029,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/views/settings-view.tsx",
                                lineNumber: 1028,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/settings-view.tsx",
                        lineNumber: 1001,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] font-semibold uppercase tracking-[0.08em] text-soft mb-2",
                                children: "Días de apertura"
                            }, void 0, false, {
                                fileName: "[project]/src/views/settings-view.tsx",
                                lineNumber: 1045,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-faint mb-2.5",
                                children: "Marca los días de la semana en los que el salón está abierto. Los días no marcados no aceptan citas."
                            }, void 0, false, {
                                fileName: "[project]/src/views/settings-view.tsx",
                                lineNumber: 1048,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-7 gap-1.5",
                                children: [
                                    1,
                                    2,
                                    3,
                                    4,
                                    5,
                                    6,
                                    0
                                ].map((day)=>{
                                    const active = s.openDays.includes(day);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>toggleOpenDay(day),
                                        className: `rounded-lg px-2 py-2.5 text-xs font-bold border transition-all active:scale-[0.97] ${active ? "bg-pine text-paper border-pine shadow-sm" : "bg-paper/60 text-faint border-linedark hover:border-linedark hover:text-soft"}`,
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEEKDAY_LABELS"][day]
                                    }, day, false, {
                                        fileName: "[project]/src/views/settings-view.tsx",
                                        lineNumber: 1056,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/views/settings-view.tsx",
                                lineNumber: 1052,
                                columnNumber: 11
                            }, this),
                            s.openDays.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-xs text-danger flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcAlert"], {
                                        size: 12
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/settings-view.tsx",
                                        lineNumber: 1073,
                                        columnNumber: 15
                                    }, this),
                                    "Debe haber al menos un día abierto."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/settings-view.tsx",
                                lineNumber: 1072,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/settings-view.tsx",
                        lineNumber: 1044,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-5 pt-4 border-t border-line",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] font-semibold uppercase tracking-[0.08em] text-soft",
                                                children: "Días cerrados"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/settings-view.tsx",
                                                lineNumber: 1083,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-faint mt-0.5",
                                                children: "Festivos, vacaciones o cualquier día suelto en que el salón permanezca cerrado."
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/settings-view.tsx",
                                                lineNumber: 1086,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/settings-view.tsx",
                                        lineNumber: 1082,
                                        columnNumber: 13
                                    }, this),
                                    s.closedDates.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: clearAllHolidays,
                                        className: "text-[11px] font-bold text-danger hover:bg-dangersoft rounded-full px-2 py-1 transition-colors shrink-0",
                                        children: "Vaciar lista"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/settings-view.tsx",
                                        lineNumber: 1092,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/settings-view.tsx",
                                lineNumber: 1081,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "date",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputCls"],
                                        value: newHoliday,
                                        onChange: (e)=>setNewHoliday(e.target.value),
                                        onKeyDown: (e)=>e.key === "Enter" && addHoliday()
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/settings-view.tsx",
                                        lineNumber: 1102,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: addHoliday,
                                        disabled: !newHoliday,
                                        className: "shrink-0 rounded-lg bg-pine text-paper px-3 text-xs font-bold disabled:opacity-50 hover:bg-pine2 active:scale-[0.98] transition-all shadow-sm",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcPlus"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/settings-view.tsx",
                                            lineNumber: 1114,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/settings-view.tsx",
                                        lineNumber: 1109,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/settings-view.tsx",
                                lineNumber: 1101,
                                columnNumber: 11
                            }, this),
                            s.closedDates.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-lg border border-dashed border-linedark py-6 text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-faint",
                                    children: "No hay días cerrados configurados"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/settings-view.tsx",
                                    lineNumber: 1120,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/views/settings-view.tsx",
                                lineNumber: 1119,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1 max-h-64 overflow-y-auto pr-1",
                                children: s.closedDates.map((d)=>{
                                    const date = new Date(d);
                                    const label = date.toLocaleDateString("es-ES", {
                                        weekday: "long",
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric"
                                    });
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 rounded-lg border border-line bg-paper/60 px-3 py-2 hover:border-linedark transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-7 h-7 rounded-lg bg-dangersoft text-danger flex items-center justify-center shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcBan"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/settings-view.tsx",
                                                    lineNumber: 1140,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/settings-view.tsx",
                                                lineNumber: 1139,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex-1 min-w-0 text-sm font-medium text-ink capitalize truncate",
                                                children: label
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/settings-view.tsx",
                                                lineNumber: 1142,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>removeHoliday(d),
                                                className: "p-1.5 rounded-lg text-soft hover:text-danger hover:bg-dangersoft transition-colors shrink-0",
                                                title: "Eliminar",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcTrash"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/settings-view.tsx",
                                                    lineNumber: 1150,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/settings-view.tsx",
                                                lineNumber: 1145,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, d, true, {
                                        fileName: "[project]/src/views/settings-view.tsx",
                                        lineNumber: 1135,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/views/settings-view.tsx",
                                lineNumber: 1125,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/settings-view.tsx",
                        lineNumber: 1080,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/settings-view.tsx",
                lineNumber: 996,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                title: "Servicios y precios",
                desc: "Cada servicio aporta duración, precio y color a la cita",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcScissors"], {
                    size: 15
                }, void 0, false, {
                    fileName: "[project]/src/views/settings-view.tsx",
                    lineNumber: 1164,
                    columnNumber: 15
                }, this),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1.5",
                        children: db.services.map((srv)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 rounded-lg border border-line px-3 py-2 hover:border-linedark transition-colors group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-3 h-3 rounded-full shrink-0",
                                        style: {
                                            background: srv.color
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/settings-view.tsx",
                                        lineNumber: 1172,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-semibold flex-1 truncate",
                                        children: srv.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/settings-view.tsx",
                                        lineNumber: 1176,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-soft num hidden sm:inline",
                                        children: [
                                            srv.duration,
                                            " min"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/settings-view.tsx",
                                        lineNumber: 1179,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-display font-bold text-pine num w-14 text-right",
                                        children: [
                                            srv.price,
                                            " €"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/settings-view.tsx",
                                        lineNumber: 1182,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setServiceModal({
                                                open: true,
                                                preset: srv
                                            }),
                                        className: "p-1.5 rounded-lg text-soft hover:text-ink hover:bg-mint transition-colors",
                                        title: "Editar servicio",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcPencil"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/settings-view.tsx",
                                            lineNumber: 1192,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/settings-view.tsx",
                                        lineNumber: 1185,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>removeService(srv),
                                        className: "p-1.5 rounded-lg text-soft hover:text-danger hover:bg-dangersoft transition-colors",
                                        title: "Eliminar servicio",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcTrash"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/settings-view.tsx",
                                            lineNumber: 1199,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/settings-view.tsx",
                                        lineNumber: 1194,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, srv.id, true, {
                                fileName: "[project]/src/views/settings-view.tsx",
                                lineNumber: 1168,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/views/settings-view.tsx",
                        lineNumber: 1166,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setServiceModal({
                                open: true,
                                preset: null
                            }),
                        className: "mt-3 inline-flex items-center gap-1.5 rounded-lg border border-dashed border-linedark px-3.5 py-2 text-xs font-bold text-moss hover:bg-mint hover:border-moss/50 transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcPlus"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/src/views/settings-view.tsx",
                                lineNumber: 1208,
                                columnNumber: 11
                            }, this),
                            " Añadir servicio"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/settings-view.tsx",
                        lineNumber: 1204,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/settings-view.tsx",
                lineNumber: 1161,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CalendarSection, {}, void 0, false, {
                fileName: "[project]/src/views/settings-view.tsx",
                lineNumber: 1213,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                title: "Sincronización con Google Drive",
                desc: "Sube y baja tu base de datos entre dispositivos con el alcance drive.file",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcWifi"], {
                    size: 15
                }, void 0, false, {
                    fileName: "[project]/src/views/settings-view.tsx",
                    lineNumber: 1219,
                    columnNumber: 15
                }, this),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-soft leading-relaxed",
                            children: [
                                "Tu archivo ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                    className: "bg-mint rounded px-1 py-px text-[11px]",
                                    children: "peluqueria-marisa-db.sqlite"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/settings-view.tsx",
                                    lineNumber: 1223,
                                    columnNumber: 24
                                }, this),
                                " ",
                                "se guarda en tu Google Drive (ámbito",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    className: "text-ink",
                                    children: "drive.file"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/settings-view.tsx",
                                    lineNumber: 1225,
                                    columnNumber: 13
                                }, this),
                                ": solo la app ve los archivos que ella misma crea). La resolución de conflictos usa la fecha de modificación: gana el más nuevo."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/settings-view.tsx",
                            lineNumber: 1222,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                            label: "Client ID de OAuth",
                            hint: "Créalo gratis en Google Cloud Console: API & Services → Credentials → OAuth client (Web). Origen autorizado: este dominio.",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$aura$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputCls"],
                                        value: clientIdInput,
                                        onChange: (e)=>{
                                            setClientIdInput(e.target.value);
                                            setClientIdSaved(false);
                                        },
                                        placeholder: "xxxxx.apps.googleusercontent.com"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/settings-view.tsx",
                                        lineNumber: 1236,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: saveClientId,
                                        disabled: !clientIdInput.trim() || clientIdSaved,
                                        className: "shrink-0 rounded-lg bg-pine text-paper px-3 text-xs font-bold disabled:opacity-50 hover:bg-pine2 active:scale-[0.98] transition-all",
                                        children: "Guardar"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/settings-view.tsx",
                                        lineNumber: 1245,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/settings-view.tsx",
                                lineNumber: 1235,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/views/settings-view.tsx",
                            lineNumber: 1231,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-lg border border-line bg-paper/70 p-3 flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `w-2.5 h-2.5 rounded-full ${sync.state.isAuthenticated ? "bg-moss pulse-gold" : "bg-faint"}`
                                }, void 0, false, {
                                    fileName: "[project]/src/views/settings-view.tsx",
                                    lineNumber: 1257,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-semibold text-ink",
                                            children: sync.state.isAuthenticated ? "Sesión iniciada en Drive" : sync.state.isConfigured ? "Sin sesión — pulsa «Iniciar sesión»" : "Configura el Client ID antes de iniciar sesión"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/settings-view.tsx",
                                            lineNumber: 1265,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] text-soft",
                                            children: [
                                                "Última sincronización:",
                                                " ",
                                                sync.state.lastSyncAt ? new Date(sync.state.lastSyncAt).toLocaleString("es-ES") : "nunca",
                                                sync.state.phase !== "idle" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-2 text-moss",
                                                    children: [
                                                        "· ",
                                                        sync.state.message
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/settings-view.tsx",
                                                    lineNumber: 1278,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/settings-view.tsx",
                                            lineNumber: 1272,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/settings-view.tsx",
                                    lineNumber: 1264,
                                    columnNumber: 13
                                }, this),
                                sync.state.phase === "uploading" || sync.state.phase === "downloading" || sync.state.phase === "checking" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "animate-spin text-moss",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcAlert"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/settings-view.tsx",
                                        lineNumber: 1288,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/views/settings-view.tsx",
                                    lineNumber: 1287,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/settings-view.tsx",
                            lineNumber: 1256,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-2",
                            children: [
                                !sync.state.isAuthenticated ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSignIn,
                                    disabled: !sync.state.isConfigured,
                                    className: "inline-flex items-center gap-1.5 rounded-lg bg-moss text-paper px-3.5 py-2 text-xs font-bold disabled:opacity-50 hover:bg-pine2 active:scale-[0.98] transition-all shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcUpload"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/settings-view.tsx",
                                            lineNumber: 1301,
                                            columnNumber: 17
                                        }, this),
                                        " Iniciar sesión en Drive"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/settings-view.tsx",
                                    lineNumber: 1296,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleReconcile,
                                    className: "inline-flex items-center gap-1.5 rounded-lg bg-pine text-paper px-3.5 py-2 text-xs font-bold hover:bg-pine2 active:scale-[0.98] transition-all shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcWifi"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/settings-view.tsx",
                                            lineNumber: 1308,
                                            columnNumber: 17
                                        }, this),
                                        " Sincronizar ahora"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/settings-view.tsx",
                                    lineNumber: 1304,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handlePush,
                                    disabled: !sync.state.isAuthenticated,
                                    className: "inline-flex items-center gap-1.5 rounded-lg border border-linedark px-3.5 py-2 text-xs font-bold text-soft hover:bg-mint hover:text-ink disabled:opacity-50 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcUpload"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/settings-view.tsx",
                                            lineNumber: 1316,
                                            columnNumber: 15
                                        }, this),
                                        " Subir a Drive"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/settings-view.tsx",
                                    lineNumber: 1311,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handlePull,
                                    disabled: !sync.state.isAuthenticated,
                                    className: "inline-flex items-center gap-1.5 rounded-lg border border-linedark px-3.5 py-2 text-xs font-bold text-soft hover:bg-mint hover:text-ink disabled:opacity-50 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcDownload"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/settings-view.tsx",
                                            lineNumber: 1323,
                                            columnNumber: 15
                                        }, this),
                                        " Bajar de Drive"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/settings-view.tsx",
                                    lineNumber: 1318,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/settings-view.tsx",
                            lineNumber: 1294,
                            columnNumber: 11
                        }, this),
                        sync.state.isAuthenticated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[11px] text-faint flex items-center gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcCheck"], {
                                    size: 12,
                                    className: "text-moss"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/settings-view.tsx",
                                    lineNumber: 1330,
                                    columnNumber: 15
                                }, this),
                                'Auto-sync activo: cada cambio se sube automáticamente 10 s después de la última modificación (patrón "local-first").'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/settings-view.tsx",
                            lineNumber: 1329,
                            columnNumber: 13
                        }, this),
                        sync.state.phase === "error" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs font-medium text-danger bg-dangersoft border border-danger/20 rounded-lg px-3 py-2 anim-fade",
                            children: sync.state.message
                        }, void 0, false, {
                            fileName: "[project]/src/views/settings-view.tsx",
                            lineNumber: 1337,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/settings-view.tsx",
                    lineNumber: 1221,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/settings-view.tsx",
                lineNumber: 1216,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                title: "Base de datos local",
                desc: `${db.clients.length} clientes · ${db.appointments.length} citas · ${db.services.length} servicios · ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$indexeddb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dbSizeKB"])(db)} KB en este dispositivo`,
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcDownload"], {
                    size: 15
                }, void 0, false, {
                    fileName: "[project]/src/views/settings-view.tsx",
                    lineNumber: 1348,
                    columnNumber: 15
                }, this),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-soft leading-relaxed mb-3",
                        children: [
                            "Todo se guarda en el almacenamiento local de cada dispositivo (IndexedDB + localStorage) y funciona sin conexión. Dispones de dos formatos de exportación manual:",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                className: "text-ink",
                                children: "JSON"
                            }, void 0, false, {
                                fileName: "[project]/src/views/settings-view.tsx",
                                lineNumber: 1354,
                                columnNumber: 11
                            }, this),
                            " (copia legible) y",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                className: "text-ink",
                                children: "SQLite"
                            }, void 0, false, {
                                fileName: "[project]/src/views/settings-view.tsx",
                                lineNumber: 1355,
                                columnNumber: 11
                            }, this),
                            " (base de datos relacional con claves foráneas e índices)."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/settings-view.tsx",
                        lineNumber: 1350,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: exportData,
                                className: "inline-flex items-center gap-1.5 rounded-lg bg-pine text-paper px-3.5 py-2 text-xs font-bold hover:bg-pine2 active:scale-[0.98] transition-all shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcDownload"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/settings-view.tsx",
                                        lineNumber: 1363,
                                        columnNumber: 13
                                    }, this),
                                    " Exportar JSON"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/settings-view.tsx",
                                lineNumber: 1359,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: exportSQLite,
                                className: "inline-flex items-center gap-1.5 rounded-lg bg-moss text-paper px-3.5 py-2 text-xs font-bold hover:bg-pine2 active:scale-[0.98] transition-all shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcDownload"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/settings-view.tsx",
                                        lineNumber: 1369,
                                        columnNumber: 13
                                    }, this),
                                    " Exportar SQLite"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/settings-view.tsx",
                                lineNumber: 1365,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>fileRef.current?.click(),
                                className: "inline-flex items-center gap-1.5 rounded-lg border border-linedark px-3.5 py-2 text-xs font-bold text-soft hover:bg-mint hover:text-ink transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcUpload"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/settings-view.tsx",
                                        lineNumber: 1375,
                                        columnNumber: 13
                                    }, this),
                                    " Importar JSON"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/settings-view.tsx",
                                lineNumber: 1371,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>sqliteRef.current?.click(),
                                className: "inline-flex items-center gap-1.5 rounded-lg border border-linedark px-3.5 py-2 text-xs font-bold text-soft hover:bg-mint hover:text-ink transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcUpload"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/settings-view.tsx",
                                        lineNumber: 1381,
                                        columnNumber: 13
                                    }, this),
                                    " Importar SQLite"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/settings-view.tsx",
                                lineNumber: 1377,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                ref: fileRef,
                                type: "file",
                                accept: "application/json,.json",
                                className: "hidden",
                                onChange: onImport
                            }, void 0, false, {
                                fileName: "[project]/src/views/settings-view.tsx",
                                lineNumber: 1383,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                ref: sqliteRef,
                                type: "file",
                                accept: ".sqlite,.db,application/x-sqlite3",
                                className: "hidden",
                                onChange: onImportSQLite
                            }, void 0, false, {
                                fileName: "[project]/src/views/settings-view.tsx",
                                lineNumber: 1390,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: eraseAll,
                                className: "inline-flex items-center gap-1.5 rounded-lg border border-danger/30 text-danger px-3.5 py-2 text-xs font-bold hover:bg-dangersoft transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcTrash"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/settings-view.tsx",
                                        lineNumber: 1401,
                                        columnNumber: 13
                                    }, this),
                                    " Borrar todo"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/settings-view.tsx",
                                lineNumber: 1397,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/settings-view.tsx",
                        lineNumber: 1358,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/settings-view.tsx",
                lineNumber: 1345,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                title: "Instalación y acceso desde otros dispositivos",
                desc: "Úsala en el PC del salón, en la intranet y en el móvil",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcMobile"], {
                    size: 15
                }, void 0, false, {
                    fileName: "[project]/src/views/settings-view.tsx",
                    lineNumber: 1410,
                    columnNumber: 15
                }, this),
                children: [
                    standalone ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "inline-flex items-center gap-2 rounded-lg bg-oksoft text-okfg text-sm font-semibold px-3 py-2 mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcCheck"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/views/settings-view.tsx",
                                lineNumber: 1414,
                                columnNumber: 13
                            }, this),
                            " Ya estás usando la aplicación instalada."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/settings-view.tsx",
                        lineNumber: 1413,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setInstallModalOpen(true),
                        className: "inline-flex items-center gap-2 rounded-lg bg-moss text-paper font-display font-bold text-sm px-4 py-2.5 hover:bg-pine2 active:scale-[0.98] transition-all shadow-md mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcDownload"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/views/settings-view.tsx",
                                lineNumber: 1421,
                                columnNumber: 13
                            }, this),
                            " Instalar aplicación en este dispositivo"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/settings-view.tsx",
                        lineNumber: 1417,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid sm:grid-cols-2 gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-lg border border-line bg-paper/70 p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-moss mb-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcMobile"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/settings-view.tsx",
                                                lineNumber: 1428,
                                                columnNumber: 15
                                            }, this),
                                            " En el móvil"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/settings-view.tsx",
                                        lineNumber: 1427,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "text-xs text-soft space-y-1.5 leading-relaxed list-disc pl-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "text-ink",
                                                        children: "Android (Chrome):"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/settings-view.tsx",
                                                        lineNumber: 1432,
                                                        columnNumber: 17
                                                    }, this),
                                                    " menú de tres puntos y «Añadir a pantalla de inicio»."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/settings-view.tsx",
                                                lineNumber: 1431,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "text-ink",
                                                        children: "iPhone (Safari):"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/settings-view.tsx",
                                                        lineNumber: 1436,
                                                        columnNumber: 17
                                                    }, this),
                                                    " botón Compartir y «Añadir a pantalla de inicio»."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/settings-view.tsx",
                                                lineNumber: 1435,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/settings-view.tsx",
                                        lineNumber: 1430,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/settings-view.tsx",
                                lineNumber: 1426,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-lg border border-line bg-paper/70 p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-moss mb-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcWifi"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/settings-view.tsx",
                                                lineNumber: 1443,
                                                columnNumber: 15
                                            }, this),
                                            " En la intranet del salón"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/settings-view.tsx",
                                        lineNumber: 1442,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-soft leading-relaxed",
                                        children: [
                                            "Sirve esta app en tu red local (por ejemplo con",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                className: "bg-mint rounded px-1 py-px text-[11px]",
                                                children: "npx serve dist"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/settings-view.tsx",
                                                lineNumber: 1447,
                                                columnNumber: 15
                                            }, this),
                                            ") y ábrela desde cualquier equipo conectado al router. Ahora mismo la estás usando en",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                className: "bg-mint rounded px-1 py-px text-[11px] break-all",
                                                children: typeof location !== "undefined" ? location.host : "este equipo"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/settings-view.tsx",
                                                lineNumber: 1452,
                                                columnNumber: 15
                                            }, this),
                                            ". Con la sesión iniciada, los cambios se suben automáticamente a Drive unos segundos después, desde Agenda, Calendario, Clientes o Ajustes. Al abrir la app se comprueba y descarga la copia más reciente."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/settings-view.tsx",
                                        lineNumber: 1445,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/settings-view.tsx",
                                lineNumber: 1441,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/settings-view.tsx",
                        lineNumber: 1425,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/settings-view.tsx",
                lineNumber: 1407,
                columnNumber: 7
            }, this),
            serviceModal.open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ServiceModal, {
                preset: serviceModal.preset,
                onClose: ()=>setServiceModal({
                        open: false,
                        preset: null
                    })
            }, void 0, false, {
                fileName: "[project]/src/views/settings-view.tsx",
                lineNumber: 1467,
                columnNumber: 9
            }, this),
            installModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$install$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClose: ()=>setInstallModalOpen(false),
                onInstall: ()=>{
                    setInstallModalOpen(false);
                    install();
                },
                installAvailable: installAvailable
            }, void 0, false, {
                fileName: "[project]/src/views/settings-view.tsx",
                lineNumber: 1476,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/settings-view.tsx",
        lineNumber: 955,
        columnNumber: 5
    }, this);
}
_s4(SettingsView, "FZxIFK3UOu0vObhktdFXe11JjLk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUI"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$theme$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$drive$2d$sync$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDriveSyncContext"]
    ];
});
_c5 = SettingsView;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "Section");
__turbopack_context__.k.register(_c1, "SalonSection");
__turbopack_context__.k.register(_c2, "CalendarSection");
__turbopack_context__.k.register(_c3, "ServiceModal");
__turbopack_context__.k.register(_c4, "ThemeCard");
__turbopack_context__.k.register(_c5, "SettingsView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_179c2m4._.js.map