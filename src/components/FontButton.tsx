import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { fontSizeState, fontSizeLabelState } from '../atoms/notesAtom.ts';

const FontButton = () => {

  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
  const fontSizeLabel = useRecoilValue(fontSizeLabelState);

  console.log(fontSize);

  return (
    <ButtonWrapper>
      <div>Current font size: {fontSizeLabel}</div>

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
