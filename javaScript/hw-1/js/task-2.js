const total = 100;
let ordered = 50;
const messageCheckout = 'Заказ оформлен, с вами свяжется менеджер';
const messageRejection = 'На складе недостаточно товаров!';
console.log(
  ordered > 0 && ordered <= total
    ? `${ordered}: ${messageCheckout}`
    : `${ordered}: ${messageRejection}`,
);
ordered = 150;
console.log(
  ordered > 0 && ordered <= total
    ? `${ordered}: ${messageCheckout}`
    : `${ordered}: ${messageRejection}`,
);
ordered = 100;
console.log(
  ordered > 0 && ordered <= total
    ? `${ordered}: ${messageCheckout}`
    : `${ordered}: ${messageRejection}`,
);
