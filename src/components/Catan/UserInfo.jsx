import { useState, Suspense, useEffect, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "../CanvasLoader.jsx";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useAuth } from "../../context/AuthContext.jsx";
import { BuildModel } from "../Catan/BuildModel.jsx";
import ModelCamera from "../Catan/ModelCamera.jsx";
import SpecialButton from "../SpecialButton.jsx"
import { RESOURCE_ICONS, BUILD_COSTS, RESOURCE_CARDS, RANDOM_CARDS, PLAYER_COLORS } from "../../constants/CatanStates.js";

const UserInfo = ({ 
    open, 
    setOpen, 
    selectedBuildId, 
    setSelectedBuildId, 
    userResources, 
    setUserResources, 
    tradeNotification, 
    setTradeNotification, 
    playersInfo, 
    setPendingTrades, 
    throwDice, 
    setThrowDice, 
    setMoveThief,
    allowThief,
    gameMatch,
    setGameMatch,
    ... props 
  }) => {

  const { username } = useAuth();
  const [userInfo, setUserInfo] = useState({});
  const [userRandom, setUserRandom] = useState([]);
  const [availableBuilding, setAvailableBuilding] = useState([]);
  const availableThrowDice = !throwDice;
  const emptyBanckTrade = {
    from_id: 0,
    from_qty: 0,
    to_id: 0,
  }
  const [banckTrade, setBanckTrade] = useState(emptyBanckTrade)

  // Memorize playeInfo
  const playerById = useMemo(() => {
    const m = new Map();
    for (const p of playersInfo ?? []) m.set(Number(p.id), p);
    return m;
  }, [playersInfo]);


  // Cerrar con ESC
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Add random card to user
  const addRandomCard = async () => {
    setSelectedBuildId(0)
    const response = await fetch("/api/catan/set_random_card.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    })
  }

  // Send the banck trade request
  const sendBanckTrade = async (banck_trade) => {
    setSelectedBuildId(0)
    const response = await fetch("/api/catan/set_banck_trade.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({username, ...banck_trade}),
    })
  }

  // Resolve Trade Notification
  const resolveTradeNotification = async (tradeId, playerId, acceptTrade) => {
    const response = await fetch("/api/catan/resolve_trade_notification.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tradeId, playerId, acceptTrade }),
    });
    const data = await response.json();
    if (!response.ok || !data.ok) {
      console.error("Delete failed:", data);
      return;
    }
    setTradeNotification(prev => prev.filter(tn => tn.id !== tradeId));
  }

  // Check available buildings
  const qtyOf = (id) => userResources.find(el => el.id === id)?.qty ?? 0;
  const availableBuild = (build_id) => {
    const build = BUILD_COSTS.find(b => b.id === build_id);
    if (!build) return false;

    // Check if enough buildings
    if (availableBuilding[build_id] == 0) return false;

    // Check if enough materials
    return build.resources.every(({ id, qty }) =>
      (userResources.find(r => r.id === id)?.qty ?? 0) >= qty
    );
  };

  useEffect(() => {
    const getUserInformation = async () => {
      if (!username) return;

      try {
        const response = await fetch(`/api/player/user_player.php?username=${encodeURIComponent(username)}`);

        if (!response.ok) {
          throw new Error(`Failed to get user player information: ${response.status}`);
        }

        const data = await response.json();

        setUserInfo(data.player);
        setUserResources(data.player.resource_cards);
        setUserRandom(data.player.random_cards);
        setAvailableBuilding(data.available);
        setTradeNotification(data.trade_notification);
        setPendingTrades(data.trade_notification.filter(
          item => item.to_id_player === data.player.id
            || item.from_id_player === data.player.id   
        ))
        setGameMatch(data.game_match);
      } catch (error) {
        console.error(error)
        setUserInfo({})
      }
    }
    getUserInformation();

    const interval = setInterval(() => {
      getUserInformation()
    }, 3000)

    return () => clearInterval(interval)
  }, [username, selectedBuildId])

  return (
    <div className="relative">
      <div
        className={[
          "fixed z-40 bg-black/30 transition-opacity",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer for build */}
      <aside
        className={[
          "fixed right-0 top-2/3 z-50 h-[17%] w-[28rem] shadow-xl",
          "transform transition-transform duration-700 ease-out",
          "bg-slate-500/70 rounded-xl",
          open ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
        role="complementary"
        aria-label="Barra de herramientas"
      >
        <div className="p-2 h-full w-full mt-2">
          {banckTrade.from_id == 0 &&
          <div className="relative gap-2 grid grid-cols-4 justify-items-center">
            { BUILD_COSTS.map((build) => (
              <div key={build.id} className={`relative flex-row h-3/4 col-span-1 gap-1 transition-all justify-items-center ${selectedBuildId == build.id ? "bg-white/70 rounded-3xl" : ""} ${availableBuild(build.id) ? "hover:scale-110" : ""}`}>
                <span className={`absolute -translate-x-1/2 -mt-2 -ml-2 font-serif text-nowrap opacity-50 text-lg font-bold z-50 ${availableBuilding[build.id] == 0 ? "text-red-700" : availableBuilding[build.id] < 3 ? "text-yellow-400" : "text-green-500" }`}>{availableBuilding[build.id]}</span>
                {build.id != 4 &&
                  <div className={`w-14 h-14 rounded-full bg-white/70 overflow-hidden  ${availableBuild(build.id) ? "" : "pointer-events-none opacity-60 grayscale"}`} onClick={() =>{if (!availableBuild(build.id)) return; setSelectedBuildId(build.id)}}>
                    <Canvas className="w-full h-full">
                      <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[1.5, 1.5, 1.5]} fov={50} />
                        <ModelCamera
                          radius={2.3}
                          speed={0.6}
                          height={0.9}
                        />
                        <BuildModel model_id={build.id} color={userInfo.color} scale={1.9} position={[0, -1.3, 0]}/>
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[0, 30, 10]} intensity={1} />
                      </Suspense>
                    </Canvas>
                  </div>
                ||
                <>
                  <img src="/assets/catan/cards/random_card.png" className={`relative w-10 ${availableBuild(build.id) ? "" : "pointer-events-none opacity-60 grayscale"}`} onClick={() => setSelectedBuildId(build.id)}/>
                  <div
                    className={`absolute bg-green-300 rounded-2xl text-sm w-full text-center border border-black hover:scale-110 transition-all duration-700 ease-in-out ${
                      selectedBuildId === build.id ? "opacity-80 hover:opacity-100" : "hidden"
                    }`}
                  >
                    <button onClick={() => addRandomCard()}>Comprar</button>
                  </div>
                </>
                }
                <span className="text-sm text-white">{build.name}</span>
                <div className="relative w-full h-fit grid grid-rows-2 grid-cols-2 flex-wrap items-center">
                  {build.resources.map((resource) => {
                    const owned = qtyOf(resource.id);
                    return (
                      <div key={`${build.id}-${resource.id}`} className="relative items-center">
                        {Array.from({ length: resource.qty }).map((_, i) => (
                          <img
                            key={i}
                            src={RESOURCE_ICONS[resource.id]}
                            className={`relative w-[1.7rem] ${owned > i ? "" : "grayscale opacity-50"}`}
                            alt={resource.name}
                          />
                        ))}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
          ||
            <div className="relative gap-2 grid grid-cols-4 grid-rows-3 justify-items-center">
              <span className="text-lg font-serif font-bold col-span-4 row-span-1">Select a resource for exchange</span>
              <div className="flex w-full col-span-3 row-span-2 gap-2 justify-items-center ">
                {userResources.map(resource => (
                    <button 
                      key={`banck_resource_${resource.id}`}
                      className={
                        `relative border-2 border-black/70 
                        rounded-xl hover:bg-white/80 
                        hover:scale-110 transition-all duration-500 ease-in-out 
                        ${resource.id == banckTrade.to_id ? "bg-green-500/60" : resource.id == banckTrade.from_id ? "bg-red-500/60 pointer-events-none" : "bg-white/30"}`
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setBanckTrade({
                          ...banckTrade,
                          to_id: resource.id,
                        });
                      }}
                    >
                      <img 
                        src={RESOURCE_ICONS[resource.id]} 
                        className="w-14"
                      />
                      {(resource.id == banckTrade.from_id &&
                        <span>{`-${resource.trade_qty}`}</span>
                      ) || (resource.id == banckTrade.to_id &&
                        <span>+1</span>
                      )}
                    </button>
                ))}
              </div>
              <SpecialButton 
                color="green"
                width="w-20"
                text="✓​"
                onClick={() =>{
                  sendBanckTrade(banckTrade);
                  setBanckTrade(emptyBanckTrade);
                  setOpen(false);
                }}
                visibility={banckTrade.to_id > 0}
              />
              <SpecialButton 
                color="red"
                width="w-20"
                text="✕"
                onClick={() =>{
                  setBanckTrade(emptyBanckTrade);
                  setOpen(false);
                }}
              />
            </div>
          }
        </div>
      </aside>

      <button
        onClick={() => {setSelectedBuildId(0); setOpen((v) => !v)}}
        className={[
          "fixed top-[75%] z-[60] -translate-y-1/2",
          "h-16 w-8 rounded-l-xl bg-white/90 shadow rounded-lg",
          "flex items-center justify-center text-lg font-semibold",
          "hover:bg-slate-50 active:scale-95 transition-all duration-700 ease-out",
          open ? "right-[28rem]" : "right-0",
        ].join(" ")}
        aria-label={open ? "Cerrar barra lateral" : "Abrir barra lateral"}
      >
        <img src="/assets/build.png" className="w-8"/>
      </button>

      <div className="fixed inset-0 mt-auto w-full h-[15%]">
        <div className="grid grid-cols-6 h-full">
          {/** Información de solicitudes de comercio  */}
          <div className="relative col-span-2 m-1">
            {tradeNotification.map((tradeNot, i) => {
              const fromPlayerInfo = playerById.get(Number(tradeNot.from_id_player));
              const toPlayerInfo = playerById.get( Number(tradeNot.to_id_player));
              if(!tradeNot.from_resource_ids) return(<></>)
              return (
                <div
                  key={`notificacion_${tradeNot.id}`}
                  className="absolute flex flex-col w-full rounded-lg bottom-0 h-full animate-breathe-bg transition-all duration-1000"
                  style={{ transform: `translateY(-${i * 14}vh)` }}
                >
                  <div className="relative flex w-full items-start justify-between px-4">
                    {/* From player */}
                    <div className="flex flex-col items-center">
                      <img
                        src={fromPlayerInfo?.user_image || "/assets/default-profile.png"}
                        onError={(e) => (e.currentTarget.src = "/assets/default-profile.png")}
                        alt="User profile"
                        className="mt-2 h-24 w-24 rounded-full object-cover"
                        style={{ border: `3px solid ${PLAYER_COLORS[fromPlayerInfo?.color] ?? "#ccc"}` }}
                      />
                      <span className="mt-2 text-center text-sm font-semibold tracking-tight text-slate-800">
                        {fromPlayerInfo?.username ?? "Desconocido"}
                      </span>
                    </div>

                    <div className="flex items-center p-1 justify-items-center w-2/3 h-full gap-2">
                      
                      {/* Proposed player resources */}
                      <div className="flex flex-rows flex-col w-1/3 items-center grid-flow-col">
                        {(() => {
                          const arr = Array.isArray(tradeNot.from_resource_ids)
                            ? tradeNot.from_resource_ids
                            : JSON.parse(tradeNot.from_resource_ids || "[]");

                          return arr.map((resource_qty, idx) => {
                            const resource_id = idx + 1;
                            if (!resource_qty) return null;

                            return (
                              <div key={`${tradeNot.id}-from-${resource_id}`} className="flex items-center">
                                {Array.from({ length: resource_qty }).map((_, i) => (
                                  <img
                                    key={i}
                                    src={RESOURCE_ICONS[resource_id]}
                                    className="w-10"
                                    alt=""
                                  />
                                ))}
                              </div>
                            );
                          });
                        })()}
                      </div>

                      {/* 🔹 Arrow */}
                      <div className="flex items-center justify-center scale-150 w-1/3">
                        <span className="text-3xl font-bold text-black">→</span>
                      </div>

                      {/* Response player resources */}
                      <div className="flex flex-rows flex-col w-1/3 grid-flow-col items-center ">
                        {(() => {
                          const arr = Array.isArray(tradeNot.to_resource_ids)
                            ? tradeNot.to_resource_ids
                            : JSON.parse(tradeNot.to_resource_ids || "[]");
                          
                          if (!tradeNot.to_resource_ids)
                            return(
                              <div key={`${tradeNot.id}`} className="relative col-span-2 row-span-2 p-1 w-full h-full items-center text-center">
                                <span className="absolute font-minecraft text-3xl top-1/3 left-1/3">?</span>
                                <img src="/assets/catan/cards/random_card.png" className="relative w-[80%] opacity-30"></img>
                              </div>
                          );

                          return arr.map((resource_qty, idx) => {
                            const resource_id = idx + 1;
                            if (!resource_qty) return null;

                            return (
                              <div key={`${tradeNot.id}-to-${resource_id}`} className="flex items-center">
                                {Array.from({ length: resource_qty }).map((_, i) => (
                                  <img
                                    key={i}
                                    src={RESOURCE_ICONS[resource_id]}
                                    className="w-10"
                                    alt=""
                                  />
                                ))}
                              </div>
                            );
                          });
                        })()}
                      </div>
                    </div>

                    {/* To player */}
                    <div className="flex flex-col items-center">
                      <img
                        src={toPlayerInfo?.user_image || "/assets/default-profile.png"}
                        onError={(e) => (e.currentTarget.src = "/assets/default-profile.png")}
                        alt="User profile"
                        className="mt-2 h-24 w-24 rounded-full object-cover"
                        style={{ border: `3px solid ${PLAYER_COLORS[toPlayerInfo?.color] ?? "#ccc"}` }}
                      />
                      <span className="mt-2 text-center text-sm font-semibold tracking-tight text-slate-800">
                        {toPlayerInfo?.username ?? "Desconocido"}
                      </span>
                    </div>

                    {/* Accept/Reject buttons */}
                    { (tradeNot.from_id_player == userInfo.id || tradeNot.to_id_player == userInfo.id ) &&
                      <div className="relative flex flex-row w-fit h-[90%]">
                        <SpecialButton
                          color="red"
                          width="w-10"
                          text="✕"
                          onClick={() => resolveTradeNotification(tradeNot.id, userInfo.id, false)}
                        />
                        { (tradeNot.to_resource_ids !== null && tradeNot.from_id_player == userInfo.id) &&
                          <SpecialButton
                            color="green"
                            width="w-10"
                            text="✓"
                            onClick={() => resolveTradeNotification(tradeNot.id, userInfo.id, false)}
                          />
                        }
                      </div>
                    }
                  </div>
                </div>
              );
            })}
          </div>
          {/** Información de turnos / movimiento del ladron  */}
          <div className={`relative h-[80%] w-full flex flex-nowrap`}>
            <SpecialButton
              color="blue"
              width="w-20"
              text="Throw 🎲​🎲​"
              onClick={() => setThrowDice(true)}
              visibility= {availableThrowDice && gameMatch.current_order == userInfo.order}
            />
            <SpecialButton
              color="green"
              width="w-20"
              text="Next ➡️"
              onClick={() => setThrowDice(true)}
              visibility= {gameMatch.current_order == userInfo.order}
            />
            <SpecialButton
              color="red"
              width="w-20"
              text="​Thief 🥷💰​"
              onClick={() => setMoveThief(prev => !prev)}
              visibility={allowThief && gameMatch.current_order == userInfo.order}
              isToggle ={true}
            />
          </div>
          {/** Información de tus cartas disponibles  */}
          <div className="relative col-span-3">
            <div className="flex flex-row mt-2 justify-end mr-8 gap-2">
              {/** Random Cards */}
              {userRandom.map((random) =>
                random.qty > 0 && (
                  <div 
                    key={random.id} 
                    className="relative w-20 h-28 transition-full ease-in-out duration-700 hover:-translate-y-8 hover:scale-150 hover:z-50"
                    >
                    {Array.from({ length: random.qty }).map((_, i) => (
                      <img
                        key={i}
                        src={RANDOM_CARDS[random.id]}
                        alt={random.name}
                        className="absolute left-0 top-0 w-fit select-none"
                        style={{
                          transform: `translate(${i * 0}px, ${i * -8}px)`,
                          zIndex: i,
                        }}
                      />
                    ))}
                    <span className={`absolute left-1/2 -translate-x-1/2 mt-28  bg-white/70 rounded-2xl w-20 text-center font-serif text-nowrap text-sm font-bold z-50 ${random.qty > 0 ? "" : "opacity-0"}`}>
                      {`${random.qty > 1 ? ` x ${random.qty}` : ""}`}
                    </span>
                  </div>
                )
              )}

              {/** Resources Cards */}
              {userResources.map((resource) => (
                <div 
                  key={resource.id} 
                  className="relative w-20 h-28"
                  >
                  <img
                      key={`grayscale_${resource.name}`}
                      src={RESOURCE_CARDS[resource.id]}
                      alt={resource.name}
                      className="absolute left-0 top-0 w-fit select-none grayscale opacity-30"
                    />
                  {Array.from({ length: resource.qty }).map((_, i) => (
                    <img
                      key={i}
                      src={RESOURCE_CARDS[resource.id]}
                      alt={resource.name}
                      className="absolute left-0 top-0 w-20 select-none"
                      style={{
                        transform: `translate(${i * 0}px, ${i * -8}px)`, 
                        zIndex: i,
                      }}
                    />
                  ))}
                <span className={`absolute left-1/2 -translate-x-1/2 mt-28  bg-white/70 rounded-2xl w-20 text-center font-serif text-nowrap text-sm font-bold z-50 ${resource.qty > 0 ? "" : "opacity-0"}`}>
                  {`${resource.name}${resource.qty > 1 ? ` x ${resource.qty}` : ""}`}
                </span>
                { (resource.qty - resource.trade_qty) >= 0 &&
                  <button
                    className={`
                      relative left-1/2 mt-16 -translate-x-1/2 h-10 w-10 rounded-full z-50
                      transition-all duration-700 ease-out
                      hover:bg-white/80 hover:scale-150
                      hover:opacity-100 opacity-0
                    `}
                    onClick={() => {
                      setBanckTrade({
                        from_id: resource.id,
                        from_qty: resource.trade_qty
                      });
                      setOpen(true);
                    }}
                  >
                    <img
                      src="/assets/catan/resources/trading_button.png"
                      className="object-contain"
                    />
                  </button>
                }
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
