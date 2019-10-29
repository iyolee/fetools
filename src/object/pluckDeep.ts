import { $isArray } from '../array';

function $getPlainObjectValue(plainObj: object, path: string | string[] | number[]): any {
  const pathToArr: string[] = $isArray(path) ? path as string[] : (path as string).split('.');
  return pathToArr.reduce((xs: any, x) => (xs && xs[x]) ? xs[x] : null, plainObj);
}

/**
 * @export
 * @function 安全取值
 * @param {object} plainObj
 * @param {array} ?path
 * @returns {boolean}
 */
export function $pluckDeep(plainObj: object, path?: string | any[]): any {
  if (!path) {
    return (path: string | string[] | number[]) => {
      return $getPlainObjectValue(plainObj, path);
    };
  }
  return $getPlainObjectValue(plainObj, path);
}
