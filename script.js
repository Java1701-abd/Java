// Memory variables
let memory = 0;

document.addEventListener("keydown", handleKeyboardInput);

// Functions for basic calculator logic
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    let expression = document.getElementById('display').value;
    try {
        let result = eval(expression); // Evaluate the string as a mathematical expression
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function calculatePercentage() {
    let expression = document.getElementById('display').value;
    let result = parseFloat(expression) / 100;
    document.getElementById('display').value = result;
}

function calculateSquareRoot() {
    let expression = document.getElementById('display').value;
    let result = Math.sqrt(parseFloat(expression));
    document.getElementById('display').value = result;
}

// Memory Functions
function memoryAdd() {
    memory += parseFloat(document.getElementById('display').value);
    clearDisplay();
}

function memorySubtract() {
    memory -= parseFloat(document.getElementById('display').value);
    clearDisplay();
}

function memoryRecall() {
    document.getElementById('display').value = memory;
}

function memoryClear() {
    memory = 0;
    clearDisplay();
}

// Function to handle keyboard input
function handleKeyboardInput(event) {
    const key = event.key;
    if ("0123456789".includes(key)) {
        appendToDisplay(key);
    } else if (key === "+" || key === "-" || key === "*" || key === "/") {
        appendToDisplay(key);
    } else if (key === "=" || key === "Enter") {
        calculateResult();
    } else if (key === "Backspace") {
        document.getElementById('display').value = document.getElementById('display').value.slice(0, -1);
    } else if (key === "Escape") {
        clearDisplay();
    } else if (key === "%") {
        calculatePercentage();
    } else if (key === "r") {
        calculateSquareRoot();
    }
}
