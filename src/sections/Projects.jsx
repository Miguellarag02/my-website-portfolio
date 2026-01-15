import { STATES } from "../constants/HeroRoutes.js"
import React from "react";
import { myProjects } from "../constants/index.js";
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader.jsx";
import DemoComputer from "../components/DemoComputer.jsx";
import { Suspense } from "react";
import PdfViewer from "../components/PdfViewer.jsx";

export default function Projects({ selectedProjectIndex, setSelectedProjectIndex }) {
  const projectsLength = myProjects.length;

  const handleNavigation = (direction) => {
      setSelectedProjectIndex(prevIndex => {
          if (direction === 'previous'){
              return prevIndex === 0 ? projectsLength - 1 : prevIndex - 1;
          } else if (direction === 'next'){
              return prevIndex === projectsLength - 1 ? 0 : prevIndex + 1;
          }
          return prevIndex;
      });
  }
  const currentProject = myProjects[selectedProjectIndex];

  return (
    <section className= "c-space lg:ml-12 md:mt-48 mt-[15vh] z-10 fade-in">
      <div className= "flex">
          <h3 className="head-text">My Projects</h3>
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
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-84 gap-5 w-full">
          <div className="flex flex-col gap-3 relative sm:p-10 md:py-10 py-4 px-3 shadow-black-200">
                <div className="flex flex-row items-center gap-3">
                    <div className="p-3 backdrop-filter backdrop-blur-3xl rounded-lg" style={currentProject.logoStyle}>
                        <img src={currentProject.logo} alt="logo" className="w-fit shadow-sm object-cover"/>
                    </div>
                    <p className="text-white md:text-xl sm:text-xl text-sm font-semibold animatedText">{currentProject.title}</p>
                </div>
                <div className="flex flex-col gap-3 text-sm text-white-600 md:my-5 ">
                    <p className="whitespace-pre-line text-justify animatedText xl:max-h-[30vh] max-h-[25vh] overflow-y-auto scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent hover:scrollbar-thumb-white/50">{currentProject.desc}</p>
                    <div className="flex items-center justify-between flex-wrap gap-5">
                        <div className="flex items-center gap-3">
                            {currentProject.tags.map((tag, index) => (
                                <div key={index} className="tech-logo">
                                    <img src={tag.path} alt={tag.name}></img>
                                </div>
                            ))}
                        </div>
                        <a className="flex items-center gap-2 cursor-pointer text-white-600" href={currentProject.href} target="_blank" rel="noreferrer">
                            <p>{currentProject.checkLinkTxt}</p>
                            <img src="/assets/arrow-up.png" className="w-3 h-3" alt="arrow"/>
                        </a>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <button className="arrow-btn" onClick={() => {handleNavigation('previous')}}>
                        <img src="/assets/left-arrow.png" alt="left-arrow" className="w-4 h-4"/>
                    </button>
                    <button className="arrow-btn" onClick={() => {handleNavigation('next')}}>
                        <img src="/assets/right-arrow.png" alt="right-arrow" className="w-4 h-4"/>
                    </button>
                </div>
            </div>
            <div className="border border-black-300 bg-black-200 rounded-lg h-[60vh] my-2 lg:block hidden">
                <PdfViewer pdfLink={currentProject.extraInformation ?? currentProject.href} />
            </div>
        </div>
    </section>
  );
}
