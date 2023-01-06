function passCoordinates(coord:{x:number, y:number}){
    console.log("x coordinates: " + coord.x)
    console.log("y coordinates: " + coord.y)
}
passCoordinates({x:1 , y:1})

const coordinatesOfObject = {x: 10, y:900}
passCoordinates(coordinatesOfObject)

function car (partsOfCar:{color:string, brand:string, model:string, version:number}){
    console.log("color: " + partsOfCar.color)
    console.log("bran: " + partsOfCar.brand)
    console.log("model: " + partsOfCar.model)
    console.log("version: " + partsOfCar.version)
}
car({color:"red", brand:"ford",model:"mustang",version:2022})

const pessoaObj = {
    name:"Gab",
    surName:"Roec",
    age:23
}
let pessoaObj2:{name: string, surName: string}
pessoaObj2 = {name:"Roec", surName:"Roec"}