import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, title}) => {
    return (
        //в компоненте должен находиться только один корневой элемент
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            {posts.map((post, index) =>
                //при создании React компонентов из списка, для каждого нужно указывать параметр key
                //key должен хранить уникальное значение
                <PostItem number={index + 1} post={post} key={post.id}/>
            )}
        </div>
    );
};

export default PostList;