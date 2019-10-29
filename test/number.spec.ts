import { $isNumber, $randomIntegerInRange, $randomNumberInRange } from '../src/index';

test('[number]case 1: $isNumber', () => {
  expect($isNumber(0)).toBe(true)
  expect($isNumber({})).toBe(false)
})

test('[number]case 2: $randomIntegerInRange', () => {
  // 测试随机数
  const mockMath = Object.create(global.Math);
  mockMath.random = () => 0.8043847682011522;
  global.Math = mockMath;
  expect($randomIntegerInRange(0, 6)).toBe(5)
})

test('[number]case 3: $randomNumberInRange', () => {
  // 测试随机数
  const mockMath = Object.create(global.Math);
  mockMath.random = () => 0.8043847682011522;
  global.Math = mockMath;
  expect($randomNumberInRange(0, 6)).toBe(4.826308609206913)
})
