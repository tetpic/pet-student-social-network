import { createAsyncThunk,  createSlice } from '@reduxjs/toolkit'
import { authMe } from '../api/api'




export const getUserThunkCreator = createAsyncThunk(
    'auth/fetchAuth', 
    () => authMe().then(responce => responce.data)
       
    
)




const authReducer = createSlice({
    name: 'authReducer', 
    initialState: {
       userId: null,
       email: null,
       login: null,
       isFetching: false,
       error: null,
       isAuthorized: false
       
    },
    reducers: {
        setAuthorizedUser(state, action) {
           state.userId = action.userId
           state.email = action.email
           state.login = action.login
        },
        authIsFetchig(state, action) {
            if (action.payload === 'fetching') {
                state.isFetching = true
            } else {
                state.isFetching = false
            }
        }
    },
    // extraReducers: (builder) =>  {
    //     builder
    //     .addCase(getUserThunkCreator.fulfilled, (state, action) => {
    //         state.userId = action.userId
    //         state.email = action.email
    //         state.login =action.login
    //     })
    // }
    extraReducers: {
        [getUserThunkCreator.pending.type]: (state) => {
       
            state.isFetching = true
        },

        [getUserThunkCreator.fulfilled.type]: (state, action) => {
            state.isAuthorized = true
            state.userId = action.payload.data.id
            state.email = action.payload.data.email
            state.login =action.payload.data.login
            state.isFetching = false
        },
        [getUserThunkCreator.rejected.type]: (state, action) => {
       
            state.error = action.payload
        }
    },
})

export default authReducer.reducer
export const {setAuthorizedUser, authIsFetchig} = authReducer.actions