"use client"

import { useDispatch, useSelector } from 'react-redux'
import HeartIcon from "./HeartIcon"
import React from 'react'

const HeartButton = React.memo(({ pokemon, isBig }) => {
    const heartDict = useSelector((state) => state.heartDictState)

    const pokemonIndex = pokemon.pokemonIndex
    const doLike = heartDict[pokemonIndex]

    const dispatch = useDispatch()
    const toggleHeart = () => dispatch({ type: "heartDict/toggleHeart", pokemonIndex })
    
    const handleClick = (event) => {
        event.stopPropagation()
        event.preventDefault()
        toggleHeart()
    }

    const size = isBig ? "h-[40px]" : "h-[30px]"
    const color = "text-red-400"
    const style = `${size} ${color}`

    const padding = isBig ? "p-6" : "p-2"
    const containerStyle = `absolute top-0 right-0 z-20 ${padding}`

    return (
        <>
            <div onClick={handleClick} className={containerStyle}>
                <HeartIcon style={style} doLike={doLike} />
            </div>
        </>
    )
})

export default HeartButton