function showBalance(balance:string|number){
  return console.log(balance)
}
showBalance(100)
showBalance("100")

const arr1:(string|number)[] = [1,2,3,"string"]
const arr2:Array<number|string> = [1,"string"]