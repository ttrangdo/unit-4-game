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

// target number for the round
var randomNumber = [];
//  * 120 = returns integer from 0 to 119
// (Math.random()*(max-min+1)+min);
var randomNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
$("#random-number").text(randomNumber);

// display randomNumber
    $("#random-number").html(randomNumber);

// create gems with different/unique number values

var diamond = Math.floor(Math.random() * 12) + 1;
var ruby = Math.floor(Math.random() * 12) + 1;
var topaz = Math.floor(Math.random() * 12) + 1;
var emerald = Math.floor(Math.random() * 12) + 1;
// log in console so player can keep track of which value each gem stores

console.log("Diamond value: " + diamond);
console.log("Ruby value: " + ruby);
console.log("Emerald value: " + topaz);
console.log("Sapphire value: " + emerald);

// click event applies to every gem on the page

$("#diamond").on("click", function () {
    counter = counter + diamond;
    $("#counter").text(counter);
    console.log("Counter: " + counter);
    updateCounter();
})

$("#ruby").on("click", function () {
    counter = counter + ruby;
    $("#counter").text(counter);
    console.log("Counter: " + counter);
    updateCounter();
})

$("#emerald").on("click", function () {
    counter = counter + emerald;
    $("#counter").text(counter);
    console.log("Counter: " + counter);
    updateCounter();
})

$("#sapphire").on("click", function () {
    counter = counter + sapphire;
    $("#counter").text(counter);
    console.log("Counter: " + counter);
    updateCounter();
})


// function for update counter(score) and win/loss logic

function updateCounter() {
    if (counter === randomNumber) { // If the counter equals randomNumber, add 1 to wins.
        wins++;
        $("#wins").text("Wins: " + wins);
        $("#result").text("YOU WON!!!!");
        resetGame();
// If score goes over the randomNumber, add 1 to losses.
    } else if (score !== 0 && score > randomNumber) { 
        losses++;
        $("#losses").text("Losses: " + losses);
        $("#result").text("YOU LOST!!!");
        resetGame();
    }
}

function resetGame() {
    document.location.href = " ";

}
   
