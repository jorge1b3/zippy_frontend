export class OptionalValue<T> {
  private constructor(private readonly value?: T) {}

  static of<T>(value: T): OptionalValue<T> {
    return new OptionalValue(value);
  }

  map<U>(fn: (value: T) => U): OptionalValue<U> {
    if (this.value === undefined || this.value === null) {
      return OptionalValue.of<U>(null as unknown as U);
    }
    return OptionalValue.of<U>(fn(this.value));
  }

  flatMap<U>(fn: (value: T) => OptionalValue<U>): OptionalValue<U> {
    if (this.value === undefined || this.value === null) {
      return OptionalValue.of<U>(null as unknown as U);
    }
    return fn(this.value);
  }

  getOrElse(defaultValue: T): T {
    if (this.value === undefined || this.value === null) {
      return defaultValue;
    }
    return this.value;
  }
}

export class Either<L, R> {
  private constructor(
    private readonly leftValue?: L,
    private readonly rightValue?: R
  ) {}

  static left<L>(value: L): Either<L, never> {
    return new Either<L, never>(value);
  }

  static right<R>(value: R): Either<never, R> {
    return new Either<never, R>(undefined, value);
  }

  isLeft(): boolean {
    return this.leftValue !== undefined;
  }

  isRight(): boolean {
    return this.rightValue !== undefined;
  }

  left(): L | never {
    if (this.isLeft()) {
      return this.leftValue as L;
    }
    throw new Error("Either.left() called on a Right instance.");
  }

  right(): R | never {
    if (this.isRight()) {
      return this.rightValue as R;
    }
    throw new Error("Either.right() called on a Left instance.");
  }

  map<U>(fn: (value: R) => U): Either<L, U> {
    if (this.isRight()) {
      return Either.right<U>(fn(this.rightValue as R));
    }
    return Either.left<L>(this.leftValue as L);
  }

  flatMap<U>(fn: (value: R) => Either<L, U>): Either<L, U> {
    if (this.isRight()) {
      return fn(this.rightValue as R);
    }
    return Either.left<L>(this.leftValue as L);
  }
}

