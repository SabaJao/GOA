function isEvenOrOdd(number) {
    if (number % 2 === 0) {
        console.log("რიცხვი ლუწია");
    } else {
        console.log("რიცხვი კენტია");
    }
}

function sumList(numbers) {
    if (numbers.length === 0) {
        console.log("სია ცარიელია");
    } else {
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        console.log(`რიცხვების ჯამი არის: ${sum}`);
    }
}

function multiplyAndFilter(numbers) {
    return numbers.map(num => num * 3).filter(num => num > 20);
}

function findMax(numbers) {
    if (numbers.length === 0) {
        console.log("სია ცარიელია");
        return null;
    }
    return Math.max(...numbers);
}

function isProductGreaterThan100(a, b) {
    const product = a * b;
    return product > 100;
}

function isFirstAndLastSame(text) {
    if (text.length === 0) return false;
    return text[0].toLowerCase() === text[text.length - 1].toLowerCase();
}

function letterFrequency(text) {
    const frequency = {};
    for (const letter of text) {
        frequency[letter] = (frequency[letter] || 0) + 1;
    }
    return frequency;
}

function isPalindrome(text) {
    const cleanedText = text.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanedText === cleanedText.split('').reverse().join('');
}

isEvenOrOdd(5);
sumList([1, 2, 3, 4, 5]);
console.log(multiplyAndFilter([5, 3, 7, 8]));

console.log(findMax([10, 25, 15, 30]));
console.log(isProductGreaterThan100(15, 8));

console.log(isFirstAndLastSame("level"));
console.log(letterFrequency("hello world")); 

console.log(isPalindrome("A man, a plan, a canal, Panama"));
