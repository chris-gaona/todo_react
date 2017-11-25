import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm, TodoList, Footer} from "./components/todo";
import {addTodo, generateId, findById, toggleTodo, updateTodo, removeTodo, filterTodos} from "./lib/todoHelpers";
import {pipe, partial} from "./lib/utils";
import PropTypes from 'prop-types';
import {loadTodos, createTodo} from "./lib/todoService";

class App extends Component {

  state = {
    todos: [],
    currentTodo: ""
  };

  static contextTypes = {
    route: PropTypes.string
  };

  componentDidMount() {
    loadTodos()
      .then(todos => this.setState({todos}));
  }

  handleRemove = (id, e) => {
    e.preventDefault();

    const updateTodos = removeTodo(this.state.todos, id);
    this.setState({todos: updateTodos});
  };

  handleToggle = (id) => {
    // const todo = findById(id, this.state.todos);
    // const toggled = toggleTodo(todo);
    // const updatedTodos = updateTodo(this.state.todos, toggled);
    const getUpdateTodos = pipe(findById, toggleTodo, partial(updateTodo, this.state.todos));
    const updatedTodos = getUpdateTodos(id, this.state.todos);
    this.setState({todos: updatedTodos});
  };

  handleInputChange = (e) => {
    this.setState({
      currentTodo: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const newId = generateId();
    const newTodo = {id: newId, name: this.state.currentTodo, isComplete: false};
    const updatedTodos = addTodo(this.state.todos, newTodo);
    this.setState({
      todos: updatedTodos,
      currentTodo: "",
      errorMessage: ""
    });

    createTodo(newTodo)
      .then(() => this.showTempMessage("Todo added"));
  };

  showTempMessage = (msg) => {
    this.setState({message: msg});
    setTimeout(() => this.setState({message: ""}), 2500);
  };

  handleEmptySubmit = (e) => {
    e.preventDefault();

    this.setState({
      errorMessage: "Please supply a todo name"
    });
  };

  render() {

    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit;
    const displayTodos = filterTodos(this.state.todos, this.context.route);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Todos</h1>
        </header>

        <div className="Todo-App">

          {this.state.errorMessage && <span className="error">{this.state.errorMessage}</span> }
          {this.state.message && <span className="success">{this.state.message}</span> }

          <TodoForm
            handleInputChange={this.handleInputChange}
            currentTodo={this.state.currentTodo}
            handleSubmit={submitHandler} />

          <TodoList
            handleToggle={this.handleToggle}
            todos={displayTodos}
            handleRemove={this.handleRemove} />

          <Footer />

        </div>
      </div>
    );
  }
}

export default App;
