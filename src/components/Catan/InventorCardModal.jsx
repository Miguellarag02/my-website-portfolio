import {
    RESOURCE_CARDS,
} from "../../constants/CatanStates.js";
import { useState } from "react";

const InventorCardModal = ({
    username,
    setRandomCard,
    setUsedRandomCard
}) => {
    const [selectedResources, setSelectedResources] = useState([0, 0])

    // Add two cards to user
    const addInventorResourcesCard = async () => {
        setUsedRandomCard(true);
        const response = await fetch("/api/catan/set_inventors_card.php", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
        },
            body: JSON.stringify({ username, selectedResources}),
        })
        if (!response.ok){
            setUsedRandomCard(false);
        }
        setSelectedResources(0,0)
        setRandomCard(0)
    }

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm pointer-events-auto" />

            <div className="relative z-10 flex max-h-[90vh] w-full max-w-6xl flex-col gap-4 overflow-hidden rounded-3xl border border-white/40 bg-white/95 p-4 shadow-2xl backdrop-blur-sm sm:p-6 md:p-8 animate-fadeIn">
                <h2 className="text-center text-lg font-bold text-slate-900 sm:text-xl md:text-2xl">
                    Selecciona los recursos que deseas tomar
                </h2>

                <div className="grid grid-cols-5 gap-8">
                    {Object.entries(RESOURCE_CARDS).map(([resourceId, resourceCard]) => (
                        <div className="relative w-full h-full" key={resourceId} onClick={() => {selectedResources[0] > 0 ? selectedResources[1] > 0 ? console.log("Nothing") : setSelectedResources([selectedResources[0], resourceId]) : setSelectedResources([resourceId, selectedResources[1]]) }}>
                            <img 
                                src={resourceCard}
                                alt={`resource-${resourceId}`}
                                className={`w-fit object-contain ${(selectedResources[0] > 0 && selectedResources[1] > 0) ? "" : "hover:scale-110 hover:opacity-100"} transition-all ${selectedResources[0] == resourceId || selectedResources[1] == resourceId ? "scale-100 opacity-100 border-8 border-green-500 rounded-3xl" : "scale-90 opacity-75"}`}
                            />
                            {selectedResources[0] == resourceId && selectedResources[0] == selectedResources[1] &&
                            <p className="relative text-center bg-green-300/50 rounded-full text-xl">+2</p>
                            }
                        </div>
                    ))}
                </div>
                <div className="relative flex gap-2 items-center justify-center w-full">
                    {selectedResources[0] > 0 && selectedResources[1] > 0 && (
                        <button
                            onClick={() => addInventorResourcesCard(selectedResources)}
                            className="mt-2 self-center rounded-xl bg-green-600 px-6 py-2.5 font-semibold text-white transition hover:scale-105 hover:bg-green-700"
                        >
                            Aceptar
                        </button>
                    )}
                    {(selectedResources[0] > 0 || selectedResources[1] > 0) && (
                        <button
                            onClick={() => setSelectedResources([0,0])}
                            className="mt-2 self-center rounded-xl bg-red-600 px-6 py-2.5 font-semibold text-white transition hover:scale-105 hover:bg-red-700"
                        >
                            Clear
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

export default InventorCardModal;
