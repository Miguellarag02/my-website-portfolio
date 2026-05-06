import { useEffect, useState } from "react"
import { useLanguage } from "../context/LanguageContext.jsx";

const LANGUAGE_HINT_STORAGE_KEY = "language_hint_seen_v3";

const LanguageSwitcher = ({ className = "", onSelect }) => {
    const { language, setLanguage } = useLanguage();

    const handleLanguageChange = (nextLanguage) => {
        setLanguage(nextLanguage);
        onSelect?.();
    };

    return (
        <div className={className}>
            <button
                type="button"
                onClick={() => handleLanguageChange("es")}
                className={`px-2 py-1 rounded text-xs border transition-colors ${language === "es" ? "bg-white text-black border-white" : "text-white border-white/40 hover:border-white/70"}`}
            >
                ES
            </button>
            <button
                type="button"
                onClick={() => handleLanguageChange("en")}
                className={`px-2 py-1 rounded text-xs border transition-colors ${language === "en" ? "bg-white text-black border-white" : "text-white border-white/40 hover:border-white/70"}`}
            >
                EN
            </button>
        </div>
    );
};

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
    const { UI_TEXTS } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [showLanguageHint, setShowLanguageHint] = useState(false);
    const toggleMenu = () => setIsOpen(prevIsOpen => !prevIsOpen);

    useEffect(() => {
        const hintSeen = window.localStorage.getItem(LANGUAGE_HINT_STORAGE_KEY);

        if (hintSeen) {
            return;
        }

        setShowLanguageHint(true);
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
            {showLanguageHint && (
                <div className="language-hint-card fixed top-20 right-4 z-[70] w-[min(18rem,calc(100vw-2rem))] sm:top-24 sm:right-6">
                    <div className="language-hint-glow" />
                    <button
                        type="button"
                        onClick={() => {
                            setShowLanguageHint(false);
                            window.localStorage.setItem(LANGUAGE_HINT_STORAGE_KEY, "true");
                        }}
                        aria-label={UI_TEXTS.navbar.closeHintAria}
                        className="language-hint-close"
                    >
                        ×
                    </button>
                    <div className="language-hint-badge">Language</div>
                    <p className="language-hint-text pr-6 sm:hidden">{UI_TEXTS.navbar.languageHintMobile}</p>
                    <p className="language-hint-text hidden pr-6 sm:block">{UI_TEXTS.navbar.languageHint}</p>
                    <div className="language-hint-indicator">
                        <span />
                        <span />
                        <span />
                    </div>
                    <div className="language-hint-arrow" />
                </div>
            )}
            <div className="max-w-10xl mx-auto">
                <div className="flex justify-between items-center py-5 mx-auto c-space">
                    <div className="flex items-center gap-3 whitespace-nowrap flex-row">
                        <AliveCheck />
                    </div>
                    
                    <button onClick={toggleMenu} className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex" aria-label={UI_TEXTS.navbar.toggleMenuAria}>
                        <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} alt="toggle" className="w-6 h-6"/>
                    </button>

                    <nav className="sm:flex hidden">
                        <NavItems root={root} isGamePage={isGamePage} />
                    </nav>
                    <div className="hidden sm:flex items-center ml-4">
                        <LanguageSwitcher className="flex items-center gap-1" />
                    </div>
                </div>
            </div>
            <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <nav className="p-5">
                    <NavItems onItemClick={() => setIsOpen(false)} root={root} isGamePage={isGamePage} />
                    <div className="mt-4 flex items-center justify-end gap-2 sm:hidden">
                        <span className="text-xs text-white/70">{UI_TEXTS.navbar.languageHintMobile}</span>
                        <LanguageSwitcher className="flex items-center gap-1" onSelect={() => setIsOpen(false)} />
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
