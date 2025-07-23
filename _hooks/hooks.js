import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { useDispatch, useSelector, useStore } from "react-redux"
import { getAllPokemon } from "../_utils/apiUtils"
import { useRouter, useSearchParams } from "next/navigation"
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

export const useThrottleUrl = (delay) => {
    const [text, setText] = useState("")
    const startRef = useRef(new Date())

    const router = useRouter()
    const searchParams = useSearchParams()

    const remainingDelay = useMemo(
        () => delay - (new Date() - startRef.current),
        [text]
    )

    useEffect(
        () => {
            if (!text && !searchParams.toString()) return
            const timeout = setTimeout(
                () => {
                    // setSearchParams({ name: text })
                    // console.log("---- search params in string:", searchParams.toString())
                    const params = new URLSearchParams(searchParams.toString());
                    params.set("name", text)
                    console.log("---- new params:", params.toString())
                    router.push(
                        {
                            pathname: '/',
                            query: { name: text }
                        },
                        `/?name=${text}`,
                        { shallow: true }
                    )
                    startRef.current = new Date()
                },
                remainingDelay
            )
            return () => clearTimeout(timeout)
        },
        [text]
    )

    return { setText }
}

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes()
export const useAppSelector = useSelector.withTypes()
export const useAppStore = useStore.withTypes()

export { usePokemon, useThrottle }
