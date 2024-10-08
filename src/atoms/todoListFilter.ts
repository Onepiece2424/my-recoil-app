import { atom, selector } from "recoil";
import { todoListState } from "./todoAtom.ts";

export const todoListFilterState = atom({
  key: 'TodoListFilter',
  default: 'Show All',
});

export const filteredTodoListState = selector({
  key: 'FilteredTodoList',
  get: ({get}) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case 'Show Completed':
        return list.filter((item) => item.isComplete);
      case 'Show Uncompleted':
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});
