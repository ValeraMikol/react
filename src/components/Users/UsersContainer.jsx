import React from 'react';
import {connect} from 'react-redux';
import * as axios from 'axios';
import { follow,unfollow,setUsers, setCurrentPage, setUsersTotalCount,setIsFetching } from '../../redux/users-reducer';
import Preloader from '../common/preloader/preloader'

import Users from './Users'

class UsersContainer extends React.Component{
    
    
    componentDidMount(){
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,{withCredentials:true})
            .then(response => {
                this.props.setIsFetching(false);
                this.props.setUsers(response.data.items)
                this.props.setUsersTotalCount(response.data.totalCount) 
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,{withCredentials:true})
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setIsFetching(false);
            });
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
        isFetching: state.usersPage.isFetching
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



export default connect (mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, setIsFetching}) (UsersContainer);

