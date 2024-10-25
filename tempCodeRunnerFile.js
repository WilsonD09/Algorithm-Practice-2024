function decimalBinary(decimal) {
  let binary = "";
  i = 8;
  while (decimal > 0) {
    i--;
    if (Math.pow(2, i) < decimal) {
      decimal = decimal - Math.pow(2, i);
      binary.concat("1");
    } else {
      binary.concat("0");
    }
  }
  return binary;
}

console.log(decimalBinary(17));

function decimaltoBinary(decimal) {
  let binary = "";
  while (decimal > 1) {
    let remainder = decimal % 2;
    binary = remainder.toString() + binary;
    decimal = Math.floor(decimal / 2);
  }
  return binary;
}

console.log(decimaltoBinary(176));