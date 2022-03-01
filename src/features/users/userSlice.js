import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: 1, name: 'Staff'} 
]

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}, 
})

export default userSlice.reducer;