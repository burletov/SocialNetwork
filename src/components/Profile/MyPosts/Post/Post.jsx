import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src='https://static01.nyt.com/images/2019/10/27/arts/27FLEA-MEMOIR-1/merlin_162823140_1c1f1729-64c9-48e6-89d8-646926655fb6-articleLarge.jpg?quality=75&auto=webp&disable=upscale'/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;