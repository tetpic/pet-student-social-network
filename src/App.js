// import logo from './logo.svg';
import './App.scss';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import Profile from './components/profile/Profile';
import Dialogs from './components/dialogs/Dialogs';
import {BrowserRouter,  Routes, Route} from 'react-router-dom';
import store from './redux/store';



const App =(props)=> {
  // debugger
 
  return (
    <BrowserRouter>
    <div className = "app-wrapper">
      <Header/>
      <Navigation/>
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/dialogs/*"  element={<Dialogs 
            dialogPage={props.state.dialogPage} 
            dispatch = {props.dispatch}
          />}/>
          <Route path="/profile"  element ={<Profile 
          postPage={props.state.postPage}
          dispatch = {props.dispatch}
          />}/>
        </Routes>
      
      </div>
    </div>
    </BrowserRouter>
  );
}



export default App;
