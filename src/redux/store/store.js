import { configureStore } from "@reduxjs/toolkit";
import TTCreducer from "../state/TTCslice";

export default configureStore({

    reducer: {
        startingvalue: TTCreducer
    }

})