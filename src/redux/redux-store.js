import {combineReducers, createStore} from 'redux';
import messagesReducer from '../redux/messages-reducer'
import postPageReducer from '../redux/post-reducer'



const reducers = combineReducers({
    dialogPage: messagesReducer,
    postPage: postPageReducer, 
}) 

let store = createStore(reducers )

export default store