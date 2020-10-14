import React, { useState } from 'react';
import './TodoForm.scss';

function TodoForm(props) {
  const [newTodo, setNewTodo] = useState("Write New Todo And Enter")

  return (
    <form className="todo--form"
      onSubmit={(event) => {
        event.preventDefault();
        props.addTask(newTodo);
      }}>
      <input autoFocus={true} type="text" className="todo--input" placeholder="What to do?" onChange={e => setNewTodo(e.target.value)} required />
    </form>
  )
}

export default TodoForm;