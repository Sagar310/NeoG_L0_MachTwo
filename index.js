var readlineSync = require("readline-sync");
var score = 0;
var highScores = [
  {
    name: "Sagar",
    score: 3,
  },
  {
    name: "Abhijit",
    score: 2,
  },
  {
    name: "Salil",
    score: 1,
  },
]
var questions = [{
  question: "Which Pokemon will you choose to beat Charmander? ",
  answer: 1,
  choices: ["Bulbasaur", "Squirtle", "Caterpie", "Kakuna"]
}, {
  question: "Which Pokemon will you choose to beat Pikachu? ",
  answer: 3,
  choices: ["Pidgey", "Golbat", "Golduck", "Graveler"]
},
{
  question: "Which Pokemon will you choose to beat Kingler? ",
  answer: 2,
  choices: ["Vulpix", "Jigglypuff", "Raichu", "Charizard"]
}/*,
{
  question: "Where do I work? ",
  answer: "Microsoft"
},
{
  question: "Where do I work? ",
  answer: "Microsoft"
},
{
  question: "Where do I work? ",
  answer: "Microsoft"
}*/];

function welcomeMsg() {
  var userName = readlineSync.question("Hello! What's your name? ");
  console.log("\nWelcome " + userName + " to Pokemon Masters!\n\nTo play this game, you will have to choose the correct Pokemon based on its type to beat the Pokemon mentioned in the question.\nFor example, a water Pokemon will beat a fire Pokemon.\n\nLet's get the game started. Good Luck!");
}

function askQuestion(currentQuestion) {
  var userAnswer = readlineSync.keyInSelect(currentQuestion.choices, currentQuestion.question, { cancel: false });
  if (userAnswer == currentQuestion.answer) {
    console.log("right!");
    score = score + 1;

  } else {
    console.log("wrong!");

  }

  console.log("current score: ", score);
  console.log("-------------")
}

function playGame() {
  for (var i = 0; i < questions.length; i++) {
    askQuestion(questions[i])
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcomeMsg();
playGame();
showScores();