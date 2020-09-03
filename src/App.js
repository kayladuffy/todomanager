import React from 'react';
import Todos from '../src/components/Todos';


function App() {
  state = {
    todos: [
      {id: 1, content: 'Buy groceries'},
      {id: 2, content: 'Do laundry'}
    ]
  }
  return (
    <div className="App">
      <h1 className="center pink-text">Todo's</h1>
      <Todos todos={this.state.todos} />
    </div>
  );
}

export default App;
