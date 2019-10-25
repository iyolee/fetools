type ValueType = string | boolean | number | null | undefined | symbol |
  any[] | object | (() => void) | RegExp;
/**
 * @export
 * @function 检测输入的值属于哪种类型
 * @param {ValueType} value
 * @returns {string}
 * "string", "number", "null", "undefined", "boolean", "symbol"
 * "function", "object", "regexp", "array"
 */
export function $whichType(value: ValueType): string {
  const _toString = Object.prototype.toString;
  const type: string = _toString.call(value).split(' ')[1].replace(']', '');
  return type.toLowerCase();
}
