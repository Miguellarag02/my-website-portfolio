import React from 'react'
import { useLanguage } from "../context/LanguageContext.jsx";

const Footer = () => {
    const { UI_TEXTS } = useLanguage();
    return (
        <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
            <div className="text-white-500 flex gap-2">
                <p>{UI_TEXTS.footer.terms}</p>
                <p> </p>
                <p>{UI_TEXTS.footer.privacy}</p>  
            </div>
            
            <div className="flex gap-3">
                <div className="social-icon">
                    <img src="/assets/linkedin-icon.svg" alt="linkedin" className='w-1/2 h-1/2' />
                </div>
            </div>

            <div className="flex gap-3">
                <div className="social-icon">
                    <img src="/assets/instagram.svg" alt="instagram" className='w-1/2 h-1/2' />
                </div>
            </div>

            <p className="text-white-500">
                {UI_TEXTS.footer.rights}
            </p>
        </section>
    )
} 

export default Footer
