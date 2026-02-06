import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./sections/Navbar.jsx"
import Hero from "./sections/Hero.jsx"
import Contact from "./sections/Contact.jsx"
import Footer from "./sections/Footer.jsx"
import Games from "./sections/Games.jsx"
import Catan from "./sections/Catan.jsx"


const App = () => {
    const Home = () => (
        <>
            <Navbar root={""} isGamePage={false} />
            <Hero />
            <Contact />
            <Footer />
        </>
    )

    const GamesPage = () => (
        <>
            <Navbar root={"/"} isGamePage={true} />
            <Games />
            <Footer />
        </>
    )

    return (
        <BrowserRouter>
            <main className="max-w-7xl mx-auto">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/games" element={<GamesPage />} />
                    <Route path="/catan" element={<Catan />} />
                </Routes>
            </main>
        </BrowserRouter>
    )
}

export default App
