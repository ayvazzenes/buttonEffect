const btnefekt = document.querySelector(".btn");

btnefekt.addEventListener("mouseover", (e) => {
    let x = e.pageX - btnefekt.offsetLeft;
    let y = e.pageY - btnefekt.offsetTop;

    btnefekt.style.setProperty("--xPos", x + "px");
    btnefekt.style.setProperty("--yPos", y + "px");


});