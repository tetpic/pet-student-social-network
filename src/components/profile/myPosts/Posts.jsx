import c from './Posts.module.scss';
import React from 'react';

const PostItem = (el) => {
    return ( 
    <div key={el.key} className={c.postItem}>{el.postText}
    <div className={c.likes} >
        <p>{el.likes}</p>
        <img src="/images/like-icon.svg" alt="like" />
    </div>
</div>)
}

const Posts = (props) => {
    let newPostRef = React.createRef()
    let postListener = () => {
        let text = newPostRef.current.value
        // console.log(text)
        props.onPostListener(text)
    }
    let postMap = props.postsPage.posts.map(el => PostItem(el))
    return (
        <div>
            <div className={c.textArea}>
                <textarea ref={newPostRef} value={props.postsPage.currentPost} onChange={postListener} name="post" id="postArea" cols="30" rows="10" placeholder='input your text'></textarea>
                <button onClick={props.onAddnewPost}>Post</button>
            </div>
            
            <div className={c.postsFlow}>
                {postMap}
            </div>
        </div>
    )
}

export default Posts; 