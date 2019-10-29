import { $once, $debounce, $throttle } from '../src/index';

test('[function]case 1: $once', () => {
  const obj = { idx: 1 }
  function testFn(obj: any) {
    obj.idx = ++obj.idx;
  }
  const onceFn = $once(testFn)
  onceFn(obj)
  onceFn(obj)
  expect(obj).toStrictEqual({ idx: 2 });
})

test('[function]case 2: $debounce', () => {
  let res = 1;
  const testFn = $debounce(() => { res += 1 }, 1000);
  testFn()
  expect(res).toBe(1)
})

test('[function]case 3: $throttle', () => {
  let res = 1;
  const testFn = $throttle(() => { res += 1 }, 1000);
  testFn()
  expect(res).toBe(1)
})
