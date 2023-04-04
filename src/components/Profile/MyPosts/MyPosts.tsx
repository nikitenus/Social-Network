import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostsDataType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: PostsDataType[]
}

export const MyPosts = (props: MyPostsPropsType) => {

    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                {props.posts.map((el) => {
                    return (
                        <Post key={el.id} message={el.message} likesCount={el.likesCount}/>
                    )
                })}
            </div>
        </div>
    );
};

