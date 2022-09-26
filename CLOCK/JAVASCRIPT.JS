const hourEl=document.querySelector(".hour")
const minuteEl=document.querySelector(".minute")
const secondEl=document.querySelector(".second")

function UpdateClock() {
const currentDate = new Date();

    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();
    const hourdeg = (hour / 12) *360;
    hourEl.style.transform = `rotate(${hourdeg}deg)`;
    const minutedeg =(minute / 60) *360;
    minuteEl.style.transform=`rotate(${minutedeg}deg)`;
    const seconddeg= (second / 60) *360;
    secondEl.style.transform=`rotate(${seconddeg}deg)`;
}
 setInterval(UpdateClock,1000);
 




