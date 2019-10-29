export function $throttle(fn: (...args: any) => any, threshhold: number = 160) {
  let timeout: any;
  let start = +new Date;
  return (...args: any) => {
    const curr = +new Date();
    clearTimeout(timeout);

    if (curr - start >= threshhold) {
      // @ts-ignore
      fn.apply(this, args);
      start = curr;
    } else {
      timeout = setTimeout(() => {
        // @ts-ignore
        fn.apply(this, args);
      }, threshhold);
    }
  };
}
