var time = 75;

function startTimer() {
    setInterval(function(){
        time--;
        var timerEl = document.querySelector(".button-timer")
        timerEl.textContent = time;


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
        questionText: "What is an array?",
        choices: [
            "A word", 
            "A sentence", 
            "A collection of values", 
            "A number"
        ],
        correctChoice: 2
    }


]
function loadQuestion(i) {
    var questionText = questions[i].questionText
    var questionEl = document.querySelector("#questions")
    questionEl.textContent = questionText
    //questions[i].choices[0]
}

