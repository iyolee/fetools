import { $isType } from '../index';

export function $isNumber(val: any) {
  return $isType('number', val);
}
