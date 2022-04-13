import React, {useState} from "react";
import './styles/App.css'
import PostItem from "./components/PostItem";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', description: 'Javascript - programming language'},
        {id: 2, title: 'Javascript 2', description: 'Javascript - programming language'},
        {id: 3, title: 'Javascript 3', description: 'Javascript - programming language'},
        {id: 4, title: 'Javascript 4', description: 'Javascript - programming language'},
        {id: 5, title: 'Javascript 5', description: 'Javascript - programming language'},
        {id: 6, title: 'Javascript 6', description: 'Javascript - programming language'},
    ])

    return (
        <div className="App">
            { posts.map(post =>
                //при создании React компонентов из списка, для каждого нужно указывать параметр key
                //key должен хранить уникальное значение
                <PostItem post={ post } key={post.id}/>
            )}
        </div>
    );
}

export default App;
