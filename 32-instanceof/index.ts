class User {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

class superUser extends User {
  constructor(name: string) {
    super(name);
  }
}
const mik = new User("Mik");
const maik = new superUser("Maik");

console.log(mik);
console.log(maik);

function userGreeting(user: object) {
  if (user instanceof superUser) {
    console.log(
      `Hello, ${user.name}, welcome! Do you want to see the results?`
    );
  } else if (user instanceof User) {
    console.log(`Hello, ${user.name}`);
  }
}
userGreeting(maik);
userGreeting(mik);
