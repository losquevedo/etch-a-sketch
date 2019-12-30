// Create a webpage with a 16x16 grid of square divs 
// Sets important constants and variables

console.log("Setting constants and variables")
const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

console.log("Declaring rows function")
// Takes (rows, columns) input and makes a grid
function makeRows(rowNum) {

    // Creates rows
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
};
console.log("Declaring columns function")
// Creates columns
function makeColumns(cellNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        };

    };
};

// Creates a default grid sized 16x16
function defaultGrid() {
    console.log("Making rows")
    makeRows(16);
    console.log("Making columns")
    makeColumns(16);
}

window.onload=function() {
    defaultGrid();
};
//First approach
// const container = document.querySelector("#container");
        
// for(i=0; i < 17; i++) {
//     box = document.createElement("div");
//     box.style.width = "100px";
//     box.style.height = "100px";
//     box.style.background = "white";
//     box.style.color = "black";
//     box.classList.add("box_" + i);
//     container.appendChild(box);
// }

// Set up a “hover” effect so that the grid divs change color 
// when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would. 
container.forEach(cell => {
    cell.addEventListener('mouseover', (e) => {
        e.target.style.color = 'black';

        //set a timeout for the hover over
        setTimeout(function() {
            e.target.style.color = "";
        }, 500);
    });

});

//Add a button to the top of the screen which will clear the current grid and send the user a popup asking for how many squares per side to make the new grid. 
//Once entered the new grid should be generated in the same total space as before (e.g. 960px wide) and now you’ve got a new sketch pad. 

// (Optional): Instead of just changing the color of your grid from black to white (for example) have each pass through it with the mouse change to a completely random RGB value. 
// Then try having each pass just add another 10% of black to it so that only after 10 passes is the square completely black.