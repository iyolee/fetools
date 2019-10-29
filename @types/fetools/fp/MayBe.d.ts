export declare class $MayBe {
    readonly val: any;
    constructor(val: any);
    static of(val: any): $MayBe;
    private isNothing;
    map(fn: (...items: any) => any): $MayBe;
    value(): any;
}
