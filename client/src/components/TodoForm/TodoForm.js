import React, { useState } from 'react';
import './TodoForm.scss';

function TodoForm(props) {
  const [newTodo, setNewTodo] = useState("Write New Todo And Enter")

  return (
    <form className="todo--form"
      onSubmit={(event) => {
        event.preventDefault();
        props.addTask(newTodo)
      }}>
      <input type="text" className="todo--input" placeholder="Add task and Enter" onChange={e => setNewTodo(e.target.value)} required />
    </form>
  )
}

export default TodoForm;