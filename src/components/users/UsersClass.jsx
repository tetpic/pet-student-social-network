// import axios from 'axios'
import React from 'react'
import c from './Users.module.scss'
import userPic from '../../assets/images/userpic.jpg'
import {NavLink} from 'react-router-dom'

let Users = (props) => {
    let pageCount = Math.ceil(
        props.totalUsersCount / props.pageSize
    ) 
    let pages = []
    for(let i=1; i <= pageCount; i++) {
        if (pages.length < 20) {
            pages.push(i)
        }
    }
    return (
        <div>
            <ul className={c.usersPages}>
                {pages.map(p => {
                   return  <li key={p} 
                   onClick={(e) => {props.onPageChanged(p)}} 
                   className={props.currentPage === p ? c.selectedPage : undefined }>
                       {p}
                   </li>
                })}
            </ul>
           {props.users.map(u => <div key={u.id} className={c.userItem} >
                <div className={c.userLeftSide}>
                    <div className={c.userLogo}>
                        <div className={c.userId} style={u.photos.small != null? {display: 'none'} : undefined} >ID: {u.id}</div>
                        <NavLink to={`/profile/${u.id}`} >
                            <img src={ u.photos.small != null ? u.photos.small : userPic } alt="userLogo" />
                        </NavLink>
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

