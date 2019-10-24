export var whichType$ = function (value) {
    var _toString = Object.prototype.toString;
    var type = _toString.call(value).split(' ')[1].replace(']', '');
    return type.toLowerCase();
};
export var isType$ = function (type, value) {
    return type === whichType$(value);
};
//# sourceMappingURL=type.js.map