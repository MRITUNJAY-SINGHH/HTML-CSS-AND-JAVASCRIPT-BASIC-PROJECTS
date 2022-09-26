const textareaEl = document.getElementById("text")
const totalCounterEl = document.getElementById("total-counter")
const remainCounterEl = document.getElementById("remaining-counter")


textareaEl.addEventListener("keyup",()=>{
     updatecounters()
} )
updatecounters()

function updatecounters() {
   totalCounterEl.innerText = textareaEl.value.length;
   remainCounterEl.innerText=textareaEl.getAttribute("maxlength")- textareaEl.value.length;
}
