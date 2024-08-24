import { atom } from "recoil";

export interface Todo {
  id: number;
  isComplete: Boolean
}

export const todoListState = atom<Todo[]>({
  key: 'TodoList',
  default: [],
});
