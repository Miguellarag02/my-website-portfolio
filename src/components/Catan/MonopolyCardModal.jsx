import {
    RESOURCE_CARDS, parseResources
} from "../../constants/CatanStates.js";
import { useState, useEffect } from "react";

const MonopolyCardModal = ({
    username,
    setRandomCard,
    playersInfo,
    setUsedRandomCard
}) => {
    const [selectedResource, setSelectedResource] = useState(0)

    const totals = playersInfo
        .filter(p => p.username !== username)
        .map(p => parseResources(p.resources))
        .flat()
        .reduce((acc, r) => {
            acc[r.id - 1] += r.qty;
            return acc;
    }, [0,0,0,0,0]);

    // Add two cards to user
    const addMonopolyResourcesCard = async () => {
        setUsedRandomCard(true);
        const response = await fetch("/api/catan/set_monopoly_card.php", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
        },
            body: JSON.stringify({ username, selectedResource}),
        })
        if (!response.ok){
            setUsedRandomCard(false);
        }
        setSelectedResource(0);
        setRandomCard(0);
    }

    useEffect(() => {
        console.log(totals)
    }, [playersInfo]) 

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm pointer-events-auto" />

            <div className="relative z-10 flex max-h-[90vh] w-full max-w-6xl flex-col gap-4 overflow-hidden rounded-3xl border border-white/40 bg-white/95 p-4 shadow-2xl backdrop-blur-sm sm:p-6 md:p-8 animate-fadeIn">
                
                <h2 className="text-center text-lg font-bold text-slate-900 sm:text-xl md:text-2xl">
                    Selecciona el recurso que deseas robar de todos los jugadores
                </h2>

                <div className="grid grid-cols-5 gap-8">
                    {Object.entries(RESOURCE_CARDS).map(([resourceId, resourceCard]) => (
                        <div className="relative w-full h-full" key={resourceId} onClick={() => {setSelectedResource == resourceId ? setSelectedResource(0) : setSelectedResource(resourceId) }}>
                            <img 
                                src={resourceCard}
                                alt={`resource-${resourceId}`}
                                className={`w-fit object-contain ${(selectedResource > 0) ? "" : "hover:scale-100 hover:opacity-100"} transition-all ${selectedResource == resourceId ? "scale-100 opacity-100 border-8 border-green-500 rounded-3xl" : "scale-90 opacity-75"}`}
                            />
                            <p className="relative text-center bg-green-300/50 rounded-full text-xl">{`+${totals[resourceId-1]}`}</p>
                        </div>
                    ))}
                </div>
                <div className="relative flex gap-2 items-center justify-center w-full">
                    {selectedResource > 0 && (
                        <button
                            onClick={() => addMonopolyResourcesCard(selectedResource)}
                            className="mt-2 self-center rounded-xl bg-green-600 px-6 py-2.5 font-semibold text-white transition hover:scale-105 hover:bg-green-700"
                        >
                            Aceptar
                        </button>
                    )}
                </div>

                <button
                    onClick={() => setRandomCard(0)}
                    className="absolute top-2 right-2 scale-100 hover:scale-125 text-2xl flex h-8 w-8 items-center justify-center rounded-full bg-red-300 text-red-900 font-bold hover:bg-red-400 transition"
                >
                    ×
                </button>
            </div>
        </div>
    );
};

export default MonopolyCardModal;
