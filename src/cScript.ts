import { Circle, Square } from "./Modules/Shapes";

const add = (a: number, b: number, c?: string | number): string => {
  return `${c} age ${a + b}`;
};
console.log(add(23, 10, "ratul"));

let a: (number | boolean)[] = [5, 6, 7, 8, false];

const game = {
  name: "farCry5",
  build: 2019,
  popularity: "2019",
  achievement: [2020, 2021, 1922, 2025, "2045"],
};
game.name = "PUBG";
game.popularity = "High";
// game.engine.push(true); /*new property engine addition will be wrong*/

game.achievement.push("2030");
// game.achievement.push(true); /*will be wrong*/
console.log("game:", game);

// Object.prototype.sumit = function () {
//   console.log("I am sumit");
// };
interface Product {
  name: string;
  age: number;
}
class Store<T> {
  private _object: T[] = [];
  get getObject() {
    return this._object;
  }
  add(obj: T) {
    this._object.push(obj);
  }
}

class Comp<T> extends Store<T> {
  compress() {}
}

let store = new Comp<string>();
store.add("rabbi");
console.log(store.getObject);

let newCircle = new Circle(10);
newCircle.radiusOfCircle;
console.log("radiusCircle:", newCircle.radiusOfCircle);
