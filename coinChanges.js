function getChange(total, denominations) {
  // Sort the denominations in descending order
  denominations.sort((a, b) => b - a);

  let change = {};
  let remaining = total;

  for (let i = 0; i < denominations.length; i++) {
    let denom = denominations[i];
    if (remaining >= denom) {
      let count = Math.floor(remaining / denom);
      change[denom] = count;
      remaining -= count * denom;
    }
  }

  if (remaining !== 0) {
    return "It's not possible to provide exact change with the available denominations.";
  }

  return change;
}

// Example usage:
let total = 7;
let denominations = [1, 3, 4, 5];

let result = getChange(total, denominations);
console.log(result); // Output: { 20: 2, 5: 1, 1: 2 }
