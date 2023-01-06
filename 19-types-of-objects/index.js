function passCoordinates(coord) {
    console.log("x coordinates: " + coord.x);
    console.log("y coordinates: " + coord.y);
}
passCoordinates({ x: 1, y: 1 });
var coordinatesOfObject = { x: 10, y: 900 };
passCoordinates(coordinatesOfObject);
function car(partsOfCar) {
    console.log("color: " + partsOfCar.color);
    console.log("bran: " + partsOfCar.brand);
    console.log("model: " + partsOfCar.model);
    console.log("version: " + partsOfCar.version);
}
car({ color: "red", brand: "ford", model: "mustang", version: 2022 });
