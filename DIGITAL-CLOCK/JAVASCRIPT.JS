const hourEl = document.querySelector(".hour")
const minuteEl = document.querySelector(".minute")
const secondEl = document.querySelector(".second")
const ampmEl = document.querySelector(".ampm")

function updateClock(){
 const CurrentTime = new Date();

    let hour = CurrentTime.getHours();
    let minute = CurrentTime.getMinutes();
    let second = CurrentTime.getSeconds();
    let ampm= "AM";

   if(hour>12){
    // hour = hour - 12; /****ye time change karne ke liye hai ager 12 ghate chahiye to enable nahi to disable */
    ampm = "PM";
   }

    hour = hour<10 ?"0"+hour : hour;
    minute = hour<10 ?"0"+minute : minute;
    hourEl.innerText = hour;
    minuteEl.innerText = minute;
    secondEl.innerText = second;
   ampmEl.innerText = ampm;

}

updateClock();
setInterval(updateClock,1000);
