
// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.


let number = 1;
let end = 100;
while(number <= end) {
    let counter = 0;
    for (let count = 0; count <= number; count++) {
        if (number % count === 0) {
            counter++;
        }
    }
    if(counter === 2){
        console.log(number + " -это простое число");
    }
    number++;
}

// 2. С этого урока начинаем работать с функционалом интернет-магазина.
// Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от
// находящихся в ней товаров.
// Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.


let arrForThings = [];
let arrForPrices = [];

function addThingToBasket(){
    while(true) {
        let thing = prompt("Enter name of thing: ");
        arrForThings.push(thing);
        let price = +prompt("Enter price of thing: ");
        arrForPrices.push(price);
        let userAnswer = +prompt("Enter 1 if you want to continue\nEnter -1 if you want to exit");
        if(userAnswer === -1){
            break;
        }
    }
}

function countBasketPrice(){
    let priceOfAllThings = 0;
    for(let value of arrForPrices){
        priceOfAllThings += value;
        alert(value);
    }
    alert("You chose: " + arrForThings.join(', ') + "\nIt worth: " + arrForPrices.join(', ') + '\n Price of all things: ' + priceOfAllThings);
}

addThingToBasket();
countBasketPrice();





// const basketObj = new Map();         //Попытался реализовать задачу через создание массива как объекта-с ключем и значением,но при
//                                      //выводе в alert возвращалась надпись object,и не получилось преобразовать объект в массив(
// while(true) {
//     let goods = prompt("Enter the name of good : ");
//     let price = prompt("Enter price of good : ");
//     for (let nameOfGoods = 1; nameOfGoods <= goods.length; nameOfGoods++) {
//         for (let priceOfGoods = 1; priceOfGoods <= nameOfGoods; priceOfGoods++) {
//             basketObj.set(goods[nameOfGoods - 1], price[priceOfGoods - 1]);
//         }
//     }
//     let userAnswer = +prompt("If you want to end, enter -1,\nIf you want to continue, enter 1");
//     if(userAnswer === -1){
//             break;
//     }
// }





// 3.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
//     for(…){// здесь пусто}



let arr = [];
for(let i = 0; i <= 9; arr.push(i), i++){
}
console.log(arr.join(''));



//4. *Нарисовать пирамиду с помощью console.log,
// как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx


let pyramid = [];
for(let i = 0; i <= 19; i++){
    pyramid.push("x");
    console.log(pyramid.join(''));
}
































