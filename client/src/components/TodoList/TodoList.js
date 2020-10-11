import React, { useState } from 'react';
import './TodoList.scss';

function TodoList(props) {

  return (
    <div className="todo">
      <ul className="todo--list">
        {props.tasks.map((task, key) => {
          return (
            <div className="todo--item" key={key}>
              <label className="todo--label">Input</label>
              <input
                type="checkbox"
                name={task.id}
                defaultChecked={task.completed}
                onClick={(event) => {
                  props.toggleCompleted(event.target.name)
                }} />

              <span className="todo--text">{task.description}</span>
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default TodoList;