export function $randomNumberInRange(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
