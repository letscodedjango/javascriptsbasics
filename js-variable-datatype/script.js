
var x = 'Hello Guys! Its time for JS. This is an external JS script which we are going to add in HTML. And its always a good practice to keep seperate file for JS'
console.log(x)

fone = function(){
  x = 10;
  y =20;
  z = x+y;
  return z;
}

z = fone();
console.log(z);

function add(x , y){
  s = x + y;
  return s;

}
x = add(20,50);
console.log(x);


fobj = {
  name : 'axju',
  city : 'not sure',
  contact: 996767,
  state: 'city of lame',
  bio: 'crazzzy'
}

console.log(fobj);

ftwo = {}

console.log(ftwo);

ftwo.name= 'axop';
ftwo.city= 'city of paris'
ftwo.contact= 887575
ftwo.state= 'Republic of czeck'
ftwo.bio= 'way you look to me'

console.log(ftwo);

// ftwo.0 = 'Not possible'
ftwo[0]= 'This one is cool'
console.log(ftwo);

// Lets access all the elements from ftwo


for(var feach in ftwo){
  console.log(feach);    // this will always return the keys
}

for(var feach in ftwo){
  console.log(ftwo[feach]);    // this will always return the keys
}

for(var feach in fobj){
  console.log(fobj.feach);
}

console.log(fobj.name);   // This will work but when we are using in for loop, it will not as above example

for(var feach in fobj){
  console.log(fobj[feach]);
}

console.log(fone);

console.log(fone());

// Javascript is Verb -- HTML is a NOUN --- CSS is a adjective


// VARAIABLE
// variable is the fundamental concept of any programming language.
//Variable is like container that can store some value or hold some value which we can use again and again in our program whenever needed.
// Now lets discuss how we can store different type of data in variable
// so for doing do we need to define the data type. And there are 5 different types of datatypes in JS
// Number / String/ Boolean / Undefined(Data type of a variable which has not assigned any value yet)
// Null (also mean non-exist)
// Very Important ---- JS has a dynamic typing - which means we dont need to explicity define the data types. it automatically assigns to variable
var firstName = 'My name is Khan and I m not terrorist'
var _lastName = 'Are you sure?'


console.log(firstName +' ' +_lastName);

// cannot use numeric at the beginning of VARAIABLE
// cannot use predefined keyword at the beginning of Variable

var $dollar = 'my dollar var'
console.log($dollar);

// single line comment

/* Multiline comment
This is multiline comment   --- similar to JAVA
*/

/**********************
Variable Mutation and type coercion */

// Javascript automaticaaly convert one type to another types and this process is known as [TYPE COERCION]

var amount = 'its an over !!';
var inr= 100;

console.log(amount+inr);  // here we are possible to add though data type are different for both Variable

var myFirstGrade, percentage;   // Javascript also do type coercion with boolean

myFirstGrade= 'A';
percentage= 90.90;

console.log(myFirstGrade+ ' represents ' + percentage);

// Variable mutation is to change the value of variable
/*
myFirstGrade= 'B'  // we are not using var here but simply changing the value of myFirstGrade from A to B

alert(myFirstGrade+ ' represents ' + percentage)


var name = prompt('Whats your name?')
console.log('Hello !!' + name);
*/
/************* Lets discuss about OPERATOR */

var one = 10;
var two = 20;

var out = one + two;

console.log(typeof out);

// operator precedence  (which operator to execute first and which to next)
var now = 2019;
var xxBirth = 2017;
var yyBirth = 2015;

console.log('XX Age is ' + (now - xxBirth));

var xx = now - xxBirth;
var yy = now - yyBirth;

var isElder = xx - yy;
console.log(typeof isElder);

if(xx > yy){
  console.log('xx is elder than yy');
} else {
  console.log('yy is elder than xx');
}

// Assigning same value to multiple variable
var x, y , z;
x, y , z = 8;

console.log(x + y + z);

// Also there is concept of associatinvity --- (execution flow of operator with same precedence )

// Augmented Assignment operators

//+=/ -= / *= / and so on
x = x + 2
x =+ 2

// To simple increment or decrement by 1

x = x + 1
x ++
