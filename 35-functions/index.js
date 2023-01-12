// 1 - Void
function withoutReturn() {
    console.log("This function don't have return");
}
// 2 - Callback
function greeting(name) {
    alert("Olá " + name);
}
function processUserInput(putUsername) {
    var name = prompt("Por favor insira seu nome.");
    if (name) {
        putUsername(name);
    }
}
// processUserInput(greeting);
//Same function in a diferent way
var greet = function (name) { return alert("Hello, ".concat(name)); };
var enterANewUser = function (callback) {
    var newUserName = prompt("Put an username");
    callback(newUserName);
};
// enterANewUser(greet);
var callback = function (e) { return alert("Was happen an event ".concat(e.type)); };
// window.addEventListener("click", callback);
function sum(x, y) {
    return x + y;
}
function calculate(x, y, operator) {
    operator(x, y);
}
// calculate(10, 10, sum);
var arr = [1, 2, 3];
var newArr = arr.map(function (i) { return i + i; });
// console.log(newArr);
function greetingUsername(name) {
    alert("Welcome ".concat(name));
}
function passwordRegistered() {
    alert("Password Registered");
    alert("Thanks for register!");
}
function registerUsername(callbackUsername) {
    var username = prompt("Register an Username");
    callbackUsername(username);
}
function registerPassword(callbackPassword) {
    var password = prompt("Create a password");
    callbackPassword(password);
}
registerUsername(greetingUsername);
registerPassword(passwordRegistered);
