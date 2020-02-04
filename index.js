console.log("Welcome to Rock, Paper, Scissors!");

const choices = ['rock', 'paper', 'scissors']

// Obtain a choice from the user

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

function handleUserResponse (response) {

    // Strip/Ignore capitalisation 
    response = response.toLowerCase();
    
    // Validate user's choice and tell them if they made a mistake

    if (response != 'rock', 'paper', 'scissors') {
    console.log("Sorry, that's invalid. Please choose either rock, paper or scissors!");
}

// Make a random selection from the computer

randomChoice = choices.random()
console.log(randomChoice)
    // A random choice of Rock, Paper, Scissors
// Compare the two choices

//Report on who won
    console.log(response);
    readline.close();
}
readline.question("Please choose either rock, paper or scissors!\n", handleUserResponse)