// this is related to the first challenge we got from our course

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").
GOOD LUCK 😀
*/

var hMass, mMass;
var hHeight, mHeight;

hMass= 80; hHeight = 200;
mMass= 60; mHeight = 150;

var hBmi = hMass / (hHeight * hHeight);
console.log(hBmi);
var mBmi = mMass / (mHeight * mHeight);
console.log(mBmi);

var isHigher = hBmi > mBmi;

console.log("Is John's BMI is higher than Mark's? " + isHigher);
