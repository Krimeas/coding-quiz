// Main variables:

let qNumber = document.querySelector(".title");
let buttonA = document.querySelector("#answer");
let question = document.querySelector(".question");

let firstItem = document.querySelector("#item1");
let secondItem = document.querySelector("#item2");
let thirdItem = document.querySelector("#item3");
let fourthItem = document.querySelector("#item4");

// all quesitons and answers here.
const questions = [{
  qNumber: "Question 1",
  question: "What is a Data Structure?",
  firstItem: "a storage format that defines the way data is stored.",
  secondItem: "a collection of items stored at contiguous memory locations.",
  thirdItem: "a linear data structure in which the elements are not necessarily stored in a contiguous manner.",
  fourthItem: "a way of accessing, storing and retrieving data"
}, {
  qNumber: "Question 2",
  question: "What is an Array?",
  firstItem: "a storage format that defines the way data is stored.",
  secondItem: "a collection of items stored at contiguous memory locations.",
  thirdItem: "a linear data structure in which the elements are not necessarily stored in a contiguous manner.",
  fourthItem: "a way of accessing, storing and retrieving data"
}, {
  qNumber: "Question 3",
  question: "What is a Linked List?",
  firstItem: "a storage format that defines the way data is stored.",
  secondItem: "a collection of items stored at contiguous memory locations.",
  thirdItem: "a linear data structure in which the elements are not necessarily stored in a contiguous manner.",
  fourthItem: "a way of accessing, storing and retrieving data"
}, {
  qNumber: "Question 4",
  question: "What is LIFO?",
  firstItem: "a storage format that defines the way data is stored.",
  secondItem: "a collection of items stored at contiguous memory locations.",
  thirdItem: "a linear data structure in which the elements are not necessarily stored in a contiguous manner.",
  fourthItem: "a way of accessing, storing and retrieving data"
}, {
  qNumber: "Question 4",
  question: "What is Recursion?",
  firstItem: "used to store data in a manner that it can be retrieved very efficiently",
  secondItem: "a function calling itself based on a terminating condition",
  thirdItem: "a paradigm that provides concepts such as objects, classes, and inheritance",
  fourthItem: "stonks"
}]

// generation of random questions when clicking next button.  
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
  if (questions[0].firstItem) {
    scoreNumber++;
  }  else { secondsLeft - 10;}

  if (questions[1].secondItem) {
    scoreNumber++
  } else { secondsLeft - 10;}

  if (questions[2].thirdItem) {
    scoreNumber++
  } else { secondsLeft - 10;}

  if (questions[3].fourthItem) {
    scoreNumber++
  } else { secondsLeft - 10;}

  if (questions[4].secondItem) {
    scoreNumber++
  } else { secondsLeft - 10;}



}
scoreKeeper();
  
// Recent Scores score card for record keeping names.
if (scoreNumber >=5){
  prompt("Enter your name and Score here");
  lItem1.append.textContent = " ";
  }else if (scoreNumber >=4){
    prompt("Enter your name and Score here");
    lItem2.append.textContent = " ";
  }else if (scoreNumber >=3){
    prompt("Enter your name and Score here");
    lItem3.append.textContent = " ";
  }else if (scoreNumber >=2){
    prompt("Enter your name and Score here");
    lItem4.append.textContent = " ";
  }else if (scoreNumber >=1){
    prompt("Enter your name and Score here");
    lItem5.append.textContent = " ";
  } else {
    
  }