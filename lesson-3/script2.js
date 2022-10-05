'use strict'

const goods = [
    ['Пальто', 1, 5000],
    ['Куртка', 2, 3000],
    ['Тренч', 1, 2000],
]

function countBasketPrice(goods) {
    let i = 0;
    let sum = 0;
    for (i; i < goods.length; i++) {
        sum += (goods[i][1]) * (goods[i][2]);

    }

    return sum;
}


