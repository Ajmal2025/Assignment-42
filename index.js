"use strict";
// 42.	Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function makeGreat(magicianNames) {
    const greatMagicians = magicianNames.map(name => name + " the Great");
    return greatMagicians;
}
function showMagicians(magicianNames) {
    for (const name of magicianNames) {
        console.log(name);
    }
}
const magicians = ["Samri", "Goga", "Chintu", "Black"];
const greatMagicians = makeGreat(magicians);
console.log("Original Magicians:");
showMagicians(magicians);
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);
