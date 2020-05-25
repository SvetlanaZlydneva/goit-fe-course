let country;
let price;
let message = '';
let enteredData = prompt(
  'Что бы узнать стоимость доставки, введите название страны',
);
if (enteredData === null) {
  message = 'Отменено пользователем!';
} else {
  enteredData = enteredData.toLowerCase();
  switch (enteredData) {
    case 'китай':
      country = 'Китай';
      price = 100;
      break;
    case 'чили':
      country = 'Чили';
      price = 250;
      break;
    case 'австралия':
      country = 'Австралия';
      price = 170;
      break;
    case 'индия':
      country = 'Индия';
      price = 80;
      break;
    case 'ямайка':
      country = 'Ямайка';
      price = 120;
      break;
    default:
      message = 'В вашей стране доставка не доступна';
  }
}
if (message.length === 0) {
  message = `Доставка в ${country} будет стоить ${price} кредитов`;
}
alert(message);
