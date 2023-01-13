// 1 - Void
function withoutReturn(): void {
  console.log("This function don't have return");
}

// 2 - Callback /////////////////////////////////////////

function myFunction() {
  //this is a normal function
  //Do Something
  console.log("My funtion executed");
}

const myFunctionInsideAVariable = function () {
  //This is a exalmple of funciton expression, function inside a variable
  //Do something
  console.log("My funtion executed");
};

const myNamedFunctionInsideAVariable = function myNamedFunction() {
  //This also is a exalmple of funciton expression, named function inside a variable
  //Do something
  console.log("My funtion executed");
};

const myArrowFunction = () => {
  //This is a example of arrow function
  //Do something
  console.log("My funtion executed");
};

//Obs#1 - Function recives arguments and returns values

const myFunction1 = (message: string) => {
  //do something
  console.log("My executed function", message);
  return "My executed function" + message;
};
myFunction1("Hello, Gab");

const multiply = (number: number) => {
  //do something
  console.log(number * number);
  return number * number;
};

multiply(5);

function createPerson(name: string) {
  return name;
}
const person = createPerson; //I put a function inside a variable, now, person is a function
const person2 = createPerson("Gab"); //I put a function with argument inside a variable, now, person2 ia a function with the argument assined

/////////////////////////////////////////////
