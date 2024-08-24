import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../../atoms/todoAtom.ts';

const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue('');
  };

  const onChange = ({target: {value}}) => {
    setInputValue(value);
  };

  return (
    <div>
      <input id="todo-input" type="text" value={inputValue} onChange={onChange} title="Enter a todo item" />
      <button onClick={addItem}>Add</button>
    </div>
  )
}

let id = 0;
export const getId = () => {
  return id++;
}

export default TodoItemCreator
