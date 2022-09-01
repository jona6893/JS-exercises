"use strict"

let array = []
let i = 0
window.onload = pushArray()

function pushArray () {

setTimeout(() =>{
    i++;                    
    if (i < Infinity) {
      myLoop();
    }}, 1000)

 console.log(array);
}

function myLoop() {

    if(array.length >= 9) {
         array.push(i);
         array.shift()
         pushArray();
    } else {
    array.push(i)
    pushArray()

}
} 






//smarter solution

/* const arr = [];
let counter = 0;
init();

function init() {
  //
  counter += 1;
  arr.unshift(counter);
  console.log(arr.slice(0, 9));
  setTimeout(init, 500);
} */