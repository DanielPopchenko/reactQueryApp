import axios from 'axios';

class TodoService {
  // ! Private variable
  #URl = 'http://localhost:3000/todos';

  async getById(id) {
    return axios.get(`${this.#URl}/${id}`);
  }

  async getAll() {
    return axios.get(`${this.#URl}`);
  }

  async create(name) {
    //   ! В пост запросе сначала указать путь пост запроса, после что будем постить
    return axios.post(this.#URl, {
      name,
      completed: false,
    });
  }
  async toggleCompleted(todo) {
    console.log('todoId: ', todo.id);
    return axios.put(`${this.#URl}/${todo.id}`, { ...todo, completed: !todo.completed });
  }

  async changeTodoTitle(todo, title) {
    return axios.put(`${this.#URl}/${todo.id}`, { ...todo, title });
  }
}

// ! Сразу создаем екземпляр и отдаем его
export default new TodoService();
