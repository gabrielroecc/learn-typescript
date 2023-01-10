interface Point {
  x: number;
  y: number;
  z: number;
}
function showCoords(coord: Point) {
  console.log(coord.x);
  console.log(coord.y);
  console.log(coord.z);
}
showCoords({ x: 1, y: 2, z: 3 });

interface Dog {
  color?: string;
  age?: number;
  breed?: string;
  weight?: number;
  gender: string;
  vaccinated?: boolean;
}
function chooseDog(dogInformations: Dog) {
  console.log(dogInformations);
}

let objDog = { name: "Dog", gender: "Male", vaccinated: true };
chooseDog(objDog);
