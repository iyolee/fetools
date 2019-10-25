import { $getPrimitive } from '../src/index';

test('[object]case 1: $getPrimitive', () => {
  const a = {
    b: {
      c: [
        {
          d: 'hello world'
        }
      ]
    }
  }
  expect($getPrimitive(a, 'b.c.0.d')).toBe('hello world')
  expect($getPrimitive(a, 'b.c.1.d')).toBe(null)
  expect($getPrimitive(a, ['b', 'c', 0, 'd'])).toBe('hello world')
  expect($getPrimitive(a, ['b', 'c', 1, 'd'])).toBe(null)
});

test('[object]case 2: $getPrimitive', () => {
  const a = {
    b: {
      c: [
        {
          d: 'hello world'
        }
      ]
    }
  }
  const result = $getPrimitive(a)
  expect(result('b.c.0.d')).toBe('hello world')
  expect(result('b.c.1.d')).toBe(null)
  expect(result(['b', 'c', 0, 'd'])).toBe('hello world')
  expect(result(['b', 'c', 1, 'd'])).toBe(null)
});