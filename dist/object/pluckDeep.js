import { $isArray } from '../array';
function $getPlainObjectValue(plainObj, path) {
    var pathToArr = $isArray(path) ? path : path.split('.');
    return pathToArr.reduce(function (xs, x) { return (xs && xs[x]) ? xs[x] : null; }, plainObj);
}
export function $pluckDeep(plainObj, path) {
    if (!path) {
        return function (path) {
            return $getPlainObjectValue(plainObj, path);
        };
    }
    return $getPlainObjectValue(plainObj, path);
}
//# sourceMappingURL=pluckDeep.js.map