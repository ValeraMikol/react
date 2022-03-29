import dialogReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';




const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';



let store = {
    getState(){
        return (this._state)
    },
    _state:{

        profilePage:{
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11},
                {id: 3, message: 'Blabla', likesCount: 11},
                {id: 4, message: 'Dada', likesCount: 11}
            ],
    
            newPostText:'it-kamasutra.com'
        },   
        dialogsPage:{
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

            
        },
    
    },
     callSubscriber(){
        console.log('state is chnged')
    },
    //  addPost()  {
        
        
    // },
    //  updateNewPostText(newText) {
        
    
    // },
    subscriber(observe) {
        this.callSubscriber = observe;
    },


    dispatch(action) {

        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._state.profilePage = profileReducer(this._state.profilePage,action);

        this.callSubscriber(this._state);
    }

}















export default store;
window.store = store;







