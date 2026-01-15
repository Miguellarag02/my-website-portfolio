import { STATES } from "../constants/HeroRoutes.js"
import { workExperiences } from "../constants/index.js"
import { Canvas } from "@react-three/fiber"
import CanvasLoader from "../components/CanvasLoader.jsx"
import Target from "../components/Target.jsx"
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

export default function Work() {

  return (
    <section className="c-space lg:ml-12 md:mt-48 mt-36 z-10 fade-in">
      <div className="w-full text-white-600">
        <div className= "flex">
          <h3 className="head-text">My Work Experience</h3>
          <div className="ml-auto z-[9999]">
            <a href="#home" className="w-fit">
                <button
                    className="close_button"
                    aria-label="Close"
                >
                ✕
                </button>
            </a>
          </div>
        </div>
        <div className="work-container">
          <div className="sm:py-10 py-5 sm:px-5 px-0.5 w-fit lg:max-h-[62vh] sm:max-h-[48vh] max-h-[44vh] overflow-y-auto pr-2 scrollbar-thin
                scrollbar-thumb-white/30
                scrollbar-track-transparent
                hover:scrollbar-thumb-white/50">
            {workExperiences.map(({id, name, pos, icon, duration, title}) => (
              <div key={id} className="work-content_container group">
                <div className="flex flex-col h-full justify-start items-center py-2">
                  <div className="work-content_logo">
                    <img src={icon} alt="logo" className="w-full h-full"/>
                  </div>
                  <div className="work-content_bar"/>
                </div>
                <div className="sm:p-5 px-2.5 py-5">
                  <p className="font-bold text-white-800">{name}</p>
                  <p className="text-sm mb-5">{pos} -- {duration}</p>
                  <p className="group-hover:text-white sm:text-lg text-xs transition ease-in-out duration-500">
                    {title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
