import messageSlice from '../redux/messages-reducer'
import postPageReducer from '../redux/post-reducer'
import usersReducer from '../redux/users-reducer' 
import profileReducer from '../redux/profile-reducer'
import authReducer from './auth-reducer';
import { configureStore } from '@reduxjs/toolkit';

let store = configureStore(
   { reducer: {
        dialogPage: messageSlice,
        postPage: postPageReducer, 
        usersPage: usersReducer, 
        profilePage: profileReducer,
        auth: authReducer
    }, 
   }
    )

window.store = store;
export default store

