import React from "react";
function TodoItem(props) {
  const completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through",
  };
  return (
    <div className="todo-item">
      <input
        onChange={() => props.handleChange(props.id)}
        type="checkbox"
        checked={props.completed}
      />
      <p style={props.completed ? completedStyle : null}>{props.text}</p>
    </div>
  );
}

export default TodoItem;
