// 1 - Void
// function withoutReturn(): void {
//   console.log("This function don't have return");
// }

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
function firstElement<T>(arr: T[]): T {
  return arr[0];
}
console.log(firstElement([1, 2, 3]));

function mergeObject<T, U>(obj1: U, obj2: T) {
  return {
    ...obj1, //take all of items of this object and (spread operator -> example below 1*)
    ...obj2, //merge with all of items of this object
  };
}
const newObject = mergeObject({ name: "Gab" }, { age: 23 });
console.log(newObject);

//Example *1
// const male = ["Gab", "Luke"];
// const female = ["Joy", "Lala"];
// const names = [...male, ...female];
//console.log(names) -> "Gab", "Luke", "Joy", "Lala"

//Constraints in the Generic Functions
function biggestNumber<T extends string | number>(a: T, b: T) {
  let biggest;
  if (+a > +b) {
    biggest = a;
  } else {
    biggest = b;
  }
  return biggest;
}
console.log(biggestNumber(10, 11));

//Especify type of arguments
function mergeArray<T>(arr1: T[], arr2: T[]) {
  return [...arr1, ...arr2]; // or arr1.concat(arr2)
}
console.log(mergeArray<number | string>([1, 2, 3], ["a", "b", "c"]));

//reduce
const numbers = [1, 2, 3, 4, 5];
const soma = numbers.reduce((total, atual) => total + atual);
console.log("soma dos arrays " + soma);

const names = ["Daniel", "Maria", "Marta", "Juca", "João", "Jéssica"];

const namesCount = names.reduce((count, nomeAtual) => {
  const firstLetter = nomeAtual[0].toLocaleLowerCase();
  if (count[firstLetter]) {
    //Perguntando = count (que é um objeto) tem o item D?
    count[firstLetter]++; //Se tem, some o valor dele com mais 1
  } else {
    count[firstLetter] = 1; // Se não tem CRIE um item D para ele e atribua o valor 1 a ele
  }
  return count;
}, {});

const pessoas = [
  { nome: "Daniel", idade: 28 },
  { nome: "Maria", idade: 29 },
  { nome: "Marte", idade: 29 },
];

const porIdade = pessoas.reduce((pessoasIdade, pessoaAtual) => {
  if (pessoasIdade[pessoaAtual.idade]) {
    pessoasIdade[pessoaAtual.idade].push(pessoaAtual.nome);
  } else {
    pessoasIdade[pessoaAtual.idade] = [];
    pessoasIdade[pessoaAtual.idade].push(pessoaAtual.nome);
  }

  return pessoasIdade;
}, {});

const numbersArray = [-10, 0, 2, 4];

const doublePositive = numbersArray.reduce(
  (arrAcumulator: number[], currentNumber) => {
    if (currentNumber > 0) {
      arrAcumulator.push(currentNumber * 2);
    }
    return arrAcumulator;
  },
  []
);
console.log(doublePositive);

///MAP MAP MAP MAP MAP

var someNumbers = [1, 2, 3, 4, 5];
const doubleNumbers = someNumbers.map(function (el) {
  return el * 2;
});
console.log(doubleNumbers);

const fahrenheit = [0, 32];
const C = fahrenheit.map(function (elem) {
  return Math.round(((elem - 32) * 5) / 9);
});
console.log(C);

//FILTER

const yetAnotherArray = [1, 1, 2, 3, 4, 5, 6, 7, 7, 8]

const uniqueArray = yetAnotherArray.filter((e, index, arr) => arr.indexOf(e) === index)