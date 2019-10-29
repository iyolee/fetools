var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
export function $shuffle(arr) {
    var _a;
    for (var i = arr.length; i > 0; i--) {
        var j = Math.floor(Math.random() * i);
        _a = __read([arr[i - 1], arr[j]], 2), arr[j] = _a[0], arr[i - 1] = _a[1];
    }
    return arr;
}
//# sourceMappingURL=shuffle.js.map