console.log('Welcome to Rock, Paper, Scissors!');

//Obtain a choice from the user

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function handleUserResponse (response) {
//Strip capitalisation/ignore capitalisation of words

//Validate the user's choice and tell them if they if they made a mistake
 
    const choices = ['rock', 'paper', 'scissors'];
    response = response.toLowerCase();
    if (!response.match(/rock|paper|scissors/g)){
        console.log('Error! Please choose whether rock, paper or scissors')
    }
    //A random choice of Rock, Paper or Scissors
    let computerChoice = Math.floor(Math.random()*choices.length);
    console.log('Computer: ' + choices[computerChoice])

    //Compare the two choices
    if (computerChoice === 0 && response === 'scissors'||
        computerChoice === 2 && response === 'paper'||
        computerChoice === 1 && response === 'rock'){
            console.log('Computer wins')
        } 
    if (computerChoice === 0 && response === 'paper'||
        computerChoice === 2 && response === 'rock' ||
        computerChoice === 1 && response === 'scissors'){
            console.log('User wins!')
        }
    if (computerChoice === 0 && response === 'rock'||
        computerChoice === 1 && response === 'paper' ||
        computerChoice === 2 && response === 'scissors'){
        console.log('This is a draw')
    }
 
    //Report on who won
    readline.close();
}
readline.question("Please choose either rock, paper or scissors!\n", handleUserResponse)