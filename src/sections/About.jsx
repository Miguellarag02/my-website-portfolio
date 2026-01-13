import { useState } from "react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const cardPositions = {
    0: "card-inactive card-left",
    1: "card card-active",
    2: "card-inactive card-right",
  };
  const [cardStates, setCardStates] = useState([0, 1, 2]);


  function rotate( goRight ) {
    setCardStates((prev) => {
      if (prev.length === 0) return prev;
      if (goRight) return [prev[prev.length - 1], ...prev.slice(0, -1)];
      return [... prev.slice(1), prev[0]];
    });
  }


  return (
    <div className="z-10 absolute inset-x-0 top-28 bottom-28 flex-grow fade-in">
      <ul className="relative h-full py-10 perspective-1200 preserve-3d">
          {/* My Hobbies */}
          <li className={`card ${cardPositions[cardStates[0]]}`} onClick={() => rotate(cardStates[0] > cardStates[1])}>
            <p className="card_tag text-gray">My Hobbies </p>
          </li>

          {/* About Me */}
          <li className={`grid grid-rows-4 card ${cardPositions[cardStates[1]]}`} onClick={() => rotate(cardStates[1] > cardStates[2])}>
            {/* Fila 1: título */}
            <p className="card_tag text-gray row-span-1">
              About Me <span className="waving-hand">👋</span>
            </p>

            {/* Filas 2 y 3: imagen centrada */}
            <div className="flex items-center justify-center">
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
          </li>

          {/* My Abilities */}
          <li className={`card ${cardPositions[cardStates[2]]}`} onClick={() => rotate(cardStates[2] > cardStates[0])}>
            <p className="card_tag text-gray">My Abilities</p>
          </li>
      </ul>
    </div>
  );
};

export default About;
