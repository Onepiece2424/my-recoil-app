import React from 'react'
import TextInput from './TextInput'
import CharacterCount from './CharacterCount'
import { atom } from 'recoil'
import styled from 'styled-components'
import FontButton from './FontButton.tsx'


const CharacterCounter = () => {
  let name:string = 'Aさん'
  console.log(name)

  const textState = atom({
    key: 'textState',
    default: '',
  });

  const fontSizeState = atom({
    key: 'fontSizeState',
    default: 14,
  });

  return (
    <StyledWrapper>
      <TextInput textState={textState} />
      <CharacterCount textState={textState} />
      <FontButton fontSizeState={fontSizeState} />
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  margin: 50px auto;
  text-align: center;
`

export default CharacterCounter
