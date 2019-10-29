import { $isDate, $getDaysDiffBetweenDates } from '../src/index';

test('[date]case 1: $isDate', () => {
  expect($isDate(new Date())).toBe(true)
  expect($isDate(+new Date())).toBe(false)
})

test('[date]case 2: $getDaysDiffBetweenDates', () => {
  expect($getDaysDiffBetweenDates(new Date('2019-01-01'), new Date('2019-10-24'))).toBe(296)
  expect($getDaysDiffBetweenDates(+new Date('2019-01-01'), new Date('2019-10-24'))).toBe(296)
})
