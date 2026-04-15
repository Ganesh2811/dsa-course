// promise is usally used for an asyncrouns operation like api calls, file loading and timer delays
// Pending: The task is in the initial state.
// Fulfilled: The task was completed successfully, and the result is available.
// Rejected: The task failed, and an error is provided.
// if we want to use third party api we can use axios.

function loadData(callback){
    setTimeout(() => callback("Data loaded"), 1000);
}   

function prmisefullfilled(){
    return new Promise((resolve) => { loadData((result) => resolve(result)) })
}

prmisefullfilled().then((data) => console.log(data));
