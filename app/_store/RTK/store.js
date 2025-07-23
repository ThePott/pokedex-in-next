import { configureStore } from "@reduxjs/toolkit";
import { doFilterHeartSlice, pokemonArraySlice } from "./slices";

const store = configureStore({
    reducer: {
        pokemonArrayState: pokemonArraySlice.reducer,
        doFilterHeartState: doFilterHeartSlice.reducer,
    }
})

export default store