import React from 'react';
import './App.css';
import { RecoilRoot } from 'recoil';
import CharacterCounter from './components/CharacterCounter.tsx';
import TodoList from './components/todos/TodoList.tsx';

function App() {

  return (
    <RecoilRoot>
      <CharacterCounter />
      <TodoList />
    </RecoilRoot>
  );
}

export default App;
