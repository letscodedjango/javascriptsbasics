
/***********************  FUNCTION PASSING AS ARGUMENT TO FUNCTION ************************/

// Now lets discuss how to pass function as arguments
var yobArr = [1980, 1870, 1999, 2010];

// Here what we have to do is - to calculate age of each year and then return the list with Present ages
//so we need actaully two functions here , first that gonna calculate age and second which gonna return the result
function calculateAge(yob){
  return presentAge = 2019 - yob;
}

// Next fucntion
function retnPresentAge(yobArr, funct){
  var presentAgeArr = [];
  console.log(yobArr.length);
  for(var i=0; i< yobArr.length; i++){
    var age = calculateAge(yobArr[i]);
    presentAgeArr.push(age);
  }
  return presentAgeArr;
}

var presentAges = retnPresentAge(yobArr, calculateAge);
console.log(presentAges);

// Now lets create a fucntion that gonna find the sum of all the ages from array
function addAges(age, total){
  total = total + age; // total+=age;
  return total;
}

// Next fucntion
function retnTotalAge(yobArr, fone, ftwo){
  var totalAgeArr = 0;
  console.log(yobArr.length);
  for(var i=0; i< yobArr.length; i++){
    var age = fone(yobArr[i]);
    totalAge = ftwo(age, totalAgeArr);
    //console.log(totalAge);
    totalAgeArr=totalAge;
    //totalAgeArr.push(totalAge);
  }
  return totalAgeArr;
}

var totalAges = retnTotalAge(yobArr, calculateAge, addAges);
console.log(totalAges);


/**********************************  FUNCTION RETURN FROM FUNCTION ************************/
// Now lets function returning function

function returnFunc(role){
  if(role==='designer'){
    return function(){
      console.log('Hey , Can you please xplain what is UI/UX designing?');
    }
  }else if(role==='developer'){
    return function(name){
      console.log(name  + ", Whats your development skils and technology? ");
    }
  }else if(role==='tester'){
    return function(){
      console.log("Whats the framework and technology we gonna use?");
    }
  }
}

console.log(returnFunc('tester'));
var test= returnFunc('developer');
console.log(test('John')); // no need of console since there is already console
test('Mark');
test('Gaur');
// Also, we can do something like This
var test= returnFunc('developer');
test('Mark');

// Above two lines can be used in single line as
returnFunc('developer')('Mark');
returnFunc('tester')();


/*********** NOW lets another concept related to function - Immediately Invoke The Functuion Expression(IIFE)****/
//pronounced as -- e fi

function iifee(){
  var score = Math.random()*10;
  console.log(score>=5);
}

iifee();

// Write the above function using iifee
(
  function(){
    var score = Math.random()*10;
    console.log(score>=5);
  }
)();

// Also, we can pass arguments to iffe
(
  function(greet){
    var score = Math.random()*10;
    console.log(score>=5 + greet);
  }
)('Hurray');

// IFFE is generally used to hide the data or data privacy. This is just for data privacy;
