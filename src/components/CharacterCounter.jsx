import React from 'react'
import TextInput from './TextInput'
import CharacterCount from './CharacterCount'
import { atom } from 'recoil'

const CharacterCounter = () => {
  const textState = atom({
    key: 'textState',
    default: '',
  });

  return (
    <>
      <TextInput textState={textState} />
      <CharacterCount textState={textState} />
    </>
  )
}

export default CharacterCounter
