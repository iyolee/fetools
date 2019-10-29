import { $continous } from './continous';
export var $pipe = $continous(function (prev, next) {
    return function (input) {
        return next.call(this, prev.call(this, input));
    };
});
//# sourceMappingURL=pipe.js.map