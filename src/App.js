import React, {useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css'
import PostItem from "./components/PostItem";

function App() {

    const [value, setValue] = useState('Text inside input')

    return (
        <div className="App">
           <PostItem post={{id: 1, title: 'Javascript', description: 'Javascript - programming language'}}/>
        </div>
    );
}

export default App;
