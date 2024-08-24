import React from 'react'
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { todoListStatsState } from '../../atoms/todoListStats.ts';

const TodoListStats = () => {
  const {
    totalNum,
    totalCompletedNum,
    totalUncompletedNum,
    percentCompleted,
  } = useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted);

  return (
    <StyledWrapper>
      <li>Total items: {totalNum}</li>
      <li>Items completed: {totalCompletedNum}</li>
      <li>Items not completed: {totalUncompletedNum}</li>
      <li>Percent completed: {formattedPercentCompleted}</li>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.ul`
  list-style: none;
`

export default TodoListStats
