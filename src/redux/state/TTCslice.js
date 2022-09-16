import { createSlice } from "@reduxjs/toolkit";

 const TTCslice = createSlice({

    name: "startingvalue",
    initialState: {
        fetchedText: '',
        userText: '',
    },
    reducers: {
        setText: (state, action) => {
            state.fetchedText = action.payload.fetchedText;
            state.userText = action.payload.userText;
        },
        
    }
})
export const { setText } = TTCslice.actions;
export default TTCslice.reducer;