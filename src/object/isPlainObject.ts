import { $isType } from '../core/isType';

/**
 * @export
 * @function 检测输入值是否为对象类型
 * @param {any} val
 * @returns {boolean}
 */
export function $isPlainOject(val: any): boolean {
  return $isType('object', val);
}
