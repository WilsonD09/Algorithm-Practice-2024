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
 */

decimalBinary(17);
function decimalBinary(decimal) {
  let binary = "";
  i = 8;
  while (decimal > 0) {
    i--;
    if ((2 ^ i) < decimal) {
      decimal -= 2 ^ i;
      binary.concat("1");
    } else {
      binary.concat("0");
    }
  }
  return binary;
}

console.log(decimalBinary(17));
