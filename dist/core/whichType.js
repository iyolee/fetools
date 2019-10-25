export function $whichType(value) {
    var _toString = Object.prototype.toString;
    var type = _toString.call(value).split(' ')[1].replace(']', '');
    return type.toLowerCase();
}
//# sourceMappingURL=whichType.js.map