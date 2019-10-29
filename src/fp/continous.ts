export function $continous(reducer: (...args: any) => any): any {
  // tslint:disable-next-line: only-arrow-functions
  return function (...args: any) {
    return args.reduce((a: any, b: any) => reducer(a, b));
  };
}
