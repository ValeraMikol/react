import React from 'react';
import {connect} from 'react-redux';
import { follow,unfollow, setCurrentPage, setUsersTotalCount,setIsFetching,toggleFollowingProgress,getUsers} from '../../redux/users-reducer';
import Preloader from '../common/preloader/preloader'

import Users from './Users'

import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class UsersContainer extends React.Component{
    
    
    componentDidMount(){
        
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);

        // this.props.setIsFetching(true);
        // this.props.setCurrentPage(pageNumber);
        // usersAPI.getUsers(pageNumber, this.props.pageSize)
        //     .then(data => {
        //         this.props.setUsers(data.items);
        //         this.props.setIsFetching(false);
        //     });
    }

    render() {

        
        return  <>
            {this.props.isFetching ?  <Preloader/>  : null}
                    <Users totalUsersCount={this.props.totalUsersCount}
                        currentPage = {this.props.currentPage}
                        pageSize={this.props.pageSize}
                        onPageChanged={this.onPageChanged}
                        users = {this.props.users}
                        follow = {this.props.follow}
                        unfollow = {this.props.unfollow}
                        followingInProgress = {this.props.followingInProgress}

                        
                    /> 
                </>
    }                    
            

} 



let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users, 
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};

// let mapDispatchToProps = (dispatch) =>{
//     return{ 
        
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (page) => {
//             dispatch(setCurrentPageAC(page))
//         },
//         setUsersTotalCount: (totalCount) => {
//             dispatch(setUsersTotalCountAC(totalCount))
//         },
//         setIsFetching: (isFetching) => {
//             dispatch(setIsFetchingAC(isFetching));
//         }



//     }
// };

export default compose(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, setUsersTotalCount, setIsFetching, toggleFollowingProgress, getUsers}),
    withAuthRedirect)
    (UsersContainer);


