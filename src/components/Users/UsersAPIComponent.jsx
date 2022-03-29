import * as axios from 'axios';
import React from 'react';
import styled from '../Users/users.module.css';

import { setCurrentPageAC } from '../../redux/users-reducer';
import Users from './Users'

class UsersAPIComponent extends React.Component{
    
    
    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setUsersTotalCount(response.data.totalCount) 
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {this.props.setUsers(response.data.items) });
    }

    render() {

        
        return  <Users totalUsersCount={this.props.totalUsersCount}
                        currentPage = {this.props.currentPage}
                        pageSize={this.props.pageSize}
                        onPageChanged={this.onPageChanged}
                        users = {this.props.users}
                        follow = {this.props.follow}
                        unfollow = {this.props.unfollow}
                        
                        
                        /> 
    }                    
            

} 

export default UsersAPIComponent;