var time = 75;
var timerEl = document.querySelector(".button-timer");
var start = document.getElementsByClassName("start-button")[0];
console.log(start);
var submit = document.getElementsByClassName("submit")[0];
var finishBox = document.querySelector(".finish-box");


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

function gameOver() {

    questionBox.classList.add("hide")
    finishBox.classList.remove("hide")
}
//user clicks start
//hide intro box
//show quiz box
//timer starts


start.addEventListener("click", function(){ 
    introBox.classList.add("hide")  
    questionBox.classList.remove("hide")
    startTimer()
    iterate(id)
})

submit.addEventListener("click", function() {
    console.log("submit");
})

//user already clicked start
//load in the first question
//load in the 4 choices of question
//user can click any answer or choice
//check if the user clicked the correct choice
const questions = [
    {
        id: 0,
        questionText: "What is an array?",
        choices: [
            { text: "A word", isCorrect: false },
            { text: "A sentence", isCorrect: false },
            { text: "A collection of values", isCorrect: true },
            { text: "A number", isCorrect: false }
        ]
        
    },
    {
        id: 1,
        questionText: "Inside which HTML element do we put the JavaScript?",
        choices: [
            { text: "<javascript>", isCorrect: false},
            { text: "<scripting>", isCorrect: false},
            { text: "<script>", isCorrect: true},
            { text: "<js>", isCorrect: false}
        ]
    },
    {
        id: 2,
        questionText: "What does HTML stand for?",
        choices: [
            { text: "Hyper Trainer Marking Language", isCorrect: false},
            { text: "Hyper Text Marketing Language", isCorrect: false},
            { text: "Hyper Text Markup Leveler", isCorrect: false},
            { text: "Hyper Text Markup Language", isCorrect: true}
        ]
    },
    {
        id: 3,
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

  const question = document.getElementById("question");
  console.log(questions[id]);
  question.innerText = questions[id].questionText;
  if (questions[id].questionText == 3) {
    return check.classList.add("hide") + next.classList.add("hide");
    
  } 


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





/*
function loadQuestion(i) {
    var questionText = questions[i].questionText
    var questionEl = document.querySelector("#questions")
    questionEl.textContent = questionText
    //questions[i].choices[0]
}
*/


//