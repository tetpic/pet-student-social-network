import c from './Posts.module.scss';
import React from 'react';
import {addPostActionCreator, changePostActionCreator} from '../../../redux/post-reducer'





const PostItem = (el) => {
    // debugger
    return  <div key={el.key} className={c.postItem}>{el.postText}
    <div className={c.likes} >
        <p>{el.likes}</p>
        <img src="/images/like-icon.svg" alt="like" />
    </div>
</div>
}



const Posts = (props) => {
    // debugger

    let newPostRef = React.createRef()
    let addNewPost = () => {
        // debugger
        // let text = newPostRef.current.value
        props.dispatch(addPostActionCreator())
    }
    let postListener = () => {
        let text = newPostRef.current.value
        let aсtion = changePostActionCreator(text)
        props.dispatch(aсtion)
    }
    // debugger
    let postMap = props.postPage.posts.map(el => PostItem(el))
    return (
        <div>
            <div className={c.textArea}>
                <textarea ref={newPostRef} value={props.postPage.currentPost} onChange={postListener} name="post" id="postArea" cols="30" rows="10" placeholder='input your text'></textarea>
                <button onClick={addNewPost}>Post</button>
            </div>
            
            <div className={c.postsFlow}>
                {postMap}
                {/* <div className={c.postItem}>Hello, bro! It's my social network!!
                    <div className={c.likes} >
                        <p>0</p>
                        <img src="/images/like-icon.svg" alt="like" />
                    </div>
                </div>
               
                    <div className={c.postItem}>Is it looks like facebook of vk? A little!
                    <div className={c.likes} >
                        <p>0</p>
                        <img src="/images/like-icon.svg" alt="like" />
                    </div>
                    </div>
                    <div className={c.postItem}>It's my second post.</div>
                    <div className={c.postItem}>Blabla</div> */}
                
                
            </div>
        </div>
    )
}

export default Posts; 