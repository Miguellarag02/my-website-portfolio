import { useState, Suspense, useEffect, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "../CanvasLoader.jsx";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useAuth } from "../../context/AuthContext.jsx";
import { BuildModel } from "../Catan/BuildModel.jsx";
import ModelCamera from "../Catan/ModelCamera.jsx";
import { RESOURCE_ICONS, BUILD_COSTS, RESOURCE_CARDS, RANDOM_CARDS } from "../../constants/CatanStates.js";

const UserInfo = ({ open, setOpen, selectedBuildId, setSelectedBuildId,  ... props }) => {
  const { username } = useAuth();
  const [userInfo, setUserInfo] = useState({});
  const [userResources, setUserResources] = useState([]);
  const [userRandom, setUserRandom] = useState([]);

  // Cerrar con ESC
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Add random card to user
  const addRandomCard = () => {

  }

  // Check available buildings
  const qtyOf = (id) => userResources.find(el => el.id === id)?.qty ?? 0;
  const availableBuild = (build_id) => {
    const build = BUILD_COSTS.find(b => b.id === build_id);
    if (!build) return false;

    return build.resources.every(({ id, qty }) =>
      (userResources.find(r => r.id === id)?.qty ?? 0) >= qty
    );
  };


  const debug = (userData) => {
    console.log(userData.random_cards) // Bien
  }

  useEffect(() => {
    const getUserInformation = async () => {
      if (!username) return;

      try {
        const response = await fetch(`/api/player/user_player.php?username=${encodeURIComponent(username)}`);
        if (!response.ok) {
          throw new Error(`Failed to get user player information: ${response.status}`)
        }
        const data = await response.json()
        const data0 = data?.[0] ?? {};
        setUserInfo(data0);
        setUserResources(JSON.parse(data0.resource_cards ?? "[]"));
        setUserRandom(JSON.parse(data0.random_cards ?? "[]"));
        debug(data?.[0])
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
          <div className="relative gap-2 grid grid-cols-4 justify-items-center">
            { BUILD_COSTS.map((build) => (
              <div key={build.id} className={`relative flex-row h-3/4 col-span-1 gap-1 transition-all justify-items-center ${selectedBuildId == build.id ? "bg-white/70 rounded-3xl" : ""} ${availableBuild(build.id) ? "hover:scale-110" : ""}`}>
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
                  <img src="/assets/catan/cards/random_card.png" className="relative w-10" onClick={() => setSelectedBuildId(build.id)}/>
                  <div
                    className={`absolute bg-green-300 rounded-2xl text-sm w-full text-center border border-black hover:scale-110 transition-all duration-700 ease-in-out ${
                      selectedBuildId === build.id ? "opacity-80 hover:opacity-100" : "hidden"
                    }`}
                  >
                    <button>Comprar</button>
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
          <div className="relative col-span-2 border-2 rounded-xl border-white">

          </div>
          {/** Información de turnos / movimiento del ladron  */}
          <div className="relative border-2 rounded-xl border-red-700">

          </div>
          {/** Información de tus cartas disponibles  */}
          <div className="relative col-span-3">
            <div className="flex flex-row mt-2 justify-end mr-8 gap-2">
              {/** Random Cards */}
              {userRandom.map((random) =>
                random.qty > 0 && (
                  <div key={random.id} className="relative w-20 h-28 transition-full ease-in-out duration-700 hover:-translate-y-8 hover:scale-150 hover:z-50">
                    {Array.from({ length: random.qty }).map((_, i) => (
                      <img
                        key={i}
                        src={RANDOM_CARDS[random.id]}
                        alt={random.name}
                        className="absolute left-0 top-0 w-fit select-none"
                        style={{
                          transform: `translate(${i * 6}px, ${i * -4}px)`,
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
              {userResources.map((resource) => (
                <div key={resource.id} className="relative w-20 h-28">
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
                        transform: `translate(${i * 6}px, ${i * -4}px)`, 
                        zIndex: i,
                      }}
                    />
                  ))}
                <span className={`absolute left-1/2 -translate-x-1/2 mt-28  bg-white/70 rounded-2xl w-20 text-center font-serif text-nowrap text-sm font-bold z-50 ${resource.qty > 0 ? "" : "opacity-0"}`}>
                  {`${resource.name}${resource.qty > 1 ? ` x ${resource.qty}` : ""}`}
                </span>
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
