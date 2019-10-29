export function $debounce(func: (...args: any) => any, delay: number) {
  let timeout: any;
  return function (...args: any) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      // @ts-ignore
      func.apply(this, args);
    }, delay);
  };
}
