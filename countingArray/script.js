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
    /* console.log(i) */
}
}