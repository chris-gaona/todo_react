import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm, TodoList} from "./components/todo";

class App extends Component {

  constructor() {
    // makes sure constructor for component class extending is called
    super();
    this.state = {
      todos: [
        { id: 1, name: "Learn JSX", isComplete: true },
        { id: 2, name: "Build an awesome app", isComplete: false },
        { id: 3, name: "Ship It!", isComplete: false }
      ],
      currentTodo: ""
    };

    // ensures that "this" refers to correct context when executed
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      currentTodo: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Todos</h1>
        </header>

        <div className="Todo-App">

          <TodoForm
            handleInputChange={this.handleInputChange}
            currentTodo={this.state.currentTodo} />

          <TodoList todos={this.state.todos} />

        </div>
      </div>
    );
  }
}

export default App;
