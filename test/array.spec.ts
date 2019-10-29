import { $isArray, $shuffle, $flattenArray } from '../src/index';

test('[array]case 1: $isArray', () => {
  expect($isArray([])).toBe(true)
  expect($isArray({})).toBe(false)
})

test('[array]case 2: $shuffle', () => {
  expect($shuffle([1, 2, 3])).toBeInstanceOf(Array)
})

test('[array]case 3: $flattenArray', () => {
  expect($flattenArray([[1, 2, 3], [[4, 5, 6], 7]])).toStrictEqual([1, 2, 3, 4, 5, 6, 7])
  expect($flattenArray([[1, 2, 3], [[4, 5, 6], 7]], -1)).toStrictEqual([[1, 2, 3], [[4, 5, 6], 7]])
  expect($flattenArray([[1, 2, 3], [[[4, 5, 6], 7], 8]], 2)).toStrictEqual([1, 2, 3, [4, 5, 6], 7, 8])
})
