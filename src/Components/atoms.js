import {atom} from 'recoil';

export const canvasBackgroundColorState = atom({
    key: 'canvasBackgroundColorState',
    default: 'white',
  });

  export const counterIdState = atom({
    key: 'counterId',
    default: 0,
  })

  export const rectangleIdArrayState = atom({
    key: 'rectanglesArrayState',
    default: [],
  });