import React from 'react'
import { useRecoilState } from 'recoil';
import { todoListFilterState } from '../../atoms/todoListFilter.ts';

const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = ({target: {value}}) => {
    setFilter(value);
  };

  return (
    <>
      <label htmlFor="filter">Filter:</label>
      <select id="filter" value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </>
  )
}

export default TodoListFilters
