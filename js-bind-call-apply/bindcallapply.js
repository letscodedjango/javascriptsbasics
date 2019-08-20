// Now the time has come when we have to discuss the one of the most important and toughest topic for beginners and it is
//----- ********** BIND / CALL & APPLY ***********/

// ********************* lets discuss call **************/


var gaur = {
  name : 'Gaur',
  age: 25,
  profession: 'teacher',
  introduce: function(style, timeOfDay){
    if(style=='formal'){
      console.log('Good ' +timeOfDay+ ' !! Ladies & Gentlemen.'+' I\'m '+this.name+ ' and I\'m a '+ this.profession+ ' and my age is '+this.age);
    }else if(style=='friendly'){
      console.log('Hey!! Haribol all, I\'m '+this.name+ ' and I\'m a '+ this.profession+ ' and my age is '+this.age+ ' Have a great ' + timeOfDay);
    }

  }
}

gaur.introduce('formal','morning');

// now lets create another object for Nitai

var nitai= {
  name: 'Nitai',
  age: 30,
  profession: 'Instructor'
}

// Now here if we have to use the same fucntion of introduce instead of writing the such a big fucntion in Nitai object again what we can do we can use the john's introduce properties using - CALL

// Lets see how to do so
gaur.introduce.call(nitai, 'friendly', 'afternoon');  // call(this, arg1, arg2)  // Important point is we need to replace replace this with object which is calling other object properties.

//********************* Lets see BIND ***********************************/

// BIND is kind of similar to CALL and the only difference is BIND does not immediate execute the function rather it retirns the copy of a function which we can store and use it at some other point of time

var bindrtn = gaur.introduce.bind(nitai,'friendly');
//console.log(bindrtn);
bindrtn('morning');

var bindrtn = gaur.introduce.bind(nitai);
//console.log(bindrtn);
bindrtn('friendly','morning');

var bindrtn = gaur.introduce.bind(); // Not possible and will not return the nitai object but just simply a function
//console.log(bindrtn);
bindrtn(nitai,'friendly','morning');

// So always remember we need to pass atleast one argument and that must be - this replacement object - 'nitai' in this case

// Now lets see some of the real time usage of BIND

var eligibleForVote = function(calculateAgeFunc){

  var a = "He/She is eligible for voting since his/her age is ";
  return function(yob){
    var presentAge = calculateAgeFunc(yob);
    if(presentAge>=18){
      console.log(a + presentAge);
    }
  }
}

function calculateAge(yob){
  return 2019 - yob;
}

eligibleForVote(calculateAge)(1990);

// Now lets consider we have another fucntion where we have to use - two functions

function calculatePresentAge(yob,currentYear){
  return currentYear - yob;
}

var copyOfCalculatePresentAge= calculatePresentAge.bind(this,18)

console.log(copyOfCalculatePresentAge);

var func = eligibleForVote(copyOfCalculatePresentAge);
console.log(func);
func(1990);
