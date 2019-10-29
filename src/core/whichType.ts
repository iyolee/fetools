/**
 * @export
 * @function 检测输入的值属于哪种类型
 * @param {any} val
 * @returns {string}
 * "string", "number", "null", "undefined", "boolean", "symbol"
 * "function", "object", "regexp", "array"
 */
export function $whichType(val: any): string {
  const _toString = Object.prototype.toString;
  const type: string = _toString.call(val).split(' ')[1].replace(']', '');
  return type.toLowerCase();
}
