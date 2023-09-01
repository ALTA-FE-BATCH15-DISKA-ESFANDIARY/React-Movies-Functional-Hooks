import { configureStore } from "@reduxjs/toolkit";
import Modeslice from "./slice/Modeslice";


const Store = configureStore({
    reducer: {
        mode: Modeslice
    }
})

export default Store