import React from 'react'
import TextInput from './TextInput'
import CharacterCount from './CharacterCount'
import { atom } from 'recoil'
import styled from 'styled-components'
import FontButton from './FontButton.tsx'


const CharacterCounter = () => {
  let name:string = 'Aさん'
  console.log(name)

  return (
    <StyledWrapper>
      <TextInput />
      <CharacterCount />
      <FontButton />
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  margin: 50px auto;
  text-align: center;
`

export default CharacterCounter
