export function $continous(reducer) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return args.reduce(function (a, b) { return reducer(a, b); });
    };
}
//# sourceMappingURL=continous.js.map