// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name-output. Если инпут пустой,
// в спане должна отображаться строка 'незнакомец'.
const inputRef = document.querySelector('#name-input');
const nameLabelRef = document.querySelector('#name-output');

inputRef.addEventListener('input', handleInput);

function handleInput(event) {
  event.target.value.length === 0
    ? (nameLabelRef.textContent = 'незнакомец')
    : (nameLabelRef.textContent = event.target.value);
}
