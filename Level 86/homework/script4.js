const N = parseInt(prompt("შეიყვანეთ რიცხვების რაოდენობა: "));
const array = [];

for (let i = 0; i < N; i++) {
    array.push(parseInt(prompt(`შეიყვანეთ ელემენტი ${i + 1}:`)));
}

console.log("შებრუნებული მასივი:", array.reverse());