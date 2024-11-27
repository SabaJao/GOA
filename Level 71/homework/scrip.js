// --- 1) Function to generate a random number between 1 and 100 ---

// Write a function that generates a random number between 1 and 100 using Math.random().
// Ensure the number is an integer.
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}
console.log(generateRandomNumber());


// --- 2) Function to calculate the area of a circle given the radius ---

// Write a function that calculates the area of a circle given the radius using the formula πr²,
// and use Math.PI for π.
function calculateArea(radius) {
    return Math.PI * radius * radius;
}
console.log(calculateArea(5));  // Example with radius 5
