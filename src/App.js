import React from "react";
import TodoItem from "./TodoItem";
import todosData from "./todosData";

class App extends React.Component {
  constructor() {
    super();
    this.state = { todo: todosData };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(id) {
    this.setState((prevState) => {
      const updatedTodos = prevState.todo.map((myItem) => {
        if (myItem.id === id) {
          myItem.completed = !myItem.completed;
        }
        return myItem;
      });
      return { todo: updatedTodos };
    });
  }
  render() {
    const myCall = todosData.map((item) => (
      <TodoItem
        id={item.id}
        key={item.id}
        text={item.text}
        completed={item.completed}
        handleChange={this.handleChange}
      />
    ));
    return <div className="todo-list">{myCall}</div>;
  }
}

export default App;
