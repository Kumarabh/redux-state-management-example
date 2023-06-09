import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName: '',
    lastName: ''
}
const userSlice = createSlice({
    name: 'user',
    initialState: {value: initialState},
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        }
    }

})

export const {login} = userSlice.actions;
export default userSlice.reducer;
