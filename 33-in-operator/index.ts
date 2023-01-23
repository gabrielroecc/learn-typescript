//Operator In
class Dog {
  name;
  breed;

  constructor(name: string, breed?: string) {
    this.name = name;
    if (breed) {
      this.breed = breed;
    }
  }
}
const Tin = new Dog("Tin");
const Bob = new Dog("Bob", "Some breed of dogs");

function showDogDatails(dog: Dog) {
  if ("breed" in dog) {
    console.log(`${dog.name} have a breed detected`);
  } else {
    console.log("Breed don't detected");
  }
}

showDogDatails(Bob);
showDogDatails(Tin);
