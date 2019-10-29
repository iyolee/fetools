import { $isType } from '../index';

export function $isDate(val: any) {
  return $isType('date', val);
}
