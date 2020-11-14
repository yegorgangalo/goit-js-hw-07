// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса


const valueRef = document.querySelector("#value");
const btnIncrementRef = document.querySelector('[data-action="increment"]');
const btnDecrementRef = document.querySelector('[data-action="decrement"]');

const increment = () => {
    let counterValue = Number(valueRef.textContent);
    counterValue += 1;
    valueRef.textContent = counterValue;
};

const decrement = () => {
    let counterValue = Number(valueRef.textContent);
    counterValue -= 1;
    valueRef.textContent = counterValue;
};

btnIncrementRef.addEventListener('click', increment);
btnDecrementRef.addEventListener('click', decrement);
