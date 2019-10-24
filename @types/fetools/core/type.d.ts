declare type ValueType = string | boolean | number | null | undefined | symbol | any[] | object | (() => void) | RegExp;
export declare const whichType$: (value: ValueType) => string;
export declare const isType$: (type: string, value: ValueType) => boolean;
export {};
