// 1. Multiply Two Numbers
function multiply() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
    return num1 * num2;
  }
  
  // 2. Subtract Two Numbers
  function subtract() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
    return num1 - num2;
  }
  
  // 3. Divide Two Numbers
  function divide() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
    if (num2 === 0) {
      return "Error: Division by zero";
    }
    return num1 / num2;
  }
  
  // 4. Return a Full Name
  function fullName() {
    const firstName = prompt("Enter your first name:");
    const lastName = prompt("Enter your last name:");
    return firstName + " " + lastName;
  }
  
  // 5. Convert Minutes to Seconds
  function minutesToSeconds() {
    const minutes = parseFloat(prompt("Enter the number of minutes:"));
    return minutes * 60;
  }
  
  // 6. Calculate the Area of a Rectangle
  function rectangleArea() {
    const length = parseFloat(prompt("Enter the length of the rectangle:"));
    const width = parseFloat(prompt("Enter the width of the rectangle:"));
    return length * width;
  }
  
  // 7. Concatenate Two Strings
  function concatenateStrings() {
    const str1 = prompt("Enter the first string:");
    const str2 = prompt("Enter the second string:");
    return str1 + str2;
  }
  
  // 8. Exponentiation
  function power() {
    const base = parseFloat(prompt("Enter the base number:"));
    const exponent = parseFloat(prompt("Enter the exponent:"));
    return Math.pow(base, exponent);
  }
  
  // 9. Calculate Circle Circumference
  function circumference() {
    const radius = parseFloat(prompt("Enter the radius of the circle:"));
    return 2 * Math.PI * radius;
  }
  
  // 10. Return the Next Number
  function nextNumber() {
    const num = parseFloat(prompt("Enter a number:"));
    return num + 1;
  }