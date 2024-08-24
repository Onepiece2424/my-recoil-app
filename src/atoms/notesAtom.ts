import { atom, selector } from "recoil";

export const textState = atom({
    key: 'textState',
    default: '',
  });

export const fontSizeState = atom({
  key: 'fontSizeState',
  default: 14,
});

export const fontSizeLabelState = selector({
  key: 'fontSizeLabelState',
  get: ({get}) => {
    const fontSize = get(fontSizeState);
    const unit = 'px';

    return `${fontSize}${unit}`;
  },
});
