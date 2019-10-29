export function $toggle() {
    var actions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        actions[_i] = arguments[_i];
    }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var action = actions.shift();
        actions.push(action);
        return action.apply(this, args);
    };
}
//# sourceMappingURL=toggle.js.map