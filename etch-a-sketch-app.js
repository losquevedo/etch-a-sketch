// Create a webpage with a 16x16 grid of square divs 
// Sets important constants and variables

console.log("Setting constants and variables")
const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

console.log("Declaring rows function")
// Takes (rows, columns) input and makes a grid
function defaultGrid(rowNum, cellNum) {

    // Creates rows
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };

    //Creates columns
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            newCell.addEventListener('mouseenter', function(event) {
                event.target.style.color = "black";
                });
            rows[j].appendChild(newCell).className = "cell";
        };
    };
};

window.onload=function() {
    defaultGrid();
};

//Add a button to the top of the screen which will clear the current grid and send the user a popup asking for how many squares per side to make the new grid. 
//Once entered the new grid should be generated in the same total space as before (e.g. 960px wide) and now you’ve got a new sketch pad. 

// (Optional): Instead of just changing the color of your grid from black to white (for example) have each pass through it with the mouse change to a completely random RGB value. 
// Then try having each pass just add another 10% of black to it so that only after 10 passes is the square completely black.