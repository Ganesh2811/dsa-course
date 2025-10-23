// write a code for star pattern
// 
//         *
//       * *
//     * * *
//   * * * *
// * * * * *

// first loop for rows
// second loop for space
// third loop for star

function starPattern(){
    let n = 5;
    for(let i = 0; i < n; i++){
        let rows = ""
        for(let j =0; j < n - (i + 1); j++){
            rows = rows + " ";
        }
        for(let k = 0; k < i + 1; k++){
            rows = rows + "*";
        }
        console.log(rows);
    }
}




starPattern();