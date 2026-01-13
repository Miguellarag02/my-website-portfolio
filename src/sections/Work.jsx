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
        <h3 className="head-text">My Work Experience</h3>
        <div className="work-container">
          {/* <div className="work-canvas">
            <Canvas>
              <ambientLight intensity={7} />
              <spotLight position={[10,10,10]} angle={0.15} penubra={0.1}/>
              <directionalLight position={[10,10,10]} intensity={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI/2} />
              <Suspense fallback={<CanvasLoader/>}>
                  <Target scale={0.01} />
              </Suspense>
            </Canvas>
          </div> */}
          <div className="work-content">
              <div className="sm:py-10 py-5 sm:px-5 px-2.5 max-h-[620px] overflow-y-auto pr-2 scrollbar-thin
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
                    <p className="group-hover:text-white transition ease-in-out duration-500">
                      {title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
