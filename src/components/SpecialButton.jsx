import { useState } from "react"

export default function SpecialButton({
  color = "red",
  width = "w-10",
  text = "",
  visibility = true,
  isToggle = false,
  onClick
}) {
  const [isPressed, setIsPressed] = useState(false)

  const colorMap = {
    red: {
      gradient: "from-red-500 via-red-600 to-red-800",
      border: "border-red-900/60",
      shadow: "shadow-[0_8px_0_rgba(120,10,10,0.9),0_12px_20px_rgba(0,0,0,0.35)]",
      activeShadow: "active:shadow-[0_2px_0_rgba(120,10,10,0.9),0_6px_12px_rgba(0,0,0,0.35)]",
      focus: "focus-visible:ring-red-300/80"
    },
    green: {
      gradient: "from-green-500 via-green-600 to-green-800",
      border: "border-green-900/60",
      shadow: "shadow-[0_8px_0_rgba(10,80,10,0.9),0_12px_20px_rgba(0,0,0,0.35)]",
      activeShadow: "active:shadow-[0_2px_0_rgba(10,80,10,0.9),0_6px_12px_rgba(0,0,0,0.35)]",
      focus: "focus-visible:ring-green-300/80"
    },
    blue: {
      gradient: "from-blue-500 via-blue-600 to-blue-800",
      border: "border-blue-900/60",
      shadow: "shadow-[0_8px_0_rgba(10,60,120,0.9),0_12px_20px_rgba(0,0,0,0.35)]",
      activeShadow: "active:shadow-[0_2px_0_rgba(10,60,120,0.9),0_6px_12px_rgba(0,0,0,0.35)]",
      focus: "focus-visible:ring-blue-300/80"
    }
  }

  const styles = colorMap[color] || colorMap.red
  const toggleClasses = isToggle && isPressed
    ? "translate-y-2 hover:translate-y-2 brightness-95 hover:brightness-95"
    : "hover:-translate-y-1 hover:brightness-110 active:translate-y-2"

  const shadowClasses = isToggle && isPressed ? styles.activeShadow.replace("active:", "") : styles.shadow
  const textScaleClasses = isToggle && isPressed ? "scale-95 hover:scale-95" : "hover:scale-105 active:scale-95"

  const handleClick = (event) => {
    if (isToggle) setIsPressed((prev) => !prev)
    if (onClick) onClick(event)
  }

  return (
    <button
      onClick={handleClick}
      aria-pressed={isToggle ? isPressed : undefined}
      className={`
        relative ${width} h-full ml-2 mt-2 rounded-xl select-none
        bg-gradient-to-b ${styles.gradient}
        border ${styles.border}
        ${shadowClasses}
        transition-all duration-150 ease-out
        ${toggleClasses}
        ${styles.activeShadow}
        focus:outline-none focus-visible:ring-2 ${styles.focus}
        ${visibility ? "opacity-100" : "opacity-0 duration-[3s] pointer-events-none"}
      `}
    >
      {/* brillo superior */}
      <span
        className="
          pointer-events-none absolute inset-0 rounded-xl
          bg-gradient-to-b from-white/25 to-transparent
          opacity-70
        "
      />

      {/* borde interno */}
      <span
        className="
          pointer-events-none absolute inset-[2px] rounded-[0.65rem]
          ring-1 ring-white/15
        "
      />

      {/* texto */}
      <span
        className="
          relative z-10 font-minecraft text-lg leading-none
          text-white drop-shadow-[0_2px_0_rgba(0,0,0,0.55)]
          transition-transform duration-150
          ${textScaleClasses}
        "
      >
        {text}
      </span>
    </button>
  )
}
