export function $throttle(fn, threshhold) {
    var _this = this;
    if (threshhold === void 0) { threshhold = 160; }
    var timeout;
    var start = +new Date;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var curr = +new Date();
        clearTimeout(timeout);
        if (curr - start >= threshhold) {
            fn.apply(_this, args);
            start = curr;
        }
        else {
            timeout = setTimeout(function () {
                fn.apply(_this, args);
            }, threshhold);
        }
    };
}
//# sourceMappingURL=throttle.js.map