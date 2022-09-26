 let num = 0;

const value= document.querySelector(".value");
const btns= document.querySelectorAll(".btn");

btns.forEach((btn)=>{
   
    btn.addEventListener("click", (event)=> {
     const styles = event.currentTarget.classList;
     if(styles.contains("btn-red")){
           num--;
     }
     else if(styles.contains("btn-blue")){
        num++;
     }
     else{
        num = 0;
     }
     value.textContent = num;
     if(num>0){
        value.style.color = "green";
     }
     else if(num==0){
         value.style.color = "black";
     }
     else{
        value.style.color = "red";
     }
    });
});



