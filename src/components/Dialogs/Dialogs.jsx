import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {updateNewMessageBodyCreator,sendMessageCreator} from '../../redux/dialogs-reducer'




const Dialogs = (props) => { 


    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessage();
        
    }

    let newMessageText = () => {
        let body = newMessageElement.current.value;
        props.newMessageText(body)

    }

    let dialogsElements =  props.dialogs.map( d => <DialogItem name={d.name} id={d.id} />  ); //за мапеный массив диалогов
    let messagesElements = props.messages.map( m => <Message message={m.message}/> );         //за мапеный массив сообщений

    
    
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
                <textarea placeholder='enter your message' ref={newMessageElement} onChange={newMessageText} ></textarea>
                <button className={s.button} onClick={ addMessage }>Отправить</button>
            </div>
        </div>
    )
}

export default Dialogs;