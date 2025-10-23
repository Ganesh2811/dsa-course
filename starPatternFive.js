// write a code for star pattern
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

function starPattern(){
    let n = 5;
    for(let i = 0; i < n; i++){
        let rows = "";
        for(let j = 0; j < n - i; j++){
            rows = rows + (j + 1);
        }
        console.log(rows);
    }
}


starPattern();