import React from 'react';
import Profile from './Profile';
// import axios from 'axios'
import { connect } from 'react-redux';
import {setUserProfile} from '../../redux/profile-reducer'
// import {getProfile} from '../../api/api'


class  ProfileContainer extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    
    

    // componentDidMount() {
    //     getProfile(2).then(response => {
    //         this.props.setUserProfile(response.data);
    //     })
    // }

 render() {
 
    return  (
        <Profile {...this.props} profile={this.props.profile} />
    )
 }
  
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})




export default connect(mapStateToProps, {setUserProfile} )(ProfileContainer) ;