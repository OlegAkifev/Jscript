//1. Задать температуру в градусах по Цельсию.
// Вывести в alert соответствующую температуру в градусах по Фаренгейту.
// Подсказка: расчёт идёт по формуле: Tf = (9 / 5) * Tc + 32,
// где Tf – температура по Фаренгейту,
// Tc – температура по Цельсию

//let degreesCelsius = 5
//let degreesFahrenheit = (9 / 5) * degreesCelsius + 32;
//console.log(degreesCelsius + " degrees Celsius are " + degreesFahrenheit + " degrees Fahrenheit ")
//let degreesCelsius = prompt("Enter number : ");
//function fromCelsiusToFahrenheit(){
//    let degreesFahrenheit = (9 / 5) * degreesCelsius + 32;
//    alert(degreesFahrenheit);
//}
//fromCelsiusToFahrenheit()

//2. Работа с переменными. Объявить две переменные: admin и name.
// Записать в name строку "Василий"; Скопировать значение из name в admin.
// Вывести admin (должно вывести «Василий»).

let name;
let admin;
name = "Василий";
admin = name;
console.log(admin)


//3. *Чему будет равно JS-выражение 1000 + "108"
console.log(1000 + "108")


//4. *Самостоятельно разобраться с атрибутами тега script (async и defer)
//1)async используется для того,чтобы браузер не останавливал загрузку страницы при выполнении скрипта,он
//выполняется параллельно загрузке страницы
//2)defer так же используется для того,чтобы браузер не останавливал загрузку страницы, но скрипт при этом выполнится только
//после загрузки самой страницы
