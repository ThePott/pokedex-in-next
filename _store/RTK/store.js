import { configureStore } from "@reduxjs/toolkit";
import { doFilterHeartSlice, filterTextSlice, pokemonArraySlice } from "./slices";

// const store = configureStore({
//     reducer: {
//         pokemonArrayState: pokemonArraySlice.reducer,
//         doFilterHeartState: doFilterHeartSlice.reducer,
//     }
// })

// export default store




const makeStore = () => {
    return configureStore({
        reducer: {
            pokemonArrayState: pokemonArraySlice.reducer,
            filterTextState: filterTextSlice.reducer,
            doFilterHeartState: doFilterHeartSlice.reducer,
        }
    })
}

export default makeStore