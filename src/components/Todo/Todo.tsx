import { ITodo } from '../../models';
import * as S from './Todo.styled';

interface Props {
  todo: ITodo;
  onDeleteTodo: (id: number) => void;
}

const Todo = (props: Props) => {
  const deleteHandler = () => {
    props.onDeleteTodo(props.todo.id);
  };

  return (
    <S.Todo key={props.todo.id}>
      {props.todo.text} {props.todo.id}
      <button onClick={deleteHandler}>X</button>
    </S.Todo>
  );
};

export default Todo;
