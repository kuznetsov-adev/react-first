import React from 'react';

/**
 * Классовые компоненты - устаревший подход
 * */
class ClassCounter extends React.Component {

    constructor(props) {
        super(props);
        //this.state - зарезервированная переменная класса
        this.state = {
            count: 0
        }
        //Связываем контекст компонента с функцией
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        //изменение через f()
        this.setState({count: this.state.count + 1})
    }

    decrement() {
        this.setState({count: this.state.count - 1})
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        )
    }
}
export default ClassCounter;