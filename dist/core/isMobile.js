export function $isMobile() {
    var ua = navigator.userAgent && navigator.userAgent.toLowerCase();
    if (/mobile|android|adr|iphone|ipad|phone|micromessenger/i.test(ua)) {
        return true;
    }
    return false;
}
//# sourceMappingURL=isMobile.js.map