// 1. Написать функцию, преобразующую число в объект.
//     Передавая на вход число от 0 до 999, мы должны получить на выходе объект,
//     в котором в соответствующих свойствах описаны единицы, десятки и сотни.
//     Например, для числа 245 мы должны получить следующий объект:
// {‘единицы’: 5,
// ‘десятки’: 4,
// ‘сотни’: 2}.
// Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.



// function fromNumberToObject(){
//     let randomNumber = Math.floor(Math.random() * 1000);
//     console.log(randomNumber);
//     let number = {
//         hundreds: 0,
//         dozens: 0,
//         units: 0,
//     }
//     number.hundreds = Math.floor(randomNumber / 100);
//     number.dozens = Math.floor((randomNumber - number.hundreds * 100) / 10);
//     number.units = Math.floor((randomNumber - number.hundreds * 100) - number.dozens * 10);
//     console.log(number);
// }
//
// fromNumberToObject();


// 2.Продолжить работу с интернет-магазином:
// 2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
//     2.2. Реализуйте такие объекты.
// 2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.


let basket = {
    goods: [],
    prices: [],
    addThingsToBasket(){
        while(true){
            let thing = prompt('Enter name of thing: ');
            basket.goods.push(thing);
            let worth = +prompt('Enter price of thing: ');
            basket.prices.push(worth);
            let userAnswer = +prompt('If you want to continue enter 1, else -1 ');
            if(userAnswer === -1){
                alert('Selected things: ' + basket.goods + '\n' + 'Their prices: ' + basket.prices);
                break;
            }
        }
    },
    countBasketPrice(){
        let totalPrice = 0;
        for(const prop in basket.prices){
            totalPrice += basket.prices[prop];
        }
        alert('Total price of your basket: ' + totalPrice);
    }
};
basket.addThingsToBasket();
basket.countBasketPrice();




