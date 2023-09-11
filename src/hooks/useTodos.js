import { useQuery } from '@tanstack/react-query';
import todoService from '../services/todo.service';

export const useTodos = () => {
  return useQuery(
    //   ! query key - для того чтобы с кэша брались правильные данные (по нужному ключу)
    ['todos'],
    () => todoService.getAll(),
    // ! В этом обьекте настроек мы можем настраивать действия после запроса
    // ! select - конвертирует и возвращает с промиса данные
    { select: (response) => response.data },
  );
};
