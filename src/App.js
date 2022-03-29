import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import UsersContainer from './components/Users/UsersContainer';


import { Route} from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer'
import ProfileContainer from './components/Profile/ProfileContainer';



const App = (props) => { 

   

    return (
        
             <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div class='app-wrapper-content'>
                    {/* <Route path='/dialogs' component={Dialogs}/>     /dialogs/spam/blabla */}
                    {/* <Route path='/profile' component={Profile}/> */}

                    <Route path='/dialogs' render={() => <DialogsContainer/>}/> 
                    <Route path='/profile' render={() => <ProfileContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                </div>
            </div>
        
           
        )
}

export default App;