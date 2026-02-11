const original = {
    name: "Ganesh",
    address: {
        city: "Mumbai"
    }
};

const shallowCopy = { ...original };

shallowCopy.name = "Rahul";
shallowCopy.address.city = "Pune";

console.log(original.name); 
console.log(original.address.city); 
console.log(shallowCopy.name); 
console.log(shallowCopy.address.city);

console.log(a);
var a = 10;

