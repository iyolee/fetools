import { $isFunction } from './isFunction';

export const $once = (fn: (...args: any) => any) => {
  let called: boolean = false;
  return function (...args: any) {
    if (!called) {
      called = true;
      // @ts-ignore
      fn.apply(this, args);
    }
  };
};
