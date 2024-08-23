import React from 'react';
import './App.css';
import { RecoilRoot } from 'recoil';
import CharacterCounter from './components/CharacterCounter.tsx';

function App() {

  return (
    <RecoilRoot>
      <CharacterCounter />
    </RecoilRoot>
  );
}

export default App;
