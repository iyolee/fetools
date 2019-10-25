import { $isArray } from '../src/index';

test('[array]case 1: $isArray', () => {
  expect($isArray([])).toBe(true)
  expect($isArray({})).toBe(false)
})
