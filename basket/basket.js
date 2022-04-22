// 2. Сделать генерацию корзины динамической:
// верстка корзины не должна находиться в HTML-структуре.
// Там должен быть только div, в который будет вставляться корзина,
// сгенерированная на базе JS:
// 2.1. Пустая корзина должна выводить строку «Корзина пуста»;
// 2.2. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».

let basket ={
    goods: [],
    prices: [],
    createInput() {
        while (true) {
            const userChoice = prompt('Enter name of thing: \nIf you want to exit enter -1');
            if(userChoice === '-1' && this.goods.length === 0){                                     //  Если пользователь сразу прекращает ввод товаров
                const emptyBasket = document.querySelector('h3');
                emptyBasket.insertAdjacentHTML(
                        'afterend',
                        '<p>Корзина пуста</p>'                                                  //Выводит пустую корзину
                    )
                    break;
                }
            else if(userChoice === '-1' && this.goods.length !== 0){                                //Если пользователь закончил ввод товаров
                const fillBasket = document.querySelector('h3')
                fillBasket.insertAdjacentHTML(
                    'afterend',
                    `<p>Сумма корзины: ${this.calculatePriceOfBasket()}<br>
                          Количество товаров: ${this.goods.length}                                   //Выводит сумму товаров и их количество 
                          </p>`
                )
                break;
            }
            basket.goods.push(userChoice);                                                          //Добавляем товары в массив
            let thingPrice = +(prompt('Enter price of thing: '));
            basket.prices.push(thingPrice);                                                         //Добавляем цены товаров
        }
        console.log(basket.goods);
        console.log(basket.prices);
    },

    createBasket(){
        const selectNodeOfTable = document.querySelector('.table');
        const createTable = document.createElement('table');                    //Выбираем по классу table и создаем в нем
        selectNodeOfTable.appendChild(createTable);                                     //тэг table,в который добляем строку tr и
        const selectTable = document.querySelector('table');                    //ячейку td
        for(let row = 0; row <= this.goods.length ; row++){
            if(this.goods.length !== 0){                                                //Условие,чтобы при пустой корзине не
                const createTr = document.createElement('tr');                  //создавалась таблица с заголовками
                selectTable.appendChild(createTr);
                for(let cols = 0; cols <= 1; cols++){
                    const createTd = document.createElement('td');
                    if(row === 0){
                        if(cols === 0){
                            createTd.textContent = 'Вещь';                                  //Создаем столбец вещь
                        }
                        else createTd.textContent = 'Цена';                                 //Создаем столбец цена
                    }
                    else{
                        if(cols === 0){
                            createTd.textContent = this.goods[row - 1];                     //Добавляем название вещи
                        }
                        else createTd.textContent = this.prices[row - 1]                    //Добавляем цену вещи
                    }
                    createTr.appendChild(createTd);
                }
            }
        }
    },

    calculatePriceOfBasket(){                                                           //Считаем цену всех вещей
        let a = 0;
        for(let i = 0; i < this.prices.length; i++){
            a += this.prices[i];
        }
        return a;
    }
}

basket.createInput();
basket.createBasket();


