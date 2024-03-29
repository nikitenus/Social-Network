import React from 'react';
import s from './Post.module.css'

type PostPropsType = {
    message: string
    likesCount: number
}

export const Post = (props: PostPropsType) => {
    return (
        <div className={s.item}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
                alt="post"/>
            {props.message}
            <div>
                <span>like - {props.likesCount}</span>
            </div>
        </div>
    );
};

