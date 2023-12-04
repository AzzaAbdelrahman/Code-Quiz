// user score
var userScore = 0;

// Adding correct and incorect sound files
var correctAnswerAudio = document.createElement("audio");
correctAnswerAudio.setAttribute('src', 'assets/sfx/correct.wav');

var incorrectAnswerAudio = document.createElement("audio");
incorrectAnswerAudio.setAttribute('src', 'assets/sfx/incorrect.wav');


// countdown timer
function countDown() {
    let timer = setInterval(function () {
        time--;
        document.getElementById("time").innerHTML = time;
        if (time <= 0) {
            // if time runs out, show end screen
            time = 0;
            showEndScreen();
            clearInterval(timer);
            // console.log("Time Up!");
        } else {
            // console.log(time);
            return time;
        }
    }, 1000);
};