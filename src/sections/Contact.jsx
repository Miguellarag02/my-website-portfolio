import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
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
            alert('Your message has been sent!')
            setForm({
                name:'',
                email:'',
                message:''
            });
        } catch (error) {
            console.log(error);
            alert('Something went wrong!')
        }
    } 

    return (
        <section className="c-space my-20" id="contact">
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/terminal.png" alt="terminal background" className="absolute inset-0 min-h-screen"/>
                <div className="contact-container">
                    <h3 className="head-text">Let's talk</h3>
                    <p className="text-lg text-white-600 mt-3">Contar un poco de mi aportacion al equipo</p>
                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="field-label">Full Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="Miguel Ángel Lara"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Email</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="miguelangellarag@gmail.com"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Your Message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="field-input"
                                placeholder="Hi, I wanna give you a job..."
                            />
                        </label>

                        <label>
                            <button className="field-btn" type="submit" disabled={loading}>
                                {loading ? 'Sending...' : 'Send Message'}
                                <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                            </button>
                        </label>

                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact