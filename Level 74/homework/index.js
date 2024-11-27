// --- 1) .createElement Example ---
// The .createElement() method creates a new HTML element.

const divElement = document.createElement("div");  // Creates a new <div> element
divElement.textContent = "Hello, this is a div created using .createElement!";
document.body.appendChild(divElement);  // Appends the new div element to the body

// --- 2) .appendChild(node) Example ---
// The .appendChild() method adds a new child element at the end of the parent element's children.

const paragraph = document.createElement("p");  // Creates a new <p> element
paragraph.textContent = "This paragraph is added at the end.";
document.body.appendChild(paragraph);  // Adds the paragraph as the last child of the body

// --- 3) .insertBefore Example ---
// The .insertBefore() method inserts a new node before a specified existing child node of the parent.

const newDiv = document.createElement("div");  // Creates a new <div> element
newDiv.textContent = "This div is inserted before another one.";

const existingDiv = document.querySelector("div");  // Finds the first <div> element
document.body.insertBefore(newDiv, existingDiv);  // Inserts the new div before the existing div

// --- 4) .removeChild(node) Example ---
// The .removeChild() method removes a specified child node from a parent node.

const divToRemove = document.querySelector("div");  // Selects the first <div> element
document.body.removeChild(divToRemove);  // Removes the selected div from the body

// --- 5) .parentNode Example ---
// The .parentNode property returns the parent node of a specified element.

const parentDiv = document.querySelector("p").parentNode;  // Finds the parent of the first <p> element
console.log(parentDiv);  // Logs the parent node (in this case, it's <body>)

// --- 6) .replaceChild Example ---
// The .replaceChild() method replaces one child node with another.

const newParagraph = document.createElement("p");  // Creates a new <p> element
newParagraph.textContent = "This paragraph replaces the old one.";

const oldParagraph = document.querySelector("p");  // Selects the first <p> element
document.body.replaceChild(newParagraph, oldParagraph);  // Replaces the old paragraph with the new one
