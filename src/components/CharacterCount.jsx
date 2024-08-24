import React from 'react'
import { selector, useRecoilValue } from 'recoil';
import { textState } from '../atoms/notesAtom.ts';

const CharacterCount = () => {
  const charCountState = selector({
    key: 'charCountState',
    get: ({get}) => {
      const text = get(textState);

      return text.length;
    },
  });

  const count = useRecoilValue(charCountState);

  return (
    <>
     Character Count: {count}
    </>
  )
}

export default CharacterCount
