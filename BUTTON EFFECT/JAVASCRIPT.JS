const btnEl = document.querySelector(".btn")


btnEl.addEventListener("mouseover", (e)=>{
    const x=(e.pageX-btnEl.offsetLeft)
    const y=(e.pageY-btnEl.offsetTop)
    btnEl.style.setProperty("--Xpos", x + "px")
    btnEl.style.setProperty("--Ypos", y + "px")
})