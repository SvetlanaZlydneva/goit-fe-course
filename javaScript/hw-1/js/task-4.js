const credits = 23580;
const pricePerDroid = 3000;
let message;
let enteredData = prompt(
  'Введите количество дроидов, которое желаете приобрести',
);
if (enteredData === null) {
  message = 'Отменено пользователем!';
} else if (Number.isNaN(Number.parseInt(enteredData))) {
  message = 'Ошибка ввода данных';
} else {
  const totalPrice = pricePerDroid * enteredData;
  message =
    totalPrice > credits
      ? 'Недостаточно средств на счету!'
      : `Вы купили ${enteredData} дроидов, на счету осталось ${credits -
          totalPrice} кредитов.`;
}
console.log(message);
