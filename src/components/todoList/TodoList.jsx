import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { useTodos } from '../../hooks/useTodos';
import todoService from '../../services/todo.service';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { data, refetch } = useTodos();

  const { mutate } = useMutation(['update todo'], (todo) => todoService.toggleCompleted(todo), {
    async onSuccess() {
      await refetch();
    },
  });

  const handleClick = (todo) => {
    console.log(todo);
    mutate(todo);
  };

  return (
    <ul>
      {data.map((todo) => (
        <TodoItem todo={todo} key={todo.id} handleClick={handleClick} />
      ))}
    </ul>
  );
};

export default TodoList;
