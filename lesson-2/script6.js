'use strict'

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'сложение': return arg1 + arg2;
        case 'вычитание': return (arg1 - arg2);
        case 'умножение': return (arg1 * arg2);
        case 'деление': return (arg1 / arg2);
        default: return ('Не умею(');
    }
}

console.log(mathOperation(9, 6, 'деление'));

