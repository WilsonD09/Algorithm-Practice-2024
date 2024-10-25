/* function parkingSpaces(n, y, t) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (y[i] === "C" && t[i] === "C") {
      count++;
    }
  }
  return count;
}
console.log(parkingSpaces(7, "C..C..C", "CCC.CC."));
 */
/* function decimalBinary(decimal) {
  let binary = "";
  i = 0;
  while (decimal > 0);
  i++;
  if (decimal % (2 ^ i) === 1) {
    binary.concat("1");
  } else {
    binary.concat("0");
  }
  console.log(binary);
}
 let decimalNumber = 42;
let binaryNumber = decimalNumber.toString(2);
console.log(binaryNumber);*/

/* function decimalBinary(decimal) {
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

console.log(decimaltoBinary(176)); */
console.log("hello world");
