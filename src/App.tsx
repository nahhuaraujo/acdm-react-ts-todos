import { useState } from 'react';
import { NewTodo, Todos } from './components';
import { ITodo } from './models';

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodoHandler = (todo: ITodo) => {
    setTodos(prevTodos => [todo, ...prevTodos]);
  };

  const deleteTodoHandler = (id: number) => {
    const filteredTodos = todos.filter(todo => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos todos={todos} onDeleteTodo={deleteTodoHandler} />
    </>
  );
}

export default App;
