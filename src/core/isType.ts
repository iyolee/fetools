import { $whichType } from './whichType';

/**
 * @export
 * @function 检测是否属于某种类型
 * @param {string} type
 * @param {any} val
 * @returns {boolean} true | false
 */
export function $isType(type: string, val: any): boolean {
  return type === $whichType(val);
}
