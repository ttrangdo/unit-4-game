// The computer generates a random number between 19 and 120
// Each gem button --> assigned a random number between 1 and 12
// User clicks on a gem button --> adds value to the score
// If score matches the random/target number exactly, user wins (alert that says you win, increase win counter, and then press reset for new number)
// If the score goes over the random number, user looses (alert that says you lose, increase losses counter, and then press reset for new random number)
// Section for game stats (wins and losses)
// Reset button resets all game stats

// -------------------------------

//  Initialize variables

var counter = 0;
var wins = 0;
var losses = 0;
var gameOver = false;

//  * 120 = returns integer from 0 to 119
// (Math.random()*(max-min+1)+min);
var randomNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
$("#random-number").text(randomNumber);

// display randomNumber
    $("#random-number").html(randomNumber);

// display wins
$("#wins").html("WINS: " + wins);
// display losses
$("#losses").html("LOSSES: " + losses);
// 
$("#counter").html("COUNTER: " + counter);

// create gems with different/unique number values

var diamond = Math.floor(Math.random() * 12) + 1;
var ruby = Math.floor(Math.random() * 12) + 1;
var topaz = Math.floor(Math.random() * 12) + 1;
var emerald = Math.floor(Math.random() * 12) + 1;

// click event applies to every gem on the page

$("#diamond").on("click", function () {
    if(gameOver === true) {
        return;
    }
    counter = counter + diamond;
    $("#counter").text(counter);
    updateCounter();
    $("#counter").html(counter);
})

$("#ruby").on("click", function () {
    if(gameOver === true) {
        return;
    }
    counter = counter + ruby;
    $("#counter").text(counter);
    updateCounter();
    
})

$("#emerald").on("click", function () {
    if(gameOver === true) {
        return;
    }
    counter = counter + emerald;
    $("#counter").text(counter);
    updateCounter();
})

$("#topaz").on("click", function () {
    if(gameOver === true) {
        return;
    }
    counter = counter + topaz;
    $("#counter").text(counter);
    updateCounter();
})


// function for update counter and win/loss logic

function updateCounter() {
    console.log(counter);
    $("#counter").text(counter);
    if (counter === randomNumber) { // If the counter equals randomNumber, add 1 to wins.
        wins++;
        $("#wins").text("Wins: " + wins);
        $("#result").text("YOU WON!!!!");
        counter = 0;
        gameOver = true;
// If counter goes over the randomNumber, add 1 to losses.
    } else if (counter !== 0 && counter > randomNumber) { 
        losses++;
        $("#losses").text("Losses: " + losses);
        $("#result").text("YOU LOST!!!");
        counter = 0;
        gameOver = true;
    }

}

function resetGame() {
    // reset counter
    counter = 0;

    // reset gameover
    gameOver = false;

    //  * 120 = returns integer from 0 to 119
    // (Math.random()*(max-min+1)+min);
    randomNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
    $("#random-number").text(randomNumber);

    // remove win/lose text
    $("#result").text("");

    // show counter 
    $("#counter").text(counter);

    // display randomNumber
    $("#random-number").html(randomNumber);
    
    // reset gems with different/unique number values
    diamond = Math.floor(Math.random() * 12) + 1;
    ruby = Math.floor(Math.random() * 12) + 1;
    topaz = Math.floor(Math.random() * 12) + 1;
    emerald = Math.floor(Math.random() * 12) + 1;

        
}
   
