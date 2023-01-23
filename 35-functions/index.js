// 1 - Void
// function withoutReturn(): void {
//   console.log("This function don't have return");
// }
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// // 2 - Callback /////////////////////////////////////////
//1
// const saudar = (nome: string, responder: (string) => void) => {
//   const horaAtual = new Date().getHours();
//   if (horaAtual <= 12) return responder("Bom dia, " + nome);
// };
// const responderCallback = (saudacao: string) => console.log(saudacao);
// saudar("Gab", responderCallback);
// const myFunc = (number, callback) => {
//   console.log("O quadrado de " + number + " é " + callback(number));
// };
// //2
// function callback(number) {
//   return number * number;
// }
// myFunc(5, callback);
// //3
// const getTodos = (cb) => {
//   const request = new XMLHttpRequest();
//   request.addEventListener("readystatechange", () => {
//     const isRequestOk = request.readyState === 4 && request.status === 200;
//     const isRequestNotOk = request.readyState === 4;
//     if (isRequestOk) {
//       cb(null, request.responseText);
//       return;
//     }
//     if (isRequestNotOk) {
//       cb("Request dosen't work", null);
//     }
//   });
//   request.open("GET", "https://jsonplaceholder.typicode.com/todosy");
//   request.send();
// };
// getTodos((error: string | undefined, data: string) => {
//   console.log("Works");
//   if (error) {
//     console.log(error);
//     return;
//   }
//   console.log(data);
// });
// //4
// // var operation = window.prompt("Escolha sum ou mult")
// const ChooseOperation = (
//   operation: string,
//   cb: (arg: number, arg2: number) => number
// ) => {
//   if (operation === "sum") {
//     cb(10, 10);
//   }
//   if (operation === "mult") {
//     cb(10, 10);
//   }
// };
// function RealizeOperation(number1: number, number2: number) {
//   if (operation === "sum") {
//     var result = number1 + number2;
//     alert(result);
//     return result;
//   }
//   if (operation === "mult") {
//     var result = number1 * number2;
//     alert(result);
//     return result;
//   }
// }
// ChooseOperation(operation!, RealizeOperation);
//Generic Functions
// 1
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
function mergeObject(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var newObject = mergeObject({ name: "Gab" }, { age: 23 });
console.log(newObject);
//Example *1
// const male = ["Gab", "Luke"];
// const female = ["Joy", "Lala"];
// const names = [...male, ...female];
//console.log(names) -> "Gab", "Luke", "Joy", "Lala"
//Constraints in the Generic Functions
function biggestNumber(a, b) {
    var biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(10, 11));
