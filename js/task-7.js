// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const inputRef = document.querySelector('#font-size-control');
const textBlockRef = document.querySelector('#text');

const changeFontSize = event => {
    textBlockRef.style.fontSize = `${event.target.value}px`;
};

inputRef.addEventListener('input', changeFontSize);