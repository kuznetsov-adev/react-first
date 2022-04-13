import React, {useState} from "react";

function App() {
    //useState - f() изменения состояния в DOM дереве
    const [likes, setLikes] = useState(0)
    const [value, setValue] = useState('Text inside input')

    function increment() {
        setLikes(likes + 1)
    }

    function decrement() {
        setLikes(likes - 1)
    }


    return (
        <div className="App">
            <h1>{likes}</h1>
            <h1>{value}</h1>
            <input
                type="text"
                value={value}
                //двустороннее связывание
                onChange={ event => setValue(event.target.value) } //event.target - DOM element; value - значение
            />
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default App;
