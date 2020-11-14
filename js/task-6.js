// Напиши скрипт, который бы при потере фокуса на инпуте,
//     проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputRef = document.querySelector('#validation-input');
const dataLength = inputRef.getAttribute('data-length');

//var-1
// const checkValidation = (event) => {
//     if (event.target.value.length == dataLength) {
//         inputRef.classList.add('valid');
//         inputRef.classList.remove('invalid');
//     } else {
//         inputRef.classList.add('invalid');
//         inputRef.classList.remove('valid');
//     };
// };
// inputRef.addEventListener('blur', checkValidation);

//var-2
const addValidClass = (event) => {
    event.target.value.length == dataLength
        ? inputRef.classList.add('valid')
        : inputRef.classList.add('invalid');
};

const removeClasses = () => {
    inputRef.classList.remove('invalid');
    inputRef.classList.remove('valid');
};

inputRef.addEventListener('blur', addValidClass);
inputRef.addEventListener('focus', removeClasses);