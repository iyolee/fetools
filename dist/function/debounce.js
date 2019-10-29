export function $debounce(func, delay) {
    var timeout;
    return function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            func.apply(_this, args);
        }, delay);
    };
}
//# sourceMappingURL=debounce.js.map