"use strict";
 /*     let i = 0;
      let output = "";
      const htmlH1 = document.querySelector("h1").innerHTML;
window.onload = loop() */
   const htmlH1 = document.querySelector("h1");
    let string = htmlH1.innerHTML
    console.log(string)
    // turns every letter into an object in an Array
    let newArray = string.split("");
    // empty Array
    let output = [];

    newArray.forEach((letter, i) => {
      setTimeout(
        function () {
          // adds every letter one at the time to the output Array.
          output += letter; //the work you want to perform
          console.log(output);
          // prints the contents of output inside the h2 element.
          htmlH1.innerText = output;
        },
        // foreach item in the array a 100 miliseconds is waited before prcceding.
        i * 200
      );
    }); 

  

/*     function loop () {
      
  

       console.log(htmlH1);
      if (i < htmlH1.length) {
        console.log(i);
        setTimeout(() =>{
          console.log(i);
          output += htmlH1.charAt([i]);
          i++;
          console.log(output);
        },300);
        loop()
      } else if (htmlH1.length < i ){console.log("noope")}
    }
 */
 


