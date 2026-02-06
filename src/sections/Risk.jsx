import { useState, Suspense, useEffect } from "react";
import { useResponsiveFlags } from "../constants/index.js";
import { calculateSizes, calculateCameraPositions } from "../constants/index.js";

export default function Hero() {
    return (
        <section className="min-h-screen w-full flex flex-col">
            <div className="w-full h-full absolute inset-0">
                <a href="/games" className="absolute top-4 left-4 z-20 px-4 py-2 rounded-full border border-white/30 bg-black/50 text-white text-sm font-semibold backdrop-blur-sm hover:border-white/70 hover:bg-black/70 transition" >
                    Exit
                </a>
                <p className="absolute top-4 right-4 z-20 px-4 py-2 rounded-full border border-white/30 bg-black/50 text-white text-sm font-semibold backdrop-blur-sm">
                    In progress...
                </p>
            </div>
        </section>
    );
}
