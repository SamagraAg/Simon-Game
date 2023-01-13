
//defining audio variables
var audio = new Audio('sounds/blue.mp3');
var audio2 = new Audio('sounds/red.mp3');
var audio3 = new Audio('sounds/yellow.mp3');
var audio4 = new Audio('sounds/green.mp3');
var wrongAns = new Audio('sounds/wrong.mp3');

var level = 0;
var FirstTime = true;
var btnColors = ["green", "red", "yellow", "blue"]
var gamePattern = [];
var userClickedPattern = [];

//Function to Restart the game after failing
function startOver()
{
    level = 0;
    gamePattern = [];
    FirstTime = true;
}

//Function for checking the answer of user
function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                newSequence();
            }, 1000);
        }
    }
    else {
        wrongAns.play();
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);
        $("h2").text("Game Over, Press Any Key to Restart");
        startOver();
    }

}

//Event Listener for starting the game
$(document).keydown(function () {
    if (FirstTime) {
        $("h2").text("level " + level);
        newSequence();
    }
    FirstTime = false;
});

//Event listener for clicking of buttons
$(".btn").click(function (e) {
    var UserChosenColor = this.id;
    userClickedPattern.push(UserChosenColor);
    playSound(UserChosenColor);
    animation(UserChosenColor);
    checkAnswer(userClickedPattern.length - 1);
});

function newSequence() {
    //reseting the userClickedPattern every time this function is called
    userClickedPattern = [];

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
    level++;
    $("h2").text("level " + level);
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

function animation(color) {
    var id = "#" + color;
    $(id).addClass("pressed");
    function removeAnimation() {
        $(id).removeClass("pressed");
    }
    setTimeout(removeAnimation, 100);
}




