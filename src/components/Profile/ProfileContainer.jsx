import React from 'react';
import Profile from '../Profile/Profile';
import { connect } from 'react-redux';
import {setUserProfile, getProfile, getStatus, updateStatus} from '../../redux/profile-reducer';
import {withRouter} from 'react-router-dom'
import { compose } from 'redux';





class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 23248; 
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
        // .then(data => {
        //         this.props.setUserProfile(data);
                
        // });
    }

    render(){
        
        return(
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
};

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose(
    connect(mapStateToProps, {setUserProfile , getProfile, getStatus, updateStatus}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);






