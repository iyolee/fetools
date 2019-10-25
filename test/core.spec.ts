import { $whichType, $isType } from '../src/index';

test('[core]case 1: $isType', () => {
  expect($isType('string', '')).toBe(true)
  expect($isType('string', {})).toBe(false)
})

test('[core]case 2: $whichType', () => {
  expect($whichType('')).toBe('string')
  expect($whichType({})).toBe('object')
  expect($whichType({})).toBe('object')
  expect($whichType(/$[0-9]/)).toBe('regexp')
})