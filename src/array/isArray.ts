import { isType$ } from '../core/index';

/**
 * @export
 * @function 检测输入值是否为数组类型
 * @param {any[]} val
 * @returns {boolean}
 */
export const isArray$ = (val: any[]): boolean => {
  return isType$('array', val);
};
