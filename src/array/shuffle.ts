export function $shuffle(arr: any[]) {
  for (let i = arr.length; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    [arr[j], arr[i - 1]] = [arr[i - 1], arr[j]];
  }
  return arr;
}
