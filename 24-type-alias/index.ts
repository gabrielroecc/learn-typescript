//Without type alias
function showId(id:string|number){
  console.log(`O ID é: + ${id}`)
}
showId(1)
showId("1")

//With type alias
type ID = string|number

function showId2(id:ID){
  console.log(`O ID é: ${id}`)
}
showId2('1')
showId2(1)