
/********************************
 * CHAPTER 1: Hail to the King! *
 ********************************/
console.log("\n---- Chapter 1 ----\n");

// 1.  Write a function named `hailTo` that takes an argument `name`, and
//     returns the string:
//     "Long live King [name]!"

function hailTo(name) {
  return "Long live king " + name;
}
console.log(hailTo("Arthur"));

// 2.  Create a string called "king" with the name of our one true king: Robert!
//     Print a hail to our king on the console!
var king = "Robert!"

console.log(hailTo(king));


/********************************
 * CHAPTER 2: A Game of Thrones *
 ********************************/
console.log("\n---- Chapter 2 ----\n");

// 1.  Create an array called `kings` and push our king "Robert" on to it...
var kings = [];
kings.push(king);
console.log(kings);


// 2.  Print a hail to the king in our kings array, so that it looks like:
//     "Long live King [name]!"
kings.unshift(hailTo(king));
kings.pop();
console.log(kings);


// 3.  Add our future king "Joffrey" to our list of kings, and then we shall
//     hail him as well!
king = "Joffrey";
kings.unshift(hailTo(king));
console.log(kings);


// 4.  An untimely death has come... remove our good king Robert from the array,
//     and store him in a variable named `formerKing`. Now print a hail him and
//     our new, and only, King Joffrey!
var formerKing = "Robert"
kings.pop();
kings.unshift("Hail Robert!");
console.log(kings);


// 5.  What"s this? Our dead king"s brothers now claim the throne! We must add
//     them to the list of kings. Their names are "Stannis" and "Renly"...
kings.unshift("Stannis", "Renly");
console.log(kings);


// 6.  Woe is us: what a situation... Print to the console the number of kings
//     we currently have, in the line:
//     "What can we do, now that there are [x] kings?"
console.log("What can we do, now that there are" + kings.length + "kings?");


/*******************************
 * CHAPTER 3: Winter is Coming *
 *******************************/
console.log("\n---- Chapter 3 ----\n");
var kings = [
  "Joffrey",
  "Stannis",
  "Renly",
  "Balon",
  "Robb"
];

// 1.  Print each king"s name using a `while` loop, a `console.log`, and
//     the `hailTo` function, so that it looks like:
//     "Long live King [name]!" (five times...)
var i = 0;
while(i< kings.length) {
  console.log(hailTo (kings[i]))
  i++
}


// 2.  Print the above using a `for` loop.
for (var i = 0; i<kings.length; i++)

console.log("Number 2:");


// 3.  Print the above using a `forEach` enumeration method
kings.forEach(function(name) {
  console.log( hailTo(name));
});


