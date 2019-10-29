export function $toggle(...actions: Array<(...args: any) => any>) {
  return function (...args: any) {
    const action = actions.shift();
    actions.push(action as (...args: any) => any);
    // @ts-ignore
    return action.apply(this, args);
  };
}
