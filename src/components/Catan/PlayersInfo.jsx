import { useEffect, useState } from "react";

const PlayersInfo = ({ players, open, setOpen }) => {
  // Cerrar con ESC
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="relative">
      {/* Overlay (opcional) */}
      <div
        className={[
          "fixed z-40 bg-black/30 transition-opacity",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={[
          "fixed right-0 top-0 z-50 h-2/3 w-96 shadow-xl",
          "transform transition-transform duration-700 ease-out",
          open ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
        role="complementary"
        aria-label="Barra de herramientas"
      >
        <div className="p-4 mt-4 space-y-2">
        <button className="w-full rounded-lg bg-slate-900 px-3 py-2 text-white hover:bg-slate-800">
            Acción 1
        </button>
        <button className="w-full rounded-lg border px-3 py-2 hover:bg-slate-50">
            Acción 2
        </button>
        <button className="w-full rounded-lg border px-3 py-2 hover:bg-slate-50">
            Acción 3
        </button>
        </div>
      </aside>

      {/* Botón "handle" en el extremo derecho */}
      <button
        onClick={() => setOpen((v) => !v)}
        className={[
          "fixed right-0 top-1/3 z-[60] -translate-y-1/2",
          "h-16 w-8 rounded-l-xl bg-white shadow rounded-lg",
          "flex items-center justify-center text-lg font-semibold",
          "hover:bg-slate-50 active:scale-95 transition-all duration-700 ease-out",
          open ? "-translate-x-96" : "translate-x-0",
        ].join(" ")}
        aria-label={open ? "Cerrar barra lateral" : "Abrir barra lateral"}
      >
        {open ? ">" : "<"}
      </button>
    </div>
  );
}


export default PlayersInfo;
