import { createSlice } from "@reduxjs/toolkit";

export const pokemonArraySlice = createSlice({
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

export const filterTextSlice = createSlice({
    name: "filterText",
    initialState: "",
    reducers: {
        setFilterText(_state, action) { return action.filterText },
    }
})

export const doFilterHeartSlice = createSlice({
    name: "doFilterHeart",
    initialState: false,
    reducers: {
        toggleHeartFilter(state, _action) { return !state },
    }
})
