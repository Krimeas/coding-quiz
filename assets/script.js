// variables:

let qNumber = document.querySelector(".title");
let buttonA = document.querySelector("#answer");
let question = document.querySelector(".question");

let firstItem = document.querySelector("#item1");
let secondItem = document.querySelector("#item2");
let thirdItem = document.querySelector("#item3");
let fourthItem = document.querySelector("#item4");

const questions = [{
  qNumber: "Question 1",
  question: "How much chuck did the woodchuck chuck?",
  firstItem: "7 woods",
  secondItem: "12 woods",
  thirdItem: "42 woods",
  fourthItem: "2000 woods"
}, {
  qNumber: "Question 2",
  question: "How many seashells are down at the seashore?",
  firstItem: "17 shells",
  secondItem: "12 shells",
  thirdItem: "42 shells",
  fourthItem: "2000 shells"
}, {
  qNumber: "Question 3",
  question: "How many floobers can flub?",
  firstItem: "5 floobers",
  secondItem: "8 floobers",
  thirdItem: "3 floobers",
  fourthItem: "1 million floobers"
}, {
  qNumber: "Question 4",
  question: "How are you today?",
  firstItem: "whale",
  secondItem: "bat",
  thirdItem: "slippy",
  fourthItem: "stonks"
}]

buttonA.addEventListener('click', function() {
  let random = Math.floor(Math.random () * questions.length)

  qNumber.innerText = questions[random].qNumber;
  question.innerText = questions[random].question;
  // qList.innerText = questions[random].qList;
  firstItem.innerText = questions[random].firstItem;
  secondItem.innerText = questions[random].secondItem;
  thirdItem.innerText = questions[random].thirdItem;
  fourthItem.innerText = questions[random].fourthItem;


})

// Everythign for setting the timer located here.

let buttonB = document.querySelector("#timeStart");
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var secondsLeft = 91;

buttonB.addEventListener('click', function() {
  function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left in your quiz!";

        if(secondsLeft === 0) {
        clearInterval(timerInterval);
        alert("Ohh No!  You're out of time!, what's your score?");

        }
    }, 1000);
  }
setTime();
})

// Score Keeping Script.
var scoreNumber = 0;
var score = document.querySelector("#score");
score.textContent = scoreNumber;

function scoreKeeper() {
  if (questions.item1) {
    scoreNumber++
  }
  if (questions.item1) {
    scoreNumber++
  }
  if (questions.item1) {
    scoreNumber++
  }
  if (questions.item1) {
    scoreNumber++
  }
  if (questions.item1) {
    scoreNumber++
  }


}

