var time = 75;
var timerEl = document.querySelector(".button-timer");
var startBtn = document.getElementsByClassName("start-button")[0];
var start = document.querySelector(".start-button");


var finishBox = document.querySelector("#finish-box");
var submitBtn = document.getElementById('submit');
var signEl = document.getElementById('sign');
var currentQuestionIndex = 0;
var questionsEl = document.querySelector('.question');


var questionBox = document.querySelector(".question-box");
var introBox = document.querySelector(".intro-box");



function startTimer() {
    
     let timer = setInterval(function(){
        time--;
        timerEl.textContent = time;
        if(time <= 0) {
            clearInterval(timer);
            quizEnd();
        }
        if(currentQuestionIndex == 2) {
            clearInterval(timer);
            quizEnd();
        }
        
        

    }, 1000
    )
}


function getQuestion() {
    var currentQuestion = questions[currentQuestionIndex];

    var descriptionEl = document.getElementById('question');
    descriptionEl.textContent = currentQuestion.innerText;
}


function quizEnd() {
    
    clearInterval(time);

    var finishBoxEl = document.getElementById('finish-box');
    finishBoxEl.removeAttribute('class');
  
    // show final score
    var finalScoreEl = document.getElementById('feedback');
    finalScoreEl.textContent = time;
  
    // hide questions section
    
  
}

    

//user clicks start
//hide intro box
//show quiz box
//timer starts

window.addEventListener("DOMContentLoaded", () => {
    const start = document.querySelector('start-button');
    if (start) {
      start.addEventListener('click', swapper, false);
    }
});


start.addEventListener("click", function(){ 
    introBox.classList.add("hide");
    questionBox.classList.remove("hide");
    startTimer();
    iterate(id);
    getQuestion();
    
})




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








function iterate(id) {
    console.log(id);
    var result = document.getElementsByClassName("result");
    result[0].innerText = "";

  const question = document.getElementById("question");
  
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
        time = time - 15;
        result[0].innerHTML = "False";
        result[0].style.color = "red";
    }
    
    
})

}





const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
    start(false);
    if (id < 2) {
        id++;
        iterate(id);
    }
})


function saveHighscore() {
    // get value of input box
    var sign = signEl.value.trim();
  
    // make sure value wasn't empty
    if (sign !== '') {
      // get saved scores from localstorage, or if not any, set to empty array
      var highscores =
        JSON.parse(window.localStorage.getItem('highscores')) || [];
  
      // format new score object for current user
      var newScore = {
        score: time,
        sign: sign,
      };
  
      // save to localstorage
      highscores.push(newScore);
      window.localStorage.setItem('highscores', JSON.stringify(highscores));
  
      // redirect to next page
      window.location.href = 'highscores.html';
    }
  }


  function checkForSubmit(event) {
    // "13" represents the enter key
    if (event.key === 'Submit') {
      saveHighscore();
    }
  }

startBtn.onclick = startTimer;

submitBtn.onclick = saveHighscore;

signEl.onkeyup = checkForSubmit;





/*
function loadQuestion(i) {
    var questionText = questions[i].questionText
    var questionEl = document.querySelector("#questions")
    questionEl.textContent = questionText
    //questions[i].choices[0]
}
*/


//