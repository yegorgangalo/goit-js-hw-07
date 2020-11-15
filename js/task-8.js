// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
//     после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:
// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

{/* <div id="controls">
  <input type="number" min="0" max="100" step="1" />
  <button type="button" data-action="render">Создать</button>
  <button type="button" data-action="destroy">Очистить</button>
</div>

<div id="boxes"></div> */}

const inputRef = document.querySelector('#controls input[type="number"');
const renderBtnRef = document.querySelector('#controls button[data-action="render"');
const destroyBtnRef = document.querySelector('#controls button[data-action="destroy"');
const boxesRef = document.querySelector('#boxes');

const randomRGB = () => {
    const r = Math.round( 255 * Math.random() ).toString(16);
    const g = Math.round( 255 * Math.random() ).toString(16);
    const b = Math.round( 255 * Math.random() ).toString(16);
    return r+g+b;
}
// const amount = () => Number(inputRef.value);

const destroyBoxes = () => boxesRef.textContent = '';
const createBoxes = () => {
    let width = 30;
    let height = 30;
    const quantity = Number(inputRef.value);
    const arrayEmpty = [...Array(quantity)];
    const arrayDiv = arrayEmpty.map(elem => {
        elem = document.createElement('div');
        elem.style.backgroundColor = `#${randomRGB()}`;
        elem.style.width = `${width}px`;
        elem.style.height = `${height}px`;
        width += 10;
        height += 10;
        return elem;
    });
    boxesRef.append(...arrayDiv);
};


renderBtnRef.addEventListener('click', createBoxes);
destroyBtnRef.addEventListener('click', destroyBoxes);
