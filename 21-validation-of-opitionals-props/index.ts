function advancedGreeting(firstName:string, lastName?:string){
    if(lastName !== undefined){
       return console.log(`Hello, ${firstName} ${lastName}`)
    }
    else(lastName===undefined){
        return console.log(`Hello, ${firstName}`)
    }
} 