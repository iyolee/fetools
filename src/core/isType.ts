import { whichType$ } from './index';

type ValueType = string | boolean | number | null | undefined | symbol |
  any[] | object | (() => void) | RegExp;

/**
 * @export
 * @function 检测是否属于某种类型
 * @param {string} type
 * @param {string} value
 * @returns {boolean} true | false
 */
export const isType$ = (type: string, value: ValueType): boolean => {
  return type === whichType$(value);
};