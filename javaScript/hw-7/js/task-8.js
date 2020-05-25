// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.
// Каждый созданный div:
// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.
const controlsRef = document.querySelector('#controls');
const inputRef = document.querySelector('#controls input');
const boxesRef = document.querySelector('#boxes');

controlsRef.addEventListener('click', handleButtonClick);
console.dir(inputRef);

function handleButtonClick(event) {
  const action = event.target.getAttribute('data-action');
  if (action === 'render' && Number(inputRef.value) > 0)
    boxes.createBoxes(Number(inputRef.value));
  if (action === 'destroy') boxes.destroyBoxes();
}

const boxes = {
  size: 20,
  step: 10,
  elementsArray: [],

  createBoxes(amount) {
    for (let i = 1; i <= amount; i++) {
      this.elementsArray.push(this.newElem((this.size += this.step)).outerHTML);
    }
    boxesRef.innerHTML = this.elementsArray.join('');
  },

  destroyBoxes() {
    boxesRef.innerHTML = '';
    inputRef.value = '';
  },

  randomColor() {
    return Math.floor(Math.random() * 256);
  },

  newElem(size) {
    const newElement = document.createElement('div');
    newElement.style.width = size + 'px';
    newElement.style.height = size + 'px';
    newElement.style.backgroundColor = `rgb(${this.randomColor()},${this.randomColor()},${this.randomColor()})`;
    return newElement;
  },
};
