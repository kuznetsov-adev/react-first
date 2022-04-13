import React, {useState} from 'react';


//rsc => Tab
//Имя компонента соответствует файлу в котором он расположен
//Имя всегда с заглавной буквы
const Counter = function () {
    //useState - f() изменения состояния в DOM дереве
    const [count, setCount] = useState(0)

    function increment() {
        setCount(count + 1)
    }

    function decrement() {
        setCount(count - 1)
    }

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

/*
* Не забываем экспортировать компонент чтобы он был
* доступен в других компонентах
*/
export default Counter;