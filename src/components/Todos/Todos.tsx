import { ITodo } from '../../models';
import { Todo } from '../Todo';
import * as S from './Todos.styled';

interface Props {
  todos: ITodo[];
  onDeleteTodo: (id: number) => void;
}

const Todos = (props: Props) => {
  return (
    <S.Todos>
      {props.todos.map(todo => (
        <Todo key={todo.id} todo={todo} onDeleteTodo={props.onDeleteTodo} />
      ))}
    </S.Todos>
  );
};

export default Todos;
