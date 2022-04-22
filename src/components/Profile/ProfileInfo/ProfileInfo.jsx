import React from 'react';
import Preloader from '../../common/preloader/preloader';
import styled from './ProfileInfo.module.css';


const ProfileInfo = (props) => {

    if(!props.profile){
        return(
            <Preloader/>
        )
    }
    return (
        <div>
            <div>
                <img
                    src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>
            </div>
            <div className={styled.descriptionBlock}>
                <div className={styled.profileAvatar}>
                    <img src={props.profile.data.photos.large} alt="" />
                </div>
                <div className={styled.profileBody}>
                    <h2 className={styled.profileName}>{props.profile.data.fullName}</h2>
                </div>
                
                
            </div>
        </div>
    )
}

export default ProfileInfo;