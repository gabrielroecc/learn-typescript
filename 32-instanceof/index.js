var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
var superUser = /** @class */ (function (_super) {
    __extends(superUser, _super);
    function superUser(name) {
        return _super.call(this, name) || this;
    }
    return superUser;
}(User));
var mik = new User("Mik");
var maik = new superUser("Maik");
console.log(mik);
console.log(maik);
function userGreeting(user) {
    if (user instanceof superUser) {
        console.log("Hello, ".concat(user.name, ", welcome! Do you want to see the results?"));
    }
    else if (user instanceof User) {
        console.log("Hello, ".concat(user.name));
    }
}
userGreeting(maik);
userGreeting(mik);
