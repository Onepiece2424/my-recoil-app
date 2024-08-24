import React from 'react'
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { fontSizeState } from '../atoms/notesAtom.ts';

const FontButton = () => {

  const [fontSize, setFontSize] = useRecoilState(fontSizeState);

  console.log(fontSize);

  return (
    <ButtonWrapper>
      <button onClick={() => setFontSize((size: number) => size + 1)} style={{ fontSize: `${fontSize}px` }}>
        Click to Enlarge
      </button>
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled.div`
  margin: 20px auto;
`

export default FontButton
