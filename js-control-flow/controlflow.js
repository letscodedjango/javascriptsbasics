// Now lets make our code bit smarter so that it can take decision on it own based on certain condition

// So we are going to dicsuss control flow statement -- Conditional Statements and Looping

// Lets discuss Consitional Statement

var societyName = 'Regency Orion'
var customername = 'Rajeshwar'

if(societyName=='Regency Orion'){
  if(customername=='Rajeshwar'){
    console.log("Delivered the paracel to "+ customername + ' at ' + societyName);
  } else{
    console.log("Customer is not available");
  }
} else{
  console.log("Society does not exist on this earth");
}

// create a function that helps to individual whether they are applicable for

var canVote = function(yob){
  presentAge=  2019-yob;
  if(presentAge >= 18 && presentAge < 60){
    console.log('His age is '+ presentAge + ' and he is eligible for voting');
  } else if(presentAge > 60) {
    console.log('His age is '+ presentAge + ' and not eligible for voting since you are overaged ' );
  } else {
    console.log('His age is '+ presentAge + ' and not eligible for voting. But nothing to worry, you can be eligible after ' + (18 - presentAge) + ' years' );
  }

}

canVote(1995);

// In case of AND operator -- if first expression is TRUE then only the second expression will get evaluated
// In case of OR operator ---- if first expression is FALSE then only it is going to evaluate second expression
// For AND operator, bot the expression on LHS & RHS needs to be true to make final output TRUE
// For OR operator, only one expression (LHS or RHS ) needs to be true to make final output TRUE

// Now lets create a function that gonna decide if one is eligible for IPSC exams
// This we gonna solve using Ternary Operator and SWITCH statement

//var yob = prompt('Your year of birth : ')
var yob = 29;
presentAge = 2019 - yob;
(presentAge > 18 && presentAge < 25) ? console.log('You are eligible for IPSC'): console.log("Not eligible");

// This is another way of using if else
var isEligible =(presentAge > 18 && presentAge < 25) ? 'You are eligible for IPSC': 'Not Eligible';
console.log(isEligible);

// So the syntax can be -- condition ? true : flase ;

// There are more in conditional statement and that is using switch statement
// This will be useful when we have single variable to comapre with different values and that we already know cases

var profession= 'developer'

switch(profession){
  case 'developer':
      console.log('Lets develop  beautiful website.');
      break;
  case 'tester':
      console.log('Lets test the developed beautiful site.');
      break;
  default:
      console.log('Lets join as supporting member');
}


age = 29;

switch(true){
    case age>=18 && age<60:
        console.log('Eligible for drinking bear');
        break;
    case age>60:
        console.log('We are not responsible. Try on your own risk');
        break;
    default:
        console.log('Lets dont try this!');
}

// Some of the important aspects of True & False values

// Any value which is not 0  and two quotes can be treated as True and 0 always treated as FALSE
// Also there are values that can be treatd as Falsy -- Undefined, null, NaN, '',

var name = 'dunny'
if(name){
  console.log('string can be treated as true');
}

var num = 0;
if(num){
  console.log('Its a falsy value');
} else {
  console.log('Its a 0 and hence executed else block');
}

if(''){
  console.log('Its two quotes');
} else {
  console.log('two quotes treated as false and hence else block get executed');
}


// Another interestin facts about the equality operators in java script or we can say dynamically type Language

var height = 23
if(height=='23'){
  console.log("Its true though we are comparing string and number");  // the output will be this since here we are using == and being an dyanamically tyoe language js convert string 23 to number before comparing and hence getting true
} else{
  console.log("Its false");
}

// So to avoid above scenario and making the strict comparison we will be using ===
var height = 23
if(height==='23'){
  console.log("Its true though we are comparing string and number");  // the output will be this since here we are using == and being an dyanamically tyoe language js convert string 23 to number before comparing and hence getting true
} else{
  console.log("Its false");
}

// NOE THE TIME FOR CODINF CHALLENGE - codetwo.js
