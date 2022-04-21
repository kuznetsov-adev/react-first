import React from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({posts, title, remove}) => {

    if (!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>Posts not found </h1>
        )
    }

    return (
        //в компоненте должен находиться только один корневой элемент
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        {/*//при создании React компонентов из списка, для каждого нужно указывать параметр key*/}
                        {/*//key должен хранить уникальное значение*/}
                        <PostItem remove={remove} number={index + 1} post={post}/>
                    </CSSTransition>
                )}

            </TransitionGroup>
        </div>
    );
};

export default PostList;