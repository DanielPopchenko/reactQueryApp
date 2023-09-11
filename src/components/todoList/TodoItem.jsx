/* eslint-disable react/prop-types */
import React from 'react';
import { BsCheckLg } from 'react-icons/bs';

const TodoItem = ({ todo, handleClick }) => {
  return (
    <li className="todoItem">
      <div className="">
        <h3>{todo.name}</h3>

        <button className="button" onClick={() => handleClick(todo)}>
          {!todo.completed ? (
            <span className="completedText">Complete</span>
          ) : (
            <span className="incompletedText">Incomplete</span>
          )}
        </button>
      </div>
      {todo.completed ? (
        <span className="completed">
          <BsCheckLg fill="green" fontSize={24} />
        </span>
      ) : (
        <span className="notCompleted">
          <BsCheckLg fill="red" fontSize={24} />
        </span>
      )}
    </li>
  );
};

export default TodoItem;
