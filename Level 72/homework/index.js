// --- 1) Function that prints a message after 3 seconds ---

// Create a function that prints a message after 3 seconds.
function printMessageAfterDelay() {
    setTimeout(() => {
        console.log("This is a message after 3 seconds.");
    }, 3000);
}
printMessageAfterDelay();


// --- 2) Program that prints the current time every second in "hour:minute:second" format ---

// Create a program that prints the current time every second in the format "hour:minute:second".
function printCurrentTime() {
    setInterval(() => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        console.log(`${hours}:${minutes}:${seconds}`);
    }, 1000);
}
printCurrentTime();


// --- 3) Program that changes the website background color every 3 seconds ---

// Create a program that changes the background color of the website every 3 seconds.
// Store color values in an array.
const colors = ['#FF5733', '#33FF57', '#3357FF', '#F4D03F', '#9B59B6'];
let currentColorIndex = 0;

function changeBackgroundColor() {
    setInterval(() => {
        document.body.style.backgroundColor = colors[currentColorIndex];
        currentColorIndex = (currentColorIndex + 1) % colors.length; // Loop through colors
    }, 3000);
}
changeBackgroundColor();


// --- 4) Program that changes the textContent of a paragraph every 5 seconds ---

// Create a program that changes the textContent of a paragraph every 5 seconds.
function changeParagraphText() {
    const paragraph = document.getElementById("myParagraph");
    let counter = 1;
    
    setInterval(() => {
        paragraph.textContent = `This is the ${counter} message!`;
        counter++;
    }, 5000);
}
// Make sure to create a paragraph with id "myParagraph" in your HTML for this to work.
changeParagraphText();


// --- 5) Timer Program with Start, Pause, and Reset buttons ---

// Create a timer program with three buttons: Start, Pause, and Reset.
let timerInterval;
let seconds = 0;

function startTimer() {
    timerInterval = setInterval(() => {
        seconds++;
        document.getElementById("timerDisplay").textContent = `Time: ${seconds} seconds`;
    }, 1000);
}

function pauseTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    clearInterval(timerInterval);
    seconds = 0;
    document.getElementById("timerDisplay").textContent = "Time: 0 seconds";
}