// import logo from './logo.svg';
import './App.scss';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import Profile from './components/profile/Profile';
import UsersContainer from './components/users/users-container';
import Dialogs from './components/dialogs/Dialogs';
import Login from './components/login/Login'
import {BrowserRouter,  Routes, Route} from 'react-router-dom';
// import store from './redux/store';



const App =(props)=> {
  return (
    <BrowserRouter>
    <div className = "app-wrapper">
      <Header/>
      <Navigation/>
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/dialogs/*"  element={<Dialogs />}/>
          <Route path="/profile/*"  element ={<Profile/>}/>
          <Route path="/users/*"  element ={<UsersContainer/>}/>
          <Route path="/login/*"  element ={<Login/>}/>

        </Routes>
      
      </div>
    </div>
    </BrowserRouter>
  );
}



export default App;
