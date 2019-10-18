import { isType$ } from '../core/type';
/**
 * @export
 * @function 检测输入值是否为数组类型
 * @param {any[]} val
 * @returns {boolean}
 */
export const isArray$ = (val: any[]): boolean => {
  return isType$('array', val);
};
