import Users from './UsersClass'
import React from 'react'
import {connect} from 'react-redux'
import {setUsersCountActionCreator, setIsFetchingActionCreator, followtActionCreator, setCurrentPageActionCreator, setUsersActionCreator, unFollowActionCreator } from '../../redux/users-reducer'
// import axios from 'axios'
import preloader from '../../assets/images/puff.svg'
import {getUsers} from '../../api/api'

class UsersClass extends React.Component {
    
    // constructor(props) {
    //     super(props);
    // }
    componentDidMount() {
        this.props.setIsFetching(true)
        getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setIsFetching(false);
            this.props.setTotalUsersCount(data.totalCount);
            this.props.setUsers(data.items);
        })
    }
    
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFetching(true)
        getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setIsFetching(false);
            this.props.setUsers(data.items);
        })
    }

    render() {
        return <>
            {this.props.isFetching ? <img src={preloader} alt='preloader'/> : null}
        <Users
            totalUsersCount = {this.props.totalUsersCount}
            pageSize = {this.props.pageSize}
            currentPage = {this.props.currentPage}
            onPageChanged = {this.onPageChanged}
            componentDidMount = {this.componentDidMount}
            users = {this.props.users}
            unfollow = {this.props.unfollow}
            follow = {this.props.follow}
            />
        </>
    }
}
   

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}
let mapDispatchToProps = (dispatch) => {
     return {
         follow: (userID) => {
             dispatch(followtActionCreator(userID)) 
         },
         unfollow: (userID) => {
             dispatch(unFollowActionCreator(userID))
         },
         setUsers: (users) => {
             dispatch(setUsersActionCreator(users))
         },
         setCurrentPage: (p) => {
             dispatch(setCurrentPageActionCreator(p))
         },
         setTotalUsersCount: (totalCount) => {
             dispatch(setUsersCountActionCreator(totalCount))
         },
         setIsFetching: (isFetching) => {
             dispatch(setIsFetchingActionCreator(isFetching))
         }


     }  
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersClass)