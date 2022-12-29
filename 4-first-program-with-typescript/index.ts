// In normal Javascript we can use anything inside variables
const firstName = "Gab"
const anotherName = 1
const x = true

// but when we type something, ts only accepts this type
function greeting(name:string){
    console.log("Hello, " + name)
}

greeting(firstName)

// Let's type some variables
let nameOfFruit:string //This variable can be only string type
let question:boolean //this variable can be only boolean type
let age:number //this variable can be only number