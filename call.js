// call -> function borrowing
// In call function first argument always is referncce to this value.
let user1 = {
    firstName: "Ganesh",
    lastName: "Pawar",
}
let printFullName = function (homeTown) {
    console.log(this.firstName + " " + this.lastName + " " + homeTown);
}
printFullName.call(user1, "Mumbai");
let user2 = {
    firstName: "Sachin",
    lastName: "tendulkar"
}
printFullName.call(user2, "Mumbai")