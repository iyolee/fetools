/**
 * @export
 * @function 检测输入值是否为对象类型
 * @param {object} val
 * @returns {boolean}
 */
export const pluckDeep = (plainObj: object, path: string) => {
  const pathToArr: any[] = path.split(".");
  pathToArr.reduce((val, attr) => val[attr], plainObj);
}