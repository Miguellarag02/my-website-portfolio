import { useLanguage } from "../context/LanguageContext.jsx";


const Partners = () => {
    const { partnerReviews, UI_TEXTS } = useLanguage();
    return (
        <section className="c-space my-20" id="partners">
            <h3 className="head-text">{UI_TEXTS.partners.title}</h3>
            <div className="partner-container">
                {partnerReviews.map(({id, name, review, img, position}) => (
                    <div key={id} className="partner-review">
                        <div>
                            <p className="text-white font-light">{review}</p>
                            <div className="partner-content">
                                <div className="flex gap-3">
                                    <img src={img} alt={name} className="w-12 h-12 rounded-full"/>
                                    <div className="flex flex-col">
                                        <p className="font-semibold text-white-800">{name}</p>
                                        <p className="text-white-500 md:text-base text-sm">{position}</p>
                                    </div>
                                </div>
                                <div className="flex self-end items-center gap-2">
                                    {Array.from({length:5}).map((_, index) => (
                                        <img key={index} src="/assets/star.png" alt={UI_TEXTS.partners.starAlt} className="w-5 h-5" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Partners
