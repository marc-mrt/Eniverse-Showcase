// @flow

let isDesktop;

export const setDesktop = (val: boolean) => {
  isDesktop = val;
};

export const getDesktop = (): boolean => isDesktop;
