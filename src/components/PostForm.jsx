import React, {useState} from 'react';
import CustomInput from "./UI/input/CustomInput";
import CustomButton from "./UI/button/CustomButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})

    function addNewPost(e) {
        e.preventDefault() // предотвращаем submit кнопки (отправка на сервер и обновление всей страницы)
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
    }

    return (
        <div>
            <form>
                {/*Управляемый компонент*/}
                <CustomInput
                    value={post.title}
                    onChange={e => setPost({...post, title: e.target.value})}
                    type="text"
                    placeholder="Post name"
                />
                {/*Неуправляемый компонент*/}
                <CustomInput
                    value={post.body}
                    onChange={e => setPost({...post, body: e.target.value})}
                    type="text"
                    placeholder="Post description"
                />
                <CustomButton onClick={addNewPost}>Create post</CustomButton>
            </form>
        </div>
    );
};

export default PostForm;