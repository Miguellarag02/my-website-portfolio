
const VictoryPanel = ({victoryPlayer}) => {
    const stats = [
        { icon: "/assets/catan/town_icon.png", value: victoryPlayer.townPoints },
        { icon: "/assets/catan/city_icon.png", value: victoryPlayer.cityPoints },
        { icon: "/assets/catan/cards/point_card.png", value: victoryPlayer.cardPoints },
        { icon: "/assets/catan/cards/ruta_comercial.png", value: victoryPlayer.largestPath*2 },
        { icon: "/assets/catan/cards/mayor_ejercito.png", value: victoryPlayer.biggestArmy*2 },
        { icon: null, value: "=" },
        { icon: "/assets/catan/cards/punto.png", value: 10 },
    ];
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm pointer-events-auto" />
        <div className="relative z-10 flex max-h-[90vh] w-full max-w-6xl flex-col gap-4 overflow-hidden rounded-3xl border border-white/40 bg-white/95 p-4 shadow-2xl backdrop-blur-sm sm:p-6 md:p-8 animate-fadeIn">
            <h2 className="text-center text-lg font-bold text-slate-900 sm:text-xl md:text-2xl">
                {`Victoria para el jugador ${victoryPlayer.name}`}
            </h2>
            <div className="mx-16 grid grid-cols-7 gap-8">
            {stats.map((item, i) => {
                const isPositiveNumber =
                typeof item.value === "number" && item.value > 0;

                const isMuted =
                item.value === 0 || item.value === "=";

                return (
                <div
                    key={i}
                    className="flex h-44 w-24 flex-col items-center justify-between"
                >
                    {/* ICON AREA */}
                    <div className="flex h-20 w-full items-center justify-center">
                    {item.icon ? (
                        <img
                        src={item.icon}
                        alt=""
                        className="h-20 w-20 object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)]"
                        />
                    ) : (
                        <div className="h-12 w-12" />
                    )}
                    </div>

                    {/* SEPARATOR */}
                    <div className="h-px w-16 bg-black/80" />

                    {/* VALUE AREA */}
                    <div className="flex h-20 items-center justify-center">
                    <span
                        className={[
                        "min-w-[3rem] text-center text-3xl font-extrabold tracking-tight transition-all duration-200",
                        isPositiveNumber
                            ? "scale-100 text-lime-500 drop-shadow-[0_0_10px_rgba(132,204,22,0.35)]"
                            : "",
                        isMuted
                            ? "text-gray-700"
                            : "",
                        ].join(" ")}
                    >
                        {item.value}
                    </span>
                    </div>
                </div>
                );
            })}
            </div>                        
        </div>
    </div>
  );
}

export default VictoryPanel;