// promise is usally used for an asyncrouns operation like api calls, file loading and timer delays
// Pending: The task is in the initial state.
// Fulfilled: The task was completed successfully, and the result is available.
// Rejected: The task failed, and an error is provided.
// if we want to use third party api we can use axios.

let checkEven = new Promise((resolve, reject) => {
    let number = 4;
    if (number % 2 === 0) resolve("The number is even!");
    else reject("The number is odd!");
});

checkEven.then((message) => console.log(message)).catch((error) => console.error(error));



function loadData(callback){
    setTimeout(() => callback("Data loaded"), 4000);
}   

function prmisefullfilled(){
    return new Promise((resolve) => { loadData((result) => resolve(result)) })
}

prmisefullfilled().then((data) => console.log(data));

// Promise.all()
// Waits for all promises to resolve and returns their results as an array. If any promise is rejected, it immediately rejects.

// Promise.allSettled()
// Waits for all promises to settle (fulfilled or rejected) Method and returns an array of their outcomes.

// Promise.race()
// Promise.race() Method resolves or rejects as soon as the first promise settles.



// Promise.any()