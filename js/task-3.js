// Напиши скрипт для создания галлереи изображений по массиву данных.
// В HTML есть список ul#gallery.
// <ul id="gallery"></ul>
// Используй массив объектов images для создания тегов img вложенных в li.
// Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css - классы.

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

//first var
// images.forEach(image => {
//     const liRef = document.createElement('li');
//     const imgRef = document.createElement('img');
//     imgRef.src = image.url;
//     imgRef.alt = image.alt;
//     liRef.appendChild(imgRef);
//     document.querySelector('#gallery').appendChild(liRef);
// });

//second var
const imgCreate = image => {
    const liRef = document.createElement('li');
    const imgRef = document.createElement('img');
    imgRef.src = image.url;
    imgRef.alt = image.alt;
    liRef.appendChild(imgRef);
    return liRef;
}
const readyImg = images.map(image => imgCreate(image));
document.querySelector('#gallery').append(...readyImg);

//add styles
document.querySelector('#gallery').classList.add('gallery-flex');
const galleryImgArray = document.querySelectorAll('#gallery img');
galleryImgArray.forEach(img => img.classList.add('gallery-img'));


