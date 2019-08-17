// Just we have discussed one of the control flow statemnt ie. if else { }
// now we are going to jum to another most import aspect of control floe statement ie. loops

// There are multiple ways of defining loop statemnt in JS
/*
for(var x in iterable){
  // true statement
}
*/

/*
for(var i=0; i < 10 ; i++){

}
*/

/*
var i=0;
while(i < 10){
  // true statement
  i ++;
} */

// Lets see in action
// TO print number from 1 to 5
for(var i=1; i<6; i++){
  console.log(i);
}

// to print all even number
for(var i=2; i < 10; i+=2){
  console.log(i);
}

// Using while loop
var i = 0;
while(i<6){
  console.log(i);
  i++;
}

// Using for each or enhanced loop
var jstopics = ['Array', 'Object', 'Variables', 'Functions', 'Loop'];
for(var topic in jstopics){
  console.log(jstopics[topic]);
}

// Another way of accessing the values from array inspect
for(var i=0; i< jstopics.length ; i++){
  console.log(jstopics[i]);
}

// Using while loop
var i=0;
while( i < jstopics.length){
  console.log(jstopics[i]);
  i++;
}

/// Genarally there are few keywords we commonly use with loops are break and continue bsed on certain condition

// break & continue always use with if statemnt in loops

// so lets print number from 1 to 20 and stooped as soon as we get 17

for(var i=1; i <=20; i++){
  console.log(i);
  if(i==17){
    break;   // break the whole loop and come out of the loop
  }
}

// not lets skip all the number which are divisible by 4 between 1 to 20
for(var i=1; i <=20; i++){
  if(i%4==0){
    continue;   // stop / break the current iteration and jump back to the start of the loop to execute the next iteration
  }
  console.log(i);
}

// looping backward
for(var i=20; i>=1; i--){
  if(i%4==0){
    continue;   // stop / break the current iteration and jump back to the start of the loop to execute the next iteration
  }
  console.log(i);
}

// Also we can write someting like below
for(var i=20; i <=60; i++){
  if(i%4==0) continue;   // stop / break the current iteration and jump back to the start of the loop to execute the next iteration
  console.log(i);
}
