let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET_USERS';
let SET_CURRENTPAGE = 'SET_CURRENTPAGE';
let SET_TOTALCOUNT = 'SET_TOTALCOUNT';
let SET_IS_FETCHING ='SET_IS_FETCHHING'



let initialState = {

    users:[],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 1,
    isFetching: true

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

        
        default:
            return state;     
    }
}


export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type:SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type:SET_CURRENTPAGE,currentPage})
export const setUsersTotalCount = (totalCount) => ({type:SET_TOTALCOUNT,count: totalCount})
export const setIsFetching = (isFetching) => ({type:SET_IS_FETCHING,isFetching})


export default usersReducer;

