
/**
 * @export
 * @object 封装一个有过期时间功能的localStorage
 */
export const $localStorage = {
  getItem(key: string): string {
    const v = JSON.parse(localStorage.getItem(key) || '{}');
    return (v.time > 0 && (Number(new Date()) > v.time)) ? `参数${key}已过期` : (v.value || null);
  },
  /**
   * @param key:存储的键名
   * @param val:存储的z值
   * @param time:过期时间
   */
  setItem(key: string, val: any, time?: number) {
    const v = {
      value: val,
      time: (time && time > 0) ? (Number(new Date()) + time) : 0,
    };
    localStorage.setItem(key, JSON.stringify(v));
  },
  removeItem(key: string) {
    localStorage.removeItem(key);
  },
  clear() {
    localStorage.clear();
  },
};
