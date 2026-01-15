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
      <div className="w-full h-full relative">
        {myAbilities.map((card) => (
          <div
            key={card.id}
            onClick={() => setOpenId(card.id)}
            className={`ability_card_base  ${openId == card.id ? "ability_card_expanded" : `ability_card_${card.id}`}`}
          >
            <h3 className="text-white text-lg font-semibold">{card.title}</h3>
            <p className="text-white/60 text-sm mt-2">Click para expandir…</p>
            <div className={openId == card.id ? "w-full h-full" : "hidden"}>
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
