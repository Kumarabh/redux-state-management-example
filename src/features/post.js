import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: '',
    title: '',
    description: ''
}

const postSlice = createSlice({
    name: 'post',
    initialState: {value: initialState},
    reducers: {
        createPost: (state, action) => {
            state.value = action.payload
        }
    }
})

export default postSlice.reducer;
export const {createPost} = postSlice.actions;