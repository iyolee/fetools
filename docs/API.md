# APIs
fetools 详细 API 文档。
## Object
<details>
<summary>View contents</summary>

* [`$isPlainOject`](#isPlainOject)
* [`$isObjectEquals`](#isObjectEquals)

</details>

### isPlainOject
描述：判断传进去的某个值是否为 Object。

```js
$isPlainOject(val): boolean;
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

<br>[⬆ Back to top](#API)

### isObjectEquals
描述：判断两个输入 Object 类型值是否相等。

```js
$isObjectEquals(obj1, obj2): boolean;
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

<br>[⬆ Back to top](#API)