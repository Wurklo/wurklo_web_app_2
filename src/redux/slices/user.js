import { createSlice } from "@reduxjs/toolkit";

// change the state based on the called function
export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
    },
})

//action creators are generated for each case reducer function
export const { setUser } = userSlice.actions;

export default userSlice.reducer;