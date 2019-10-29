/**
 *
 * @function 返回日期间的天数
 * @export
 * @param {number} dateInitial
 * @param {number} dateFinal
 * @returns {number}
 */
export function $getDaysDiffBetweenDates(dateBegin: number | Date, dateEnd: number | Date): number {
  return ((+dateEnd) - (+dateBegin)) / (1000 * 3600 * 24);
}
