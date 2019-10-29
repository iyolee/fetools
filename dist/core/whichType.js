export function $whichType(val) {
    var _toString = Object.prototype.toString;
    var type = _toString.call(val).split(' ')[1].replace(']', '');
    return type.toLowerCase();
}
//# sourceMappingURL=whichType.js.map