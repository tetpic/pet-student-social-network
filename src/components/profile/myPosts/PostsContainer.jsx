import Posts from './Posts'
import {addPostActionCreator,  changePostActionCreator } from '../../../redux/post-reducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        postsPage: state.postPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onAddnewPost: ()=> {
            dispatch(addPostActionCreator())
        },
        onPostListener: (text)=> {
            let aсtion = changePostActionCreator(text)
            dispatch(aсtion)
        }

    }
}

const PostsContainer = connect( mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer