var audio = new Audio('sounds/blue.mp3');
var audio2 = new Audio('sounds/red.mp3');
var audio3 = new Audio('sounds/yellow.mp3');
var audio4 = new Audio('sounds/green.mp3');




var btnColors = ["green", "red", "yellow", "blue"]
var gamePattern = [];

function newSequence() {

    //generating random number between 0-3
    var randomNumber = Math.floor(((Math.random()) * 4));

    // randomly choosing the color
    var randomColor = btnColors[randomNumber];

    //adding the chosen color to gamePattern
    gamePattern.push(randomColor);

    var mString = "#" + randomColor;
    $(mString).fadeOut(100);
    $(mString).fadeIn(100);
    playSound(randomColor);

}

function playSound(color) {
    switch (color) {
        case "blue":
            audio.play();
            console.log(color);
            break;
        case "red":
            audio2.play();
            console.log(color);
            break;
        case "yellow":
            audio3.play();
            console.log(color);
            break;
        case "green":
            audio4.play();
            console.log(color);
            break;

        default:
            break;
    }
}
newSequence();



