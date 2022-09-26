
const mainButton= document.querySelector(".one");
const body= document.querySelector("body");
const head= document.querySelector("h1");
const current= document.querySelector(".current");
const btnn= document.querySelector("button");


function randomColorGenerator(){
    const red=Math.floor(Math.random()*256);
    const green=Math.floor(Math.random()*256);
    const blue=Math.floor(Math.random()*256);
    const randomColor=`rgb(${red}, ${green}, ${blue})`
    return randomColor;
}
mainButton.addEventListener("click",()=>{
    
    const randomColor=randomColorGenerator();
    body.style.backgroundColor=randomColor;
    head.style.backgroundColor=randomColor;
    btnn.style.backgroundColor=randomColor;
    current.textContent=randomColor;
    
});





   
               

