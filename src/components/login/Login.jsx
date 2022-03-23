import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getUserThunkCreator} from '../../redux/auth-reducer'


// let useAuth = () => {
//     let dispatch = useDispatch()
//     dispatch(getUserThunkCreator())

// }

const Login = () => {

    let dispatch = useDispatch()
   

    let buttonHandler = () => {
        dispatch(getUserThunkCreator())
        console.log(authAstate)
    }

   useEffect(()=> {
       dispatch(getUserThunkCreator())
   }, [dispatch])

   let authAstate = useSelector(state => state.auth.login)

    let authState = useSelector(state => state.auth)


    return (
        <div>
            <div>
                 LoginPage
            </div>
            <button onClick={buttonHandler} >{authState.isFetching ? "fetching" : "pushMe"}</button>
            <div>{authAstate}</div>
          
        </div>
    )
}

export default Login