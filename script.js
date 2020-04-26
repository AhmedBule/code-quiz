var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('option1');
var opt2 = document.getElementById('option2');
var opt3 = document.getElementById('option3');
var opt4 = document.getElementById('option4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');
var start = document.getElementById("start-btn");
var timer = document.getElementById("time");

var timerCounter = 50;
var timerID 

var questionIndex = 0;
var totalRight = 0;
var totalWrong = 0;

start.onclick = StartQuiz;
opt1.onclick = clickAnswer;
opt2.onclick = clickAnswer;
opt3.onclick = clickAnswer;
opt4.onclick = clickAnswer;
container.style.display = "none";  // We are hiding the display. 
resultCont.style.display = "none";

function loadQuestion()  {
	var q = questions[questionIndex];
	questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	opt4.textContent = q.option4;
};
function displayTime() {
    timer.textContent = timerCounter
    timerCounter--;
    if (timerCounter <= 0){
        displayresults();
    }
}

function StartQuiz () {
    container.style.display = "block"
start.style.display = "none";
    timerID = setInterval(displayTime, 1000);
loadQuestion();
}
function clickAnswer(){
    var userchoice = this.getAttribute("data-value");
     if (userchoice === questions[questionIndex].answer) {
    totalRight++;
     }
     else {
         timerCounter = timerCounter -7;
         totalWrong++;
     }
     if (questionIndex < questions.length - 1) {
         questionIndex++;
         loadQuestion();
     }
     else {
         displayresults();
     }

}
    function displayresults() {
        console.log(totalRight,totalWrong);
        clearInterval(timerID);
        container.style.display = "none";  
resultCont.style.display = "block";
resultCont.textContent = "Wins:"+totalRight+" : Loss: "+totalWrong
    }