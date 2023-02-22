var time = 75;

function startTimer() {
    setInterval(function(){
        time--;
        var timerEl = document.querySelector(".button-timer")
        timerEl.textContent = time;
        if(time <= 0) {
            alert('Time is up!')
        }
        

    }, 1000
    )
}

//user clicks start
//hide intro box
//show quiz box
//timer starts
var startButton = document.querySelector(".start-button")
startButton.addEventListener("click", function(){
    var introBox = document.querySelector(".intro-box")
    introBox.classList.add("hide")
    var questionBox = document.querySelector(".question-box")
    questionBox.classList.remove("hide")
    startTimer()
    loadQuestion(0)
})

//user already clicked start
//load in the first question
//load in the 4 choices of question
//user can click any answer or choice
//check if the user clicked the correct choice
var questions = [
    {
        id:1,
        questionText: "What is an array?",
        choices: [
            { text: "A word", isCorrect: false },
            { text: "A sentence", isCorrect: false },
            { text: "A collection of values", isCorrect: true },
            { text: "A number", isCorrect: false }
        ]
        
    },
    {
        id:2,
        questionText: "Inside which HTML element do we put the JavaScript?",
        choices: [
            { text: "<javascript>", isCorrect: false},
            { text: "<scripting>", isCorrect: false},
            { text: "<script>", isCorrect: true},
            { text: "<js>", isCorrect: false}
        ]
    },
    {
        id:3,
        questionText: "How do you write \"Hello World\" in an alert box?",
        choices: [
            { text: "alertBox(\"Hello World\");", isCorrect: false},
            { text: "msg(\"Hello World\");", isCorrect: false},
            { text: "msgBox(\"Hello World\");", isCorrect: false},
            { text: "alert(\"Hello World\");", isCorrect: true}
        ]
    },
    {
        id:4,
        questionText: "How do you write \"Hello World\" in an alert box?",
        choices: [
            { text: "function:myFunction()", isCorrect: false},
            { text: "function myFunction()", isCorrect: true},
            { text: "function = myFunction()", isCorrect: false},
        ]
    }


]


var start = true;

function loop(id) {

var result = document.getElementsByClassName(question-box);
result[0]

}


function loadQuestion(i) {
    var questionText = questions[i].questionText
    var questionEl = document.querySelector("#questions")
    questionEl.textContent = questionText
    //questions[i].choices[0]
}

