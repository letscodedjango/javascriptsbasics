// here we gonna code for anpther interesting challenge of fungame.This game will ask some question and we need to answer the same

// CODING CHALLENGE
/*
--- Let's build a fun quiz game in the console! ---
1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)
2. Create a couple of questions using the constructor
3. Store them all inside an array
4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).
5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.
6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).
7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

var totalScore=0;

var Question = function (question, options, answer){
    this.question= question,
    this.options= options,
    this.answer= answer
}

console.log(Question);

var firstQuestion = new Question("Who is the author of course JS-Build your app?", ["Jonas", "Gaur","Benny","Nitai"], "Jonas");
var secQues = new Question("How do you like the courese?", ["Below Average", "Average", "Good","Best"], "Best");
var thirdQues = new Question("Which topic not covered in this course?", ["Polymorphosm","Inheritence", "File reading", "Constructor"], "File Reading");

console.log(firstQuestion.question);
console.log(secQues);
console.log(thirdQues);

var questions = [firstQuestion, secQues, thirdQues];



  function verifyAndScore(answer){
    if(answer=="Jonas" || answer=="Best" || answer=="File reading"){
      totalScore= totalScore + 1;
    }
  }

function askQuestion(questions){ // This question will ask question and return the score
   for(var ques in questions){
     var qNa= (displayQuestionOptions(questions[ques]));
     console.log(qNa.question);
     displayOptions(qNa.options);
     var reply= prompt(qNa.question + '\n');
     console.log(reply);
     verifyAndScore(reply);
     console.log(totalScore);
     if(reply==="exit"){
       break;
     }
   }
   return reply;

}

function displayQuestionOptions(questionObject){
  return  {
      question: questionObject.question,
      options: questionObject.options,
      answer: questionObject.answer
    }
  }

  function displayOptions(options){
    for(var i=0; i<options.length; i++){
      console.log(i+ ' - ' + options[i]);
      //return i+ ':' + options[i];
    }
  }




// function keepPlaying(questions){
//   var isExit=true;
//   console.log(isExit);
//   var reply = askQuestion(questions);
//   console.log(reply);
//   if(reply==="exit"){
//     isExit=false;
//   }
//   console.log(isExit);
// }

function keepPlaying(questions){
  var isExit=true;
    while(isExit){
      var reply = askQuestion(questions);
      console.log(reply);
      if(reply === 'exit'){
        isExit=false;
      }
    }
}

keepPlaying(questions);


// console.log(displayOptions(questions));
