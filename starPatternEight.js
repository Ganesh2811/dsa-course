// write a code for star pattern
// 1
// 1 0
// 1 0 1
// 1 0 1 0
// 1 0 1 0 1
// 1 0 1 0 1 0

function starPattern(){
    let n = 5;
    for(let i = 0; i < n; i++){
        let rows = "";
        let toggle = 1;
        for(let j = 0; j <= i; j++){
           rows = rows + toggle;
           if (toggle == 1) toggle = 0;
           else toggle = 1;
        }
        console.log(rows);
    }
}

starPattern()
