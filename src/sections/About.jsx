import { useState } from "react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AboutMe } from "../constants";
import AbilitiesCard from "../components/AbilitiesCard.jsx";

gsap.registerPlugin(ScrollTrigger);
const cardItems = {
      HOBBIES: 0,
      ABOUT: 1,
      ABILITIES: 2
  };

const About = () => {
  const cardPositions = {
    0: "card-inactive card-left",
    1: "card card-active",
    2: "card-inactive card-right",
  };

  const cardContent = {
    0: "pointer-events-none",
    1: "pointer-events-auto",
    2: "pointer-events-none",
  };
  const [cardStates, setCardStates] = useState([0, 1, 2]);


  function rotate(e, goRight, cardItem ) {
    // Check if the card is the active one, in case ignore click event
    if (cardStates[cardItem] != 1){
      setCardStates((prev) => {
        if (prev.length === 0) return prev;
        if (goRight) return [prev[prev.length - 1], ...prev.slice(0, -1)];
        return [... prev.slice(1), prev[0]];
      });
    }
  }




  return (
    <div className="z-10 absolute inset-x-0 lg:top-[15%] md:top-[7%] top-[15%] bottom-28 flex-grow fade-in overflow-hidden">
      <ul className="relative min-h-screen py-10 perspective-1200 preserve-3d">
          {/* My Hobbies */}
          <li className={`card ${cardPositions[cardStates[cardItems.HOBBIES]]}`} onClick={(e) => rotate(e, cardStates[cardItems.HOBBIES] > cardStates[cardItems.ABOUT], cardItems.HOBBIES)}>
            <p className="card_tag text-gray">My Hobbies </p>
          </li>

          {/* About Me */}
          <li className={`grid grid-rows-8 card ${cardPositions[cardStates[cardItems.ABOUT]]}`} onClick={(e) => rotate(e, cardStates[1] > cardStates[cardItems.ABILITIES], cardItems.ABOUT)}>
            <p className="card_tag text-gray row-span-2">
              About Me <span className="waving-hand">👋</span>
            </p>
            <div className="flex items-center justify-center xl:row-span-3 row-span-2">
              <div className="avatar-frame">
                <div className="w-full h-full rounded-full overflow-hidden bg-zinc-900">
                  <img
                    src="/assets/me.png"
                    alt="Foto de perfil"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center
                md:text-base sm:text-xs text-[10px]
                leading-relaxed
                text-justify
                xl:row-span-3 row-span-4
                mx-10">
              <p className="max-w-prose">
                {AboutMe.description}
              </p>
            </div>
          </li>

          {/* My Abilities */}
          <li className={`grid grid-rows-12 card ${cardPositions[cardStates[cardItems.ABILITIES]]}`} onClick={(e) => rotate(e, cardStates[cardItems.ABILITIES] > cardStates[cardItems.HOBBIES], cardItems.ABILITIES)}>
            <p className="card_tag text-gray row-span-2">My Abilities</p>
            <div className={`md:row-span-6 row-span-10 z-100 md:mr-8 md:ml-8 md:mb-0 mb-6 ${cardContent[cardStates[cardItems.ABILITIES]]}`} >
              <AbilitiesCard closedAbilitiesTab={cardStates[cardItems.ABILITIES] != 1}/>
            </div>
            <div className="relative md:row-span-4 md:flex hidden items-center justify-center mb-4 mr-10 ml-10 border rounded-lg border-x-teal-200">
              <p>Items volando</p>
            </div>
          </li>
      </ul>
      <div className="fixed top-[14vh] 2xl:right-[20vw] right-[5vw] z-[9999]">
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
  );
};

export default About;
