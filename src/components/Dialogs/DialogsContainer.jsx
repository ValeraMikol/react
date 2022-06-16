import React from 'react';
import {updateNewMessageBodyCreator,sendMessageCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs'

import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';





let mapStateToProps= (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        
        // newMessageText: state.dialogsPage.newMessageText
    }
    
};

let mapDispatchToProps = (dispatch) => {
    return{
        newMessageText: (body) => {
           dispatch(updateNewMessageBodyCreator(body)) 
        },
        addMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
};


let authRedirectComponent = withAuthRedirect(Dialogs);


const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(authRedirectComponent);

export default DialogsContainer;