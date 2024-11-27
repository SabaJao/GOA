// --- Exercise Set 1: Basics (Array Length, toString, at, join, pop, push) ---

// Get Length: Create an array with 5 items. Log the length of the array.
const array1 = [1, 2, 3, 4, 5];
console.log(array1.length);

// Convert to String: Convert the same array to a string using toString() and log the result.
console.log(array1.toString());

// Access Element: Use the at() method to access the second element and log it.
console.log(array1.at(1));

// Join Elements: Use join() to combine the array elements with - between them.
console.log(array1.join('-'));

// Push & Pop: Add two new elements to the array using push(), then remove the last element using pop().
array1.push(6, 7);
console.log(array1);
array1.pop();
console.log(array1);


// --- Exercise Set 2: Modify Array (shift, unshift, delete, concat) ---

// Shift Element: Create an array and remove the first element using shift().
const array2 = [10, 20, 30, 40];
array2.shift();
console.log(array2);

// Unshift Element: Add a new element at the beginning using unshift().
array2.unshift(10);
console.log(array2);

// Delete Element: Use the delete operator to remove the second element. Log the array and observe the result.
delete array2[1];
console.log(array2);

// Concatenate Arrays: Create two arrays and use concat() to merge them.
const array3 = [50, 60];
const mergedArray = array2.concat(array3);
console.log(mergedArray);

// Explore Unshift & Length: After using unshift(), log the new length of the array.
array2.unshift(5);
console.log(array2.length);


// --- Exercise Set 3: Searching (indexOf, lastIndexOf, includes) ---

// Find Index: Create an array with repeated values. Use indexOf() to find the first occurrence of an element.
const array4 = [1, 2, 3, 2, 4];
console.log(array4.indexOf(2));

// Find Last Index: Use lastIndexOf() to find the last occurrence of the same element.
console.log(array4.lastIndexOf(2));

// Check Inclusion: Use includes() to check if a specific element exists in the array.
console.log(array4.includes(3));
console.log(array4.includes(5));

// Invalid Index Search: Use indexOf() to search for a non-existing element. Log the result.
console.log(array4.indexOf(10));

// Case Sensitivity: Check if includes() is case-sensitive by searching for different cases of the same string.
const array5 = ["apple", "banana", "Apple"];
console.log(array5.includes("apple"));
console.log(array5.includes("Apple"));


// --- Exercise Set 4: Sorting and Reversing (sort, reverse) ---

// Sort Strings: Create an array of strings and sort them using sort().
const array6 = ["banana", "apple", "cherry"];
console.log(array6.sort());

// Sort Numbers: Create an array of numbers and sort them in ascending order.
const array7 = [30, 10, 20, 50, 40];
console.log(array7.sort((a, b) => a - b));

// Custom Sort: Use a custom comparison function to sort numbers in descending order.
console.log(array7.sort((a, b) => b - a));

// Reverse Array: Use reverse() on a sorted array and log the result.
console.log(array7.reverse());

// Mix Sort and Reverse: Sort an array, then reverse it.
console.log(array7.sort((a, b) => a - b).reverse());


// --- Exercise Set 5: Combined Operations ---

// Sort and Push: Create an array of numbers, sort it, and add a new number using push(). Log the updated array.
const array8 = [3, 1, 4, 2];
array8.sort((a, b) => a - b);
array8.push(5);
console.log(array8);

// Concatenate and Sort: Create two arrays, merge them with concat(), and sort the result.
const array9 = [10, 20, 30];
const array10 = [40, 50, 60];
const mergedSortedArray = array9.concat(array10).sort((a, b) => a - b);
console.log(mergedSortedArray);

// Push and Reverse: Add three new elements to an array, then reverse the entire array.
const array11 = [1, 2, 3];
array11.push(4, 5, 6);
console.log(array11.reverse());

// Find and Remove Element: Use indexOf() to locate an element, then use splice() to remove it.
const array12 = [1, 2, 3, 4, 5];
const index = array12.indexOf(3);
array12.splice(index, 1);
console.log(array12);

// Join and Include Check: Join the elements of an array into a string, split it back into an array, and check if a specific value is included using includes().
const array13 = ["apple", "banana", "cherry"];
const joinedString = array13.join("-");
const splitArray = joinedString.split("-");
console.log(splitArray.includes("banana"));
