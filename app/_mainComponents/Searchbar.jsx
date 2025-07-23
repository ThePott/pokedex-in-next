"use client"

import React, { useMemo, useRef, useState } from 'react'
import MagnifyingGlassIcon from "../_components/MagnifyingGlassIcon"
import HeartFilterButton from "../_components/HeartFilterButton"
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'

const Searchbar = React.memo(() => {
  const [isFocused, setIsFocused] = useState(false)

  const dispatch = useDispatch()
  const setFilterText = (filterText) => dispatch({type: "filterText/setFilterText", filterText})

  const iconBaseStyle = "h-[30px] transition"
  const iconColor = useMemo(() => `${isFocused ? "text-zinc-300" : "text-zinc-600"}`, [isFocused])
  const iconStyle = useMemo(() => `${iconBaseStyle} ${iconColor}`, [iconBaseStyle, iconColor])

  const containerBaseStyle = "flex items-center gap-3 p-3 rounded-3xl border-1 transition"
  const borderColor = useMemo(() => `${isFocused ? "border-zinc-300" : "border-zinc-600"}`, [isFocused])
  const containerStyle = useMemo(() => `${containerBaseStyle} ${borderColor}`, [containerBaseStyle, borderColor])

  console.log("---- searchbar re-rendered")
  return (
    <div className={containerStyle}>
      <MagnifyingGlassIcon style={iconStyle} />
      <input type="text"
        // ref={inputRef}
        // onKeyDown={handleKeyDown}
        onChange={(event)=> setFilterText(event.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full p-3 outline-0 "
      />
      <HeartFilterButton />
    </div>
  )
})

export default Searchbar