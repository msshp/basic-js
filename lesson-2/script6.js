'use strict'

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'addition': return arg1 + arg2;
        case 'subtraction': return arg1 - arg2;
        case 'multiplication': return arg1 * arg2;
        case 'division': return arg1 / arg2;
        default: return 'Не умею(';
    }
}

console.log(mathOperation(9, 6, 'subtraction'));
