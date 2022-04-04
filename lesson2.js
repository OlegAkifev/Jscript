//1.
// let a = 1, b = 1, c, d;
// c = ++a; console.log(c);           // 2
// d = b++; console.log(d);           // 1
// c = (2+ ++a); console.log(c);      // 5
// d = (2+ b++); console.log(d);      // 4
// console.log(a);                    // 3
// console.log(b);                    // 3
// 1) К а прибавляем единицу
// 2)К b прибавляем единицу,но выводим предыдущее значение
// 3)а у нас уже равно 2,и, прибавляя еще единицу,получаем 3
// 4)b у нас уже равно 2,прибавляем единицу,но оставляем предыдущее значение
// 5)а после всех операций равно 3
// 6)b после всех операций равно 3


// 2. Чему будет равен x в примере ниже?
//
// var a = 2;
// var x = 1 + (a *= 2);
// Ответ: 5


// 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения.
// Затем написать скрипт,который работает по следующему принципу:
// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму;
// ноль можно считать положительным числом.

let c = ((Math.random() < 0.5) ? -1 : 1) * Math.floor(100 * Math.random());
let d = ((Math.random() < 0.5) ? -1 : 1) * Math.floor(100 * Math.random());
console.log("c = " + c + "\nd = " + d);
    if(c >= 0 && d >= 0) {
    console.log(c - d);
}
    else if(c < 0 && d < 0){
        console.log(c * d);
}
    else if(c >= 0 && d < 0 || c < 0 && d >= 0){
        console.log(c + d);
    }


// 4. Присвоить переменной а значение в промежутке [0..15].
// С помощью оператора switch организовать вывод чисел от a до 15.

let number = 1;
switch(number){
    case 0 : console.log(number);
    case 1 : console.log(number++);
    case 2 : console.log(number++);
    case 3 : console.log(number++);
    case 4 : console.log(number++);
    case 5 : console.log(number++);
    case 6 : console.log(number++);
    case 7 : console.log(number++);
    case 8 : console.log(number++);
    case 9 : console.log(number++);
    case 10 : console.log(number++);
    case 11 : console.log(number++);
    case 12 : console.log(number++);
    case 13 : console.log(number++);
    case 14: console.log(number++);
    case 15 : console.log(15)
}


// // 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
// //     Обязательно использовать оператор return.
let a = ((Math.random() < 0.5) ? -1 : 1) * Math.floor(100 * Math.random());
let b = ((Math.random() < 0.5) ? -1 : 1) * Math.floor(100 * Math.random());
console.log("First number: " + a + "\nSecond number: " + b);

function addition(a , b){
    return a + b;
}
let sum = addition(a, b);
console.log(sum);

function subtraction(a, b){
    return a - b;
}
let differrence = subtraction(a, b);
console.log(differrence);

function multiplication(a, b){
    return a * b;
}
let composition = multiplication(a, b);
console.log(composition);

function devision(a, b){
    return a / b;
}
let quotient = devision(a, b);
console.log(quotient);


// //6.Реализовать функцию с тремя параметрами:
// //function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов,
// //operation – строка с названием операции.
// //В зависимости от переданного значения операции выполнить одну
// //из арифметических операций (использовать функции из пункта 5)
// //и вернуть полученное значение (использовать switch).
//
function mathOperation(arg1, arg2, operation){
    switch(operation) {
        case 1 :
            alert("arg1 = "+ a + "\narg2 = " + b + "\nOperation - addition" + "\nResult = " + addition(arg1, arg2));
            break;
        case 2 :
            alert("arg1 = "+ a + "\narg2 = " + b + "\nOperation - subtraction" + "\nResult = " + subtraction(arg1, arg2));
            break;
        case 3 :
            alert("arg1 = "+ a + "\narg2 = " + b + "\nOperation - multiplication" + "\nResult = " + multiplication(arg1, arg2));
            break;
        case 4 :
            alert("arg1 = "+ a + "\narg2 = " + b + "\nOperation - devision" + "\nResult = " + devision(arg1, arg2));
            break;
    }
}
mathOperation(a, b, 4);

// 8. *С помощью рекурсии организовать функцию возведения числа в степень.
//     Формат: function power(val, pow), где val – заданное число, pow – степень.

function power(val, pow){
    if(pow === 1){
        console.log(val);
        return val;
    }
    else{
        console.log(val, pow)
        return val * power(val, pow - 1);
    }
}
console.log(power(2, 5));