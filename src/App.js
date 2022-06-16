import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import UsersContainer from './components/Users/UsersContainer';


import { Route} from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/LoginComponent'




const App = (props) => { 

   

    return (
        
             <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div class='app-wrapper-content'>
                    {/* <Route path='/dialogs' component={Dialogs}/>     /dialogs/spam/blabla */}
                    {/* <Route path='/profile' component={Profile}/> */}

                    <Route path='/dialogs' render={() => <DialogsContainer/>}/> 
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>
        
           
        )
}

export default App;