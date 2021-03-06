import React, { Component } from 'react';
import Todos from './components/Todos';
import AddTodo from './AddTodo';
//import Navbar from './components/Navbar/Navbar'


class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'Buy groceries'},
      {id: 2, content: 'Do laundry'}
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    })
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center pink-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
