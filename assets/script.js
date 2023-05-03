var time = 75;
var timerEl = document.querySelector(".button-timer");
var start = document.getElementsByClassName("start-button")[0];
console.log(start);
var submit = document.getElementsByClassName("submit")[0];
var finishBox = document.querySelector(".finish-box");
var submitBtn = document.getElementsByClassName("submit");
var signEl = document.getAnimations('sign');
var currentQuestionIndex = 0;


var questionBox = document.querySelector(".question-box");
var introBox = document.querySelector(".intro-box");



function startTimer() {
     let timer = setInterval(function(){
        time--;
        timerEl.textContent = time;
        if(time === 0) {
            gameOver();
            clearInterval(timer)
            console.log("Time's up!");
        }
        
        

    }, 1000
    )
}

function getQuestion() {
    var currentQuestion = questions[currentQuestionIndex];

    var descriptionEl = document.getElementById('question');
    descriptionEl.textContent = currentQuestion.questionText;
}

function gameOver() {
    var finishBoxEl = document.getElementsByClassName("finish-box");
    finishBoxEl.remove
    questionBox.classList.add("hide")
    finishBox.classList.remove("hide")
    
}
//user clicks start
//hide intro box
//show quiz box
//timer starts


start.addEventListener("click", function(){ 
    introBox.classList.add("hide");
    questionBox.classList.remove("hide");
    startTimer();
    iterate(id);
    
})


function choicesClick(event) {
    var buttonEl = event.target;
    if(buttonEl.value !== question[currentQuestionIndex].choices) {
        time -= 15;

        if (time < 0) {
            time = 0;
        }
        timerEl.textContent = time;
    } else {

    }

    currentQuestionIndex++;

    if(time <= 0 || currentQuestionIndex === questions.length) {
        gameOver();
    } else {
        getQuestion();
    }

    }


//user already clicked start
//load in the first question
//load in the 4 choices of question
//user can click any answer or choice
//check if the user clicked the correct choice
var questions = [
    {
        id: 1,
        questionText: "What is an array?",
        choices: [
            { text: "A word", isCorrect: false },
            { text: "A sentence", isCorrect: false },
            { text: "A collection of values", isCorrect: true },
            { text: "A number", isCorrect: false }
        ]
        
    },
    {
        id: 2,
        questionText: "Inside which HTML element do we put the JavaScript?",
        choices: [
            { text: "<javascript>", isCorrect: false},
            { text: "<scripting>", isCorrect: false},
            { text: "<script>", isCorrect: true},
            { text: "<js>", isCorrect: false}
        ]
    },
    {
        id: 3,
        questionText: "What does HTML stand for?",
        choices: [
            { text: "Hyper Trainer Marking Language", isCorrect: false},
            { text: "Hyper Text Marketing Language", isCorrect: false},
            { text: "Hyper Text Markup Leveler", isCorrect: false},
            { text: "Hyper Text Markup Language", isCorrect: true}
        ]
    },
    {
        id: 4,
        questionText: "How do you write \"Hello World\" in an alert box in JavaScript?",
        choices: [
            { text: "alert = \"Hello World\"", isCorrect: false},
            { text: "alertBox(\"Hello World\")", isCorrect: false},
            { text: "alert(\"Hello World\")", isCorrect: true},
            { text: "window.alert(\"Hello World\")", isCorrect: false}
        ]
    }


]



var start = true;



function iterate(id) {
    console.log(id);
    var result = document.getElementsByClassName("result");
    result[0].innerText = "";

  const question = document.getElementsByClassName("question-container");
  
  question.innerText = questions[id].questionText;
 


    //if it's wrong or right what to do next
    //if question is correct add one to the index

    const id1 = document.getElementById('id1');
    const id2 = document.getElementById('id2');
    const id3 = document.getElementById('id3');
    const id4 = document.getElementById('id4');
 
 
    // Providing option text
    id1.innerText = questions[id].choices[0].text;
    id2.innerText = questions[id].choices[1].text;
    id3.innerText = questions[id].choices[2].text;
    id4.innerText = questions[id].choices[3].text;
 
    // Providing the true or false value to the options
    id1.value = questions[id].choices[0].isCorrect;
    id2.value = questions[id].choices[1].isCorrect;
    id3.value = questions[id].choices[2].isCorrect;
    id4.value = questions[id].choices[3].isCorrect;
    



var selected = "";
 
// Show selection for id1
id1.addEventListener("click", () => {
    id1.style.backgroundColor = "lightgoldenrodyellow";
    id2.style.backgroundColor = "lightskyblue";
    id3.style.backgroundColor = "lightskyblue";
    id4.style.backgroundColor = "lightskyblue";
    selected = id1.value;
})

// Show selection for id2
id2.addEventListener("click", () => {
    id1.style.backgroundColor = "lightskyblue";
    id2.style.backgroundColor = "lightgoldenrodyellow";
    id3.style.backgroundColor = "lightskyblue";
    id4.style.backgroundColor = "lightskyblue";
    selected = id2.value;
})

// Show selection for id3
id3.addEventListener("click", () => {
    id1.style.backgroundColor = "lightskyblue";
    id2.style.backgroundColor = "lightskyblue";
    id3.style.backgroundColor = "lightgoldenrodyellow";
    id4.style.backgroundColor = "lightskyblue";
    selected = id3.value;
})

// Show selection for id4
id4.addEventListener("click", () => {
    id1.style.backgroundColor = "lightskyblue";
    id2.style.backgroundColor = "lightskyblue";
    id3.style.backgroundColor = "lightskyblue";
    id4.style.backgroundColor = "lightgoldenrodyellow";
    selected = id4.value;
})

const check = document.getElementsByClassName("check");

check[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "True";
        result[0].style.color = "green";
    } else {
        result[0].innerHTML = "False";
        result[0].style.color = "red";
    }
})
}


if(start) {
    iterate("0");
}


const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
    start = false;
    if (id < 2) {
        id++;
        iterate(id);
        console.log(id);
    }
})

function showHighscores() {
    var highscores = JSON.parse(window.localStorage.getItem('finish-box')) || [];
    highscores.sort(function(x, y) {
        return x.score - y.score;
    });

    for (var i = 0; i < highscores.length; i += 1) {
        // create li tag for each high score
        var liTag = document.createElement('li');
        liTag.textContent = highscores[i].sign + ' - ' + highscores[i].score;
    
        // display on page
        var olEl = document.getElementById('highscores');
        olEl.appendChild(liTag);
      }
}

showHighscores();

function storeHighscore() {
    if (sign !== '') {
        var sign = signEl.value.trim();
        var highscores = JSON.parse(window.localStorage.getItem('highscores')) || [];
        var newEgg = {
        score: time,
        sign: sign,
        };
        highscores.push(newEgg);
        window.localStorage.setItem('highscores', JSON.stringify(highscores));
    

    }

}

function checkSubmitButton(event) {
    if(event.key === 'Submit') {
        storeHighscore();
    }
}

submitBtn.onclick = storeHighscore;

signEl.onkeyup = checkSubmitButton;





/*
function loadQuestion(i) {
    var questionText = questions[i].questionText
    var questionEl = document.querySelector("#questions")
    questionEl.textContent = questionText
    //questions[i].choices[0]
}
*/


//