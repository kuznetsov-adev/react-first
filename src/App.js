import React, {useRef, useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import CustomButton from "./components/UI/button/CustomButton";
import CustomInput from "./components/UI/input/CustomInput";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', description: 'Javascript - programming language'},
        {id: 2, title: 'Javascript 2', description: 'Javascript - programming language'},
        {id: 3, title: 'Javascript 3', description: 'Javascript - programming language'}
    ])

    const [title, setTitle] = useState('')
    const bodyInputRef = useRef() // доступ к DOM элементу

    function addNewPost(e) {
        e.preventDefault() // предотвращаем submit кнопки (отправка на сервер и обновление всей страницы)
        console.log(title)
        console.log(bodyInputRef.current.value)
    }

    return (
        <div className="App">
            <form>
                {/*Управляемый компонент*/}
                <CustomInput
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text"
                    placeholder="Post name"
                />
                {/*Неуправляемый компонент*/}
                <CustomInput
                    ref={bodyInputRef}
                    type="text"
                    placeholder="Post description"
                />
                <CustomButton onClick={addNewPost}>Create post</CustomButton>
            </form>
            <PostList posts={posts} title={'Список Javascript постов'}/>
        </div>
    );
}

export default App;
