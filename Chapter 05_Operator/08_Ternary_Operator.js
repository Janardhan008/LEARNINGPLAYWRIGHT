// Multiple Condition

let age = 26;
// age > 18 -> he will goa, else not else
// drink > 25 yes, else no
let is_pramod_enjoy = age > 18 ? (age > 26 ? "Drink" : "No") : false;
console.log(is_pramod_enjoy);


// Read input
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();

const n = parseInt(input);

// Print multiplication table
for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
}
