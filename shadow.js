const original = {
    name: "Ganesh",
    address: {
        city: "Mumbai"
    }
};

console.log("before override", original);

const shallowCopy = { ...original };

shallowCopy.name = "Rahul";
shallowCopy.address.city = "Pune";

console.log("after override", original);

console.log("shallow copy", shallowCopy);

// spread operator creates a shallow copy
// nested objects are copied by reference, not by value
// original.address and shallowCopy.address point to the same memory location.