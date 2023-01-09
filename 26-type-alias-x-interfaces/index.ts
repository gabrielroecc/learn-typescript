// Type Alias x Interfaces

// Interfaces
interface Person{
  name:string
}
interface Person{//I can add to same type
  age:number
}
const somePerson: Person = {name:"Gab", age:23}

// Type Alias
type personType = {
  name: string
}
// type personType = { I can not add to same type
//   age:number
// }
