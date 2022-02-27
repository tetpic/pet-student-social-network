import postPageReducer from './post-reducer'
import messagesReducer from './messages-reducer'

let store = {
    _state: {
        postPage: {
            posts: [

                {key: 1, id: 1, postText: "Hello, bro! It's my social network!!", likes: 0, },
                {key: 2, id: 2, postText: "Is it looks like facebook of vk? A little!", likes: 15, },
                {key: 3, id: 3, postText: "It's my second post.", likes: 2, },
                {key: 4, id: 4, postText: "Blabla", likes: 92, },
            ],
            currentPost: '',
            
        }, 
        dialogPage: {
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
        }
    },

    _callSubscriber() {
        console.log('state is changed')
    },

    subscribe (observer) {
        this._callSubscriber = observer
    },

    getState() {
        return this._state;
    }, 

    dispatch(action) {
        this._state.postPage = postPageReducer(this._state.postPage, action)        
        this._state.dialogPage = messagesReducer(this._state.dialogPage, action)
        this._callSubscriber(this._state)
    },
}

export default store;
window.store = store;


