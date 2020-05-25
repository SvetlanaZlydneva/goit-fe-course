let total = 0;
let enteredData;
while (enteredData !== null) {
  enteredData = prompt('Введите число');
  if (Number.isNaN(Number.parseInt(enteredData))) {
    if (enteredData !== null) {
      alert('Было введено не число, попробуйте еще раз');
    }
  } else {
    total += Number.parseInt(enteredData);
  }
}
alert(`Общая сумма равна ${total}`);
