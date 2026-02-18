// In apply function argument will be passed as an array.
let user1 = {
    firstName: "Ganesh",
    lastName: "Pawar",
}
let printFullName = function (homeTown, city) {
    console.log(this.firstName + " " + this.lastName + " " + homeTown + " " + city);
}
printFullName.apply(user1, ["Mumbai", "Bhandup"]);
let user2 = {
    firstName: "Sachin",
    lastName: "tendulkar"
}
let print = printFullName.bind(user2, "Mumbai", "Bhandup");
console.log(print);
print();