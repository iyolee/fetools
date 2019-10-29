export function $flattenArray(arr, depth) {
    if (depth === void 0) { depth = Infinity; }
    return arr.reduce(function (list, v) {
        return list.concat(depth > 0
            ? depth > 1 && Array.isArray(v)
                ? $flattenArray(v, depth - 1)
                : v
            : [v]);
    }, []);
}
//# sourceMappingURL=flattenArray.js.map