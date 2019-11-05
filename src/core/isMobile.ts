export function $isMobile(): boolean {
  const ua = navigator.userAgent && navigator.userAgent.toLowerCase();

  // MicroMessenger 是否微信 （2015-01-22新增）
  if (/mobile|android|adr|iphone|ipad|phone|micromessenger/i.test(ua)) {
    return true;
  }
  return false;
}
