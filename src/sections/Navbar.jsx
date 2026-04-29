import { useEffect, useState } from "react"
import { useLanguage } from "../context/LanguageContext.jsx";


const NavItems = ({ onItemClick, root, isGamePage }) => {
    const { navLinks } = useLanguage();
    const visibleLinks = isGamePage
        ? navLinks.filter(({ href }) => href === "#home" || href === "/games")
        : navLinks

    return (
        <ul className="nav-ul">
            {visibleLinks.map(({id, href, name}) => (
                <li key={id} className="nav-li">
                    <a href={root + href} className="nav-li_a" onClick={onItemClick}>
                        {name}
                    </a>
                </li>
            ))}
        </ul>
    )
}

const AliveCheck = () => {
    const [isBackendAlive, setBackendAlive] = useState(false);

    useEffect(() => {
        const fetchPing = async () => {
            try {
                const res = await fetch("/api/ping.php");
                const json = await res.json();

                if (json.ok) {
                    setBackendAlive(true);
                } else {
                    setBackendAlive(false);
                }

            } catch (e) {
                setBackendAlive(false);
            }
        };

        fetchPing();
        const intervalId = setInterval(fetchPing, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div className="relative flex h-3 w-3">
            <span className={isBackendAlive ? "btn-ping_green" : "btn-ping_red"} />
            <span className={isBackendAlive ? "btn-ping_green_dot" : "btn-ping_red_dot"}/>  
        </div>
    )
}

const Navbar = ({root, isGamePage}) => {
    const { UI_TEXTS, language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(prevIsOpen => !prevIsOpen);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
            <div className="max-w-10xl mx-auto">
                <div className="flex justify-between items-center py-5 mx-auto c-space">
                    <div className="flex items-center gap-3 whitespace-nowrap flex-row">
                        <AliveCheck />
                        <div className="text-white font-bold text-xl">
                            <p>{UI_TEXTS.navbar.backendLabel}</p>
                        </div>
                    </div>
                    
                    <button onClick={toggleMenu} className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex" aria-label={UI_TEXTS.navbar.toggleMenuAria}>
                        <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} alt="toggle" className="w-6 h-6"/>
                    </button>

                    <nav className="sm:flex hidden">
                        <NavItems root={root} isGamePage={isGamePage} />
                    </nav>
                    <div className="hidden sm:flex items-center gap-1 ml-4">
                        <button
                            type="button"
                            onClick={() => setLanguage("es")}
                            className={`px-2 py-1 rounded text-xs border ${language === "es" ? "bg-white text-black border-white" : "text-white border-white/40"}`}
                        >
                            ES
                        </button>
                        <button
                            type="button"
                            onClick={() => setLanguage("en")}
                            className={`px-2 py-1 rounded text-xs border ${language === "en" ? "bg-white text-black border-white" : "text-white border-white/40"}`}
                        >
                            EN
                        </button>
                    </div>
                </div>
            </div>
            <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <nav className="p-5">
                    <NavItems onItemClick={() => setIsOpen(false)} root={root} isGamePage={isGamePage} />
                </nav>
            </div>
        </header>
    )
}

export default Navbar
