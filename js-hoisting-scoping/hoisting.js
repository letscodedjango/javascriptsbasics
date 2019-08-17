// hoisting ------

var age = calculateAge(1990);
console.log(age);

function calculateAge(yob){
  var presentAge = 2019 - yob;
  return presentAge;
}

// Here in the above axample we can wee the fucntion has been called /invoked before the
// function declaration and still it working fine. And the reason is - the 
