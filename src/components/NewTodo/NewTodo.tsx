import { useState } from 'react';
import { ITodo } from '../../models';
import * as S from './NewTodo.styled';

interface Props {
  onAddTodo: (todo: ITodo) => void;
}

const NewTodo = (props: Props) => {
  const [todoText, setTodoText] = useState<string>('');

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todoText.length > 0) {
      props.onAddTodo({ id: Math.random(), text: todoText });
      setTodoText('');
    }
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  return (
    <S.NewTodoForm onSubmit={submitHandler}>
      <label htmlFor='text'>New todo</label>
      <input id='text' type='text' onChange={changeHandler} value={todoText} autoFocus />
      <button>Save</button>
    </S.NewTodoForm>
  );
};

export default NewTodo;
