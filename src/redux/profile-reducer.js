import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const GET_USER_STATUS = 'GET_USER_STATUS';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ],

    newPostText:'it-kamasutra.com',
    profile: null,
    status: "",

};

 const profileReducer = (state = initialState, action ) => {
    

    
    switch (action.type){
        case ADD_POST:{
            let newPost ={
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return{
                ...state,
                posts: [...state.posts,newPost],
                newPostText:'',
            };

        }
        case UPDATE_NEW_POST_TEXT:{ 
            return{
                ...state,
                newPostText: action.newText
            };
            
        }

        case SET_USER_PROFILE:{ 
            return{
                ...state,
                profile: action.profile
            };
            
        }

        case SET_USER_STATUS:{ 
            return{
                ...state,
                status: action.status
            };
            
        }

        default: return state;
    }
    
}
export const addPostActionCreator = () => {

    return{
        type:ADD_POST
    }
}
export const updateNewPostTextActionCreator = (text) => {
    return{
        type:UPDATE_NEW_POST_TEXT, newText: text
    }
}
export const setUserProfile = (profile) => ({type:SET_USER_PROFILE, profile});
export const getUserStatus = (status) => ({type: GET_USER_STATUS, status});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});

export const getProfile = (userId) => { 
    return (dispatch) => {

        profileAPI.getProfile(userId)
        
            .then(data => {
                dispatch(setUserProfile(data));
            });
    }
}

export const getStatus = (userId) => { 
    return (dispatch) => {

        profileAPI.getStatus(userId)
        
            .then(data => {
               
                dispatch(setUserStatus(data.data));
            });
    }
}

export const updateStatus = (status) => { 
    return (dispatch) => {
        profileAPI.updateStatus(status)    
                .then(response => {
                  
                    if(response.data.resultCode === 0){
                        dispatch(setUserStatus(status));
                    }
                });         
    }
}

export default profileReducer;