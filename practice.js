function factorial(n) {
  if (n <= 0) {
    return "Negative Number/Zero";
  }
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(5));

function factors(n) {
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      console.log(i);
    }
  }
}
factors(18);
