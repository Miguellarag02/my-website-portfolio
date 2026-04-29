import {
    PLAYER_COLORS,
    RESOURCE_CARDS,
    RESOURCE_ICONS,
    parseResources,
    toVeryLightColor,
} from "../../constants/CatanStates.js";
import { useLanguage } from "../../context/LanguageContext.jsx";

const ThiefPlayerModal = ({
    username,
    thiefCandidatePlayers,
    stealedResources,
    selectedThiefPlayerId,
    setSelectedThiefPlayerId,
    onTakeCard,
    onAccept,
}) => {
    const { UI_TEXTS } = useLanguage();
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm pointer-events-auto" />

            <div className="relative z-10 flex max-h-[90vh] w-full max-w-6xl flex-col gap-4 overflow-hidden rounded-3xl border border-white/40 bg-white/95 p-4 shadow-2xl backdrop-blur-sm sm:p-6 md:p-8 animate-fadeIn">
                <h2 className="text-center text-lg font-bold text-slate-900 sm:text-xl md:text-2xl">
                    {UI_TEXTS.catan.thiefPlayerTitle}
                </h2>

                {stealedResources == 0 && (
                    <div className="grid w-full h-full grid-cols-1 gap-3 overflow-y-auto sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4 ">
                        {thiefCandidatePlayers.map((playerInfo) => {
                            return (
                                <div
                                    key={`To_be_thief_${playerInfo.username}`}
                                    className={`grid min-w-0 grid-cols-[88px,1fr] gap-3 rounded-2xl border-black/5 p-3 shadow-sm sm:grid-cols-[104px,1fr] sm:p-4 border-8 scale-90 hover:scale-100 transition-all ${playerInfo.username == username ? "grayscale pointer-events-none" : selectedThiefPlayerId == playerInfo.id ? "border-dotted scale-95" : " border-black-100 border-double"}`}
                                    style={{ backgroundColor: toVeryLightColor(PLAYER_COLORS[playerInfo.color]) }}
                                    onClick={() => {
                                        setSelectedThiefPlayerId(playerInfo.id);
                                    }}
                                >
                                    <div className="relative flex flex-col items-center">
                                        <img
                                            src={playerInfo.user_image || "/assets/default-profile.png"}
                                            onError={(e) => {
                                                e.currentTarget.src = "/assets/default-profile.png";
                                            }}
                                            alt="User profile"
                                            className="mt-1 h-16 w-16 rounded-full object-cover sm:mt-2 sm:h-20 sm:w-20"
                                            style={{ border: `3px solid ${PLAYER_COLORS[playerInfo.color]}` }}
                                        />
                                        <p className="mt-2 max-w-full break-words text-center text-xs font-semibold tracking-tight text-slate-800 sm:text-sm">
                                            {playerInfo.username}
                                        </p>
                                    </div>
                                    <div className="relative grid content-start gap-1.5">
                                        {parseResources(playerInfo.resources).map((resource) => (
                                            <div
                                                key={`${playerInfo.username}-${resource.id}`}
                                                className="flex items-center gap-1.5 rounded-lg bg-white/35 px-2 py-1 text-slate-800"
                                            >
                                                <div
                                                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/60 transition ${
                                                        resource.qty > 0
                                                            ? "opacity-100"
                                                            : "bg-white/30 opacity-40 grayscale scale-90"
                                                    }`}
                                                >
                                                    <img
                                                        src={RESOURCE_ICONS[resource.id]}
                                                        alt={resource.name}
                                                        className="h-6 w-6 object-contain"
                                                    />
                                                </div>
                                                <span
                                                    className={`text-sm text-slate-700/80 ${
                                                        resource.qty > 0 ? "opacity-100" : "opacity-0"
                                                    }`}
                                                >
                                                    x
                                                </span>
                                                <span
                                                    className={`text-sm font-semibold text-slate-900 ${
                                                        resource.qty > 0 ? "opacity-100" : "opacity-0"
                                                    }`}
                                                >
                                                    {resource.qty}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

                {stealedResources != 0 && (
                    <div className="w-full h-full grid-cols-1 justify-center gap-4 flex flex-row">
                        <img
                            className="w-28"
                            src={
                                stealedResources != 6
                                    ? RESOURCE_CARDS[stealedResources]
                                    : "assets/catan/cards/random_card.png"
                            }
                        />
                        <span className="font-sans font-bold items-center mt-8">
                            {stealedResources == 6 ? UI_TEXTS.catan.thiefStealing : UI_TEXTS.catan.thiefStolen}
                        </span>
                    </div>
                )}

                <div className="relative flex gap-2 items-center justify-center w-full">
                    {stealedResources == 0 && (
                        <button
                            onClick={() => {
                                if (selectedThiefPlayerId) onTakeCard(selectedThiefPlayerId);
                            }}
                            className={`mt-2 self-center rounded-xl bg-blue-600 px-6 py-2.5 font-semibold text-white transition hover:scale-105 hover:bg-blue-700 ${selectedThiefPlayerId != 0 ? "" : "bg-white-500 text-black-100 pointer-events-none"}`}
                        >
                            {UI_TEXTS.catan.thiefAction}
                        </button>
                    )}

                    {stealedResources != 0 && (
                        <button
                            onClick={onAccept}
                            className="mt-2 self-center rounded-xl bg-green-600 px-6 py-2.5 font-semibold text-white transition hover:scale-105 hover:bg-green-700"
                        >
                            {UI_TEXTS.catan.accept}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ThiefPlayerModal;
