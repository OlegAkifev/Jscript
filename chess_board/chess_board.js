// 1. Создать функцию, генерирующую шахматную доску.
//     При этом можно использовать любые html-теги по своему желанию.
//     Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки.
//     Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.
// (использовать createElement / appendChild)


const chessBoard ={
    numbers: ['', '1', '2', '3', '4', '5', '6', '7', '8',],

    letters: ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ''],

    chess_board(){
    const selectBody = document.querySelector('body')
    const createTable = document.createElement('table');
    selectBody.appendChild(createTable);
    const selectTable = document.querySelector('table');
    for(let row = 0; row < 10; row++){
        const tr = document.createElement('tr');
        selectTable.appendChild(tr);
        for(let col = 0; col < 10; col++){
            const td = document.createElement('td');
            if(row % 2 === col % 2){                    //Раскрашиваем поля черным и белым цветом
                td.className = 'white';
            }
            else td.className = 'black';                //Ставим буквы в первую строку
            if(row === 0 ){
                td.className = 'none';
                td.textContent = this.letters[col];
            }
            else if(row === 9 ){                         //Ставим буквы во вторую строку
                td.className = 'none';
                td.textContent = this.letters[col];
            }
            if(col === 0){                                //Ставим цифры слева
                td.className = 'none';
                td.textContent = this.numbers[row];
            }
            else if(col === 9){                            //Ставим цифры справа
                td.className = 'none';
                td.textContent = this.numbers[row];
            }
            tr.appendChild(td);                            //Добавляем элемент в HTML-файл
        }
    }
    }

}

chessBoard.chess_board();