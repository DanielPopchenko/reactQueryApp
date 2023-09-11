// import React from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useTodos } from './hooks/useTodos';
import { CreateTodoForm } from './components/createTodoForm/CreateTodoForm';
import TodoList from './components/todoList/TodoList';

// ! Для того чтобы сделать запрос мы должны использовать хук useQuery,
// ! В свою очередь он принимает в себя - 1 массив с названием (указателем)
// ! 2 - функцию запроса
// ! 3 - не обязательный обьект настроек

const App = () => {
  // ! Получаем нужные поля через кастомный хук
  const { data, isLoading } = useTodos();

  const queryClient = useQueryClient();

  // ! Посчитать сколько фетчев было
  // const fetchCount = useIsFetching();

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, alignItems: 'center' }}>
      <div>
        <CreateTodoForm />
      </div>

      <div>
        <h2>All Todos</h2>

        {/* invalidateQueries('todos') - ! 'todos' - ключ ! - простой способ сделать рефетч данных по клику */}
        {/* Мы не привязаны ни к чему и можем достукиваться до этого где угодно */}

        {isLoading ? <div>Loading...</div> : data.length ? <TodoList /> : 'No todos!'}
        <button type="button" onClick={() => queryClient.invalidateQueries('todos')}>
          Refetch
        </button>
      </div>
    </div>
  );
};

export { App };
