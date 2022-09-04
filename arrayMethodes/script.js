"use strict"

"use strict";
const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
console.log(letters[4]);
// bytter e ud med *
const newarr = letters;
newarr[4] = "*";
console.log(letters[4]);
/* console.log() */

const people = ["Harry", "Ron", "Hermione"];
let result;
//pusher draco op
result = people.push("Draco");

//popper den sidste i arrayet ud (draco)
result = people.pop();
// pusher neville ind
//men draco kommer ikke tilbage hvis pop stadig er på.
result = people.push("Neville");
//pusher luna ind
result = people.push("Luna");
//slice arrayet
result = people.slice(0, 3);
//splice - indsæt cho mellem 0 og 2 (1)
result = people.splice(1, 0, "cho");
// byt index 1(cho) ud med ginny (erstatter)
people[1] = "Ginny";
//push
result = people.push("Fred", "George");
//indexOF - gav mig tallet
result = people.indexOf("Fred");
//
result = people.splice(result, 1);
// shift/unshift
result = people.shift("");
//result = people.unshift("Neville");
console.log(result);
console.log(people);

const letter = Array.from("Rebecca");
console.log(letter);
//laver string til array, uden "," = ét elementer
const str = "hejmedjer";
const arr1 = str.split();
console.log(arr1);
//deler string op i array med "," = flere elementer
const str2 = "abjfjkds";
const arr2 = Array.from(str);
console.log(arr2);
// laver et array om til en string
const fruits = ["banana", "Orange", "apple", "mango"];
let text = fruits.toString();
console.log(text);