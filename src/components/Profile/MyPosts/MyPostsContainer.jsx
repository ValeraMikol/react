import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer'
import MyPosts from '../MyPosts/MyPosts'
import {connect} from 'react-redux';

// const  MyPostsContainer = (props) => {

//     // let state = props.store.getState();

//     // let postsElements =
    
//     //     props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

//     // let newPostElement = React.createRef(); 
    


    
    

    

//     return (
//         <StoreContext.Consumer>
//             {
//                      (store) => {

//                         let state = store.getState().profilePage;
//                         let addPost = () =>{   
//                             store.dispatch(addPostActionCreator()); 
//                     };
                
//                     let onPostChange = (text) => {
//                         let action = updateNewPostTextActionCreator(text);
//                         store.dispatch(action);
//                     }
//                          return(
//                             <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.posts}
//                             newPostText={state.newPostText}
//                             />
//                          )
                        
//                      }
    
//             }
//         </StoreContext.Consumer>
       
       
//     )
// }

let mapStateToProps = (state) => {
    return{
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
    
};

let mapDispatchToProps = (dispatch) => {
    return{
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
};



const MyPostsContainer = connect( mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;