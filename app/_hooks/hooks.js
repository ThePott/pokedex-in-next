import { useDispatch } from "react-redux"
import { getAllPokemon } from "../_utils/apiUtils"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
// import { useSearchParams } from "react-router"

/** mount -> fetch pokemons */
const usePokemon = () => {
    const dispatch = useDispatch()
    const setPokemonArray = useCallback(
        (pokemonArray) => dispatch({ type: "pokemonArray/setPokemonArray", pokemonArray }),
        []
    )

    useEffect(() => { getAllPokemon(setPokemonArray) }, [])
    console.log("---- effect called")
}

/** input change -> throttle -> filter pokemon name */
const useThrottle = (delay) => {
    const [text, setText] = useState("")
    const startRef = useRef(new Date())

    // const [_searchParams, setSearchParams] = useSearchParams();

    const remainingDelay = useMemo(
        () => delay - (new Date() - startRef.current),
        [text]
    )

    useEffect(
        () => {
            const timeout = setTimeout(
                () => {
                    // setSearchParams({ name: text })
                    startRef.current = new Date()

                    return () => clearTimeout(timeout)
                },
                remainingDelay
            )
        },
        [text]
    )

    return { setText }
}

export { usePokemon, useThrottle }