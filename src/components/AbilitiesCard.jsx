import { useEffect, useMemo, useState } from "react";
import { myAbilities } from "../constants";

const ANIM_MS = 220;

const AbilitiesCard = (closedAbilitiesTab) => {
  const [openId, setOpenId] = useState(0);
  const abilityCardClass = {
	1: "ability_card_1",
	2: "ability_card_2",
	3: "ability_card_3",
	4: "ability_card_4",
	};

  const close = () => {
    window.setTimeout(() => {
      setOpenId(0);
    }, ANIM_MS);
  };

  return (
    <div className="relative w-full h-full">
      {/* Grid base */}
      <div className="w-full h-full relative perspective-1200 preserve-3d">
        {myAbilities.map((card) => (
          <div
            key={card.id}
            onClick={() => setOpenId(card.id)}
            className={`ability_card_base ${openId == card.id ? "ability_card_expanded" : `ability_card_${card.id}`}`}
          > 
            <div className={`ability_title text-2xl mx-auto transition-transform duration-700 ease-in-out ${openId == card.id ? "translate-y-0" : "translate-y-[50%]"}`}>
              <div className="cosmic_effect" style={{ "--color": "#23b1d8" }} data-text={card.title}>
                <span>{card.title}</span>
              </div>
            </div>
            <div className={openId == card.id ? "w-full h-full" : "hidden"}>
              <p className={
                openId == card.id ? 
                "text-white/60 items-center justify-center 2xl:text-sm md:text-xs text-[10px] mt-2 leading-relaxed whitespace-pre-line font-semibold fade-in-delay-1" 
                : "hidden"}>{card.desc}
              </p>
              <div className="absolute top-[1vh] right-[0.5vw] ">
                <button
                  className="w-10 h-10 text-2xl flex justify-center text-white/60"
                  aria-label="Close"
                  onClick={close}
                >
                ✕
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AbilitiesCard;
