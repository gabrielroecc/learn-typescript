// 1 - Void
function withoutReturn() {
    console.log("This function don't have return");
}
// 2 - Callback /////////////////////////////////////////
function myFunction() {
    //this is a normal function
    //Do Something
    console.log("My funtion executed");
}
var myFunctionInsideAVariable = function () {
    //This is a exalmple of funciton expression, function inside a variable
    //Do something
    console.log("My funtion executed");
};
var myNamedFunctionInsideAVariable = function myNamedFunction() {
    //This also is a exalmple of funciton expression, named function inside a variable
    //Do something
    console.log("My funtion executed");
};
var myArrowFunction = function () {
    //This is a example of arrow function
    //Do something
    console.log("My funtion executed");
};
//Obs#1 - Function recives arguments and returns values
var myFunction1 = function (message) {
    //do something
    console.log("My executed function", message);
    return "My executed function" + message;
};
myFunction1("Hello, Gab");
var multiply = function (number) {
    //do something
    console.log(number * number);
    return number * number;
};
multiply(5);
var greet = function (name) {
    var atualTime = new Date("July 21, 1983 01:15:00").getHours();
    if (atualTime <= 12)
        return "Good Morning" + name;
    if (atualTime <= 18)
        return "Good Afternoon" + name;
    return "Good Night";
};
greet("Gab");
/////////////////////////////////////////////
