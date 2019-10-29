export function $unflattenObject(obj: { [propName: string]: string | number | undefined | null }): any {
  return Object.keys(obj).reduce((acc: { [key: string]: any }, k: string) => {
    if (k.indexOf('.') !== -1) {
      const keys = k.split('.');
      Object.assign(acc,
        JSON.parse(
          // tslint:disable-next-line: prefer-template
          '{' +
            keys.map((v, i) => (i !== keys.length - 1 ? `"${v}":{` : `"${v}":`)).join('') +
            obj[k] +
          '}'.repeat(keys.length)),
        );
    } else {
      const key: string = `${k}`;
      acc[key] = obj[k];
    }
    return acc;
  }, {});
}
