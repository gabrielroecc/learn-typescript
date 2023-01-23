// 1 - Void
// function withoutReturn(): void {
//   console.log("This function don't have return");
// }

// // 2 - Callback /////////////////////////////////////////

//1
const saudar = (nome: string, responder: (string) => void) => {
  const horaAtual = new Date().getHours();
  if (horaAtual <= 12) return responder("Bom dia, " + nome);
};
const responderCallback = (saudacao: string) => console.log(saudacao);
saudar("Gab", responderCallback);

const myFunc = (number, callback) => {
  console.log("O quadrado de " + number + " é " + callback(number));
};
//2
function callback(number) {
  return number * number;
}
myFunc(5, callback);

//3
const getTodos = (cb) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    const isRequestOk = request.readyState === 4 && request.status === 200;
    const isRequestNotOk = request.readyState === 4;

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

getTodos((error: string | undefined, data: string) => {
  console.log("Works");
  if (error) {
    console.log(error);
    return;
  }
  console.log(data);
});
//4
var operation = window.prompt("Escolha sum ou mult")

const ChooseOperation = (operation:string, cb:(arg:number,arg2:number)=>number) =>  {
  if(operation === "sum"){
    cb(10,10)
    
  }
  if(operation === "mult"){
    cb(10,10)
    
  }
}
function RealizeOperation(number1:number, number2:number){
  if(operation === "sum"){
    var result = number1 + number2
    alert(result)
    return result
  }

  if(operation === "mult"){
    var result = number1 * number2
    alert(result)
    return result
  }
}
ChooseOperation(operation!,RealizeOperation)

//Generic Functions
