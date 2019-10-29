import { $isType } from '../index';

// 暂时作为库的私有方法
export function $isFunction(fn: any): boolean {
  return $isType('function', fn);
}
