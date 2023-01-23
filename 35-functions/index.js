// 1 - Void
// function withoutReturn(): void {
//   console.log("This function don't have return");
// }
// // 2 - Callback /////////////////////////////////////////
//1
var saudar = function (nome, responder) {
    var horaAtual = new Date().getHours();
    if (horaAtual <= 12)
        return responder("Bom dia, " + nome);
};
var responderCallback = function (saudacao) { return console.log(saudacao); };
saudar("Gab", responderCallback);
var myFunc = function (number, callback) {
    console.log("O quadrado de " + number + " é " + callback(number));
};
//2
function callback(number) {
    return number * number;
}
myFunc(5, callback);
//3
var getTodos = function (cb) {
    var request = new XMLHttpRequest();
    request.addEventListener("readystatechange", function () {
        var isRequestOk = request.readyState === 4 && request.status === 200;
        var isRequestNotOk = request.readyState === 4;
        if (isRequestOk) {
            cb(null, request.responseText);
            return;
        }
        if (isRequestNotOk) {
            cb("Request dosen't work", null);
        }
    });
    request.open("GET", "https://jsonplaceholder.typicode.com/todosy");
    request.send();
};
getTodos(function (error, data) {
    console.log("Works");
    if (error) {
        console.log(error);
        return;
    }
    console.log(data);
});
//4
var operation = window.prompt("Escolha sum ou mult");
var n1 = window.prompt("numero1");
var n1n = parseFloat(n1);
var n2 = window.prompt("numero2");
var n2n = parseFloat(n2);
var ChooseOperation = function (operation, cb) {
    if (operation === "sum") {
        cb(n1n, n1n);
    }
    if (operation === "mult") {
        cb(n1n, n1n);
    }
};
function RealizeOperation(number1, number2) {
    if (operation === "sum") {
        var result = number1 + number2;
        alert(result);
        return result;
    }
    if (operation === "mult") {
        var result = number1 * number2;
        alert(result);
        return result;
    }
}
ChooseOperation(operation, RealizeOperation);
//Generic Functions
