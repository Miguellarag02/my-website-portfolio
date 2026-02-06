import React from "react"

const Games = () => {
  return (
    <section id="games" className="pt-28 pb-20">
      <div className="c-space">
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-neutral-400 text-sm uppercase tracking-[0.25em]">
              New space in progress
            </p>
            <h1 className="text-white text-4xl md:text-5xl font-bold mt-2">
              Games
            </h1>
          </div>

          <p className="text-neutral-300 max-w-2xl">
            In this section you can find the games I have developed as a hobby. Among them you can find board games like Catan or Risk.
          </p>

          <div className="group w-fit cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-1" onClick={() => window.location.href = "/catan"}>
            <div className="text-white rounded-3xl border border-white/10 bg-gradient-to-br from-[#010101] via-[#090909] to-[#010101] shadow-2xl duration-700 z-10 relative backdrop-blur-xl hover:border-white/25 overflow-hidden hover:shadow-white/5 hover:shadow-3xl w-full max-w-[350px] grid">
              <img
                src="/assets/catan_background.gif"
                alt=""
                className="block w-full h-auto opacity-0 pointer-events-none select-none col-start-1 row-start-1"
              />
              <div className="col-start-1 row-start-1 relative w-full h-full">
                <img
                  src="/assets/catan_background.gif"
                  alt=""
                  className="absolute inset-0 z-0 w-full h-full object-contain opacity-65 pointer-events-none select-none"
                />
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-white/10 opacity-40 group-hover:opacity-60 transition-opacity duration-500"/>
                  <div style={{ animationDelay: "0.5s" }} className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-gradient-to-tr from-white/10 to-transparent blur-3xl opacity-30 group-hover:opacity-50 transform group-hover:scale-110 transition-all duration-700 animate-bounce"/>
                  <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-white/5 blur-xl animate-ping"/>
                  <div style={{ animationDelay: "1s" }} className="absolute bottom-16 right-16 w-12 h-12 rounded-full bg-white/5 blur-lg animate-ping"/>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"/>
                </div>
      
                <div className="p-8 relative h-full z-10">
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="flex flex-row gap-10">
                      <div className="relative mb-6">
                        <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping"/>
                        <div style={{ animationDelay: "0.5s" }} className="absolute inset-0 rounded-full border border-white/10 animate-pulse" />
                        <div className="p-6 rounded-full backdrop-blur-lg border border-white/20 bg-gradient-to-br from-black/80 to-black/60 shadow-2xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 hover:shadow-white/20" >
                          <div className="transform group-hover:rotate-180 transition-transform duration-700" >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              className="w-8 h-8 fill-current text-white group-hover:text-gray-200 transition-colors duration-300 filter drop-shadow-lg"
                            >
                              <path
                                d="M5.164 0L.16 18.928L18.836 24L23.84 5.072L5.164 0ZM14.023 15.208L8.792 13.469L10.436 8.152L15.667 9.891L14.023 15.208Z"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div className="mb-4 py-4 transform group-hover:scale-105 transition-transform duration-300" >
                        <p className="text-3xl font-bold bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent animate-pulse" >
                          Catan
                        </p>
                      </div>
                    </div>
                    <div className="absolute bottom-4 w-1/3 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent rounded-full transform group-hover:w-2/3 group-hover:h-1 transition-all duration-500 animate-pulse"/>
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-white/10 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="/"
              className="px-5 py-2 rounded-full border border-white/20 text-white hover:border-white/60 transition"
            >
              Volver al inicio
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Games
