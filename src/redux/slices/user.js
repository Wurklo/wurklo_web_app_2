import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../firebase";
import firebase from "firebase";

// create user profile from authenticated user signup
export const createUser = createAsyncThunk(
    "user/createUser",
    async ({ user }) => {
        try {
            // post new user profile in db
            db
                .collection("users")
                .doc(user.uid)
                .set({
                    created: firebase.firestore.FieldValue.serverTimestamp(),
                    authUid: user.uid,
                    displayName: user.displayName.toLowerCase(),
                    email: user.email.toLowerCase(),
                    photoURL: user.photoURL
                },
                    {
                        merge: true
                    }
                )
        } catch (err) {
            console.log("Create user profile failed due to: ", err)
        }
    }
)
// change the state based on the called function
export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        status: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(createUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.user = action.payload
            })
            .addCase(createUser, (state) => {
                state.status = "failed";
            })
    }
})

//action creators are generated for each case reducer function
export const { setUser } = userSlice.actions;

export default userSlice.reducer;