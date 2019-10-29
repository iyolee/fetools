import { $whichType } from '../index';
export function $equals(a, b) {
    if ($whichType(a) !== $whichType(b))
        return false;
    if (a === b)
        return true;
    if (a instanceof Date && b instanceof Date)
        return a.getTime() === b.getTime();
    if (!a || !b || (typeof a !== 'object' && typeof b !== 'object'))
        return a === b;
    var keys = Object.keys(a);
    if (keys.length !== Object.keys(b).length)
        return false;
    return keys.every(function (k) { return $equals(a[k], b[k]); });
}
//# sourceMappingURL=equals.js.map