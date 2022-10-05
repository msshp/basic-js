'use strict'

let n;

let i = 0;
while (i < 100) {
    n = 2;
    while (n < i) {
        if (i % n == 0) {
            break;
        }
        n++;
    }
    if (n == i) {
        console.log(i);
    }
    i++;
}
