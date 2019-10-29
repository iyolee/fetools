export function $flattenArray(arr: any[], depth: number = Infinity): any[] {
  return arr.reduce(
    (list, v) =>
      list.concat(
        depth > 0
          ? depth > 1 && Array.isArray(v)
            ? $flattenArray(v, depth - 1)
            : v
          : [v],
      ),
    [],
  );
}
