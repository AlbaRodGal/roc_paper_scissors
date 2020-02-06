console.log('Welcome to Rock, Paper, Scissors!');

//Obtain a choice from the user

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function handleUserResponse (response) {
//Strip capitalisation/ignore capitalisation of words
    
    const choices = ['rock', 'paper', 'scissors'];
    response = response.toLowerCase();
    response.match(/rock|paper|scissors/g))
    //A random choice of Rock, Paper or Scissors
    let rightAnswer = Math.floor(Math.random()*choices.length);
    console.log(rightAnswer);
    //Validate the user's choice and tell them if they if they made a mistake

    //Compare the two choices
 
    //Report on who won
    console.log(response);
    readline.close();
}
readline.question("Please choose either rock, paper or scissors!\n", handleUserResponse)