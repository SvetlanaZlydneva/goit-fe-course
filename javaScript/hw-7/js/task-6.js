// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.
const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', handleInputBlur);
inputRef.addEventListener('focus', handleInputFocus);

function handleInputBlur(event) {
  Number(event.target.getAttribute('data-length')) === event.target.value.length
    ? inputRef.classList.add('valid')
    : inputRef.classList.add('invalid');
}
function handleInputFocus() {
  inputRef.classList.remove('invalid', 'valid');
}
