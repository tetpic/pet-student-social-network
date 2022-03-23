import { createSlice } from '@reduxjs/toolkit'


const messageSlice = createSlice({
    name: 'createMessageSlice', 
    initialState: {
        dialogs: [
            {key: 11, name:'Nikita',  id:'1'},
            {key: 12, name:'Sergey',  id:'2'},
            {key: 13, name: 'Andrey', id : '3'},
            {key: 14, name: 'Seva',   id : '4'},
            {key: 15, name: 'Dan',    id : '5'},
            {key: 16, name: 'Sasha',  id : '6'},
        ],
        messages: [
            {key: 21, id: 1, msg: 'Hi',},
            {key: 22, id: 2, msg: 'How r u?',},
            {key: 23, id: 3, msg: "thanks, i'm fine, and you?",},
            {key: 24, id: 4, msg: "I learn react, it's so cool!!!",},
        ],
        currentMessage: '',
        },
    reducers: {
        addMessage(state) {
            state.messages.push({key:40, id: 42, msg: state.currentMessage})
            state.currentMessage = ''

        },
        changeMessage(state, action) {
           state.currentMessage = action.payload
        }
    }
})

export default messageSlice.reducer
export const {addMessage, changeMessage} = messageSlice.actions


// const MESSAGE_TYPE_LISTENER = 'TYPE-LISTENER'
// const SEND_MESSAGE = 'SEND-MESSAGE'

// let initialState = {
// dialogs: [
//     {key: 11, name:'Nikita',  id:'1'},
//     {key: 12, name:'Sergey',  id:'2'},
//     {key: 13, name: 'Andrey', id : '3'},
//     {key: 14, name: 'Seva',   id : '4'},
//     {key: 15, name: 'Dan',    id : '5'},
//     {key: 16, name: 'Sasha',  id : '6'},
// ],
// messages: [
//     {key: 21, id: 1, msg: 'Hi',},
//     {key: 22, id: 2, msg: 'How r u?',},
//     {key: 23, id: 3, msg: "thanks, i'm fine, and you?",},
//     {key: 24, id: 4, msg: "I learn react, it's so cool!!!",},
// ],
// currentMessage: '',
// }

// const messagesReducer = (state = initialState, action) => {
 
//     switch(action.type) {
//         case MESSAGE_TYPE_LISTENER: 
//             return {...state, currentMessage: action.newText }
//         case SEND_MESSAGE: 
//             return {
//                 ...state, 
//                 messages: [...state.messages, {key:40, id: 42, msg: state.currentMessage }],
//                 currentMessage: '',
//             }
//         default :
//             return state;
//     }
  
// }
// export default messagesReducer

// export const addMessageActionCreator = () => {
//     return {
//         type:  SEND_MESSAGE
//     }
// }
// export const changeMessageActiveCreator = (text) => {
//     return {
//         type: MESSAGE_TYPE_LISTENER, newText: text
//     }
// }