import { atom } from "recoil";

export interface Todo {
  id: number;
}

export const todoListState = atom<Todo[]>({
  key: 'TodoList',
  default: [],
});
