const fullName = "Jonathan Anthony Weldon"
// adskille sætningens ved hjælpe af mellemrum. Derved for hvert ord et indexnr. første ord = 0 sidst ord = 2
let firstName = fullName.split(" ")[0];
let middleName = fullName.split(" ")[1];
let lastName = fullName.split(" ")[2];

let wholeLine = `firstname = ${firstName}. Middlename = ${middleName}. Lastname = ${lastName}`;
console.log(wholeLine);