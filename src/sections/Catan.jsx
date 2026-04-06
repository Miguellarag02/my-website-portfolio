import { useState, Suspense, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useAuth } from "../context/AuthContext.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
import { PerspectiveCamera} from "@react-three/drei";
import { useResponsiveFlags } from "../constants/index.js";
import CatanCamera from "../components/Catan/Camera.jsx"
import CatanMap from "../components/Catan/Map.jsx";
import PlayersInfo from "../components/Catan/PlayersInfo.jsx";
import UserInfo from "../components/Catan/UserInfo.jsx"
import ThiefPlayerModal from "../components/Catan/ThiefPlayerModal.jsx";
import InventorCardModal from "../components/Catan/InventorCardModal.jsx";
import MonopolyCardModal from "../components/Catan/MonopolyCardModal.jsx";
import VictoryPanel from "../components/Catan/VictoryPanel.jsx"
import { CAMERA_STATES, calculateCatanSizes, calculateCatanCameraPositions } from "../constants/CatanStates.js";
import DiceWorld from "../components/Catan/Dice.jsx";

const Catan = () => {
    const { username } = useAuth();
    const [selectedBuildId, setSelectedBuildId] = useState(0);
    const [victoryPlayer, setVictoryPlayer] = useState([]);

    // Camera controls
    const [openPlayerInfo, setOpenPlayerInfo] = useState(false);
    const [openBuildInfo, setOpenBuildInfo] = useState(false);
    const [frontCamera, setFrontCamera] = useState(false);
    const [cameraState, setCameraState] = useState(CAMERA_STATES.NORMAL);

    // User information
    const [userResources, setUserResources] = useState([]);
    const [tradeNotification, setTradeNotification] = useState([])
    const [playersInfo, setPlayersInfo] = useState([]);
    const [pendingTrades, setPendingTrades] = useState([]);
    const [userBonus, setUserBonus] = useState([]);

    // Dice controls
    const [throwDice, setThrowDice ] = useState(false)
    const [dice1Number, setDice1Number] = useState(0)
    const [dice2Number, setDice2Number] = useState(0)
    const dice1NumberRef = useRef(0)
    const dice2NumberRef = useRef(0)

    // Thief controls
    const [moveThief, setMoveThief] = useState(false);
    const [allowThief, setAllowThief] = useState(false);
    const [thiefPlayers, setThiefPlayers] = useState([]);
    const [selectedThiefPlayerId, setSelectedThiefPlayerId] = useState(0);
    const [stealedResources, setStealedResources] = useState(0);

    // Random cards controls
    const [randomCard, setRandomCard] = useState(0)
    const [usedRandomCard, setUsedRandomCard] = useState(false)
    const [buildRoads, setBuildRoads] = useState(false)

    // Match controls
    const [gameMatch, setGameMatch] = useState({})
    const [isPlayerTurn, setIsPlayerMatch] = useState(false)

    useEffect(() => {
        dice1NumberRef.current = dice1Number
    }, [dice1Number])

    useEffect(() => {
        dice2NumberRef.current = dice2Number
    }, [dice2Number])

    // Sizing
    const { isSmall, isMobile, isTablet, isUltraWide } = useResponsiveFlags();
    const sizes = calculateCatanSizes(isSmall, isMobile, isTablet, isUltraWide);
    
    const setDiceResult = async (diceResult) => {
        const response = await fetch("/api/catan/set_dice_results.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, diceResult }),
        })
        const data = await response.json();
        setThrowDice(false)
        if (!response.ok || !data.ok) {
            console.error("Set dice result failed:", data);
            return;
        }
    }

    // Delete Dice
    useEffect(() => {
        if (!throwDice) return;

        const timeout = setTimeout(() => {
            // Check result number
            console.log(`${dice1NumberRef.current} y ${dice2NumberRef.current} `)
            if (dice1NumberRef.current < 1 || dice1NumberRef.current > 6){
                console.log(`Dice 1 cannot be readed, retry `)
                setThrowDice(false)
            } else if (dice2NumberRef.current < 1 || dice2NumberRef.current > 6){
                console.log(`Dice 2 cannot be readed, retry `)
                setThrowDice(false)
            }
            else {
                // The dices have been readed
                const diceResult = dice1NumberRef.current + dice2NumberRef.current;
                setUsedRandomCard(false);
                if(diceResult == 7){
                    // Move thief
                    setAllowThief(true);
                    setMoveThief(false);
                } else {
                    // We ask to the database to add the resources
                    setDiceResult(diceResult);
                }
            }

        }, 6000)

        return () => clearTimeout(timeout)
    }, [throwDice])

    // Change camera position
    useEffect(() => {
        if (openPlayerInfo) {
            setCameraState(
            frontCamera
                ? CAMERA_STATES.MOVED_FRONT
                : CAMERA_STATES.MOVED
            );
        } else {
            setCameraState(
            frontCamera
                ? CAMERA_STATES.FRONT
                : CAMERA_STATES.NORMAL
            );
        }
    }, [openPlayerInfo, frontCamera]);

    // Control randomCard actions
    useEffect(() => {
         console.log("Selecting...")
        if (randomCard === 2) {
            // Move thief
            setAllowThief(true);
            setMoveThief(false);
            setUsedRandomCard(true);
        }
        else if (randomCard === 4){
            setBuildRoads(true);
            setOpenBuildInfo(false);
            setRandomCard(0);
            setUsedRandomCard(true);
        }
    }, [randomCard])

    // Take a card from other player
    const takeCardFromPlayer = async (stealPlayerId) => {
        setSelectedThiefPlayerId(0);
        setStealedResources(6);
        const activatedKnight = (randomCard === 2);
        const response = await fetch("/api/catan/take_card_player.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, stealPlayerId, activatedKnight }),
        })
        const data = await response.json();
        if (!response.ok || !data.ok) {
            console.error("Steal card had an error:", data);
            return;
        }
        else {
            if (data.stolenResourceId == 0) {
                setThiefPlayers([])
            }
            setStealedResources(data.stolenResourceId);
        }
        setRandomCard(0);
    }

    const thiefCandidateIds = Array.isArray(thiefPlayers)
        ? thiefPlayers
            .map((player) => Number(player?.id ?? player))
            .filter((id) => Number.isFinite(id) && id > 0)
        : [];

    const thiefCandidatePlayers = playersInfo.filter((playerInfo) =>
        thiefCandidateIds.includes(Number(playerInfo.id)) || playerInfo.username == username
    );

    return (
        <section className="min-h-screen w-full flex flex-col">
             {victoryPlayer.id > 0 && (
                <VictoryPanel victoryPlayer={victoryPlayer}/>
            )}
            {thiefCandidateIds.length > 0 && (
                <ThiefPlayerModal
                    username={username}
                    thiefCandidatePlayers={thiefCandidatePlayers}
                    stealedResources={stealedResources}
                    selectedThiefPlayerId={selectedThiefPlayerId}
                    setSelectedThiefPlayerId={setSelectedThiefPlayerId}
                    onTakeCard={takeCardFromPlayer}
                    onAccept={() => setThiefPlayers([])}
                />
            )}
            {randomCard === 5 && (
                <InventorCardModal
                    username={username}
                    setRandomCard={setRandomCard}
                    setUsedRandomCard={setUsedRandomCard}
                />
            )}
            {randomCard === 3 && (
                <MonopolyCardModal
                    username={username}
                    setRandomCard={setRandomCard}
                    playersInfo={playersInfo}
                    setUsedRandomCard={setUsedRandomCard}
                />
            )}
            <div className="w-full h-full absolute inset-0">
                <div className="flex flex-col h-2/3 w-1/3">
                    <a href="/games" className="relative w-fit top-2 left-2 z-20 px-4 py-2 rounded-full border border-white/30 bg-black/50 text-white text-sm font-semibold backdrop-blur-sm hover:border-white/70 hover:bg-black/70 transition" >
                        Exit game
                    </a>
                    <button
                        type="button"
                        onClick={() => setFrontCamera((prev) => !prev)}
                        className="relative mt-4 ml-4 w-24 h-fit z-50 rounded-xl border border-black/30 bg-white/10 hover:scale-110 hover:bg-black/10 transition-all duration-300 ease-in-out"
                    >
                        <img
                            src={frontCamera ? "/assets/camera_perspective_icon.png" : "/assets/camera_front_icon.png"}
                            alt="Toggle camera view"
                        />
                    </button>
                    <div className="flex flex-row ml-1 mt-2 gap-4 w-full">
                        <img
                            src="/assets/catan/cards/ruta_comercial.png"
                            className={`w-28 ${userBonus.largest_path ? "opacity-100" : "grayscale opacity-60"}`}
                        />
                        <img
                            src="/assets/catan/cards/mayor_ejercito.png"
                            className={`w-28 ${userBonus.biggest_army ? "opacity-100" : "grayscale opacity-60"}`}

                        />
                    </div>
                    <div className="flex flex-row ml-1 mt-2 w-full">
                        {Array.from({ length: userBonus.actives_knights }).map((_, i) => (
                            <img
                                key={i}
                                src={"assets/catan/cards/knight.png"}
                                alt="actives_knights"
                                className="relative left-0 top-0 w-16 select-none"
                                style={{
                                    transform: `translate(${i * -16}px, ${i * 0}px)`,
                                    zIndex: i,
                                }}
                            />
                        ))}
                    </div>
                    <div className={`relative mt-4 flex items-center gap-2 rounded-full border-2 border-red-700 scale-100 opacity-100 h-14 bg-red-700/20 overflow-hidden transition-all duration-1000 ease-out ${userBonus.extra_points > 0 ? "w-36" : "w-28"}`}>
                        <img
                        src="/assets/catan/cards/punto.png"
                        className="left-0 h-full w-14 shrink-0 object-contain"
                        />
                        <span className={`font-black text-red-600 animate-pulse drop-shadow-xl  text-3xl`}>
                        {`${userBonus.points}${userBonus.extra_points > 0 ? `+${userBonus.extra_points}` : "" }`}
                        </span>
                    </div>
                </div>
                <div className="absolute inset-0 w-full h-full">
                    <Canvas className="w-full h-full flex-grow">
                        <Suspense fallback={<CanvasLoader />}>
                            <PerspectiveCamera makeDefault position={[8, 11, 12]} />
                            <CatanCamera cameraState={cameraState} cameraPos={calculateCatanCameraPositions(cameraState, isSmall, isMobile, isTablet, isUltraWide).pos} cameraTarget={sizes.cameraTarget}>
                                <CatanMap
                                    scale={sizes.mapScale}
                                    position={sizes.mapPos}
                                    rotation={sizes.mapRot}
                                    buildId={selectedBuildId}
                                    setBuildId={setSelectedBuildId}
                                    moveThief={moveThief}
                                    setAllowThief={setAllowThief}
                                    setMoveThief={setMoveThief}
                                    gameMatch={gameMatch}
                                    setThiefPlayers={setThiefPlayers} 
                                    buildRoads={buildRoads}
                                    setBuildRoads={setBuildRoads}
                                />
                                <DiceWorld
                                  renderDice={throwDice}
                                  diceKeyNumber={1}
                                  dicePosition={[7, 4, 8]}
                                  onRotationChange={(number) => {
                                    setDice1Number(number)
                                  }}
                                />
                                <DiceWorld
                                  renderDice={throwDice}
                                  diceKeyNumber={2}
                                  dicePosition={[9, 4, 2]}
                                  onRotationChange={(number) => {
                                    setDice2Number(number)
                                  }}
                                />
                            </CatanCamera>
                            <ambientLight intensity={1.0} />
                            <directionalLight position={[4000, 1000, 4000]} intensity={2} />
                        </Suspense>
                    </Canvas>
                    <PlayersInfo 
                        open={openPlayerInfo} 
                        setOpen={setOpenPlayerInfo} 
                        userResources={userResources}
                        playersInfo={playersInfo}
                        setPlayersInfo={setPlayersInfo}
                        pendingTrades={pendingTrades}
                        gameMatch={gameMatch}
                        isPlayerTurn={isPlayerTurn}
                    />
                    <UserInfo
                        open={openBuildInfo} 
                        setOpen={setOpenBuildInfo} 
                        selectedBuildId={selectedBuildId} 
                        setSelectedBuildId={setSelectedBuildId} 
                        userResources={userResources} 
                        setUserResources={setUserResources} 
                        tradeNotification={tradeNotification}
                        setTradeNotification={setTradeNotification}
                        playersInfo={playersInfo}
                        setPendingTrades={setPendingTrades}
                        throwDice={throwDice}
                        setThrowDice={setThrowDice}
                        setMoveThief={setMoveThief}
                        allowThief={allowThief}
                        gameMatch={gameMatch}
                        setGameMatch={setGameMatch}
                        setIsPlayerMatch={setIsPlayerMatch}
                        setVictoryPlayer={setVictoryPlayer}
                        setUserBonus={setUserBonus}
                        setRandomCard={setRandomCard}
                        buildRoads={buildRoads}
                        usedRandomCard={usedRandomCard}
                    />
                </div>
            </div>
        </section>
    );
}

export default Catan;
