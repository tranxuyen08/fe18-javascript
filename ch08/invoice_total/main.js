var $ = function (id) {
  return document.getElementById(id);
};
var calculatorDiscount = function (customer, subtotal) {
  switch (customer) {
    case 'reg':
      if (subtotal < 100) {
        return 0;
      } else if (subtotal >= 100 && subtotal < 250) {
        return 0.1;
      } else if (subtotal >= 250 && subtotal < 500) {
        return 0.25;
      } else if (subtotal >= 500) {
        return 0.3;
      }
      break;
    case 'loyal':
      return 0.3;
      break;
    case 'honored':
      return subtotal < 500 ? 0.4 : 0.5;
      break;
    default:
      return 0;
      break;
  }
};
var calculator = function () {
  var discountAmount, invoiceTotal, discountPercent;
  var customType = $('type').value;
  var subTotal = $('subtotal').value;
  if (isNaN(subTotal)) {
    alert('Data type error enter value again !');
    $('subtotal').value = '';
    $('percent').value = '';
    $('discount').value = '';
    $('total').value = '';
  } else {
    subTotal = parseFloat(subTotal);
    discountPercent = calculatorDiscount(customType, subTotal);
    discountAmount = subTotal * discountPercent;
    invoiceTotal = subTotal - discountAmount;
    $('subtotal').value = subTotal.toFixed(2);
    $('percent').value = discountPercent * 100 + '%';
    $('discount').value = discountAmount.toFixed(2);
    $('total').value = invoiceTotal.toFixed(2);
    $('type').focus();
  }
};

window.onload = function () {
  $('calculator').onclick = calculator;
  $('type').focus();
};
