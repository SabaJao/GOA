// Create an object called car with properties like brand, model, and year
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020
};

// Access object properties: Print the brand and year properties
console.log(car.brand);  // Output: Toyota
console.log(car.year);   // Output: 2020

// Add a new property: Add a color property to the car object
car.color = "Red";

// Change a property value: Update the year property to a new value
car.year = 2021;

// Delete a property: Remove the model property from the car object
delete car.model;

// Create a method: Add a method startEngine to the car object
car.startEngine = function() {
  console.log("Engine started");
};

// Call the startEngine method
car.startEngine();  // Output: Engine started

// Object inside an object: Create a new object owner inside the car object
car.owner = {
  name: "John Doe",
  age: 30
};

// Access the nested object properties
console.log(car.owner.name);  // Output: John Doe
console.log(car.owner.age);   // Output: 30



// ვუყურე დღევანდელ ჩანაწერს
