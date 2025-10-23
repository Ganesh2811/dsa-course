// write a code fpr 4 row star and 4 column star
// ****
// ****
// ****
// ****


function starPattern(){
    let n = 4;
    for(let i = 0; i < n; i++){
        let rows = "";
        for(let j = 0; j < n; j++){
            rows = rows + "*"
        }
        console.log(rows);
    }
}

starPattern();