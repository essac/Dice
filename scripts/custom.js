var btn = document.getElementById("animatedBtn");
var diceRoller = document.getElementById("diceRoller");

diceRoller.onclick = function () {

    //Audio function
    var audio = new Audio('audio/dice4.mp3');
    audio.play();

    btn.className += " dice";

    //Animation
    var delay = 500;

    setTimeout(function () {
        btn.className = "animated";
    }, delay);

    //Album länk
    var urlImage = "./img/dice3d/";

    //Tärning
    var diceNr = 0;
    diceNr = Math.floor(Math.random() * 6) + 1;
    btn.style.background = "url(" + urlImage + diceNr + ".png)";
    btn.style.backgroundSize = "contain";
}