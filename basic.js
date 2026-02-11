class Person {
    constructor(name, age) {
        // this.name = name;
        // this.age = age;
        console.log(this)
    }
    
    
}

const p1 = new Person("Ganesh", 25);

const original = {
    name: "Ganesh",
    skills: ["JS", "React"]
};
const deep = structuredClone(original);

deep.skills.push("Node");

console.log(original.skills);
