import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.scss';

function TodoList(props) {
  return (
    <div className="todo">
      <ul className="todo--list">
        {props.tasks.map((task) => {
          return (
            <TodoItem
              task={task}
              key={task.id}
              toggleCompleted={props.toggleCompleted}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;