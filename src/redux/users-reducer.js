const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const IS_FETCHING = 'IS_FETCHING'
 
let initialState = {
    users: [
        // {key: 1, userPic: 'https://www.interfax.ru/ftproot/textphotos/2020/12/22/p700.jpg', 
        // follower: false, id: 1, fullName:  'Username1', location: {country: 'Russia', city: 'Sarapul'}, status: 'I\'m ok' },
        // {key: 2, userPic: 'https://www.interfax.ru/ftproot/textphotos/2020/12/22/p700.jpg', 
        // follower: false, id: 2, fullName:  'Username2', location: {country: 'Russia', city: 'Izhevsk'}, status: 'I am userstatus' },
        // {key: 3, userPic: 'https://www.interfax.ru/ftproot/textphotos/2020/12/22/p700.jpg', 
        // follower: true, id: 3, fullName:  'Username3', location: {country: 'Ukraine', city: 'Harkov'}, status: 'it is so cool' },
        // {key: 4, userPic: 'https://www.interfax.ru/ftproot/textphotos/2020/12/22/p700.jpg', 
        // follower: true, id: 4, fullName:  'Username4', location: {country: 'Italy', city: 'Rome'}, status: 'when i find a job...' },
    ],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1, 
    isFetching: false
   
}



 const usersReducer = (state = initialState, action) => {
    // let stateCopy = {...state};
    // stateCopy.currentPost = state.currentPost
     switch(action.type) {
        case FOLLOW: {
            return {...state, 
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true }
                    }
                    return u;
                })
            }
        }
        case UNFOLLOW: {
            return {...state, 
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false }
                    }
                    return u;
                })
            }
        }    
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default: 
            return state
     }
} 

export default usersReducer


export const followtActionCreator = (userID) => {
    return {
        type: FOLLOW, userID
    }
} 
export const unFollowActionCreator = (userID) => {
    return {
        type: UNFOLLOW, userID
    }
}

export const setUsersActionCreator = (users) => {
    return {
        type: SET_USERS, users
    }
}

export const setCurrentPageActionCreator = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE, currentPage
    }
}

export const setUsersCountActionCreator = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT, count: totalUsersCount
    }
}
export const setIsFetchingActionCreator = (isFetching) => {
    return {
        type: IS_FETCHING, isFetching
    }
}