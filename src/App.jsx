import React from "react"
import Navbar from "./sections/Navbar.jsx"
import Hero from "./sections/Hero.jsx"
import Contact from "./sections/Contact.jsx"
import Footer from "./sections/Footer.jsx"

const App = () => {
    return (
        <main className="max-w-7xl mx-auto">
            <Navbar/>
            <Hero/>
            <Contact />
            <Footer />
        </main>
    )
}

export default App