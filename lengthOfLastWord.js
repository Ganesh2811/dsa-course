function lengthOfLastWord(s){
    console.log(s.length);
    
    let length = 0;
    let i = s.length - 1;
    while(i >= 0 && s[i] === " "){
        i--;
    }
    while(i >= 0 && s[i] !== " "){
        length++;
        i--;
    }
    return length;
}


console.log(lengthOfLastWord("Hello World"));
