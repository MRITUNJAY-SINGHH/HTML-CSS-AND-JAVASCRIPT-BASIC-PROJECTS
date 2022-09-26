const num1 = Math.floor(Math.random()*10);
const num2 = Math.floor(Math.random()*10);


const questionEl = document.querySelector(".question")
const formEl = document.querySelector(".form")
const inputEl = document.querySelector(".input")
const scoreEl = document.querySelector(".score")


 let score =JSON.parse(localStorage.getItem("score"))

 if(!score){
   score = 0;
 }


scoreEl.innerText = `SCORE:${score}`
 





questionEl.innerText = `WHAT IS ${num1} MULTIPLY BY ${num2}?`;

const correctans = num1* num2;

formEl.addEventListener("submit", ()=>{
 const Userans = +inputEl.value;
 if(Userans==correctans){
     score++;
   console.log(score);
   updatescore()
 }
 else{
        score--
     console.log(score);
     updatescore()
 }
})

function updatescore(){
   localStorage.setItem("score", JSON.stringify(score));
}