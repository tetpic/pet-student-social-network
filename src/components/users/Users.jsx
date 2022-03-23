import axios from 'axios'
import React from 'react'
import c from './Users.module.scss'
import userPic from '../../assets/images/userpic.jpg'

const Users = (props) => {
    console.log(props)
    // debugger

let getUsers = () => {

    if (props.users.length === 0) {
        
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            // debugger
            props.setUsers(response.data.items);
        })
    }
}    

    

    return (
        <div>
            <button onClick={getUsers} >Get users</button>
           {props.users.map(u => <div key={u.id} className={c.userItem} >
                <div>
                    <div className={c.userLogo}>
                        <img src={ u.photos.small != null ? u.photos.small : userPic } alt="userLogo" />
                    </div>
                    {u.followed ? 
                    <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button> 
                    : <button onClick={() => {props.follow(u.id)}} >Follow</button>}
                </div>
                <div className={c.userDescription}>
                    <h4>{u.name}</h4>
                    <p>{u.status}</p>
                </div>
                <div className={c.userLocation}>
                    <p> {"u.location.country"} </p>
                    <p> {"u.location.city"} </p>
                </div>
                
           </div>)}
        </div>
    )
}

export default Users