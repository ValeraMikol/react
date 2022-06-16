import { usersAPI } from '../api/api';

let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET_USERS';
let SET_CURRENTPAGE = 'SET_CURRENTPAGE';
let SET_TOTALCOUNT = 'SET_TOTALCOUNT';
let SET_IS_FETCHING ='SET_IS_FETCHHING';
let TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'



let initialState = {

    users:[],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []

}

const usersReducer = (state = initialState, action) => {


    switch(action.type) {

        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userId){
                        return {...u, followed:false};
                    }
                    return u;
                })
            }

        case UNFOLLOW:

            return{
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userId){
                        return {...u, followed:true};
                    }
                    return u;
                })
            }

        case SET_USERS:{
            return {...state, users: action.users}
        }

        case SET_CURRENTPAGE:{
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTALCOUNT:{
            return {...state, totalUsersCount: action.count}
        }
        case SET_IS_FETCHING:{
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS:{
            return {
            ...state,
            followingInProgress: action.isFetching
             ? [...state.followingInProgress, action.userId]
            : state.followingInProgress.filter(id => id !== action.userId)
            }
        }

        
        default:
            return state;     
    }
}


export const followSuccses = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccses = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type:SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type:SET_CURRENTPAGE,currentPage})
export const setUsersTotalCount = (totalCount) => ({type:SET_TOTALCOUNT,count: totalCount})
export const setIsFetching = (isFetching) => ({type:SET_IS_FETCHING,isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({type:TOGGLE_IS_FOLLOWING_PROGRESS,isFetching, userId})

export const getUsers = (currentPage, pageSize) => {

    return (dispatch) => {
    dispatch(setIsFetching(true));
    usersAPI.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(setIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setUsersTotalCount(data.totalCount)) ;
        });
    }
}

export const follow = (userId) => {

    return (dispatch) => {
        dispatch(toggleFollowingProgress(true,userId));
        usersAPI.follow(userId)
        .then(response => {
            
           if(response.data.resultCode === 0){
            dispatch(followSuccses(userId))
           }
        dispatch(toggleFollowingProgress(true,userId));
       });
    }
}

export const unfollow = (userId) => {

    return (dispatch) => {
        dispatch(toggleFollowingProgress(true,userId));
        usersAPI.unfollow(userId)
        .then(response => {
            
           if(response.data.resultCode === 0){
            dispatch(unfollowSuccses(userId))
           }
        dispatch(toggleFollowingProgress(true,userId));
       });
    }
}


export default usersReducer;

