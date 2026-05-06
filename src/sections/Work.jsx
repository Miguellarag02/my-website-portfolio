import { useLanguage } from "../context/LanguageContext.jsx";
import { PROFILE_LINKS } from "../constants/index.js";

export default function Work() {
  const { workExperiences, UI_TEXTS } = useLanguage();

  return (
    <section className="c-space lg:ml-12 md:mt-48 mt-36 z-10 fade-in">
      <div className="w-full text-white-600">
        <div className= "flex">
          <h3 className="head-text">{UI_TEXTS.work.title}</h3>
          <div className="ml-auto z-[9999]">
            <a href="#home" className="w-fit">
                <button
                    className="close_button"
                    aria-label={UI_TEXTS.common.close}
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
                    <img src={icon} alt={UI_TEXTS.work.logoAlt} className="w-full h-full"/>
                  </div>
                  <div className="work-content_bar"/>
                </div>
                <div className="sm:p-5 px-2.5 py-5">
                  <p className="font-bold text-white-800">{name}</p>
                  <p className="text-sm mb-5">{pos} -- {duration}</p>
                  <p className="group-hover:text-white sm:text-lg text-xs whitespace-pre-line transition ease-in-out duration-500">
                    {title}
                  </p>
                </div>
              </div>
            ))}
            <div className="work-content_container group">
              <div className="flex flex-col h-full justify-start items-center py-2">
                <div className="work-content_logo flex items-center justify-center text-2xl font-bold text-black">
                  CV
                </div>
                <div className="work-content_bar"/>
              </div>
              <div className="sm:p-5 px-2.5 py-5">
                <p className="font-bold text-white-800">{UI_TEXTS.work.downloadSoftwareCvTitle}</p>
                <p className="text-sm mb-5">PDF</p>
                <p className="group-hover:text-white sm:text-lg text-xs transition ease-in-out duration-500">
                  {UI_TEXTS.work.downloadSoftwareCvDesc}
                </p>
                <a
                  href={PROFILE_LINKS.software_cv}
                  download
                  className="inline-flex mt-4 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black"
                >
                  {UI_TEXTS.work.downloadCvCta}
                </a>
              </div>
            </div>
            <div className="work-content_container group">
              <div className="flex flex-col h-full justify-start items-center py-2">
                <div className="work-content_logo flex items-center justify-center text-2xl font-bold text-black">
                  CV
                </div>
                <div className="work-content_bar"/>
              </div>
              <div className="sm:p-5 px-2.5 py-5">
                <p className="font-bold text-white-800">{UI_TEXTS.work.downloadEmbeddedCvTitle}</p>
                <p className="text-sm mb-5">PDF</p>
                <p className="group-hover:text-white sm:text-lg text-xs transition ease-in-out duration-500">
                  {UI_TEXTS.work.downloadEmbeddedCvDesc}
                </p>
                <a
                  href={PROFILE_LINKS.embedded_cv}
                  download
                  className="inline-flex mt-4 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black"
                >
                  {UI_TEXTS.work.downloadCvCta}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
