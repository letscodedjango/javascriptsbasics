// here we gonna discuss about the concept of prototype/objects/ inheritance

var john ={
  name: 'John Phillips',
  yob: 2010,
  calculateAge: function(){
    var presentAge= 2019 - this.yob;
    this.presentAge=presentAge;
  }
}
console.log(john);
console.log(john.calculateAge());
// Now if suppose I have to create the other guys with same properties and to do so we need to create another object with same
var mike = {
  name:'Mike Mathew',
  yob: 1980,
  calculateAge: function(){
    this.presentAge = 2019 - this.yob;
    return this.presentAge;
  }
}
console.log(mike);
console.log(mike.calculateAge());
// In teh above case, we are simple repeating the code and hence we are going to create a blueprint and from that we will create different objects which we call instances
//here we are using fucntion constructor to create blueprint and name should always start with uppercase
var Person = function(name, yob){
  this.name=name;
  this.yob=yob;
  this.calculateAge=function(){
    this.presentAge = 2019 - this.yob;
    return this.presentAge;
  }
}

console.log(Person);

// Now lets use the above fucntion constructor to craeate different instances such as John and mike
var john = new Person('John Mathews', 1990);
var mike = new Person('Mike Mathew', 1993); // this is an object and new keyword helps to create the same. So new craete an emply object which further calls the function and create the properties for recently defined object not the global using 'this' keyword. Also we call instance of function constructor person

console.log(john);
console.log(mike);
console.log(john.presentAge);
console.log(john.calculateAge());
console.log(john.presentAge);


var Person = function(name, yob){
  this.name=name;
  this.yob=yob;
  // this.calculateAge=function(){
  //   this.presentAge = 2019 - this.yob;
  //   return this.presentAge;
}

// In the above example we have added fucntion within the function constructor since the function was quite small and there is only one fucntion but in case we have multiple function and each fucntion having 100 lines of code then we need to use another approach and add that function to the Person's  prototype property

// so lets add the function to the Person's prototype property
Person.prototype.calculateAge = function(){
  this.presentAge = 2019 - this.yob;
  return this.presentAge;
};


var andy = new Person('Andy Smith', 1998);
console.log(andy);
console.log(andy.calculateAge());

console.log(Person.prototype);
console.log(andy.__proto__);

var isEqual = Person.prototype==andy.__proto__;
console.log(isEqual);

// So most important aspect from this, if we haev to inherit the properties or function from one object to another we generally mentione that to the prototype property of the function constructor

var jane = new Person('Jane Smith', 1980);
console.log(jane.calculateAge());

console.log(jane.__proto__ == andy.__proto__);

// So this related to fuction. similary we can specify properties but its not a general practice specify properties in  prototype property of function constructor
Person.prototype.address= 'USA';

console.log(andy.address + ' ' + jane.address);

// And if we change the peoperty address then it will be change for both instances/ objects .Andy & Jane

/*
andy.__proto__
{calculateAge: ƒ, address: "USA", constructor: ƒ}address: "USA"calculateAge: ƒ ()constructor: ƒ (name, yob)__proto__: constructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()

Person.prototype
{calculateAge: ƒ, address: "USA", constructor: ƒ}address: "USA"calculateAge: ƒ ()constructor: ƒ (name, yob)__proto__: constructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()get __proto__: ƒ __proto__()arguments: (...)caller: (...)length: 0name: "get __proto__"__proto__: ƒ ()[[Scopes]]: Scopes[0]set __proto__: ƒ __proto__()arguments: (...)caller: (...)length: 1name: "set __proto__"__proto__: ƒ ()[[Scopes]]: Scopes[0]

andy.hasOwnProperty
ƒ hasOwnProperty() { [native code] }

andy.hasOwnProperty('name')
true  // here we got true name is the property of parent object and hence it is associated to andy too
andy.hasOwnProperty('address')
false // this is false since address is comming from prototype property
*/

// So above we have discussed regarding the object creation using fucntion constructor and new now we are going to use another way of creating objects ie. object.create

// In this case we gonna define object that gonna act as prototype and then gonna create abject
//OBJECT.create
// var personProto = {
//   calculateAge: fucntion(){
//     this.presentAge = 2019 - this.yob;
//     console.log(presentAge);
//   }
// };

var personProto = {
    calculateAge: function(){
        this.currentAge = 2019 - this.yob;
        console.log(this.currentAge);
    }
};

var john = Object.create(personProto);
john.name = 'John Adam';
john.yob = 1980;

console.log(john);

// Another way of doing the same is
var jenny = Object.create(personProto, {
  name: {value:'Jenny'}, yob: {value: 1980}
})

console.log(jenny);
