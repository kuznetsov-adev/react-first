import React, {useState} from "react";
import Counter from "./components/Counter";

function App() {

    const [value, setValue] = useState('Text inside input')

    return (
        <div className="App">
            <Counter/>
            <Counter/>
            <Counter/>
        </div>
    );
}

export default App;
