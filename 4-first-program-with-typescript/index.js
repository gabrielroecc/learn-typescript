// In normal Javascript we can use anything inside variables
var firstName = "Gab";
var anotherName = 1;
var x = true;
// but when we type something, ts only accepts this type
function greeting(name) {
    console.log("Hello, " + name);
}
greeting(firstName);
