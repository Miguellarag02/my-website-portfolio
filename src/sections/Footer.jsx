import React from 'react'
import { useLanguage } from "../context/LanguageContext.jsx";
import { PROFILE_LINKS } from "../constants/index.js";

const Footer = () => {
    const { UI_TEXTS } = useLanguage();
    return (
        <section className="c-space pt-7 pb-3 border-t border-black-300 bg-black-300 flex justify-between items-center flex-wrap gap-5">
            <div className="text-white-500 flex gap-2">
                <a href={PROFILE_LINKS.email} className="hover:text-white transition-colors">{UI_TEXTS.footer.terms}</a>
            </div>
            
            <div className="flex gap-3">
                <a
                    href={PROFILE_LINKS.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={UI_TEXTS.footer.linkedinAria}
                    className="social-icon"
                >
                    <img src="/assets/linkedin-icon.svg" alt="linkedin" className='w-1/2 h-1/2' />
                </a>
                <a
                    href={PROFILE_LINKS.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={UI_TEXTS.footer.githubAria}
                    className="social-icon text-sm font-bold text-white"
                >
                    GH
                </a>
            </div>

            <p className="text-white-500">
                {UI_TEXTS.footer.rights}
            </p>
        </section>
    )
} 

export default Footer
