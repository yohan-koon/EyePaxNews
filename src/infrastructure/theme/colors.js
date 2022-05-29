import {palatte} from './palatte';
export const colors = {
  palatte,
  brand: {
    primary: palatte.red,
    secondary: palatte.blue,
    muted: '',
  },
  ui: {
    primary: palatte.red,
    secondary: palatte.blue,
    tertiary: palatte.tertiary,
    quaternary: palatte.black,
    disabled: palatte.white,
    error: palatte.red,
    success: palatte.blue,
    border: palatte.lightGray,
  },
  bg: {
    primary: palatte.white,
    secondary: '',
  },
  text: {
    primary: palatte.black,
    secondary: palatte.white,
    label: palatte.gray,
    disabled: palatte.black,
    inverse: palatte.white,
    error: palatte.red,
    success: palatte.blue,
  },
};
