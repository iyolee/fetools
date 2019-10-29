import { $MayBe, $continous, $toggle, $pipe } from '../src/index';

test('[fp]case 1: $MayBe', () => {
  const res = {
    data: {
      lists: [{
        name: 'leeper'
      }]
    }
  }
  expect(
    $MayBe.of(res)
      .map(res => res.data)
      .map(data => data.lists)
      .map(lists => lists[0])
      .map(lists => lists.name)
      .map(name => name.toUpperCase())
      .value()
  ).toBe('LEEPER')
  expect(
    $MayBe.of(res)
      .map(res => res.data)
      .map(data => data.lists)
      .map(lists => lists[0])
      .map(lists => lists.keyword)
      .map(keyword => keyword.name)
      .value()
  ).toBe(null)
})

test('[fp]case 2: $continous', () => {
  const add = $continous((x, y) => x + y)
  const mul = $continous((x, y) => x * y)
  expect(add(1, 2, 3, 4)).toBe(10);
  expect(mul(1, 2, 3, 4)).toBe(24);
})

test('[fp]case 3: $toggle', () => {
  const testFn = $toggle(() => 'green', () => 'red', () => 'yellow')
  expect(testFn()).toBe('green');
  expect(testFn()).toBe('red');
  expect(testFn()).toBe('yellow');
  expect(testFn()).toBe('green');
})

test('[fp]case 4: $pipe', () => {
  const addOne = (x: number) => x + 1;
  const addTwo = (x: number) => x + 2;
  const mulFive = (x: number) => x * 5;
  const testFn = $pipe(addOne, mulFive, addTwo)
  expect(testFn(1)).toBe(12);
  expect(testFn(2)).toBe(17);
})
