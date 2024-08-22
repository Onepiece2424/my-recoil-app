import React from 'react'
import { selector, useRecoilValue } from 'recoil';


const CharacterCount = ({ textState }) => {
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
