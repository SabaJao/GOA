// 1. Basic Constructor with Properties
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.introduce = function() {
      console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
    };
  }
  
  const person1 = new Person("Alice", 30);
  person1.introduce();  // Output: Hi, I am Alice and I am 30 years old.
  
  
  // 2. Constructor with Default Parameter Value
  function Book(title, author = "Unknown") {
    this.title = title;
    this.author = author;
    this.getDetails = function() {
      console.log(`Book: ${this.title}, Author: ${this.author}`);
    };
  }
  
  const book1 = new Book("JavaScript Basics");
  book1.getDetails();  // Output: Book: JavaScript Basics, Author: Unknown
  
  const book2 = new Book("React for Beginners", "John Doe");
  book2.getDetails();  // Output: Book: React for Beginners, Author: John Doe
  
  
  // 3. Constructor with Arrays
  function Classroom(students) {
    this.students = students;
    this.countStudents = function() {
      console.log(`Number of students: ${this.students.length}`);
    };
  }
  
  const classroom1 = new Classroom(["Alice", "Bob", "Charlie"]);
  classroom1.countStudents();  // Output: Number of students: 3
  
  
  // 4. State Management with Constructor
  function Counter() {
    this.value = 0;
    this.increment = function() {
      this.value += 1;
    };
    this.getValue = function() {
      console.log(`Current value: ${this.value}`);
    };
  }
  
  const counter1 = new Counter();
  counter1.increment();
  counter1.getValue();  // Output: Current value: 1
  
  
  // 5. Constructor with Boolean State
  function Light() {
    this.state = "off";
    this.toggle = function() {
      this.state = this.state === "off" ? "on" : "off";
      console.log(`Light is now ${this.state}`);
    };
  }
  
  const light1 = new Light();
  light1.toggle();  // Output: Light is now on
  light1.toggle();  // Output: Light is now off
  
  
  // 6. Product Constructor with Properties
  function Product(name, price) {
    this.name = name;
    this.price = price;
    this.getDetails = function() {
      console.log(`Product: ${this.name}, Price: ${this.price} USD`);
    };
  }
  
  const product1 = new Product("Laptop", 1200);
  product1.getDetails();  // Output: Product: Laptop, Price: 1200 USD
  
  
  // 7. Constructor with Object Properties
  function User(username, contact) {
    this.username = username;
    this.contact = contact;
    this.getContactInfo = function() {
      console.log(`Username: ${this.username}, Email: ${this.contact.email}, Phone: ${this.contact.phone}`);
    };
  }
  
  const user1 = new User("john_doe", { email: "john@example.com", phone: "123-456-7890" });
  user1.getContactInfo();  // Output: Username: john_doe, Email: john@example.com, Phone: 123-456-7890
  
  
  // 8. Constructor with Array of Objects
  function Library(books) {
    this.books = books;
    this.listBooks = function() {
      this.books.forEach(book => {
        console.log(`Title: ${book.title}, Author: ${book.author}`);
      });
    };
  }
  
  const library1 = new Library([
    { title: "JavaScript Basics", author: "John Doe" },
    { title: "React for Beginners", author: "Jane Smith" }
  ]);
  library1.listBooks();
  // Output:
  // Title: JavaScript Basics, Author: John Doe
  // Title: React for Beginners, Author: Jane Smith
  
  
  // 9. Cart Constructor with Array Management
  function Cart() {
    this.items = [];
    this.addItem = function(item) {
      this.items.push(item);
    };
    this.getItems = function() {
      console.log("Items in the cart:", this.items);
    };
  }
  
  const cart1 = new Cart();
  cart1.addItem("Apple");
  cart1.addItem("Banana");
  cart1.getItems();  // Output: Items in the cart: [ 'Apple', 'Banana' ]
  
  
  // 10. Conditional Logic in Constructor
  function Student(name, marks) {
    this.name = name;
    this.marks = marks;
    this.hasPassed = function() {
      const average = this.marks.reduce((sum, mark) => sum + mark, 0) / this.marks.length;
      return average >= 50;
    };
  }
  
  const student1 = new Student("Alice", [60, 70, 80]);
  console.log(student1.hasPassed());  // Output: true
  
  const student2 = new Student("Bob", [40, 45, 30]);
  console.log(student2.hasPassed());  // Output: false
  