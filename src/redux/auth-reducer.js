
import {headerAPI} from '../api/api'
let SET_USER_DATA = 'SET_USER_DATA';





let initialState = {

    id: null,
    login: null,
    email: null,
    isAuth: false

};

const authReducer = (state = initialState, action) => {
  console.log(action.type);  

    switch(action.type) {
        
        case SET_USER_DATA:{
            return {
                ...state,
                ...action.data,
                isAuth: true   
            }
        }
        default:
            return state;     
    }
};

export const setAuthUserData = (id, login, email) => ({type: SET_USER_DATA, data:{id, login, email}});

export const getAuth = () => {
    return (dispatch) => {
    headerAPI.getUserData()
        
    .then(response => {
        if(response.data.resultCode === 0) { 
            dispatch(setAuthUserData(response.data.data.id, response.data.data.login, response.data.data.email));   
        }   
    });
}
}


export default authReducer;

