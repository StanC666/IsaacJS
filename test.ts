import { Vector, add_vectors, magnitude, product } from "./Vectors/Vectors";



console.log(add_vectors(
  Vector(1, 1, 1),
  Vector(2, 2, 2)
));

console.log(
  product("scalar", [Vector(1, 1, 1), Vector(1, 1, 1)], 0)
)
