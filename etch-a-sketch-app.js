// Create a webpage with a 16x16 grid of square divs 
// Sets important constants and variables

console.log("Setting constants and variables")
const container = document.getElementById("container");
let reset = document.getElementById("reset");
let rows = document.getElementsByClassName("gridRow");

console.log("Declaring rows function")
// Takes (rows, columns) input and makes a grid
function defaultGrid(gridSize) {

    if (gridSize > 54) {
        gridSize = 54;
    }

    // Creates rows
    for (r = 0; r < gridSize; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };

    //Creates columns
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < gridSize; j++) {
            let newCell = document.createElement("div");
            newCell.addEventListener('mouseenter', function(event) {
                console.log("got here");
                event.target.style.backgroundColor = 'black';
                });
            rows[j].appendChild(newCell).className = "cell";
        };
    };
};
reset.addEventListener("click", (e) => {
    let newGridSize = window.prompt("Please select how many squares to add. Default is 45, Max is 54")
    var valid = false
    while (!valid) {
        if (isNaN(newGridSize)) {
        newGridSize = window.prompt("That's not a number, please only use numbers!")
        }

        else {
            valid = true
            removeElementsByClass('gridRow')
            removeElementsByClass('cell')
            defaultGrid(newGridSize)
        }
    }
})

colorButton.addEventListener("click", () => {
    //set up eventHandler to handle both color change sin one function
    let cells = document.querySelectorAll(".cell");
    debugger;
    cells.forEach(element => {
        element.addEventListener('mouseenter', function(event) {
                var randomColor = Math.floor(Math.random()*16777215).toString(16);
                event.target.style.backgroundColor = '#' + randomColor;
            });
    });
})

window.onload=function() {
    defaultGrid(45);
};

//taken from TorsionSteel's solution cause it was cleaner
function removeElementsByClass(className){
    var elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

// function randomColor() {
//     cells.removeEventListener();
//     cells.addEventListener('mouseenter', function(event) {
//                 var randomColor = Math.floor(Math.random()*16777215).toString(16);
//                 event.target.style.backgroundColor = '#' + randomColor;
//                 });
// }

//Add a button to the top of the screen which will clear the current grid and send the user a popup asking for how many squares per side to make the new grid. 
//Once entered the new grid should be generated in the same total space as before (e.g. 960px wide) and now you’ve got a new sketch pad. 

// (Optional): Instead of just changing the color of your grid from black to white (for example) have each pass through it with the mouse change to a completely random RGB value. 
// Then try having each pass just add another 10% of black to it so that only after 10 passes is the square completely black.