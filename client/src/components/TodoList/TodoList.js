import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.scss';

function TodoList(props) {
  return (
    <div className="todo">
      <ul className="todo--list">
        {props.tasks.map((task, key) => {
          return (
            <TodoItem
              task={task}
              key={key}
              toggleCompleted={props.toggleCompleted}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;