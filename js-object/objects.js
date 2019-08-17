// After array another most importnat aspect of js is objects. And here we gonna dicuss about the same. So lets get started

// Also array are most important and there we can access the value using index but what if we have to access array using the particular key ans in that case we  need to use objects
// So the major difference between array and object is - index & key-value
// Arrays always store data based on index whereas Object store data in the form of key- value pair

/*********** BUT INTERESTING FACT IS -- ARRAY IS ALSO AN OBJECT since we have seen it also has methods to it *************/

//Lets define object in JS
var objone = { } // this is one of the simplest way of defining object which is blank object

console.log(objone);

// Now lets add some values

objone.one = 'one';
objone.two = 'two';
objone.three= 'three';

// ANother way of adding objects to object is --
objone['four']= 'four';
objone['five']= 'five';

// Another way of defining objects

var objtwo = {
  name: 'Letscode',
  city: 'Varanasi',
  state:'Uttar Pradesh',
  contact: 998585,
  visitedPlace: ['Agra', 'Mathura', 'Vrindavan' ]
}
console.log(objtwo);

// Lets access the properties of objects
console.log(objtwo.name);
console.log(objtwo.visitedPlace);

// Another way of accessing properties
console.log(objtwo['name']);
console.log(objtwo['visitedPlace']);

// Adding numeric value as key
//objtwo.0 = 'My ID';   // thsi will throw error but
objtwo[0]= 'My ID'; // this will not

console.log(objtwo);

// To read all the values of object in one go
for(var obj in objtwo){
  console.log(obj);  // thsi will only return key and hence we cannot access the value
}

for(var obj in objtwo){
  console.log(objtwo.obj);  // this will return undefined  // so always remember we can never use . in for loop for accessing properties of objects
}

for(var obj in objtwo){
  console.log(objtwo[obj]);
}

for(var obj in objtwo){
  console.log(obj,':', objtwo[obj]);   // here is following the concept of Python since both JS and Python are dynamically typed language. Even without using + operator its concatenating
}

// Even we can pass fucntion to the object as value of key

objtwo.addfunc = function(num){
  return num + num;
}

console.log(objtwo);
console.log(objtwo.addfunc(45));

// Another way of defining objects
var objfour = new Object();
console.log(objfour);


// Now lets see some of the methods of Objects
// every object in js has special keyword which represent the object itself or current

var letscode = {
  name: 'Letscode',
  city: 'Varanasi',
  state:'Uttar Pradesh',
  yob: 1992,
  contact: 998585,
  visitedPlace: ['Agra', 'Mathura', 'Vrindavan' ],
  age: function(){
    return 2019 - letscode.yob;
  }
};

var letscodethisi = {
  name: 'Letscode',
  city: 'Varanasi',
  state:'Uttar Pradesh',
  yob: 1992,
  contact: 998585,
  visitedPlace: ['Agra', 'Mathura', 'Vrindavan' ],
  age: function(){
    return 2019 - this.yob;
  }
};

var letscodethisii = {
  name: 'Letscode',
  city: 'Varanasi',
  state:'Uttar Pradesh',
  yob: 1992,
  contact: 998585,
  visitedPlace: ['Agra', 'Mathura', 'Vrindavan' ],
  presentage: function(){
     this.age = (2019 - this.yob);  // here we can use this instead of return -- but not working
  }
};

console.log(letscodethisii.presentage());
console.log(letscodethisii);
