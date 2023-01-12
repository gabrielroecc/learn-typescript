// 1 - Void
function withoutReturn(): void {
  console.log("This function don't have return");
}

// 2 - Callback

function greeting(name: string) {
  alert("Olá " + name);
}

function processUserInput(putUsername: (name: string) => void) {
  var name = prompt("Por favor insira seu nome.");
  if (name) {
    putUsername(name);
  }
}

// processUserInput(greeting);

//Same function in a diferent way

const greet = (name) => alert(`Hello, ${name}`);
const enterANewUser = (callback) => {
  const newUserName = prompt("Put an username");
  callback(newUserName);
};

// enterANewUser(greet);

const callback = (e) => alert(`Was happen an event ${e.type}`);
// window.addEventListener("click", callback);

function sum(x, y): number {
  return x + y;
}

function calculate(x, y, operator) {
  operator(x, y);
}
// calculate(10, 10, sum);

const arr = [1, 2, 3];
const newArr = arr.map((i) => i + i);
// console.log(newArr);

function greetingUsername(name: string) {
  alert(`Welcome ${name}`);
}
function passwordRegistered() {
  alert(`Password Registered`);
  alert(`Thanks for register!`);
}
function registerUsername(callbackUsername) {
  let username = prompt("Register an Username");
  callbackUsername(username);
}
function registerPassword(callbackPassword) {
  let password = prompt("Create a password");
  callbackPassword(password);
}
registerUsername(greetingUsername);
registerPassword(passwordRegistered);
