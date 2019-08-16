
/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.
Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
GOOD LUCK 😀
*/


var john = {
  mass: 100,
  height: 5.5,
  calculateBmi: function(){
    return this.mass/(this.height * this.height);
  },
}

var mark = {
  mass: 150,
  height: 5.5,
  calculateBmi: function(){
    return this.mass/(this.height * this.height);
  },
}

console.log(john.calculateBmi());
console.log(mark.calculateBmi());

if(john.calculateBmi() > mark.calculateBmi()){
  if(john.calculateBmi() != mark.calculateBmi()){
    console.log('John BMI is '+ john.calculateBmi()+ ' and its higher than Mark');
  } else {
    console.log('John BMI and Mark BMI are same');
  }
} else {
  console.log('Mark BMI is '+ mark.calculateBmi()+ ' and its higher than John');
}

// ************** ANOTHER WAY

var john = {
  mass: 100,
  height: 5.5,
  calculateBmi: function(){
    this.bmi = this.mass/(this.height * this.height);
    return this.bmi;
  },
}

var mark = {
  mass: 150,
  height: 5.5,
  calculateBmi: function() {
     this.bmi= this.mass/(this.height * this.height);
     return this.bmi;
  },
}

console.log(john);
console.log(mark);

if(john.calculateBmi() > mark.calculateBmi()){
  if(john.calculateBmi() != mark.calculateBmi()){
    console.log('John BMI is '+ john.calculateBmi()+ ' and its higher than Mark');
  } else {
    console.log('John BMI and Mark BMI are same');
  }
} else {
  console.log('Mark BMI is '+ mark.calculateBmi()+ ' and its higher than John');
}

// *************

var john = {
    fullName: 'John Smith',
    mass: 110,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}
var mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

console.log(john);
console.log(mark);


if (john.calcBMI() > mark.calcBMI()) {
    console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
} else if (mark.bmi > john.bmi) {
    console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
} else {
    console.log('They have the same BMI');
}
