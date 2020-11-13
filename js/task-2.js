// В HTML есть пустой список ul#ingredients.
//<ul id="ingredients"></ul>
// В JS есть массив строк.

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
//   после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

ingredients.forEach(ingredient => {
  const liRef = document.createElement('li');
  liRef.textContent = ingredient;
  document.querySelector('#ingredients').appendChild(liRef);
  // document.querySelector('#ingredients').innerHTML += `<li>${ingredient}</li>`;
});