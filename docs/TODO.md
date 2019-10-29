# 待合并 API 文档
以下 API 为已通过测试，处于待合并状态。

## Example
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

## API TODO
