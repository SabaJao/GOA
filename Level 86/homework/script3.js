const array = [];
for (let i = 0; i < 10; i++) {
    const num = parseInt(prompt(`შეიყვანეთ ელემენტი ${i + 1}:`));
    array.push(num * 2);
}

console.log("გაორმაგებული მასივი:", array);