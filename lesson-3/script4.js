'use strict'

let a = 'x';
let i = 1;

console.log(a);

do {
    console.log(a += 'x');
    i++;
} while (i < 20);