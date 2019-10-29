import { $isType } from '../index';
function $_flattenObject(obj, prefix) {
    if (prefix === void 0) { prefix = ''; }
    return Object.keys(obj).reduce(function (acc, k) {
        var pre = prefix.length ? prefix + "." : '';
        if ($isType('object', obj[k])) {
            Object.assign(acc, $_flattenObject(obj[k], pre + k));
        }
        else {
            var key = "" + pre + k;
            acc[key] = obj[k];
        }
        return acc;
    }, {});
}
export function $flattenObject(obj) {
    return $_flattenObject(obj);
}
//# sourceMappingURL=flattenObject.js.map