const N = parseInt(prompt("შეიყვანეთ რიცხვების რაოდენობა: "));
const array = [];

for (let i = 0; i < N; i++) {
    array.push(parseInt(prompt(`შეიყვანეთ ელემენტი ${i + 1}:`)));
}

[array[0], array[array.length - 1]] = [array[array.length - 1], array[0]];

console.log("შეცვლილი მასივი:", array);