import React from 'react'
import TextInput from './TextInput'
import CharacterCount from './CharacterCount'
import { atom } from 'recoil'
import styled from 'styled-components'


const CharacterCounter = () => {
  let name:string = 'Aさん'
  console.log(name)

  const textState = atom({
    key: 'textState',
    default: '',
  });

  return (
    <StyledWrapper>
      <TextInput textState={textState} />
      <CharacterCount textState={textState} />
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  margin: 50px auto;
  text-align: center;
`

export default CharacterCounter
