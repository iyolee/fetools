import { $isArray } from '../src/array';

test('[array]case 1: $isArray', () => {
  expect($isArray([])).toBe(true)
})
