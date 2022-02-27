const SEND_POST = 'SEND-POST'
const POST_LISTENER = 'POST-LISTENER'

let initialState = {
    posts: [

        {key: 1, id: 1, postText: "Hello, bro! It's my social network!!", likes: 0, },
        {key: 2, id: 2, postText: "Is it looks like facebook of vk? A little!", likes: 15, },
        {key: 3, id: 3, postText: "It's my second post.", likes: 2, },
        {key: 4, id: 4, postText: "Blabla", likes: 92, },
    ],
    currentPost: '',
}

 const postPageReducer = (state = initialState, action) => {
     switch(action.type) {
        case SEND_POST: 
            let incrementIDKeys = () => {
                let newId = state.posts.length + 1
                return newId
            };
            let randomNum = () => {
                let rand = Math.random(1)*100
                return Math.floor(rand)
            }
            state.posts.push({key: incrementIDKeys(), 
                id: incrementIDKeys(), 
                postText: state.currentPost,
                likes: randomNum()
            });  
            state.currentPost = ''
            return state
        case POST_LISTENER: 
            state.currentPost = action.postText
            return state
        default: 
            return state
     }
    
}

export default postPageReducer
export const addPostActionCreator = () => {
    return {
        type: SEND_POST
    }
} 
export const changePostActionCreator = (text) => {
    return {
        type: POST_LISTENER, postText: text
    }
}