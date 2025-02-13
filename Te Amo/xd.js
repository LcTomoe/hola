const btnRandom = document.querySelector("#Random-btn")

function moverAleatoriamente (btn){
    btn.style.fontWeight = "bolder";
    btn.style.fontWeight = "absolute";
    btn.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    btn.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

btnRandom.addEventListener("mouseenter", function (e){
    moverAleatoriamente(e.target)
})
