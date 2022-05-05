document.addEventListener('DOMContentLoaded', () => {
    // Create the initial 16x16 grid 
    createGrid(16);
})

function createGrid(num) {
    // Get the grid container and set its dimensions
    const container = document.querySelector('#container');
    container.style.gridTemplateColumns = `repeat(${num}, 45px)`;
    container.style.gridTemplateRows = `repeat(${num},45px)`;

    // Create the squares and add them to the container
    let numSquares = num * num;
    for (i = 0; i < numSquares; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
}