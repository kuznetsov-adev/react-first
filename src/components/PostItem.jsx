import React from "react";
import CustomButton from "./UI/button/CustomButton";

const PostItem = function (props) {
    return (
        <div className="post">
            {console.log(props.post)}
            <div className="post__content">
                <strong>{props.number}. {props.post.title}</strong>
                <div>
                    {props.post.description}
                </div>
            </div>
            <div className="post__btns">
                <CustomButton onClick={() => props.remove(props.post)}>Delete</CustomButton>
            </div>
        </div>
    )
}

export default PostItem;