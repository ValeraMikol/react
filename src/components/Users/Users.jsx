import React from 'react';
import styled from '../Users/users.module.css';
import userPhoto from '../../assets/image/user.png';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';
import { usersAPI } from '../../api/api';


const Users = (props) => {
    
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
        
        let pages = [];

        for(let i=1; i <= pagesCount; i++){
            pages.push(i);
            if(i === 20) break;
        }

return (
    <div>
            <div className={styled.pagination}>
                {pages.map(p => {
                    return<span className={props.currentPage === p && styled.selectedPage}
                    onClick={(e) => {props.onPageChanged(p)}}>{p}</span>
                })}
            </div>
        {
            props.users.map( u => <div key={u.id} className={styled.columns}>
                <span className={styled.column_left}>
                    <div className={styled.image}>
                        <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt='#'/>
                        </NavLink>
                        
                    </div>
                    <div className={styled.button}>
                        {u.followed
                         ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick = {() => {

                            props.follow(u.id);
                            //  props.toggleFollowingProgress(true,u.id);
                            // usersAPI.follow(u.id)
                            // .then(response => {
                                
                            //    if(response.data.resultCode === 0){
                            //     props.follow(u.id)
                            //    }
                            //    props.toggleFollowingProgress(true,u.id);
                            // });
                            
                        
                        }}>follow</button>



                        : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {

                            props.unfollow(u.id);
                            // props.toggleFollowingProgress(true,u.id);
                            // usersAPI.unfollow(u.id) 
                            // .then(response => {
                            //    if(response.data.resultCode === 1){
                            //     props.unfollow(u.id)
                            //    }
                            //    props.toggleFollowingProgress(true,u.id);
                            // });
                            
                            }}>Unfollow</button>}
                    </div>
                </span>
                <span className={styled.column}>
                    <span className={styled.items}>
                        <div className={styled.item}>{u.name}</div>
                        <div className={styled.item}>{u.status}</div>
                    </span>
                    <span className={styled.items}>
                        <div className={styled.item}>{"u.location.city"}</div>
                        <div className={styled.item}>{"u.location.country"}</div>
                    </span>
                </span>
            </div>)
        }
    </div> 
)

} 


export default Users;