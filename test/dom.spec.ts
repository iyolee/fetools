import { $localStorage } from '../src/dom/localStorage'

describe('$localStorage with time expiration function',()=>{
  test('should be null if no $localStroage', () => {
    expect($localStorage.getItem('test')).toBeNull()
  })
  
  test('should be expiration if time end', done => {
    $localStorage.setItem('test', '222', 500)
    expect($localStorage.getItem('test')).toBe('222')
  
    setTimeout(() => {
      expect($localStorage.getItem('test')).toBe('参数test已过期')
      done()
    }, 1000)
  })
  
  test('should be null if remove $localStroage',()=>{
    $localStorage.setItem('test', '222')
    expect($localStorage.getItem('test')).toBe('222')
    $localStorage.removeItem('test')
    expect($localStorage.getItem('test')).toBeNull()
  })
  
  test('should be null if clear $localStroage',()=>{
    $localStorage.setItem('test', '111')
    $localStorage.setItem('test2', '222')
    expect($localStorage.getItem('test')).toBe('111')
    expect($localStorage.getItem('test2')).toBe('222')
    $localStorage.clear()
    expect($localStorage.getItem('test')).toBeNull()
    expect($localStorage.getItem('test2')).toBeNull()
  })
})
