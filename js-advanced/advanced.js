// here, lets discuss one of the most important asceptn of JS object/ inheritance/ prototype

var john = {
  name:'John Mathew',
  yob: 1996,
  calculateAge: function(){
    this.presentAge = 2019 - this.yob;
    return this.presentAge;
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

// In the above example we have added fucntion within the function constructor since the function was quite small and there is only one fucntion but in case we have multiple function and each fucntion having 100 lines of code then we need to use another approach and add that function to the Person's  prototype

// so lets add the function to the Person's prototype
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

// So most important aspect from this, if we haev to inherit the properties or function from one object to another we generally mentione that to the prototype object of the object

var jane = new Person('Jane Smith', 1980);
console.log(jane.calculateAge());

console.log(jane.__proto__ == andy.__proto__);

// So this related to fuction. similary we can specify properties but its not a general practice specify properties in object prototype
Person.prototype.address= 'USA';

console.log(andy.address + ' ' + jane.address);

// And if we change the peoperty address then it will be change for both instances/ objects .Andy & Jane
