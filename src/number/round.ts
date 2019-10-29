/**
 *
 * @function 四舍五入到指定位数
 * @export
 * @param {number} n
 * @param {number} [decimals=0]
 * @returns {number}
 */
export function $round(n: number, decimals: number = 0): number {
  return Number(`${Math.round(Number(`${n}e${decimals}`))}e-${decimals}`);
}
