export class Circle<T> {
  constructor(private _radius: T) {}
  get radiusOfCircle() {
    return this._radius;
  }
}

export class Square {
  constructor(public width: number) {}
}
