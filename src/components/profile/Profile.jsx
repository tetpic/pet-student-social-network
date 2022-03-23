import classes from "./Profile.module.scss";
import PostsContainer from "./myPosts/PostsContainer";
import preloader from "../../assets/images/puff.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {getUserProfile} from "../../redux/profile-reducer"
import {useMatch } from "react-router-dom";


export const Preloader = () => {
  return (
    <div>
    <img src={preloader} alt="preloader" />
  </div>
  )
}





const Profile = () => {

  let location = useMatch("/profile/:id")
  let dispatch = useDispatch()

  console.log(location.params.id)
  
  // dispatch(() => getUserProfile())
  useEffect(() => {
    dispatch(getUserProfile(location.params.id))
  }, [dispatch])

 
  

  let profilePage = useSelector(state => state.profilePage)
  console.log(profilePage)


  
 
  if (profilePage.profile === null || profilePage.isFetching === true) {
    return (
      <div className={classes.content}>
     <Preloader/>
     </div>
    );
  } else {



  return (  

    <div className={classes.content}>
      shit
           <div className={classes.imageWrapper}>
       <img
          className={classes.backgroundImage}
          src="/images/background.jpg"
          alt="logotype"
        ></img>
      </div>
      <div className={classes.profileWrapper}>
        <div>
          <div className={classes.profileInfoWrapper}>
            <div className={classes.avatar}>
              <img src="/images/avatar.jpg" alt="avatar" />
            </div>
            <div className={classes.name}>
              <h3> {profilePage.profile.fullName} </h3>
              <p>null</p>
            </div>
          </div>
        </div>
         <PostsContainer profilePage={profilePage} /> 
       
      </div>
    </div>
  );
};}
export default Profile;
