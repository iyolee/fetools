import { $isType } from '../core/index';

export function $isString(val: any): boolean {
  return $isType('string', val);
}
