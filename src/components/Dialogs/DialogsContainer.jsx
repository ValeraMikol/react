import React from 'react';
import {updateNewMessageBodyCreator,sendMessageCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs'

import {connect} from 'react-redux';





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

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;