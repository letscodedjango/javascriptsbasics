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
console.log(john.yob);
console.log(john.presentAge);
