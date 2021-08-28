// THIS QUIZ IS BASED ON HARRY POTTER 

var readlineSync = require("readline-sync");
var chalk= require("chalk");

var score =0;

function welcome(){
var userName = readlineSync.question("what is your Name?");
console.log(chalk.magenta("welcome!  " + userName + "   to DO YOU KNOW MARIYA?"));
}

console.log("------------------------------");

function play(question,answer)
{
  var userAnswer = readlineSync.question(question);

  if(userAnswer===answer)
  {
    console.log(chalk.green("right!"));
    score++;
    console.log(chalk.bgYellow("your score is:",score));
  }
  else
  {
    console.log(chalk.red("wrong"))
  }
}
const questionOne={
  question:"How many total parts are there in Harry Potter?",
  answer:"8"
}
const questionTwo ={
  question:"Are you a Harry Potter fan ?",
  answer:"yes"
}
const questionThree={
  question:"What is the Real Name of Harry Potter?",
  answer:"daniel radcliffe"
}
const questionFour ={
  question:"What's the name of the dog guarding the Sorcerer’s Stone?",
  answer:"fluffy"
}
const questionFive ={
  question:"Who is the Heir of Slytherin?",
  answer:"tom riddle"
}
const questionSix ={
  question:"Where does Dumbledore's Army practice?",
  answer:"room of requirement"
}
// who knows me well
var persons=[
  {
    name:"Naufil",
    score:4
  },
  {
    name:"Ankita",
    score:3
  }
]

questionList =[questionOne,questionTwo,questionThree,questionFour,questionFive,questionSix];

for( var i=0; i<questionList.length;i++)
{ 
     var currentquestion = questionList[i]
     play(currentquestion.question,currentquestion.answer);
     if(currentquestion=== questionList[2])
     {
           console.log(chalk.green("you are entering into LEVEL 2!"));
     }
}
console.log("YAYYYY! your total score is:",score)
console.log("-------------------------------------");
console.log(chalk.blue(userName +":" + score ))
console.log(chalk.blue(persons[0].name + ":"+ persons[0].score));
console.log("-------------------------------------");
if(score < persons[0].score)
{
console.log("If you score higher than other then ping me i'll update the score");
}

