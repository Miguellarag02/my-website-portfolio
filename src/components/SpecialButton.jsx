export default function SpecialButton({ color = "red", width = "w-10", text = "", onClick }) {

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
      shadow: "shadow-[0_8px_0_rgba(10,120,10,0.9),0_12px_20px_rgba(0,0,0,0.35)]",
      activeShadow: "active:shadow-[0_2px_0_rgba(10,120,10,0.9),0_6px_12px_rgba(0,0,0,0.35)]",
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

  return (
    <button
      onClick={onClick}
      className={`
        relative ${width} h-full ml-2 mt-2 rounded-xl select-none
        bg-gradient-to-b ${styles.gradient}
        border ${styles.border}
        ${styles.shadow}
        transition-all duration-150 ease-out
        hover:-translate-y-1 hover:brightness-110
        active:translate-y-2
        ${styles.activeShadow}
        focus:outline-none focus-visible:ring-2 ${styles.focus}
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
          relative z-10 font-minecraft text-xl leading-none
          text-white drop-shadow-[0_2px_0_rgba(0,0,0,0.55)]
          transition-transform duration-150
          hover:scale-105
          active:scale-95
        "
      >
        {text}
      </span>
    </button>
  )
}
