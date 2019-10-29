export declare const $localStorage: {
    getItem(key: string): string | null;
    setItem(key: string, val: any, time?: number | undefined): void;
    removeItem(key: string): void;
    clear(): void;
};
