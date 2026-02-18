// In apply function argument will be passed as an array.
let user1 = {
    firstName: "Ganesh",
    lastName: "Pawar",
}
let printFullName = function (homeTown, city) {
    console.log(this.firstName + " " + this.lastName + " " + homeTown + " " + city);
}
printFullName.apply(user1, ["Mumbai", "bhandup"]);
let user2 = {
    firstName: "Sachin",
    lastName: "tendulkar"
}
printFullName.apply(user2, ["Mumbai", "bhandup"]);