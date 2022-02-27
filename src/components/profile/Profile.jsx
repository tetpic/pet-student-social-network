import classes from './Profile.module.scss';
import ProfileInfo from './profileInfo/ProfileInfo';
import Posts from './myPosts/Posts';

const Profile = (props)=> {
  // debugger

    return    <div className={classes.content}>

      <div className={classes.imageWrapper}>
          <img className={classes.backgroundImage} src='/images/background.jpg' alt='logotype'></img>
      </div>
      <div className={classes.profileWrapper}>
        <ProfileInfo/>
        <Posts postPage={props.postPage}
          dispatch = {props.dispatch}
        />
      </div>
  </div>
}
export default Profile;