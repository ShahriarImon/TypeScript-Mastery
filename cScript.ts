const add = (a: number, b: number) => {
  return a + b;
};
// console.log(add(45, 10));

const game = {
  name: "farCry5",
  build: 2019,
  popularity: "2019",
  achievement: [2020, 2021, 2022, 2025, "2045"],
};
game.name = "PUBG";
game.popularity = "High";
// game.engine.push(true); /*new property engine addition will be wrong*/

game.achievement.push("2030");
// game.achievement.push(true); /*will be wrong*/
console.log("game:", game);