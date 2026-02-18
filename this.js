// this refers to the current object or function

let user1 = {
    firstName: "Ganesh",
    lastName: "Pawar",
    printFullName: function(){
        console.log(this.firstName + " " + this.lastName);
    }
}

user1.printFullName();

