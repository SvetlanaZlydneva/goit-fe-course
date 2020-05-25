const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
let enteredData = prompt('Введите пароль');
if (enteredData === null) {
  message = 'Отменено пользователем!';
} else {
  enteredData = enteredData.toLowerCase();
  message =
    ADMIN_PASSWORD === enteredData
      ? 'Добро пожаловать!'
      : 'Доступ запрещен, неверный пароль!';
}
alert(message);
