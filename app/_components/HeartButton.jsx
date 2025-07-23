import { useDispatch } from 'react-redux'
import HeartIcon from "./HeartIcon"
import React from 'react'

const HeartButton = React.memo(({ pokemon, isBig }) => {
    const { doLike } = pokemon

    const dispatch = useDispatch()
    const toggleLike = () => dispatch({ type: "pokemonArray/toggleLike", pokemon })
    const handleClick = (event) => {
        event.stopPropagation()
        toggleLike()
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