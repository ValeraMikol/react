import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import profileReducer from '../redux/profile-reducer'
import dialogsReducer from '../redux/dialogs-reducer'
import usersReducer from "./users-reducer"
import authReducer from './auth-reducer'

let reducers =  combineReducers({ 
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer

});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;