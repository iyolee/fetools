import { $pluckDeep, $isPlainOject, $isObjectEquals, $flattenObject, $unflattenObject } from '../src/index';

test('[object]case 1: $pluckDeep', () => {
  const a = {
    b: {
      c: [
        {
          d: 'hello world'
        }
      ]
    }
  }
  expect($pluckDeep(a, 'b.c.0.d')).toBe('hello world')
  expect($pluckDeep(a, 'b.c.1.d')).toBe(null)
  expect($pluckDeep(a, ['b', 'c', 0, 'd'])).toBe('hello world')
  expect($pluckDeep(a, ['b', 'c', 1, 'd'])).toBe(null)
});

test('[object]case 2: $pluckDeep', () => {
  const a = {
    b: {
      c: [
        {
          d: 'hello world'
        }
      ]
    }
  }
  const result = $pluckDeep(a)
  expect(result('b.c.0.d')).toBe('hello world')
  expect(result('b.c.1.d')).toBe(null)
  expect(result(['b', 'c', 0, 'd'])).toBe('hello world')
  expect(result(['b', 'c', 1, 'd'])).toBe(null)
});


test('[object]case 3: $isPlainOject', () => {
  expect($isPlainOject({})).toBe(true)
  expect($isPlainOject('')).toBe(false)
})

test('[object]case 4: $isObjectEquals', () => {
  expect($isObjectEquals({}, {})).toBe(true)
  expect($isObjectEquals({}, [])).toBe(false)
  expect($isObjectEquals({name: 'leeper', age: 20}, {name: 'leeper', age: 20})).toBe(true)
  expect($isObjectEquals({name: 'leeper', age: 20}, {name: ['jenkin'], age: 20})).toBe(false)
  expect($isObjectEquals({name: 'leeper', age: 20}, {name: 'leeper'})).toBe(false)
  expect($isObjectEquals({name: ['leeper', 'jenkin'], age: 20}, {name: ['leeper', 'jenkin'], age: 20})).toBe(true)
  expect($isObjectEquals({name: ['leeper', 'jenkins'], age: 20}, {name: ['leeper', 'jenkin'], age: 20})).toBe(false)
  expect($isObjectEquals({name: {firstname: 'leeper'}, age: 20}, {name: {firstname: 'leeper'}, age: 20})).toBe(true)
  expect($isObjectEquals({name: {firstname: 'jenkin'}, age: 20}, {name: {firstname: 'leeper'}, age: 20})).toBe(false)
  expect($isObjectEquals([1, 2, 3, [2, 3, 4]], [1, 2, 3, [2, 3, 4]])).toBe(true)
  expect($isObjectEquals([1, 2, 4, [2, 3, 4]], [1, 2, 3, [2, 3, 4]])).toBe(false)
})

test('[object]case 5: $flattenObject', () => {
  expect($flattenObject({ a: { b: { c: 1 } }, d: 1 })).toStrictEqual({ 'a.b.c': 1, d: 1 })
  expect($flattenObject({ a: { b: { c: [1, 2] } }, d: 1 })).toStrictEqual({ 'a.b.c': [1, 2], d: 1 })
})

test('[object]case 6: $unflattenObject', () => {
  expect($unflattenObject({ 'a.b.c': 1, d: 1 })).toStrictEqual({ a: { b: { c: 1 } }, d: 1 })
  // expect($unflattenObject({ 'a.b.c': [1, 2], d: 1 })).toStrictEqual({ a: { b: { c: [1, 2] } }, d: 1 })
})
