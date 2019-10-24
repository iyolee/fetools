import { isType$ } from '../core/isType';

/**
 * @export
 * @function 检测输入值是否为对象类型
 * @param {object} val
 * @returns {boolean}
 */
export const isObject$ = (val: object): boolean => {
  return isType$('object', val);
};
