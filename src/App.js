import React, {useState} from "react";
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
    return (
        <div className="App">
            <form>
                <CustomInput type="text" placeholder="Post name"/>
                <CustomInput type="text" placeholder="Post description"/>
                <CustomButton disabled>Create post</CustomButton>
            </form>
            <PostList posts={posts} title={'Список Javascript постов'}/>
        </div>
    );
}

export default App;
