document.addEventListener('DOMContentLoaded', () => {
    // Create the initial 16x16 grid 
    createGrid(16);
})


function createGrid(num) {
    // Get the grid container, body, and header 
    const container = document.querySelector('#container');
    const body = document.querySelector('body');
    const header = document.querySelector('header');

    // If body width is greater than height, use the height to calculate container dimensions
    // Otherwise, use the width to calculate container dimensions
    // Add 10px of wiggle room
    if (body.offsetWidth > body.offsetHeight) {
        containerSize = body.offsetHeight - header.offsetHeight - 10;
    } else {
        containerSize = body.offsetWidth - 10;
    }
    container.style.height = `${containerSize}px`;
    container.style.width = `${containerSize}px`;

    // Set outer container width equal to container width for layout purposes
    document.querySelector('#outer-container').style.width = `${containerSize}px`;

    // Set grid columns and rows using the square size
    container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${num}, 1fr)`;

    // Create the squares and add them to the container
    let numSquares = num * num;
    for (i = 0; i < numSquares; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }

    // Listen for hover on each square and apply color
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => square.addEventListener('mouseover', () => square.classList.add('colored')));
}


function createCustomGrid() {
    let size = prompt('Enter a number between 1 and 100 for your grid size.');
    if (size > 0 && size <= 100) {
        document.querySelector('#container').innerHTML = '';
        createGrid(size);
    }
}