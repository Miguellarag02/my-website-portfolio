import React, { useState, useEffect, useMemo } from "react"
import { useAuth } from "../context/AuthContext.jsx"
import {myGames} from "../constants/index.js"
import { PLAYER_COLOR_OPTIONS } from "../constants/CatanStates.js"

const Games = () => {
  const { username, userImage, isLoggedIn, login, logout } = useAuth()
  const [loginUsername, setLoginUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState({ type: "", message: "" })
  const [takenColors, setTakenColors] = useState(new Set()) 
  const [selectedColor, setSelectedColor] = useState("") 

  const addPlayer = async (playerUsername) => {
    try {
      const response = await fetch("/api/player/set_player.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: playerUsername }),
      })

      const payload = await response.json().catch(() => null)
      if (!response.ok || !payload?.ok) {
        setStatus({ type: "error", message: payload?.message || "Could not add player to the game." })
        logout()
        return false
      }
      return true
    } catch (error) {
      setStatus({ type: "error", message: "Network error while adding player." })
      logout()
      return false
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    if (!loginUsername || !password || isSubmitting) return

    setIsSubmitting(true)
    setStatus({ type: "", message: "" })

    try {
      const res = await fetch("/api/auth/login.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: loginUsername, password }),
      })

      let payload = null
      try {
        payload = await res.json()
      } catch {
        payload = null
      }

      if (res.ok && payload?.ok) {
        const loggedUsername = payload.user?.username || loginUsername
        login({
          username: loggedUsername,
          userImage: payload.user?.user_image || null,
        })
        setPassword("")
        const playerAdded = await addPlayer(loggedUsername)
        if (playerAdded) {
          setStatus({ type: "success", message: "Login successful." })
        }
      } else {
        const message = payload?.message || "Login failed. Check credentials."
        setStatus({ type: "error", message })
      }
    } catch (error) {
      setStatus({ type: "error", message: "Network error. Try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    const getPlayerColors = async () => {
      try {
        const response = await fetch(`/api/player/color.php?username=${encodeURIComponent(username)}`)
        if (!response.ok) {
          logout();
          throw new Error(`Failed: ${response.status}`)
        }
        const data = await response.json()
        const players = Array.isArray(data) ? data : []
        const taken = new Set()
        console.log(username)
        for (const entry of players) {
          if (username === entry.username) {
            setSelectedColor(entry.color)
            continue
          }
          console.log(entry.color)
          taken.add(String(entry.color).toLowerCase())
        }
        console.log(taken)
        setTakenColors(taken)
        setSelectedColor((prev) => {
          if (prev !== "") return prev
          for (const option of PLAYER_COLOR_OPTIONS) {
            if (!taken.has(String(option.name).toLowerCase())) {
              return option.name
            }
          }
          return prev
        })
      } catch (error) {
        console.error(error)
        setTakenColors(new Set())
      }
    }

    if (username !== "") getPlayerColors()

    const interval = setInterval(() => {
      if (username !== "") getPlayerColors()
    }, 4000)

    return () => clearInterval(interval)
  }, [username])


  const handlePlayClick = async (href) => {
    if (!isLoggedIn) {
      setStatus({ type: "error", message: "Debes iniciar sesión para jugar." })
      return
    }

    window.location.href = href
  }

  const handleSpectateClick = (href) => {
    if (isLoggedIn) {
      setStatus({ type: "error", message: "Debes cerrar sesión para entrar como espectador." })
      return
    }

    window.location.href = href
  }

  const setSelectedColorInDatabase = async (colorName) => {
    if (!username || !colorName) return

    const previousColor = selectedColor
    setSelectedColor(colorName)

    try {
      const response = await fetch("/api/player/set_color.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, color: colorName }),
      })

      const payload = await response.json().catch(() => null)
      if (!response.ok || !payload?.ok) {
        setSelectedColor(previousColor)
      }
    } catch (error) {
      setSelectedColor(previousColor)
    }
  }

  return (
    <section id="games" className="pt-28 pb-20">
      <div className="c-space">
        <div className="flex flex-col gap-6">
          <div className="flex flex-row gap-3">
            <div className="flex flex-col gap-3">
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
            </div>

              <div className="ml-auto min-w-[240px] w-fit">
                {isLoggedIn ? (
                  <div className="flex flex-row rounded-2xl border border-white/10 bg-white/5 p-4">
                    {userImage && (
                      <img src={userImage ? userImage : "/assets/default-profile.png"} alt="User profile" className="mt-2 w-24 h-24 rounded-full object-cover" />
                    )}
                    <div className="flex flex-col w-full" >
                        <p className="text-white text-md font-semibold tracking-wide mt-4 ml-4">
                            Welcome, {username}!
                          </p>
                        <p className="text-xs text-emerald-300 mt-1 ml-4">
                          Victories: 0
                        </p>
                        <button
                          onClick={() => {
                            logout()
                            setStatus({ type: "", message: "" })
                            setPassword("")
                          }}
                          className="rounded-lg mt-2 bg-white text-black text-sm font-semibold py-2 transition disabled:opacity-50 disabled:cursor-not-allowed hover:bg-neutral-200"
                        >
                          Logout
                        </button>
                        {status.message ? (
                          <p className={status.type === "success" ? "text-xs text-emerald-300" : "text-xs text-red-300"}>
                            {status.message}
                          </p>
                        ) : null}
                      </div>
                      <div className="w-full ml-2">
                        <div className="grid grid-cols-3 gap-1">
                          {PLAYER_COLOR_OPTIONS.map((colors) => {
                            const isDisabled = takenColors.has(String(colors.name).toLowerCase()) || colors.name === selectedColor;

                            return (
                              <div className={`relative border w-10 h-10 rounded-md ${colors.name === selectedColor ? "border-[3px] border-white" : "border border-white/20"}`}>
                              <button
                                key={colors.name}
                                type="button"
                                disabled={isDisabled}
                                onClick={() => setSelectedColorInDatabase(colors.name)}
                                className={`relative w-full h-full rounded-md  text-xs font-semibold uppercase transition disabled:opacity-35 disabled:cursor-not-allowed hover:opacity-85 hover:scale-110`}
                                style={{ backgroundColor: colors.color }}
                              >
                                  {isDisabled && colors.name != selectedColor &&
                                    <div className="relative rotate-45 border-t-2 border-black"/>
                                  }
                                </button>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                ) : (
                <form onSubmit={handleLogin} className="rounded-2xl border border-white/10 bg-white/5 p-4 flex flex-col gap-3">
                  <p className="text-white text-sm font-semibold tracking-wide">Member Login</p>
                  <label className="flex flex-col gap-1 text-xs text-neutral-400">
                    Username
                    <input
                      type="text"
                      value={loginUsername}
                      onChange={(e) => setLoginUsername(e.target.value)}
                      className="rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-sm text-white outline-none focus:border-white/40"
                      autoComplete="username"
                    />
                  </label>
                  <label className="flex flex-col gap-1 text-xs text-neutral-400">
                    Password
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-sm text-white outline-none focus:border-white/40"
                      autoComplete="current-password"
                    />
                  </label>
                  <button
                    type="submit"
                    disabled={isSubmitting || !loginUsername || !password}
                    className="rounded-lg bg-white text-black text-sm font-semibold py-2 transition disabled:opacity-50 disabled:cursor-not-allowed hover:bg-neutral-200"
                  >
                    {isSubmitting ? "Logging in..." : "Login"}
                  </button>
                  {status.message ? (
                    <p className={status.type === "success" ? "text-xs text-emerald-300" : "text-xs text-red-300"}>
                      {status.message}
                    </p>
                  ) : null}
                </form>
              ) }
            </div> 
          </div>

          <div className="flex flex-row gap-6">
            {myGames.map(({id, href, name, background}) => (
              <div className="group w-fit cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-1" key={id}>
                <div className="text-white rounded-3xl border border-white/10 bg-gradient-to-br from-[#010101] via-[#090909] to-[#010101] shadow-2xl duration-700 z-10 relative backdrop-blur-xl hover:border-white/25 overflow-hidden hover:shadow-white/5 hover:shadow-3xl w-full max-w-[350px] grid">
                  <img
                    src="/assets/catan_background.gif"
                    alt=""
                    className="block w-full h-auto opacity-0 pointer-events-none select-none col-start-1 row-start-1"
                  />
                  <div className="col-start-1 row-start-1 relative w-full h-full">
                    <img
                      src={background}
                      alt={name + " background"}
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
                            <div className="p-4 rounded-full backdrop-blur-lg border border-white/20 bg-gradient-to-br from-black/80 to-black/60 shadow-2xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 hover:shadow-white/20" >
                              <div className="transform group-hover:rotate-180 transition-transform duration-700 scale-90" >
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
                              {name}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col mt-auto mb-2 gap-6"> 
                          <button 
                            onClick={() => handlePlayClick(href)}
                            className="px-5 py-2 rounded-full border border-white/20 text-white hover:border-white/60 hover:bg-white/20 transition"
                          >
                            Jugar
                          </button>
                          <button 
                            onClick={() => handleSpectateClick(href)}
                            className="px-5 py-2 rounded-full border border-white/20 text-white hover:border-white/60 hover:bg-white/20 transition"
                          >
                            Espectador
                          </button>
                        </div>
                        <div className="absolute bottom-4 w-1/3 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent rounded-full transform group-hover:w-2/3 group-hover:h-1 transition-all duration-500 animate-pulse"/>
                      </div>
                    </div>
                    <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                    <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-white/10 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                  </div>
                </div>
              </div>
            ))}
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
