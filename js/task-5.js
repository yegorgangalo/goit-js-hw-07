// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
//     подставляет его текущее значение в span#name - output.Если инпут пустой,
//         в спане должна отображаться строка 'незнакомец'.

const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

// inputRef.addEventListener('input', () =>
//outputRef.textContent = inputRef.value ? inputRef.value : "незнакомец");

const textContent = event => {
    outputRef.textContent = event.target.value
        ? event.target.value
        : "незнакомец";
};

inputRef.addEventListener('input', textContent);