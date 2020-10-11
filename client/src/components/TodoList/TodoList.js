import React, { useState } from 'react';
import './TodoList.scss';

function TodoList(props) {
  const [newTodo, setNewTodo] = useState("Write New Todo And Enter")

  return (
    <div className="todo">
      <form className="todo--form"
        onSubmit={(event) => {
          event.preventDefault();
          props.addTask(newTodo)
        }}>
        <input type="text" className="todo--input" placeholder="Add task and Enter" onChange={e => setNewTodo(e.target.value)} required />
      </form>

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