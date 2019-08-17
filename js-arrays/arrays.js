// arrays are one of the most important aspect of js and we are mostly gonna use throughout the js course

// Arrays can hold group of elements/ objects

// Multiple ways of creating arrays
var arrayone = [];
console.log(arrayone); // thsis is a blank arrays

var arraytwo = ['Andy', 'Jenny', 'Anwar', 'Mike']; // This is one of the way of creating arrays
console.log(arraytwo);

var arraythree = new Array('Andy', 'Jenny', 'Anwar', 'Mike'); // This is another way of ctreating array but hardly use this 'new' keyword kind of sinilar to Java which cteate new object of Array
console.log(arraythree);

arraytwo[2]= 'Mary';
console.log(arraytwo);

// One of the most import aspect is - In JS unlike another programming language such as Java- Array can hold multiple data type values since js is dynamically typa language

var randomArray = ['Andme', 234, true, 23.67];
console.log(randomArray);

randomArray.push('Angduy'); // add element to the end of the array
console.log(randomArray);


randomArray.unshift('Mr'); // to add element at the beginning of the array
console.log(randomArray);

randomArray.pop(); // remove the last element from the array
console.log(randomArray);

randomArray.shift(); // remove the first element from teh array
console.log(randomArray);

console.log(randomArray.indexOf(234));  // 1 since arrays always start indexing from 0
console.log(randomArray.indexOf(398));  // -1 since arrays doent have 398 in it

// TO check if particular value exist in the arrays
if(randomArray.indexOf(234)==1){
  console.log(234 + ' is present');
}
// Using ternary operator
var isPresent = (randomArray.indexOf(234)==1)? 234+ ' is present' : 234 + ' not present';
console.log(isPresent);
