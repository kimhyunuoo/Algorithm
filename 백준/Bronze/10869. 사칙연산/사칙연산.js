let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

line =input[0].split(' ');

let A = parseInt(line[0]);
let B = parseInt(line[1]);

console.log(A + B);
console.log(A - B);
console.log(A * B);
console.log(parseInt(A / B));
console.log(parseInt(A % B));