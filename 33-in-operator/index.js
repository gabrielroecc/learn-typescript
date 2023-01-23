//Operator In
var Dog = /** @class */ (function () {
    function Dog(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
    return Dog;
}());
var Tin = new Dog("Tin");
var Bob = new Dog("Bob", "Some breed of dogs");
function showDogDatails(dog) {
    if ("breed" in dog) {
        console.log("".concat(dog.name, " have a breed detected"));
    }
    else {
        console.log("Breed don't detected");
    }
}
showDogDatails(Bob);
showDogDatails(Tin);
