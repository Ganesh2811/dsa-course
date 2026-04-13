// A closure is a function that remembers and accesses variables from its outer scope even after the outer function has finished executing.
// Even though outer() finished, inner still remembers outerVar

function outer() {
    let outerVar = "I'm in the outer scope!";
    function inner() {
        console.log(outerVar);
        outerVar = "Updated"
    }
    return inner;
}
const closure = outer();
closure();
closure();
closure();