import React, { useState } from "react"
import { useNavigate } from "react-router"

const ChevronLeftIcon = ({ style }) => {
  return (
    <svg viewBox="0 0 4.85 8.76" fill="none" xmlns="http://www.w3.org/2000/svg" className={style}>
      <path d="M4.64182 0.02514C4.84327 0.21401 4.85348 0.53042 4.66462 0.73188L1.23521 4.38991L4.66462 8.04794C4.85348 8.24940 4.84327 8.56582 4.64182 8.75468C4.44036 8.94354 4.12394 8.93334 3.93508 8.73188L0.18508 4.73188C0.00477 4.53955 0.00477 4.24027 0.18508 4.04794L3.93508 0.04794C4.12394 -0.15352 4.44036 -0.16372 4.64182 0.02514Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  )
}

const BackButton = React.memo(() => {
  const [isMouseOver, setIsMouseOver] = useState(false)
  const navigate = useNavigate()

  const containerStyle = "absolute top-0 left-0 p-6"

  const baseIconStyle = "h-[40px] transition text-zinc-300"
  const iconColor = isMouseOver ? "opacity-90" : "opacity-30"
  const iconStyle = `${baseIconStyle} ${iconColor}`

  return (
    <div className={containerStyle}
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
      onClick={() => navigate("/")}>
      <ChevronLeftIcon style={iconStyle} />
    </div>
  )
})

export default BackButton