const min = 2;
const max = 50;
let total = 0;

for (let i = min; i <= max; i += 1) {
    if (i % 2 === 0) {
        total += i;
        console.log("Current sum(четные числа): ", total);
    } else {
        total -= i;
        console.log("Current sum(нечетные числа): ", total);
    }
}

console.log("Sum: ", total);