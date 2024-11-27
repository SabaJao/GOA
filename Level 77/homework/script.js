function sayHello() {
    console.log("გამარჯობა");
}
function greetByName(name) {
    console.log(`გამარჯობა, ${name}`);
}
function incrementByOne(number) {
    return number + 1;
}
function toNegative(number) {
    return number > 0 ? -number : number;
}

let result = incrementByOne(toNegative(44));
console.log(result);

function getElementByIdAndModify(id) {
    let element = document.getElementById(id);
    if (element) {
        element.style.color = "white";
        element.style.backgroundColor = "blue";
        element.textContent = "ატრიბუტები შეცვლილია";
    }
}

sayHello();
greetByName("ლაშა");

console.log(incrementByOne(55));

let negativePlusOne = incrementByOne(toNegative(44));
console.log(negativePlusOne);

getElementByIdAndModify("first");

function logMessage(message) {
    console.log(message);
}
