import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import {getProfile} from '../api/api'


export const getUserProfile = createAsyncThunk(
    'profile/fetchProfile',
    (id) => getProfile(id).then(responce => responce.data) 
)

const profileReducer = createSlice({
    name: 'profileReducer',
    initialState: {
        profile: null,
        isFetching: false,
        error: null
    },
    reducers: {
        setUserProfile(state, action) {
            state.profile = action.payload.data
        }
    },
    extraReducers: {
        [getUserProfile.pending.type]: (state) => {
            state.isFetching = true
        },
        [getUserProfile.fulfilled.type]: (state, action) => {
            state.profile = action.payload
            state.isFetching = false
        },
        [getUserProfile.rejected.type]: (state, action) => {
            state.error = action.payload
        },

    },

})

export default profileReducer.reducer
export const {setUserProfile} = profileReducer.actions

// const SET_USER_PROFILE = 'SET_USER_PROFILE'

// let initialState = {
//     profile: null,
// }

// const profileReducer = (state = initialState, action) => {
//     switch(action.type) {
//         case SET_USER_PROFILE: {
//             return {...state, profile: action.profile}
//         }
        
//         default: return {state}
//     }
// }

// export default profileReducer

// export const setUserProfile = (profile) => {
//     return {
//         type: SET_USER_PROFILE, profile
// }
// }