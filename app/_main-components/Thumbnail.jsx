"use client"

import React, { useState } from "react" 
import HeartButton from "../_components/HeartButton"

const Thumbnail = React.memo(({ pokemon }) => {
  const { front, name } = pokemon
  const [isMouseOver, setIsMouseOver] = useState(false)

  const containerBaseStyle = "hover:scale-110 hover:z-90 hover:-translate-y-[10px] hover:shadow-[0_16px_32px_rgba(0,0,0,0.3)] transition  hover:bg-zinc-800 bg-zinc-700 h-[200px] flex flex-col items-center rounded-3xl cursor-pointer relative"
  const containerStyle = `${containerBaseStyle}`

  const nameBaseStyle = "p-3 w-full text-center text-xl font-semibold transition"
  const nameTagBg = isMouseOver ? "bg-zinc-950" : "bg-zinc-800"
  const nameStyle = `${nameBaseStyle} ${nameTagBg}`

  return (
    <div
      style={{
        transitionDuration: "0.2s",
        transitionTimingFunction: "cubic-bezier(.74,.03,.67,1.18)",
      }}
      className={containerStyle}
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}>

      <HeartButton pokemon={pokemon} isBig={false} />
      <img src={front} alt={name} className="flex-1 select-none scale-200 pointer-events-none" />
      <p className={nameStyle}>
        {name}
      </p>

    </div>
  )
})

export default Thumbnail