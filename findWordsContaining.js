
function findWordsContaining(words, x) {
    let result = [];
    for(let i = 0; i < words.length; i++){
        for(let j = 0; j < words[i].length; j++){
            if(x === words[i][j]){
                result.push(i);
                break;
            }
        }
    }
    return result;
};

const words = ["leet", "code"];
const x= "e"
console.log(findWordsContaining(words, x));