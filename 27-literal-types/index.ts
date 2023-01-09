//Literal Types
let test:"testing"//We can add a value as type

//More usuable things with Literal Types

function showDirection(direction:"left"|"right"|"top"|"down"){
  console.log(`The direction is: ${direction}`)
}
showDirection("left")
showDirection("top")