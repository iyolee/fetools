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

### 2. $localStorage
封装一个具有过期时间功能的localStorage，存储值时加上过期时间，取值前先判断当前数据是否已过期，如果已过期，返回`参数${key}已过期`，否则返回真实的值。  
#### 示例
下面的代码片段通过 setItem() 增加了一个数据项目，getItem()获取该数据项目，并设置过期时间为两秒。
```js
$localStorage.setItem('test','222',2000)
$localStorage.getItem('test') //'222'
setTimeout(()=>{
  $localStorage.getItem('test') //'参数test已过期'
},3000)
```
该语法用于移除 localStorage 项，如下:
```js
$localStorage.removeItem('myCat');
```
该语法用于移除所有的 localStorage 项，如下:
```js
// 移除所有
$localStorage.clear();
```