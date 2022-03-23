
// import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.scss'



const Header=()=> {
  // let dispatch = useDispatch()
  

    return  <header className={classes.header}>
    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/1200px-Logo_TV_2015.svg.png' alt='logo'></img>
    <div className={classes.loginBlock} >
      <NavLink to={'/login'}>Login</NavLink>
    </div>
  </header >
}

export default Header;