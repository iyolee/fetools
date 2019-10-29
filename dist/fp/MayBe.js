var $MayBe = (function () {
    function $MayBe(val) {
        this.val = val;
    }
    $MayBe.of = function (val) {
        return new $MayBe(val);
    };
    $MayBe.prototype.isNothing = function () {
        return this.val === undefined || this.val === null;
    };
    $MayBe.prototype.map = function (fn) {
        return this.isNothing() ? $MayBe.of(null) : $MayBe.of(fn(this.val));
    };
    $MayBe.prototype.value = function () {
        return this.val;
    };
    return $MayBe;
}());
export { $MayBe };
//# sourceMappingURL=MayBe.js.map