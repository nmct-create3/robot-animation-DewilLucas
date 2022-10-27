// de animatie starten
// Maak van het animate element een variable en maak een functie die de de animatie start met de method beginElement.
let button = document.querySelector(".js-button");
button.addEventListener("click", function () {
    console.log("click");
    let animate = document.querySelector(".js-animate");
    animate.beginElement();
});
// Maak een functie die de animatie start met de method beginElement.
//animation.beginElement();