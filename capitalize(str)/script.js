"use strict"

function capitalize(name) {
    // reset whatever is writing to lower case letters
    let correctSpell = name.toLowerCase()
    // take the first letter and capitalizes it. then adds the name but with the first letter removed - "J" + "ames" = James
    return correctSpell.charAt(0).toUpperCase() + correctSpell.slice(1);
}

const name = "JAMES"

const cap = capitalize(name)

console.log(cap)