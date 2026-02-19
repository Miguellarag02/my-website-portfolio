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

const EMPTY_RESOURCES = [0, 0, 0, 0, 0];

const parseResources = (rawResources) => {
  try {
    return JSON.parse(rawResources);
  } catch (error) {
    console.error("Failed to parse player resources:", error);
    return [];
  }
};

const PlayersInfo = ({ open, setOpen, userResources, playersInfo, setPlayersInfo, pendingTrades, gameMatch, isPlayerTurn }) => {
  const { username } = useAuth();
  const [tradingOpen, setTradingOpen] = useState(0);
  const [selectedResources, setSelectedResources] = useState(EMPTY_RESOURCES);

  // Increase selected resource to trade
  const increaseResource = (index) => {
    setSelectedResources((prev) => prev.map((value, i) => (i === index ? value + 1 : value)));
  };

  // Decrease selected resource to trade
  const decreaseResource = (index) => {
    setSelectedResources((prev) => prev.map((value, i) => (i === index ? value - 1 : value)));
  };

  // Send a trade notification
  const sendTradeNotification = async (toPlayerId, selectedResourcesByUser) => {
    setSelectedResources(EMPTY_RESOURCES);
    setTradingOpen(0);
    await fetch("/api/catan/set_trade_notification.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, toPlayerId, selectedResourcesByUser }),
    });
  };

  // Close open trades during changes match
  useEffect(() =>{
      setTradingOpen(false);
      setSelectedResources(EMPTY_RESOURCES);
  }, [gameMatch.turn]);

  // Close with ESC
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [setOpen]);

  useEffect(() => {
    const fetchPlayersInfo = async () => {
      if (!username) return;

      try {
        const response = await fetch("/api/player/get_players.php");
        if (!response.ok) {
          throw new Error(`Failed to get other players information: ${response.status}`);
        }
        const data = await response.json();
        setPlayersInfo(data);
      } catch (error) {
        console.error(error);
        setPlayersInfo([]);
      }
    };
    fetchPlayersInfo();

    const interval = setInterval(fetchPlayersInfo, 3000);
    return () => clearInterval(interval);
  }, [username, setPlayersInfo]);

  return (
    <div className="relative">
      {/* Optional overlay */}
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
          <div className="h-full gap-1 grid">
            {playersInfo
              .filter((playerInfo) => playerInfo.username !== username)
              .map((playerInfo) => {
                const playerResources = parseResources(playerInfo.resources);
                const pendingTrade = pendingTrades.find(
                  (item) => item.from_id_player === playerInfo.id
                );
                const sendedTrade = pendingTrades.find(
                  (item) => item.to_id_player === playerInfo.id
                );
                const tradeHasResponse = pendingTrade?.to_resource_ids != null;
                const isDisabled = (pendingTrade && tradeHasResponse) || sendedTrade;
                const shouldBreathe = pendingTrade && !tradeHasResponse;
                const isTradingOpen = tradingOpen === playerInfo.id;

                return (
                  <div
                    key={playerInfo.username}
                    className="rounded-2xl px-2 shadow-sm"
                    style={{ backgroundColor: toVeryLightColor(PLAYER_COLORS[playerInfo.color]) }}
                  >
                    <div className="flex gap-3">
                      {/* Player main information */}
                      <div className="flex flex-col mt-4">
                        <div 
                          className={`absolute h-8 w-8 rounded-full border-2 border-black-100 flex justify-center 
                            ${playerInfo.current_order == gameMatch.turn ? "opacity-100 bg-green-600/70 animate-breathe-scale" : "opacity-30 bg-white-600"}`}
                          >
                          <span className="relative font-minecraft text-lg">{playerInfo.current_order}</span>
                        </div>
                        <img
                          src={playerInfo.user_image || "/assets/default-profile.png"}
                          onError={(e) => {
                            e.currentTarget.src = "/assets/default-profile.png";
                          }}
                          alt="User profile"
                          className="mt-2 h-24 w-24 rounded-full object-cover"
                          style={{ border: `3px solid ${PLAYER_COLORS[playerInfo.color]}` }}
                        />
                        <p className="mt-2 text-center text-sm font-semibold tracking-tight text-slate-800">
                          {playerInfo.username}
                        </p>
                      </div>
                      {/* Player resources information */}
                      {!isTradingOpen && (
                        <div className="flex-1">
                          <div className="flex flex-col">
                            <div className="flex-2">
                              {playerResources.map((resource) => (
                                <div
                                  key={`${playerInfo.username}-${resource.id}`}
                                  className="inline-flex items-center gap-1 px-2 py-1 text-white"
                                >
                                  <div
                                    className={`h-12 w-12 rounded-full bg-white/50 flex items-center justify-center ${
                                      resource.qty > 0
                                        ? "opacity-100"
                                        : "bg-white/30 opacity-30 grayscale scale-75"
                                    }`}
                                  >
                                    <img
                                      src={RESOURCE_ICONS[resource.id]}
                                      alt={resource.name}
                                      className="max-h-10 max-w-10 object-contain"
                                    />
                                  </div>
                                  <span
                                    className={`text-white/70 ${
                                      resource.qty > 0 ? "opacity-100" : "opacity-0"
                                    }`}
                                  >
                                    x
                                  </span>
                                  <span
                                    className={`font-semibold ${
                                      resource.qty > 0 ? "opacity-100" : "opacity-0"
                                    }`}
                                  >
                                    {resource.qty}
                                  </span>
                                </div>
                              ))}
                              <button
                                className={`
                                  ml-10 h-14 w-14 rounded-full px-1 py-1
                                  transition-all duration-700 ease-out
                                  hover:bg-white/80 hover:scale-125
                                  ${(isDisabled || !(playerInfo.current_order == gameMatch.turn || isPlayerTurn))? "grayscale pointer-events-none" : ""}
                                  ${shouldBreathe ? "animate-breathe-both" : ""}
                                `}
                                onClick={() => {
                                  setTradingOpen(playerInfo.id);
                                  setSelectedResources(EMPTY_RESOURCES);
                                }}
                              >
                                <img
                                  src="/assets/catan/resources/trading_button.png"
                                  className="object-contain"
                                />
                              </button>
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-row ml-1 mt-2 gap-4 w-full">
                                <img
                                  src="/assets/catan/cards/ruta_comercial.png"
                                  className="w-20 grayscale opacity-60"
                                />
                                <img
                                  src="/assets/catan/cards/mayor_ejercito.png"
                                  className="w-20 grayscale opacity-60"
                                />
                                <div className="relative flex items-center scale-75 gap-2 rounded-full opacity-75 border-2 border-red-700 w-14 hover:scale-100 hover:opacity-100 hover:w-full h-14 bg-red-700/20 overflow-hidden transition-all duration-1000 ease-out">
                                  <img
                                    src="/assets/catan/cards/punto.png"
                                    className="left-0 h-full w-14 shrink-0 object-contain"
                                  />
                                  <span className="text-3xl font-black text-red-600 animate-pulse drop-shadow-xl">
                                    4
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {isTradingOpen && (
                        <div className="flex-1 flex flex-col">
                          {/* Player trading section */}
                          <div className="grid grid-cols-5">
                            {playerResources.map((resource) => (
                              <div
                                key={`${playerInfo.username}-${resource.id}`}
                                className="inline-flex items-center py-1 gap-1 text-white flex-col"
                              >
                                <button
                                  className={`minecraft-btn w-1/2 h-6 text-xs text-center text-white truncate border-2 border-b-4 hover:text-yellow-200 ${
                                    userResources[resource.id - 1].qty -
                                      selectedResources[resource.id - 1] >
                                    0
                                      ? "opacity-100"
                                      : "opacity-0 pointer-events-none"
                                  }`}
                                  onClick={() => increaseResource(resource.id - 1)}
                                >
                                  <span className="inline-block -rotate-90 [text-shadow:-3px_3px_#4C4C4C]">
                                    &gt;
                                  </span>
                                </button>
                                <div
                                  className={`h-12 w-12 bg-white/50 flex items-center justify-center ${
                                    userResources[resource.id - 1].qty > 0
                                      ? "opacity-100"
                                      : "bg-white/30 opacity-30 grayscale"
                                  }`}
                                >
                                  <span
                                    className={`absolute mt-8 ml-8 font-serif text-nowrap text-green-700 opacity-80 text-lg font-bold z-50 ${
                                      selectedResources[resource.id - 1] > 0
                                        ? "opacity-80"
                                        : "hidden"
                                    }`}
                                  >
                                    {selectedResources[resource.id - 1]}
                                  </span>
                                  <img
                                    src={RESOURCE_ICONS[resource.id]}
                                    alt={resource.name}
                                    className="max-h-10 max-w-10 object-contain"
                                  />
                                </div>
                                <button
                                  className={`minecraft-btn w-1/2 h-6 text-xs  text-center text-white truncate border-2 border-b-4 hover:text-yellow-200 ${
                                    selectedResources[resource.id - 1] > 0
                                      ? "opacity-100"
                                      : "opacity-0 pointer-events-none"
                                  }`}
                                  onClick={() => decreaseResource(resource.id - 1)}
                                >
                                  <span className="inline-block rotate-90 [text-shadow:3px_-3px_#4C4C4C]">
                                    &gt;
                                  </span>
                                </button>
                              </div>
                            ))}
                          </div>

                          {/* Buttons */}
                          <div className="mt-auto grid grid-cols-2 gap-4 px-1">
                            <button
                              className="minecraft-btn w-full text-sm text-center text-white truncate p-1 border-2 border-b-4 [text-shadow:3px_3px_#4C4C4C] hover:text-yellow-200"
                              onClick={() => {
                                setTradingOpen(0);
                                setSelectedResources(EMPTY_RESOURCES);
                              }}
                            >
                              Cancel
                            </button>
                            <button
                              className="minecraft-btn w-full text-sm text-center text-white truncate p-1 border-2 border-b-4 [text-shadow:3px_3px_#4C4C4C] hover:text-yellow-200"
                              onClick={() => sendTradeNotification(playerInfo.id, selectedResources)}
                            >
                              Send
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </aside>

      {/* Handle button on the right edge */}
      <button
        onClick={() => setOpen((v) => !v)}
        className={[
          "fixed top-1/3 z-[60] -translate-y-1/2",
          "h-16 w-8 rounded-l-xl bg-white/90 shadow rounded-lg",
          "flex items-center justify-center text-lg font-semibold",
          "hover:bg-slate-50 active:scale-95 transition-all duration-700 ease-out",
          open ? "right-[28rem]" : "right-0",
        ].join(" ")}
        aria-label={open ? "Cerrar barra lateral" : "Abrir barra lateral"}
      >
        <img src="/assets/group.png" className="w-6 opacity-80" />
      </button>
    </div>
  );
};
export default PlayersInfo;
