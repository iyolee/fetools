export function $round(n, decimals) {
    if (decimals === void 0) { decimals = 0; }
    return Number(Math.round(Number(n + "e" + decimals)) + "e-" + decimals);
}
//# sourceMappingURL=round.js.map