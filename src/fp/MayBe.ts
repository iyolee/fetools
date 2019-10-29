export class $MayBe {
  readonly val: any;
  public constructor(val: any) {
    this.val = val;
  }

  static of(val: any) {
    return new $MayBe(val);
  }

  private isNothing() {
    return this.val === undefined || this.val === null;
  }

  public map(fn: (...items: any) => any) {
    return this.isNothing() ? $MayBe.of(null) : $MayBe.of(fn(this.val));
  }

  public value() {
    return this.val;
  }
}
