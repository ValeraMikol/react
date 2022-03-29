const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


let initialState = {
    dialogs: [             // старый массив диалогов
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ],
    messages: [            // старый массив сообщений
        {id: 1, message: 'Hi'}, 
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ],
    newMessageText:''

    
}

 const dialogReducer = (state = initialState, action ) => {


    switch (action.type) {

        case UPDATE_NEW_MESSAGE_BODY:{
            
            return{
                
                ...state,
                newMessageText: action.body
            };
        
        }
        case SEND_MESSAGE:{
            let addMessage = state.newMessageText;
            return{
                ...state,
                newMessageText:'',
                messages: [...state.messages, {id: 7, message:addMessage}],

            };

            
        }

        default: return state;
    }
    
    
}

export const sendMessageCreator = () => {

    return{
        type:SEND_MESSAGE
    }
}
export const updateNewMessageBodyCreator = (body) => {
    return{
        type:UPDATE_NEW_MESSAGE_BODY, body: body
    }
}

export default dialogReducer;