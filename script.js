let start_btn = document.getElementById("start-btn");
let question_p = document.getElementById("question");
let choices_div = document.getElementById("choices");
let next_btn = document.getElementById("next-btn");
let submit_btn = document.getElementById("submit-btn");
let msg_div = document.getElementById("message");
let qno_h3 = document.getElementById("qno");

let questionIndex =0;
let score =0;

function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
var questions = [
    new Question("Hyper Text Markup Language Stand For?", ["JavaScript", "XHTML","CSS", "HTML"], "HTML"),
    new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("Which is not a JavaScript Framework?", ["Python Script", "JQuery","Django", "NodeJS"], "Django"),
    new Question("Which is used for Connect To Database?", ["PHP", "HTML", "JS", "All"], "PHP"),
    new Question("What is the symbol(s) to comment out one line in JavaScript?",["//This is a comment","**This is a comment","%% This is a comment","** This is a comment **"],"//This is a comment")
];

function isCorrectAnswer(choices,i){
    return questions[i].answer === choices;
}

function guess(id,choices,i){
    let btn = document.getElementById(id);
    
    btn.onclick = function(){
        let value = isCorrectAnswer(choices,i);
        if(value){
            score++;
            btn.classList.add("btn-correct");
            setTimeout(function(){
                btn.classList.remove("btn-correct");
            },500);
            msg_div.classList.remove("hide");
            msg_div.classList.add("result");
            msg_div.innerHTML = 'Correct Answer!!!';
        }
        else{
            btn.classList.add("btn-wrong");
            setTimeout(function(){
                btn.classList.remove("btn-wrong");
            },500);
            msg_div.classList.remove("hide");
            msg_div.classList.add("result");
            msg_div.innerHTML = 'OOPS!! Wrong Answer<br>Correct Answer is '+questions[i].answer;
        }
    }    
}


function showQuestion(i){
    let q = questions[i];
    question_p.innerHTML = q.text;
    //progress of question no
    let currentqno = questionIndex+1;
    qno_h3.innerHTML = "Question "+ currentqno+" of "+ questions.length;
}

function showChoices(i){
    let c = questions[i].choices;
    choices_div.classList.remove("hide");
    choices_div.classList.add("btn-grid")
    for(let j=0;j<c.length;j++){
        let btn = document.getElementById("btn"+j);
        btn.innerHTML = c[j];
        guess("btn"+j,c[j],i);
    }
}

submit_btn.addEventListener("click",function(){
    question_p.style.fontSize= "40px";
    question_p.style.fontWeight= "900";
    question_p.innerHTML = 'Your Score<br>' + score;
    choices_div.classList.add("hide");
    next_btn.classList.add("hide");
    submit_btn.classList.add("hide");
    msg_div.classList.add("hide");
    qno_h3.classList.add("hide");
});


next_btn.addEventListener("click",function(){
   
    questionIndex++;
    if(questionIndex === questions.length-1){
        next_btn.classList.add("hide");
        submit_btn.classList.remove("hide");
    }
    msg_div.classList.add("hide");
    showQuestion(questionIndex);
    showChoices(questionIndex);
});


start_btn.addEventListener("click",function(){
    start_btn.classList.add("hide");
    showQuestion(questionIndex);
    showChoices(questionIndex);
    next_btn.classList.remove("hide");
    qno_h3.classList.remove("hide");
});







