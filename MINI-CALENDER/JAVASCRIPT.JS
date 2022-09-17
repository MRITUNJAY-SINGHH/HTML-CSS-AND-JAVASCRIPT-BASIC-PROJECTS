const monthEl = document.querySelector(".month-name");
const dayEl = document.querySelector(".day-name");
const numberEl = document.querySelector(".day-number");
const yearEl = document.querySelector(".year");


const date =new Date();
const month=date.getMonth();


monthEl.innerText= date.toLocaleDateString("en",{
    month:"long"

});
dayEl.innerText= date.toLocaleDateString("en",{
    weekday:"long"
});
numberEl.innerText= date.getDate();
yearEl.innerText= date.getFullYear();

