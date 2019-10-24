import { isArray$ } from '../src/array';

test('[] is Array', () => {
  expect(isArray$([])).toBe(true)
});