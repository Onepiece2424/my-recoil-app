import { atom } from "recoil";

export const textState = atom({
    key: 'textState',
    default: '',
  });

export const fontSizeState = atom({
  key: 'fontSizeState',
  default: 14,
});
