"use strict"

//* Global Varibles
let arr = [];
let i = 0;


loop();

//* Loop
function loop() {

const container = document.getElementById("container");
// creates a random number between 0-500
let height = Math.floor(Math.random() * 500);
    console.log(height)
//creates new Div element
let newColumn = document.createElement("div")
  i++;
  //checks the lenght of the array
  if (arr.length >= 9) {
    //add a number to the end of the array
    arr.push(i);
    //removes the first number i the array
    arr.shift();
    // add a class to the new Div
    newColumn.classList.add("column")
    // sets the style of height to a random number
    newColumn.style.height = `${height}px`
    container.appendChild(newColumn)
    // removes the first child of the "container" 
    container.removeChild(container.firstChild)
  } 
  // if arr is less then 9 this runs
  else {
    arr.push(i);
    newColumn.classList.add("column");
    newColumn.style.height = `${height}px`;
    container.appendChild(newColumn);
  }
  // set a delay of 1 second
  setTimeout(loop, 1000);
  console.log(arr);

}

//* Random Number


//* Print