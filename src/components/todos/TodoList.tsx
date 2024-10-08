import React from 'react'
import styled from 'styled-components'
import { useRecoilValue } from 'recoil';
import { todoListState } from '../../atoms/todoAtom.ts';
import TodoItemCreator from './TodoItemCreator.tsx';
import TodoItem from './TodoItem.tsx';
import TodoListFilters from './TodoListFilters.tsx';
import TodoListStats from './TodoListStats.tsx';

const TodoList = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <StyledWrapper>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
`

export default TodoList
