// 1. Greeting Function
function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
  }
  greet("Alice");  // Output: Hello, Alice!
  greet();         // Output: Hello, Guest!
  
  // 2. Addition with Default Parameters
  function add_numbers(a, b = 0) {
    return a + b;
  }
  console.log(add_numbers(5, 3));  // Output: 8
  console.log(add_numbers(5));     // Output: 5
  
  // 3. Rectangle Area Calculator
  function calculate_area(length, width = 1) {
    return length * width;
  }
  console.log(calculate_area(5, 4));  // Output: 20
  console.log(calculate_area(5));     // Output: 5
  
  // 4. Temperature Conversion
  function convert_temperature(temp, scale = "C") {
    if (scale === "C") {
      return (temp - 32) * 5 / 9;  // Fahrenheit to Celsius
    } else if (scale === "F") {
      return (temp * 9 / 5) + 32;  // Celsius to Fahrenheit
    }
  }
  console.log(convert_temperature(32, "C"));  // Output: 0
  console.log(convert_temperature(0, "F"));   // Output: 32
  
  // 5. Shopping List
  function add_to_shopping_list(item, quantity = 1) {
    console.log(`Added ${quantity} of ${item} to your shopping list.`);
  }
  add_to_shopping_list("Apple", 3);  // Output: Added 3 of Apple to your shopping list.
  add_to_shopping_list("Banana");    // Output: Added 1 of Banana to your shopping list.
  
  // 6. Power Function
  function power(base, exponent = 2) {
    return base ** exponent;
  }
  console.log(power(3));        // Output: 9 (3^2)
  console.log(power(2, 3));     // Output: 8 (2^3)
  
  // 7. Personalized Message
  function create_message(name, greeting = "Hello") {
    return `${greeting}, ${name}!`;
  }
  console.log(create_message("John"));          // Output: Hello, John!
  console.log(create_message("Alice", "Hi"));   // Output: Hi, Alice!
  
  // 8. Calculate Discount
  function apply_discount(price, discount = 0.1) {
    return price * (1 - discount);
  }
  console.log(apply_discount(100));    // Output: 90 (10% discount)
  console.log(apply_discount(100, 0.2)); // Output: 80 (20% discount)
  
  // 9. Introduction Function
  function introduce(name, age = "unknown", country = "unknown") {
    console.log(`My name is ${name}, I am ${age} years old, and I am from ${country}.`);
  }
  introduce("John", 30, "USA");    // Output: My name is John, I am 30 years old, and I am from USA.
  introduce("Alice");               // Output: My name is Alice, I am unknown years old, and I am from unknown.
  
  // 10. Calculate Final Price
  function calculate_price(price, tax = 0.05) {
    return price * (1 + tax);
  }
  console.log(calculate_price(100));    // Output: 105 (5% tax)
  console.log(calculate_price(100, 0.1)); // Output: 110 (10% tax)
  
  // 11. Find the Maximum
  function find_max(a, b, c) {
    if (a >= b && a >= c) return a;
    if (b >= a && b >= c) return b;
    return c;
  }
  console.log(find_max(5, 10, 3)); // Output: 10
  console.log(find_max(1, 2, 3));  // Output: 3
  
  // 12. Pass or Fail
  function pass_or_fail(score) {
    return score >= 50 ? "Pass" : "Fail";
  }
  console.log(pass_or_fail(60)); // Output: Pass
  console.log(pass_or_fail(40)); // Output: Fail
  
  // 13. Sum of Numbers
  function sum_of_numbers(numbers) {
    let sum = 0;
    for (let num of numbers) {
      sum += num;
    }
    return sum;
  }
  console.log(sum_of_numbers([1, 2, 3, 4, 5])); // Output: 15
  
  // 14. Count Even Numbers
  function count_evens(numbers) {
    let count = 0;
    for (let num of numbers) {
      if (num % 2 === 0) count++;
    }
    return count;
  }
  console.log(count_evens([1, 2, 3, 4, 5, 6])); // Output: 3 (2, 4, 6)
  