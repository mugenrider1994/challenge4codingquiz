var time = 75;
var questionIndex = 0;
var timerEl = document.querySelector(".button-timer");
var startButton = document.querySelector(".start-button");


var questionBox = document.querySelector(".question-box");
var introBox = document.querySelector(".intro-box");
var questionElement = document.getElementById('questions');




var id1 = document.getElementById('id1');
var id2 = document.getElementById('id2');
var id3 = document.getElementById('id3');
var id4 = document.getElementById('id4');

function startTimer() {
    setInterval(function(){
        time--;
        timerEl.textContent = time;
        if(time === 0) {
            clearInterval(time)
        }
        

    }, 1000
    )
}

//user clicks start
//hide intro box
//show quiz box
//timer starts

startButton.addEventListener("click", function(){ 
    introBox.classList.add("hide")  
    questionBox.classList.remove("hide")
    startTimer()
    loadQuestion(questionIndex)
})

//user already clicked start
//load in the first question
//load in the 4 choices of question
//user can click any answer or choice
//check if the user clicked the correct choice
var questions = [
    {
        
        questionText: "What is an array?",
        choices: [
            { text: "A word", isCorrect: false },
            { text: "A sentence", isCorrect: false },
            { text: "A collection of values", isCorrect: true },
            { text: "A number", isCorrect: false }
        ]
        
    },
    {
        
        questionText: "Inside which HTML element do we put the JavaScript?",
        choices: [
            { text: "<javascript>", isCorrect: false},
            { text: "<scripting>", isCorrect: false},
            { text: "<script>", isCorrect: true},
            { text: "<js>", isCorrect: false}
        ]
    },
    {
        
        questionText: "How do you write \"Hello World\" in an alert box?",
        choices: [
            { text: "alertBox(\"Hello World\");", isCorrect: false},
            { text: "msg(\"Hello World\");", isCorrect: false},
            { text: "msgBox(\"Hello World\");", isCorrect: false},
            { text: "alert(\"Hello World\");", isCorrect: true}
        ]
    },
    {
        
        questionText: "How do you write \"Hello World\" in an alert box?",
        choices: [
            { text: "function:myFunction()", isCorrect: false},
            { text: "function myFunction()", isCorrect: true},
            { text: "function = myFunction()", isCorrect: false},
        ]
    }


]




function loadQuestion(index) {


questionElement.innerText = questions[index].questionText;




id1.innerText = questions[index].choices[0].text;
id2.innerText = questions[index].choices[1].text;
id3.innerText = questions[index].choices[2].text;
id4.innerText = questions[index].choices[3].text;




}

function clickHandler(el) {
    let selectedAnswer = parseInt(el.dataset.id);
    if(questions[questionIndex].choices[selectedAnswer].isCorrect == true) {
        console.log("Correct");
    } else {
        console.log("Wrong");
    }
    if(questions[questionIndex].choices[selectedAnswer].isCorrect == true) {
        
    }
    //if it's wrong or right what to do next
    //if question is correct add one to the index
    
}




/*
function loadQuestion(i) {
    var questionText = questions[i].questionText
    var questionEl = document.querySelector("#questions")
    questionEl.textContent = questionText
    //questions[i].choices[0]
}
*/


//