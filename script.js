document.addEventListener('DOMContentLoaded', () => {

    // Create the initial 16x16 grid 
    createGrid(16);
})

function createGrid(num) {
    // Get the grid container and set its dimensions
    const gridContainer = document.querySelector('#grid-container');
    gridContainer.style.gridTemplateColumns = `repeat(${num}, 45px)`;
    gridContainer.style.gridTemplateRows = `repeat(${num},45px)`;

    // Create the squares and add them to the container
    let squares = num * num;
    for (i = 0; i < squares; i++) {
        let square = document.createElement('div');
        square.classList.add('grid-item');
        gridContainer.appendChild(square);
    }
}