# 待合并 API 文档
以下 API 为已通过测试，处于待合并状态。

### 1. $whichType(value)
``` js
/**
 * @export
 * @function 返回输入的值属于哪种类型
 * @param {any} value 为任意类型
 * @returns {string}
 * "string", "number", "null", "undefined", "boolean", "symbol"
 * "function", "object", "regexp", "array"
 */
$whichType(value: any): string {}
```