import { useLanguage } from "../context/LanguageContext.jsx";

const ANIM_MS = 220;

const AbilitiesCard = ({ openId, setOpenId }) => {
  const { myAbilities, UI_TEXTS } = useLanguage();
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
            className={`ability_card_base ${openId == card.id ? "ability_card_expanded" : abilityCardClass[card.id]}`}
          > 
            <div className={`ability_title text-2xl mx-auto transition-transform duration-700 ease-in-out ${openId == card.id ? "translate-y-0" : "translate-y-[50%]"}`}>
              <div className="cosmic_effect" style={{ "--color": "#23b1d8" }} data-text={card.title}>
                <span>{card.title}</span>
              </div>
            </div>
            <div className={openId == card.id ? "ability-card_content" : "hidden"}>
              <p className={
                openId == card.id ? 
                "ability-card_text fade-in-delay-1" 
                : "hidden"}>{card.desc}
              </p>
              <div className="absolute top-[1vh] right-[0.5vw] ">
                <button
                  className="w-10 h-10 text-2xl flex justify-center text-white/60"
                  aria-label={UI_TEXTS.common.close}
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
