import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";


export const MyPosts = () => {
    return (
        <div>
            my posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                <Post message={"Hi, how are you?"} likes={10}/>
                <Post message={"It's my first post"} likes={5}/>
            </div>
        </div>
    );
};

