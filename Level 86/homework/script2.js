const N = parseInt(prompt("შეიყვანეთ რიცხვების რაოდენობა: "));
const array = [];

for (let i = 0; i < N; i++) {
    array.push(parseInt(prompt(`შეიყვანეთ ელემენტი ${i + 1}:`)));
}

console.log("კენტ ინდექსზე მყოფი ელემენტები:");
for (let i = 1; i < array.length; i += 2) {
    console.log(array[i]);
}