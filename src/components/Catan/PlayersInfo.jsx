import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext.jsx";
import { PLAYER_COLORS, RESOURCE_ICONS } from "../../constants/CatanStates.js";

const toVeryLightColor = (color) => {
  const hex = color.replace("#", "");
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, 0.4)`;
};

const PlayersInfo = ({ open, setOpen }) => {
  const { username } = useAuth();

  const [playersInfo, setPlayersInfo] = useState([]);
  
  // Cerrar con ESC
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

    useEffect(() => {
      const getOtherPlayerInformation = async () => {
        if (!username) return;

        try {
          const response = await fetch(`/api/player/other_players.php?username=${encodeURIComponent(username)}`);
          if (!response.ok) {
            throw new Error(`Failed to get other players information: ${response.status}`)
          }
          const data = await response.json()
          console.log(data)
          setPlayersInfo(data)
        } catch (error) {
          console.error(error)
          setPlayersInfo([])
        }
      }
      getOtherPlayerInformation();

      const interval = setInterval(() => {
        getOtherPlayerInformation()
      }, 3000)
  
      return () => clearInterval(interval)
    }, [username])

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
          "fixed right-0 top-0 z-50 h-2/3 w-[28rem] shadow-xl",
          "transform transition-transform duration-700 ease-out",
          open ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
        role="complementary"
        aria-label="Barra de herramientas"
      >
        <div className="p-2 mt-1 h-full">
          <div className={`h-full gap-1 grid grid-col-${playersInfo.length}`}>
            {playersInfo.map((playerInfo) => (
              <div
                key={playerInfo.username}
                className="rounded-lg px-3 py-2 shadow-sm"
                style={{ backgroundColor: toVeryLightColor(PLAYER_COLORS[playerInfo.color]) }}
              >
                <div className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <img
                      src={playerInfo.user_image ? playerInfo.user_image : "/assets/default-profile.png"}
                      alt="User profile"
                      className="mt-2 h-24 w-24 rounded-full object-cover"
                      style={{ border: `3px solid ${PLAYER_COLORS[playerInfo.color]}` }}
                    />
                    <p className="mt-2 text-center text-lg font-semibold tracking-tight text-slate-800">
                      {playerInfo.username}
                    </p>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col">
                      <div className="flex-2">
                          {JSON.parse(playerInfo.resources).map((resource) => (
                            <div className="inline-flex items-center gap-1 px-2 py-1 text-white">
                              <div className={`h-12 w-12 rounded-full bg-white/50 flex items-center justify-center ${resource.qty > 0 ? "opacity-100" : "bg-white/30 opacity-30 grayscale scale-75"}`}>
                                <img
                                  src={RESOURCE_ICONS[resource.id]}
                                  alt={resource.name}
                                  className="max-h-10 max-w-10 object-contain"
                                />
                              </div>
                              <span className={`text-white/70 ${resource.qty > 0 ? "opacity-100" : "opacity-0"}`}>x</span>
                              <span className={`font-semibold ${resource.qty > 0 ? "opacity-100" : "opacity-0"}`}>{resource.qty}</span>
                            </div>
                          ))}
                          <button className="ml-10 h-14 w-14 rounded-full px-1 py-1 transition-full hover:bg-white/80 hover:scale-125 duration-700 ease-out">
                            <img src="/assets/catan/resources/trading_button.png" className="object-contain"/>
                          </button>
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-row ml-1 mt-2 gap-4 w-full">
                            <img src="/assets/catan/cards/ruta_comercial.png" className="w-20 grayscale opacity-60"/>
                            <img src="/assets/catan/cards/mayor_ejercito.png" className="w-20 grayscale opacity-60"/>
                            <div className="relative flex items-center scale-75 gap-2 rounded-full opacity-75 border-2 border-red-700 w-14 hover:scale-100 hover:opacity-100 hover:w-full h-14 bg-red-700/20 overflow-hidden transition-all duration-1000 ease-out">
                              <img src="/assets/catan/cards/punto.png" className="left-0 h-full w-14 shrink-0 object-contain"/>
                              <span className="text-3xl font-black text-red-600 animate-pulse drop-shadow-xl">4</span>
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            )) }
          </div>
        </div>
      </aside>

      {/* Botón "handle" en el extremo derecho */}
      <button
        onClick={() => setOpen((v) => !v)}
        className={[
          "fixed top-1/3 z-[60] -translate-y-1/2",
          "h-16 w-8 rounded-l-xl bg-white shadow rounded-lg",
          "flex items-center justify-center text-lg font-semibold",
          "hover:bg-slate-50 active:scale-95 transition-all duration-700 ease-out",
          open ? "right-[28rem]" : "right-0",
        ].join(" ")}
        aria-label={open ? "Cerrar barra lateral" : "Abrir barra lateral"}
      >
        {open ? ">" : "<"}
      </button>
    </div>
  );
}


export default PlayersInfo;
