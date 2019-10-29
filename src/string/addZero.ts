/**
 *
 * @function 补零操作
 * @export
 * @param {(number | string)} num
 */
export function $addZero(num: number | string): string {
  return (`0${num}`).slice(-2);
}
