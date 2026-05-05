import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../context/LanguageContext.jsx";
import { PROFILE_LINKS} from "../constants/index.js";

const Contact = () => {
    const { UI_TEXTS } = useLanguage();
    const  formRef = useRef();
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        name:'',
        email:'',
        message:''
    })

    const handleChange = ({target: {name, value}}) => {
        setForm({... form, [name]: value })
    }
    // service_zoozkrj
    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true);
        
        try{
            await emailjs.send('service_zoozkrj', 'template_1a52sgu', {
                from_name: form.name,
                to_name: 'Miguel Angel',
                from_email: form.email,
                to_email: 'miguelangellarag@gmail.com',
                message: form.message
            },
            'H9RQDqLY-XZtKLYBI'
            )
            setLoading(false);
            alert(UI_TEXTS.contact.messageSent)
            setForm({
                name:'',
                email:'',
                message:''
            });
        } catch (error) {
            console.log(error);
            alert(UI_TEXTS.contact.somethingWrong)
        }
    } 

    return (
        <section className="c-space my-20" id="contact">
            <div className="relative min-h-screen flex items-center justify-center">
                <div className="contact-shell">
                    <div className="contact-copy">
                        <div className="contact-badge">{UI_TEXTS.contact.availabilityBadge}</div>
                        <h3 className="head-text">{UI_TEXTS.contact.heading}</h3>
                        <p className="text-lg text-white-600 mt-3">{UI_TEXTS.contact.subheading}</p>
                        <div className="contact-story">
                            <h4 className="contact-story_title">{UI_TEXTS.contact.introTitle}</h4>
                            <p className="contact-story_text">{UI_TEXTS.contact.introBody}</p>
                        </div>
                        <div className="contact-facts">
                            <div className="contact-fact">
                                <span className="contact-fact_label">{UI_TEXTS.contact.contactEmailLabel}</span>
                                <a href={`mailto:${UI_TEXTS.contact.contactEmailValue}`} className="contact-fact_value">
                                    {UI_TEXTS.contact.contactEmailValue}
                                </a>
                            </div>
                            <div className="contact-fact">
                                <span className="contact-fact_label">{UI_TEXTS.contact.contactFocusLabel}</span>
                                <span className="contact-fact_value">{UI_TEXTS.contact.contactFocusValue}</span>
                            </div>
                            <div className="contact-fact">
                                <span className="contact-fact_label">{UI_TEXTS.contact.contactLocationLabel}</span>
                                <span className="contact-fact_value">{UI_TEXTS.contact.contactLocationValue}</span>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form_card">
                        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col space-y-7">
                            <label className="space-y-3">
                                <span className="field-label">{UI_TEXTS.contact.fullName}</span>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    className="field-input"
                                    placeholder={UI_TEXTS.contact.namePlaceholder}
                                />
                            </label>

                            <label className="space-y-3">
                                <span className="field-label">{UI_TEXTS.contact.email}</span>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    className="field-input"
                                    placeholder={UI_TEXTS.contact.emailPlaceholder}
                                />
                            </label>

                            <label className="space-y-3">
                                <span className="field-label">{UI_TEXTS.contact.message}</span>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="field-input"
                                    placeholder={UI_TEXTS.contact.messagePlaceholder}
                                />
                            </label>

                            <label>
                                <button className="field-btn" type="submit" disabled={loading}>
                                    {loading ? UI_TEXTS.contact.sending : UI_TEXTS.contact.sendMessage}
                                    <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                                </button>
                            </label>
                        </form>
                        <div className="border-t border-gray-300 my-6"></div>
                        <div className={`hero-actions`}>
                            <a href={PROFILE_LINKS.cv} download className="hero-action">
                                {UI_TEXTS.hero.downloadCv}
                            </a>
                            <a href={PROFILE_LINKS.linkedin} target="_blank" rel="noreferrer" className="hero-action">
                                {UI_TEXTS.hero.linkedin}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
