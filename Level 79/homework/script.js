function countArea(...args) {
    if (args.length === 2) {
        const [width, height] = args;
        return width * height;
    } else if (args.length === 1) {
        const radius = args[0];
        return Math.PI * Math.pow(radius, 2);
    } else if (args.length === 3) {
        const [a, b, c] = args;
        const s = (a + b + c) / 2;
        return Math.sqrt(s * (s - a) * (s - b) * (s - c));
    } else {
        throw new Error("Invalid number of arguments. Provide 1 for circle, 2 for rectangle, or 3 for triangle.");
    }
}

console.log(countArea(5, 10));
console.log(countArea(7));
console.log(countArea(3, 4, 5));
