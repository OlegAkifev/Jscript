const catalog = {
    goods: ['Рубашка', 'Свитер', 'Кофта', 'Джинсы', 'Футболка', 'Носки', 'Шорты', 'Очки', 'Шарф', 'Кроссовки'],
    prices: [5000, 4000, 4000, 6000, 2000, 1000, 3500, 6000, 1500, 12000],

    //Создаем каталог,где будут храниться товары и их цены
    generateCatalog() {
        const selectDivCatalog = document.querySelector('.catalog');
        for (let thing = 0; thing < this.goods.length; thing++) {
            selectDivCatalog.insertAdjacentHTML(
                'beforeend',
                `<div class='catalogTthing'><p>${this.goods[thing]}</p>
                      <div class="catalogPrice" ><p>Цена: ${this.prices[thing]}</p></div>                
                      <div class="img" ><img class="catalogImg" id="img-${thing}" src="${image.pathOfImage[thing]}" alt="" width="120"></div>
                      <div class="catalogButton" ><button id="${thing}">Добавить в корзину</button></div>`
            )
        }
        selectDivCatalog.addEventListener("click", this.addEventToCatalog);
        selectDivCatalog.addEventListener("click", basket.removeEmptyBasket,{once: true});
        selectDivCatalog.addEventListener("click", basket.addTotalQuantityAndPriceToBasket);
        selectDivCatalog.addEventListener("click", basket.calculateRepeatedGoods);
        selectDivCatalog.addEventListener("click", basket.addThingsAndPricesToBasket);
        selectDivCatalog.addEventListener("click", image.openModalForm);
    },

    //Создаем обработчик событий.При клике на кнопку "Добавить" добавляет в массивы
    //цену объекта и сам объект,чтобы в итоге посчитать их количество
    addEventToCatalog(e) {
        let selectIdButton = +e.target.getAttribute('id');
        if (e.target.closest('button')) {
            basket.basketGoods.push(catalog.goods[selectIdButton]);
            basket.basketPrice.push(catalog.prices[selectIdButton]);
            // console.log(basket.basketGoods);
            // console.log(basket.basketPrice);
        }
    },
};

const basket ={
    basketGoods: [],
    basketPrice: [],
    repeatedGoods: [],
    //Добавляю в корзину выбранный товар с проверкой.Если товар уже примутствует в корзине,то увеличиваем его количество.
    addThingsAndPricesToBasket(e){
        if (e.target.closest('button')) {
            const selectDivBasket = document.querySelector('.basket');
            let selectIdButton = +e.target.getAttribute('id');
            if(basket.repeatedGoods[selectIdButton] === 1){
                selectDivBasket.insertAdjacentHTML('afterbegin',
                    `<div class="basketThing"><p>Вещь: ${catalog.goods[selectIdButton]}</p>
                     <div class="basketPrice"></div><p id="price-${selectIdButton}">Цена: ${basket.repeatedGoods[selectIdButton]}x ${catalog.prices[selectIdButton]}<hr></div>`)
                console.log(selectDivBasket);
            }

            else if(basket.repeatedGoods[selectIdButton] > 1){
                let selectIdButton = +e.target.getAttribute('id');
                const selectQuantityP = document.getElementById(`price-${selectIdButton}`);
                selectQuantityP.textContent = '';
                selectQuantityP.insertAdjacentHTML('afterbegin',
                    `Цена: ${basket.repeatedGoods[selectIdButton]}x ${catalog.prices[selectIdButton]}`)
                console.log(selectQuantityP);
            }
        }
    },
    //Считаем количетсво повторяющихся вещей.Создаем массив в котором в каждом индексе,соответствующем индексу из массива
    //goods,будет число,определяющее количество вещей
    calculateRepeatedGoods(e){
        if (e.target.closest('button')) {
            let selectIdButton = +e.target.getAttribute('id');
            if(isNaN(basket.repeatedGoods[selectIdButton])){
                basket.repeatedGoods[selectIdButton] = 1;
                console.log(basket.repeatedGoods);
            }

            else basket.repeatedGoods[selectIdButton] += 1;

            console.log(basket.repeatedGoods);
        }
    },
    //Функция,чтобы считать количество товаров,и потом добавить обработчик событий для обновления стоимости корзины
    //количества предметов в ней
    calculateQuantityOfGoods(){
        return basket.basketGoods.length;
    },

    calculateSumOfGoods(){
        let sum = 0;
        for(let i = 0; i < basket.basketPrice.length; i++){
            sum += basket.basketPrice[i];
        }
        return sum;
    },

    //функция,генерирующая вид корзины и надпись 'Корзина пуста'.Потом хочу сделать,чтобы надпись исчезала при появлении в массиве
    //предметов какого-либо предмета
    generateBasket() {
        const selectDivBasket = document.querySelector('.basket');
        selectDivBasket.insertAdjacentHTML(
            'beforeend',
            `<p class="empty">Корзина пуста</p><br>`
        )
    },

    //Удаляет надпись 'Пустая корзина'
    removeEmptyBasket(e){
        if (e.target.closest('button')) {
            const selectDivBasket = document.querySelector('.basket');
            const selectEmptyBasket = document.querySelector('.empty');
            selectDivBasket.removeChild(selectEmptyBasket);
        }
    },

    //Подсчет цены и вещей в корзине и вывод
    addTotalQuantityAndPriceToBasket(e){
        if (e.target.closest('button')) {
            const selectDivBasket = document.querySelector('.total');
            selectDivBasket.textContent = '';
            selectDivBasket.insertAdjacentHTML('afterbegin',
                `<div class="total">В корзине ${basket.calculateQuantityOfGoods()} товаров на сумму ${basket.calculateSumOfGoods()}</div>`
            )
        }

    },
}

const image = {

    //массив в ссылками на фотографии
    pathOfImage: [
        'photos/Рубашка.jpg',
        'photos/свитер.jpg',
        'photos/кофта.jpg',
        'photos/джинсы.jpg',
        'photos/футболка.jpg',
        'photos/носки.jpg',
        'photos/шорты.jpg',
        'photos/очки.jpeg',
        'photos/шарф.jpg',
        'photos/кроссовки.jpg'
    ],

    //Создаем фильтр,чтобы при открытии модального окна вокург него было размыто
    createFilter(){
        const body = document.querySelector('body');
        const filter = document.createElement('div');
        filter.classList.add('filter');
        body.appendChild(filter);
        const selectFilter = document.querySelector('.filter');
        selectFilter.addEventListener("click", this.openModalForm);
        selectFilter.addEventListener("click", this.closeModalForm);
    },

    //Создаем модальное окно
    createModalForm() {
        const modalForm = document.createElement('div')
        modalForm.classList.add('modalForm');
        const selectFilter = document.querySelector('.filter');
        selectFilter.appendChild(modalForm)

    },

    //Добавление картинки в модальное окно и открытие при нажатии на картинку предмета
    openModalForm(e){
        const selectFilter = document.querySelector('.filter');
        const selectModalForm = document.querySelector('.modalForm');
        if(e.target.closest('.catalogImg')){
            const selectIdImage = e.target.id.split('-',)[1];
            console.log(selectIdImage);
            selectModalForm.textContent = '';
            selectModalForm.insertAdjacentHTML('beforeend',
                `<div class='photo'><img class="modalPhoto" src="${image.pathOfImage[selectIdImage]}" alt="" width="400">
                      <img class="left" src="photos/влево.png" alt="" width="50">
                       <img class="right" src="photos/вправо.png" alt="" width="50">
                        <img class="close" src="photos/Закрытие.png" alt="" width="70">
                        </div>
                         `)
            selectFilter.style.display = 'block';
            selectModalForm.style.display = 'block';
            const selectClose = document.querySelector('.modalForm');
            selectClose.addEventListener("click", this.closeModalForm);
        }
    },

    // Закрытие модального окна при нажатии на крестик
    closeModalForm(e){
        const selectFilter = document.querySelector('.filter');
        const selectModalForm = document.querySelector('.modalForm');
        const selectDivPhoto = document.querySelector('.photo');
        if(e.target.closest('.close')){
            selectModalForm.removeChild(selectDivPhoto);
            selectModalForm.style.display = 'none';
            selectFilter.style.display = 'none';
        }
    },
}


catalog.generateCatalog();
basket.generateBasket();
image.createFilter();
image.createModalForm();









































