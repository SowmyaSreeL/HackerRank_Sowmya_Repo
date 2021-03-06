'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}
/*
 * Create the function factorial here
 * 
 */
function factorial(num) {
    var fact=1;
    while (num != 0) {
        fact = fact * num;
        num = num - 1;
    }
    return fact;
}


function main() {
    const n = +(readLine());
    
    console.log(factorial(n));
}