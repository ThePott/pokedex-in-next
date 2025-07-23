import { createSlice } from "@reduxjs/toolkit";

const pokemonArraySlice = createSlice({
    name: "pokemonArray",
    initialState: [],
    reducers: {
        setPokemonArray(_state, action) { return action.pokemonArray },
        toggleLike(state, action) {
            const newState = state.map((pokemon) => {
                return pokemon.pokemonIndex === action.pokemon.pokemonIndex
                    ? { ...pokemon, doLike: !pokemon.doLike }
                    : { ...pokemon }
            })

            return newState
        },
    }
})


const doFilterHeartSlice = createSlice({
    name: "doFilterHeart",
    initialState: false,
    reducers: {
        toggleHeartFilter(state, _action) { return !state },
    }
})

export { doFilterHeartSlice, pokemonArraySlice };
