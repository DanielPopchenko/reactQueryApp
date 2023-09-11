import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { useTodos } from '../../hooks/useTodos';
import todoService from '../../services/todo.service';

const CreateTodoForm = () => {
  //   ! - достаем refetch
  const { refetch } = useTodos();
  const { mutate } = useMutation(['create todo'], (title) => todoService.create(title), {
    // ! При успешном запросе делаем это ...
    async onSuccess() {
      if (title === '') {
        alert('Type something, for example: "Send an email"');

        return;
      }

      alert('Todo was created!');
      setTitle('');
      //   ! и переобновляем данные при успешном запросе,
      //   ! но так как у нас не настоящая база данных, они не обновлятся

      await refetch();
    },
  });

  const [title, setTitle] = useState('');

  // ! ['create todo'] - Ключ

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);

    mutate(title);
  };

  return (
    <>
      <h1>Create a todo</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name=""
          id=""
          value={title}
          placeholder="Type title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />

        <button type="submit">Create</button>
      </form>
    </>
  );
};

export { CreateTodoForm };
