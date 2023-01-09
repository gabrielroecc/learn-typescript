function showUserRole(role:boolean|string){//
  if(typeof role === "boolean"){
    console.log("The type of this parameter is Boolean")
  }
  else(typeof role === "string"){
    console.log("The type of this parameter is String")
  }
}

showUserRole(false)//The function will allow boolean type
showUserRole("User")//The function will allow string type

