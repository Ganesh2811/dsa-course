// write a code for star pattern
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

function starPattern(){
    let n = 5;
    for(let i = 0; i < n; i++){
        let rows = ""
        for(let j = 0; j <= i; j++){
            rows = rows + (i + 1);
        }
        console.log(rows);
    }
}




starPattern();