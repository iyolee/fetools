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

### isPlainOject
描述：判断传进去的某个值是否为 Object。

```js
$isPlainOject(val: any): boolean;
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
$isObjectEquals(obj1: Object | Array, obj2: Object | Array): boolean;
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
$isArray(val: any): boolean;
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
$continous(fn: Function): any;
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
$toggle([fn: Function]): any;
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
$toggle(fn1, fn2, ...): any;
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