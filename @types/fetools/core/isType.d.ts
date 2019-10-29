declare type ValueType = string | boolean | number | null | undefined | symbol | any[] | object | (() => void) | RegExp;
export declare function $isType(type: string, value: ValueType): boolean;
export {};
