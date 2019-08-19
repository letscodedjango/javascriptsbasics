// Now the time has come when we have to discuss the one of the most important and toughest topic for beginners and it is
//----- ********** CLOSURES ***********/

// So lets create a small function that return a function which helps to calculate how many years are remaining for retirement

// Here we need two functions mostly - one that calculate present Age and next one to calcualte the retirement year left

// function calculateAge(yob){
//   return 2019 - yob;
// }

function retirementYear(retirementAge){
  var a = 'You gonna retire at: ';
  return function(yob){
    var age = 2019 - yob;
    var retireAt = retirementAge-age;
    console.log(a + retireAt);
  }
}

// var age = retirementYear(65)
// age(2007);
//
// retirementYear(60)(1990);

// Here we can see the inner function can access the variables (a & retirementAge) of outer function and this concept is known as -- 'CLOSURES'

// In JS we dont need to call closure explicity and that is one of the good ting. Its a inbuilt fucntion and called always by JS within

// Now lets create retirementAge calculator for different countries

function retirementYear(country){
  var a = 'You gonna retire after: ';
  if(country=='India'){
    return function(yob){
      var age = 2019 - yob;
      var retireAt = 65-age;
      console.log(a + retireAt + ' yrs');
    }
  }else if(country==='USA'){
    if(country=='USA'){
      return function(yob){
        var age = 2019 - yob;
        var retireAt = 60-age;
        console.log(a + retireAt + ' yrs');
      }
  }
}
}

console.log(retirementYear);
retirementYear('India')(1990);
retirementYear('USA')(2001);

// Another way of writing the above fucntion is - 
function retirementYear(country){
  var a = 'You are gonna retire after :';
  return function(yob){
    if(country=='India'){
      var age = 2019 - yob;
      var retireAt = 65 - age;
      console.log(a + retireAt + ' yrs');
    }else if (country=='USA'){
    var age = 2019 - yob;
    var retireAt = 70 - age;
    console.log(a + retireAt + ' yrs');
  }
}
}

console.log(retirementYear);
retirementYear('India')(1990);
retirementYear('USA')(2001);
