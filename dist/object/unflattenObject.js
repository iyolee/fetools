export function $unflattenObject(obj) {
    return Object.keys(obj).reduce(function (acc, k) {
        if (k.indexOf('.') !== -1) {
            var keys_1 = k.split('.');
            Object.assign(acc, JSON.parse('{' +
                keys_1.map(function (v, i) { return (i !== keys_1.length - 1 ? "\"" + v + "\":{" : "\"" + v + "\":"); }).join('') +
                obj[k] +
                '}'.repeat(keys_1.length)));
        }
        else {
            var key = "" + k;
            acc[key] = obj[k];
        }
        return acc;
    }, {});
}
//# sourceMappingURL=unflattenObject.js.map