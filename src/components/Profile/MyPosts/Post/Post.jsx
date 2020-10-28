import React from 'react';
import s from './Post.module.css';


const Post = (props) => {


    return (
        <div className={s.item}>
            <img src='https://social-network.samuraijs.com/activecontent/images/users/9532/user.jpg?v=1'/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;