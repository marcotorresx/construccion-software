// Q1
const mousePosition = document.querySelector("#mousePosition");
document.addEventListener('mousemove', (e) => {
    // Display position
    mousePosition.innerHTML = `Posición del mouse X: ${e.clientX}, Y: ${e.clientY}`;
});

// Q2
const firstnameInput = document.querySelector("#firstnameInput");
const lastnameInput = document.querySelector("#lastnameInput");
const completenameDiv = document.querySelector("#completenameDiv");

function getFormvalue() {
    const completeName = firstnameInput.value + " " + lastnameInput.value; // Get input values
    completenameDiv.innerHTML = completeName; // Change the inner html
}

// Q3
const sampleTable = document.querySelector("#sampleTable");
let rows = 2;
let cols = 2;

function insertRow() {
    const newRow = document.createElement("tr"); // Create tr element
    rows++; // Increase rows

    // Insert cols in new row
    for (let i = 0; i < cols; i++){
        const col = document.createElement("td"); // Create td element
        const text = `Row ${rows} column ${i + 1}`; // Create text
        col.appendChild(document.createTextNode(text)); // Add text
        newRow.appendChild(col); // Append col
    }

    sampleTable.appendChild(newRow); // Append new row
}

function insertColumn() {
    const allRows = document.querySelectorAll("#sampleTable tr"); // Get all rows
    cols++; // Increase cols

    // Add new col to each row
    allRows.forEach( (row, i) => {
        const col = document.createElement("td"); // Create td element
        const text = `Row ${i + 1} column ${cols}`; // Create text
        col.appendChild(document.createTextNode(text)); // Add text
        row.appendChild(col); // Append col to the current row
    })
}

// Q4
const cellPositionInput = document.querySelector("#cellPositionInput");
const newTextInput = document.querySelector("#newTextInput");

function changeContent() {
    // Get positions
    const strPositions = cellPositionInput.value.split(",");
    const rowPos = parseInt(strPositions[0]);
    const colPos = parseInt(strPositions[1]);

    // Get new text
    const newText = newTextInput.value;

    // Find position
    const allRows = document.querySelectorAll("#myTable tr");
    const selectedCols = allRows[rowPos].children; // Get cols of selected row
    selectedCols[colPos].innerHTML = newText; // Change selected col text
}

// Q5
const colorSelect = document.querySelector("#colorSelect");
const addColorBtn = document.querySelector("#addColorBtn");
const removeColorBtn = document.querySelector("#removeColorBtn");

addColorBtn.addEventListener("click", () => {
    const COLORS = ["Yellow", "Orange", "Purple", "Grey", "Cyan", "Blue", "Brown"];

    const newOption = document.createElement("option"); // Create option tag
    const random = Math.floor(Math.random() * COLORS.length); // Get random color index
    newOption.appendChild(document.createTextNode(COLORS[random])); // Add random color text

    colorSelect.appendChild(newOption); // Append color option to select
})

removeColorBtn.addEventListener("click", () => {
    const selectedIndex = colorSelect.selectedIndex; // Get selected index
    const selectedOptionNode = colorSelect.options[selectedIndex]; // Get the node option
    selectedOptionNode.remove(); // Remove node
})

// Q6
const img = document.querySelector("#img");

img.addEventListener("mouseenter", () => {
    // Get new atributtes
    const newURL = "https://images.unsplash.com/photo-1526660690293-bcd32dc3b123?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80";
    const newWidth = Math.random() * (600 - 300) + 300;
    const newHeight = Math.random() * (600 - 300) + 300;

    // Set new atributtes
    img.src = newURL;
    img.width = newWidth
    img.height = newHeight;
})

img.addEventListener("mouseleave", () => {
    // Get original atributtes
    const originalURL = "http://placekitten.com/200/300";
    const originalWidth = 200;
    const originalHeight = 300;

    // Set original atributtes
    img.src = originalURL;
    img.width = originalWidth;
    img.height = originalHeight;
})
