import { $continous } from './continous';

// function $pipe(...fns: Array<(...args: any) => any>) {
//   return (...args: any) => fns.reduce((fx, fy) => fy(fx), ...args);
// }

export const $pipe = $continous((prev, next) => {
  return function (input: any) {
    // @ts-ignore
    return next.call(this, prev.call(this, input));
  };
});
