# APIs
fetools 详细 API 文档。

## Object
<details>
<summary>View contents</summary>

* [`$isPlainOject`](#isPlainOject)
* [`$isObjectEquals`](#isObjectEquals)
* [`$pluckDeep`](#pluckDeep)
* [`$flattenObject`](#flattenObject)

</details>

## Array
<details>
<summary>View contents</summary>

* [`$isArray`](#isArray)
* [`$shuffle`](#shuffle)
* [`$flattenArray`](#flattenArray)

</details>

## FP
<details>
<summary>View contents</summary>

* [`$MayBe`](#MayBe)
* [`$continous`](#continous)
* [`$toggle`](#toggle)
* [`$pipe`](#pipe) 

</details>

## Function
<details>
<summary>View contents</summary>

* [`$once`](#once)
* [`$debounce`](#debounce)
* [`$throttle`](#throttle)

</details>

## Number
<details>
<summary>View contents</summary>

* [`$isNumber`](#isNumber)
* [`$randomIntegerInRange`](#randomIntegerInRange)
* [`$randomNumberInRange`](#randomNumberInRange)

</details>

## String
<details>
<summary>View contents</summary>

* [`$isString`](#isString)
* [`$addZero`](#addZero)

</details>

## Date
<details>
<summary>View contents</summary>

* [`$getDaysDiffBetweenDates`](#getDaysDiffBetweenDates)

</details>

## Other
<details>
<summary>View contents</summary>

* [`$whichType`](#whichType)

</details>

## BOM
<details>
<summary>View contents</summary>

* [`$localStorage`](#localStorage)

</details>

### isPlainOject
描述：判断传进去的某个值是否为 Object。

```js
$isPlainOject(val: any): Boolean;
```

参数：
- val: 需要检测的值。

返回值：
- 如果值是 Object，则为true; 否则为false。

<details>
<summary>Examples</summary>

```js
$isPlainOject({}) // true
$isPlainOject([]) // false
```
</details>

<br>[⬆ Back to top](#APIs)

### isObjectEquals
描述：判断两个输入 Object 类型值是否相等。

```js
$isObjectEquals(obj1: Object | Array, obj2: Object | Array): Boolean;
```

参数：
- obj1: 需要检测的值。
- obj2: 需要检测的值。

返回值：
- 如果值相等，则为true; 否则为false。

<details>
<summary>Examples</summary>

```js
$isObjectEquals({}, {}) // true
$isObjectEquals({}, []) // false
$isObjectEquals([1, 2, 3, [2, 3, 4]], [1, 2, 3, [2, 3, 4]]) // true
$isObjectEquals([1, 2, 3, [2, 3, 4]], [1, 2, 3, [2, 3]]) // false
```
</details>

<br>[⬆ Back to top](#APIs)

### pluckDeep
描述：对 Object 安全取值，基本可以避免: ```"TypeError: Cannot read property 'x' of undefined"```。

```js
$pluckDeep(obj: Object, path?: string | string[]): any | null;
```

参数：
- obj: 需要取值的Object。
- path?: 取值路径。

返回值：
- 如果值存在则返回该值，否则返回null。

<details>
<summary>Examples</summary>

```js
const a = { b: { c: [{ d: 'hello world' }] } }
$pluckDeep(a, 'b.c.0.d') // 'hello world'
$pluckDeep(a, 'b.c.1.d') // null

const result = $pluckDeep(a)
result('b.c.0.d') // 'hello world'
result('b.c.1.d') // null
```
</details>

<br>[⬆ Back to top](#APIs)

### flattenObject
描述：对 Object 数据结构进行调整，缩短取值链路。

```js
$flattenObject(obj: Object): Object;
```

参数：
- obj: 需要调整的 Object。

返回值：
- 返回调整后的 Object。

<details>
<summary>Examples</summary>

```js
$flattenObject({ a: { b: { c: 1 } }, d: 1 }) // { 'a.b.c': 1, d: 1 }
$flattenObject({ a: { b: { c: [1, 2] } }, d: 1 }) // { 'a.b.c': [1, 2], d: 1 }
```
</details>

<br>[⬆ Back to top](#APIs)

### isArray
描述：判断传进去的某个值是否为 Array。

```js
$isArray(val: any): Boolean;
```

参数：
- val: 需要检测的值。

返回值：
- 如果值是 Array，则为true; 否则为false。

<details>
<summary>Examples</summary>

```js
$isArray({}) // false
$isArray([]) // true
```
</details>

<br>[⬆ Back to top](#APIs)

### shuffle
描述：将传进入的 Array 使用 shuffle 算法进行乱序后返回 Array。

```js
$shuffle(val: any[]): any[];
```

参数：
- val: 需要乱序的 Array。

返回值：
- 乱序后的 Array。

<details>
<summary>Examples</summary>

```js
$shuffle([1, 2, 3]) // [2, 3, 1]
```
</details>

<br>[⬆ Back to top](#APIs)

### flattenArray
描述：将传进入的 Array 展开并返回新的 Array。

```js
$flattenArray(arr: any[], depth?: number): any[];
```

参数：
- arr: 需要扁平化的 Array。
- depth?: 扁平化后保留成几维数组，默认是一维。

返回值：
- 返回新的扁平化后的 Array。

<details>
<summary>Examples</summary>

```js
$flattenArray([[1, 2, 3], [[4, 5, 6], 7]]) // [1, 2, 3, 4, 5, 6, 7]
$flattenArray([[1, 2, 3], [[4, 5, 6], 7]], -1) // [[1, 2, 3], [[4, 5, 6], 7]]
$flattenArray([[1, 2, 3], [[[4, 5, 6], 7], 8]], 2) // [1, 2, 3, [4, 5, 6], 7, 8]
```
</details>

<br>[⬆ Back to top](#APIs)

### MayBe
描述：MayBe 函子，有of、map、value链式操作。

```js
$MayBe.of(val: any).map(fn: Function).value(): any;
```

参数：
- val: 需要进行链式操作的值。
- fn: 对传进去的值所要进行的操作。

返回值：
- 使用 value 返回最后的值，或者不使用不需要返回。

<details>
<summary>Examples</summary>

```js
const res = { data: { lists: [{ name: 'leeper'}] } }

$MayBe.of(res)
  .map(res => res.data)
  .map(data => data.lists)
  .map(lists => lists[0])
  .map(lists => lists.name)
  .map(name => name.toUpperCase())
  .value() //'LEEPER'

$MayBe.of(res)
  .map(res => res.data)
  .map(data => data.lists)
  .map(lists => lists[0])
  .map(lists => lists.keyword)
  .map(keyword => keyword.name)
  .value() // null
```
</details>

<br>[⬆ Back to top](#APIs)

### continous
描述：需要对某些值进行某种重复的操作。

```js
$continous(fn: Function): Function;
```

参数：
- fn: 重复操作。

返回值：
- 返回一个新的函数，该函数接受某些值。

<details>
<summary>Examples</summary>

```js
const add = $continous((x, y) => x + y)
const mul = $continous((x, y) => x * y)

add(1, 2, 3, 4) // 10
mul(1, 2, 3, 4) // 24
```
</details>

<br>[⬆ Back to top](#APIs)

### toggle
描述：重复进行某些操作。

```js
$toggle([fn: Function]): Function;
```

参数：
- fn: 将某些需要重复的操作使用数组包装起来。

返回值：
- 返回一个新的函数，该函数接受某些参数。

<details>
<summary>Examples</summary>

```js
const testFn = $toggle(() => 'green', () => 'red', () => 'yellow')
testFn() // 'green'
testFn() // 'red'
testFn() // 'yellow'
testFn() // 'yellow'
```
</details>

<br>[⬆ Back to top](#APIs)

### pipe
描述：将某些函数进行管道操作。

```js
$toggle(fn1, fn2, ...): Function;
```

参数：
- fn: 需要进行管道操作的函数。

返回值：
- 返回一个新的函数，该函数接受某些参数。

<details>
<summary>Examples</summary>

```js
const addOne = (x: number) => x + 1;
const addTwo = (x: number) => x + 2;
const mulFive = (x: number) => x * 5;
const testFn = $pipe(addOne, mulFive, addTwo)

testFn(1) // 12
testFn(1) // 17
```
</details>

<br>[⬆ Back to top](#APIs)

### once
描述：限制传入的函数只能执行一次。

```js
$once(fn): Function;
```

参数：
- fn: 需要进行限制的函数。

返回值：
- 返回一个新的函数，该函数接受某些参数。

<details>
<summary>Examples</summary>

```js
const onceFn = $once(() => { console.log('once') })

onceFn() // 'once'
onceFn() // 不再执行
```
</details>

<br>[⬆ Back to top](#APIs)

### debounce
描述：防抖操作。

```js
$debounce(fn): Function;
```

参数：
- fn: 需要进行防抖的函数。

返回值：
- 返回一个新的函数，该函数接受某些参数。

<details>
<summary>Examples</summary>

```js
const debounceFn = $debounce(() => { console.log('debounce') })

debounceFn() // 'debounce'
```
</details>

<br>[⬆ Back to top](#APIs)

### throttle
描述：节流操作。

```js
$throttle(fn): Function;
```

参数：
- fn: 需要进行节流的函数。

返回值：
- 返回一个新的函数，该函数接受某些参数。

<details>
<summary>Examples</summary>

```js
const throttleFn = $throttle(() => { console.log('throttle') })

throttleFn() // 'throttle'
```
</details>

<br>[⬆ Back to top](#APIs)

### isNumber
描述：判断输入值是否为 Number。

```js
$isNumber(val: any): Boolean;
```

参数：
- val: 需要检测的值。

返回值：
- 如果值是 Number，则为true; 否则为false。

<details>
<summary>Examples</summary>

```js
$isNumber(1) // true
$isNumber([]) // false
```
</details>

<br>[⬆ Back to top](#APIs)

### randomIntegerInRange
描述：获取某范围内的随机整数。

```js
$randomIntegerInRange(min: Number, max: Number): Number;
```

参数：
- min: 范围的最小值。
- max: 范围的最大值。

返回值：
- 区间范围内的随机整数。

<details>
<summary>Examples</summary>

```js
$randomIntegerInRange(0, 6) // 5
```
</details>

<br>[⬆ Back to top](#APIs)

### randomNumberInRange
描述：获取某范围内的随机小数。

```js
$randomNumberInRange(min: Number, max: Number): Number;
```

参数：
- min: 范围的最小值。
- max: 范围的最大值。

返回值：
- 区间范围内的随机小数。

<details>
<summary>Examples</summary>

```js
$randomNumberInRange(0, 6) // 4.826308609206913
```
</details>

<br>[⬆ Back to top](#APIs)

### isString
描述：判断输入值是否为 String。

```js
$isString(val: any): Boolean;
```

参数：
- val: 需要检测的值。

返回值：
- 如果值是 String，则为true; 否则为false。

<details>
<summary>Examples</summary>

```js
$isString(1) // false
$isString('') // true
```
</details>

<br>[⬆ Back to top](#APIs)

### addZero
描述：进行补 0 操作。

```js
$addZero(val: String): String;
```

参数：
- val: 需要进行补 0 的字符串。

返回值：
- 补 0 后的字符串。

<details>
<summary>Examples</summary>

```js
$addZero('6') // '06'
$isString(99) // '99'
```
</details>

<br>[⬆ Back to top](#APIs)

### getDaysDiffBetweenDates
描述：获取两个日期间隔的天数。

```js
$getDaysDiffBetweenDates(beginDate: Date, endDate: Date): Number;
```

参数：
- beginDate: 开始时间。
- endDate: 结束时间。

返回值：
- 两个日期间隔的天数。

<details>
<summary>Examples</summary>

```js
$getDaysDiffBetweenDates(new Date('2019-01-01'), new Date('2019-10-24')) // 296
```
</details>

<br>[⬆ Back to top](#APIs)

### whichType
描述：检测输入的值属于什么类型。

```js
$whichType(val: any): String;
```

参数：
- val: 需要检测的值。

返回值：
- 值的类型，有: "string", "number", "null", "undefined", "boolean", "symbol", "function", "object", "regexp", "array"。

<details>
<summary>Examples</summary>

```js
$whichType('') // 'string'
$whichType({}) // 'object'
```
</details>

<br>[⬆ Back to top](#APIs)

### localStorage
描述：封装一个具有过期时间功能的localStorage，存储值时加上过期时间，取值前先判断当前数据是否已过期，如果已过期，返回`参数${key}已过期`，否则返回真实的值。  

```js
$localStorage.setItem(key: String, ...val)
$localStorage.removeItem(key: String);
// 移除所有
$localStorage.clear();
```

参数：
- 看 Example。

返回值：
- 无。

<details>
<summary>Examples</summary>

```js
$localStorage.setItem('test','222',2000)
$localStorage.getItem('test') //'222'
setTimeout(()=>{
  $localStorage.getItem('test') //'参数test已过期'
},3000)

$localStorage.removeItem('myCat')
$localStorage.clear()
```
</details>

<br>[⬆ Back to top](#APIs)