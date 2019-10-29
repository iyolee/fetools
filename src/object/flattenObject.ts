import { $isType } from '../index';

function $_flattenObject(obj: { [propName: string]: any }, prefix = ''): any {
  return Object.keys(obj).reduce((acc: { [key: string]: any }, k: string) => {
    const pre = prefix.length ? `${prefix}.` : '';
    if ($isType('object', obj[k])) {
      Object.assign(acc, $_flattenObject(obj[k], pre + k));
    } else {
      const key: string = `${pre}${k}`;
      acc[key] = obj[k];
    }
    return acc;
  }, {});
}

export function $flattenObject(obj: { [propName: string]: any }): any {
  return $_flattenObject(obj);
}
