import { $whichType } from '../index';

export function $isObjectEquals(obj1: { [propName: string]: any }, obj2: { [propName: string]: any }): boolean {
  if ($whichType(obj1) !== $whichType(obj2)) return false;
  for (let propName in obj1) {
    if (obj1.hasOwnProperty(propName) !== obj2.hasOwnProperty(propName)) {
      return false;
    } else if (typeof obj1[propName] !== typeof obj2[propName]) {
      return false;
    }
  }
  for (let propName in obj2) {
    // if (!obj1.hasOwnProperty(propName) || !obj2.hasOwnProperty(propName)) continue;
    if (obj1[propName] instanceof Array && obj2[propName] instanceof Array) {
      if (!$isObjectEquals(obj1[propName], (obj2[propName]))) {
        return false;
      }
    } else if (obj1[propName] instanceof Object && obj2[propName] instanceof Object) {
      if (!$isObjectEquals(obj1[propName], (obj2[propName]))) {
        return false;
      }
    } else if (obj1[propName] !== obj2[propName]) {
      return false;
    }
  }
  return true;
}
