// Here we gonna discuss one of the most important aspect of any programming Language ie- function

// function are like container that enclose the repetite task code or in simple term we can say when we have to perform
// a specific line of code multiple time we gonna create function and enclose those line of code into the same

// ALSO, important reason why we should always have function - programming always follow the concept of DRY - Dont repeat yourself

// Also function is a small block of code that perform specific operation based on certain input and may return some output

// Lets define a function that can calculate the retirement age of employee

/* This is how we define fucntion in JS
function <functionName>(parameters){
  // lines of code
}
*/

function calculateRetirementAge(yearOfBirth, name){
  var presentAge= 2019 - yearOfBirth;
  if(presentAge <= 55 && presentAge > 22){
    console.log(name + ' ,you will be retiring after '+ (56-presentAge) + ' in year ' + (2019 + (56-presentAge)));
  } else if(presentAge > 55){
    console.log('Its really amazing, you still working!! You should have already retired.');
  } else {
    console.log( name + ' ,you are too young for all this !!. Enjoy your days.');
  }
}

calculateRetirementAge(1984,'Yardu');
calculateRetirementAge(1800, 'Mary');
calculateRetirementAge(2008, 'Crazy');

// There are four different ways we can define functions based on return type and parameters

function noReturnTypeNoParameter(){

}

function noReturnTypeYesParameter(name){
  console.log(name);
}

function yesReturnTypeNoParameter(){
  return 'Hello world';
}

function yesReturnTypeYesParameter(name) {
  return name;
}

// lets try return type functionName
function calculateTemperature(tempValue, convertTo){
  if(convertTo=='celcius'){
    var cel = (tempValue-32) * (5/9);
    return cel;
  } else if(convertTo=='fahrenheit'){
    var far = (tempValue * 9/5) + 32;
    return far;
  }
}

var temp = calculateTemperature(237, 'celcius');
console.log(temp);

var temp = calculateTemperature(237, 'fahrenheit');
console.log(temp);

// Lets discuss something about the function expression

var functionExp = function(tempValue, convertTo){
  var result;
  switch(convertTo){
    case 'celcius':{
      result = (tempValue-32) * (5/9);
      return result;
      //break;  // This doen't need to break since return keyword alwqys return the work and immediately exit the function and return to start of the function
    }
    case 'fahrenheit':{
      result = (tempValue * 9/5) + 32;
      return result;
      //break;  // This doen't need to break since return keyword alwqys return the work and immediately exit the function. Even if we specify that part is not gonna makenany differece since this part will not execute
    }
    default:
      console.log('Something went wrong!!');
  }

}

var temp = functionExp(237, 'celcius');
console.log(temp);

var temp = functionExp(237, 'fahrenheit');
console.log(temp);

// lets try using the function statement expression

// STATEMENT vs expression

// expression always gonna return something but statements will not

// Similary, if any function return any output (perform action and produce immediate result) then we can say its function expression else function statement
// Statement just perform action but do not produce any immediate result

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

// Now lets function returning function
