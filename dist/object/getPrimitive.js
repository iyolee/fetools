import { $isArray } from '../array';
function $getPrimitiveValue(plainObj, path) {
    var pathToArr = $isArray(path) ? path : path.split('.');
    return pathToArr.reduce(function (xs, x) { return (xs && xs[x]) ? xs[x] : null; }, plainObj);
}
export function $getPrimitive(plainObj, path) {
    if (!path) {
        return function (path) {
            return $getPrimitiveValue(plainObj, path);
        };
    }
    return $getPrimitiveValue(plainObj, path);
}
//# sourceMappingURL=getPrimitive.js.map