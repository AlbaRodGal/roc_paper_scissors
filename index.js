console.log('Welcome to Rock, Paper, Scissors!');

//Obtain a choice from the user

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function handleUserReponse (response){
    //Validate the user's choice and tell them if they if they made a mistake
    const choices = ['rock', 'paper', 'scissors'];

    response = response.toLowerCase();
    
    if (response in choices) {
        return true;
    } else{
        return false;
    }
}

    //Strip capitalisation/ignore capitalisation of words

    //Make a random selection for the computer
    //A random choice of Rock, Paper or Scissors

    //Compare the two choices

    //Report on who won
//     console.log(response);
//     readline.close();
// }

readline.question("Please choose either rock, paper or scissors!\n", handleUserReponse);