import { $whichType, $isType, $equals, $isMobile } from '../src/index';

test('[core]case 1: $isType', () => {
  expect($isType('string', '')).toBe(true)
  expect($isType('string', {})).toBe(false)
})

test('[core]case 2: $whichType', () => {
  expect($whichType('')).toBe('string')
  expect($whichType({})).toBe('object')
  expect($whichType({})).toBe('object')
  expect($whichType(new WeakMap())).toBe('weakmap')
  expect($whichType(/$[0-9]/)).toBe('regexp')
})

test('[core]case 3: $equals', () => {
  expect($equals({}, {})).toBe(true)
  expect($equals([], {})).toBe(false)
  expect($equals({name: null}, {name: null})).toBe(true)
  expect($equals({name: null}, {name: undefined})).toBe(false)
  expect($equals({name: 'leeper', age: 20}, {name: 'leeper', age: 20})).toBe(true)
  expect($equals({name: 'leeper', age: 20}, {name: ['jenkin'], age: 20})).toBe(false)
  expect($equals({name: 'leeper', age: 20}, {name: 'leeper'})).toBe(false)
  expect($equals({name: ['leeper', 'jenkin'], age: 20}, {name: ['leeper', 'jenkin'], age: 20})).toBe(true)
  expect($equals({name: ['leeper', 'jenkins'], age: 20}, {name: ['leeper', 'jenkin'], age: 20})).toBe(false)
  expect($equals({name: {firstname: 'leeper'}, age: 20}, {name: {firstname: 'leeper'}, age: 20})).toBe(true)
  expect($equals({name: {firstname: 'jenkin'}, age: 20}, {name: {firstname: 'leeper'}, age: 20})).toBe(false)
  expect($equals([1, 2, 3, [2, 3, 4]], [1, 2, 3, [2, 3, 4]])).toBe(true)
  expect($equals([1, 2, 4, [2, 3, 4]], [1, 2, 3, [2, 3, 4]])).toBe(false)
  expect($equals(new Date('2019-10-09'), new Date('2019-10-09'))).toBe(true)
  expect($equals(new Date('2019-10-09'), new Date('2019-10-10'))).toBe(false)
  expect($equals([1, 2, 4, [2, 3, 4]], [1, 2, 3, [2, 3, 4]])).toBe(false)
})

test('[core]case 4: $isMobile', () => {
  expect($isMobile()).toBe(false)
})