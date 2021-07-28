var readlineSync = require('readline-sync');
var chalk = require('chalk');

var userName = chalk.keyword('orange')(readlineSync.question("Enter your Name : "));
console.log("Welcome " + userName + " to " + chalk.green.bold("THE BREAKING BAD QUIZ"));

var score = 0 ;
var highScores = [
  {
  name : "Divanshu",
  score : 5,
  },
  {
    name : "Shobhit",
    score : 4,
  }
]
readlineSync.setDefaultOptions({limit : ["A","B","C","D"] , limitMessage : 'You entered a wrong input. Please select between - [A/B/C/D] '});
var questions = [
  {
    question : "What was the name of Walter White's laawyer ? \n a) Saul \n b) Jesse \n c) Hank \n d) Gus \n",
    answer : "A",
  },
  {
    question : "what business did Jesse Pinkman and Walter White did together ? \n a) Weed \n b) Crystal Meth \n c) LSD \n d) Heroine \n ",
    answer : "B"
  },
  {
    question : "When Walt retired from the meth game, how much money did he walk away with ? \n a) $4 Million \n b) $8 Million \n c) $40 Million \n d) $80 Million \n" ,
    answer : "D"
  },
  {
    question : "Jesse’s girlfriend Andrea has a son. What’s his name? \n a) bill \n b) Brock \n c) Buck \n d) Brad \n",
    answer : "B"
  },
  {
    question : "which word did jesse used the most ? \n a) Yeah! \n b) Bitch \n c) Yo \n d) Let's roll \n",
    answer : "B"
  }
]

for(var i = 0 ; i < questions.length ; i++){
  var userAnswer = readlineSync.question(questions[i].question);
  if(userAnswer.toUpperCase() === questions[i].answer.toUpperCase()){
    console.log(chalk.green("Right!"));
    score++;
  } else {
    console.log(chalk.red("Wrong!"));
  }
  console.log(" Current Score : " + score);
  console.log("--------------------");
}
console.log(chalk.blue.bold("YAY! YOU SCORED : " + score));
console.log("Check out the high scores");
for(var i = 0 ; i < highScores.length ; i++){
  console.log(highScores[i].name + " : " + highScores[i].score);
}
flag = 0
for(var i = 0 ; i < highScores.length ; i++){
  if(score > highScores[i].score){
    flag++;
  }
}
if(flag > 0){
  console.log(chalk.keyword('brown')("YAY! You beat the high-score. Ping me the screen shot of this and I'll update the list"));
} else {
  console.log(chalk.keyword('purple')("You didn't make it to the high scores. Better luck next time"));
}