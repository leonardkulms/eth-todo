import React from 'react';
import './TodoItem.scss';

function TodoItem(props) {
  return (
    <div
      className={`todo--item ${props.task.completed ? "is-completed" : ""}`}
      key={props.task.id}>
      <label className="todo--label">Input</label>
      <input
        type="checkbox"
        name={props.task.id}
        defaultChecked={props.task.completed}
        onClick={(event) => {
          props.toggleCompleted(event.target.name)
        }} />
      <span className={`todo--text ${props.task.completed ? "is-completed" : ""}`}>
        {props.task.description}
      </span>
    </div>
  )
}

export default TodoItem;