import { configureStore } from "@reduxjs/toolkit";
import { doFilterHeartSlice, filterTextSlice, heartDictSlice, pokemonArraySlice } from "./slices";

const makeStore = () => {
    return configureStore({
        reducer: {
            pokemonArrayState: pokemonArraySlice.reducer,
            filterTextState: filterTextSlice.reducer,
            doFilterHeartState: doFilterHeartSlice.reducer,
            heartDictState: heartDictSlice.reducer,
        }
    })
}

export default makeStore