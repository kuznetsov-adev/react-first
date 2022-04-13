import React, {useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', description: 'Javascript - programming language'},
        {id: 2, title: 'Javascript 2', description: 'Javascript - programming language'},
        {id: 3, title: 'Javascript 3', description: 'Javascript - programming language'}
    ])

    const [posts2, setPosts2] = useState([
        {id: 1, title: 'Kotlin', description: 'Kotlin - programming language'},
        {id: 2, title: 'Kotlin 2', description: 'Kotlin - programming language'},
        {id: 3, title: 'Kotlin 3', description: 'Kotlin - programming language'}
    ])

    return (
        <div className="App">
            <PostList posts={posts} title={'Список Javascript постов'}/>
        </div>
    );
}

export default App;
