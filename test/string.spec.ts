import { $addZero, $isString } from '../src/index';

test('[string]case 1: $addZero', () => {
  expect($addZero('6')).toBe('06')
  expect($addZero(88)).toBe('88')
})

test('[string]case 2: $isString', () => {
  expect($isString('6')).toBe(true)
  expect($isString({})).toBe(false)
})
