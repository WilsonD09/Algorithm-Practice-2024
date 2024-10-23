function parkingSpaces(n, y, t) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (y[i] === "C" && t[i] === "C") {
      count++;
    }
  }
  return count;
}
console.log(parkingSpaces(7, "C..C..C", "CCC.CC."));
