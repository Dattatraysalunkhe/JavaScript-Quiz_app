const question=[
    {
        question:"Which among the following imposes a greater burden (relative to resources) on the poor than on the rich ?",
        answer:[
            {text:"Progressive tax",correct:false},
            {text:"Regressive Tax",correct:true},
            {text:"Lump Sum tax",correct:false},
            {text:"Proportional tax",correct:false},
        ]
    },
    {
        question:"Which among the following is used for a situation of “Too much money chasing too few goods?",
        answer:[
            {text:"Demand Pull Inflation",correct:true},
            {text:"Cost pull inflation",correct:false},
            {text:"Stagflation",correct:false},
            {text:"Hyperinflation",correct:false},
        ]
    },
    {
        question:"A monopolist will be able to maximize his profits when _________?",
        answer:[
            {text:"His output is maximum",correct:false},
            {text:"He charges a Higher price",correct:false},
            {text:"His average cost is minimum",correct:false},
            {text:"His marginal cost is equal to the marginal revenue",correct:true},
        ]
    },
    {
        question:"Which of the following is the movement along the supply curve??",
        answer:[
            {text:"Curve Supply",correct:false},
            {text:"Contraction of supply",correct:false},
            {text:"Expansion of supply",correct:false},
            {text:"Expansion and contraction of supply",correct:true},
        ]
    },
];
const questionElement =document.getElementById("question")
const ansbutton =document.getElementById("ansbutton")
const nextbtn =document.getElementById("nextbtn")

let currentQuestionIndex=0;
let score=0;

function startquiz(){
    currentQuestionIndex=0;
    score=0;
    nextbtn.innerHTML="next"
    showQuestion()
}

function showQuestion(){
    resetState()
    let currentQuestion=question[currentQuestionIndex];
    let questionno=currentQuestionIndex+1;
    questionElement.innerHTML = questionno+""+currentQuestion.question;

    currentQuestion.answer.forEach((answer)=>{
          const button =document.createElement("button")
          button.innerHTML=answer.text;
          button.classList.add("btn")
          ansbutton.appendChild(button)
          if(answer.correct)
          {
            button.dataset.correct=answer.correct
          }
          button.addEventListener("click",selectAnswer)
    })
}
function resetState(){
    nextbtn.style.display="none"
    while(ansbutton.firstChild){
        ansbutton.removeChild(ansbutton.firstChild);
    }
}

function selectAnswer(e){
 const selectbtn =e.target;
 const isCorrect = selectbtn.dataset.correct === "true";
 if(isCorrect)
 {
     selectbtn.classList.add("correct")
     score++;
 }
 else{
    selectbtn.classList.add("incorrect")
 }
 Array.from(ansbutton.children).forEach(button=>{
    if(button.dataset.correct === "true")
    {
        button.classList.add("correct");
    }
    button.disabled =true;
 })
 nextbtn.style.display="block"
}

function showScore(){
    resetState();
    questionElement.innerHTML=`you scored ${score}  out  of ${question.length}`
    nextbtn.innerHTML="play again"
    nextbtn.style.display="block";
}

function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < question.length)
  {
    showQuestion();
  }
  else{
    showScore();
  }
}

nextbtn.addEventListener("click",()=>{
    if(currentQuestionIndex < question.length)
    {
        handleNextButton();
    }
    else{
        startquiz()
    }
})
startquiz()