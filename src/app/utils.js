// Used to retrieve the todo list from local storage
export const getLocalStorage = () => {
  let todos = localStorage.getItem('todos');
  if (todos) {
      return (JSON.parse(todos));
  } else {
      return [];
  }
};
