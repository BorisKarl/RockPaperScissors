

function rockPaperScissors(playerSelection){
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }
    
    function computerPlay(){
        let r = "rock";
        let p = "paper";
        let s = "scissors";
        let answer = [r, p, s];
        let i = getRandomInt(0,3);
        return answer[i];
    }
    
    let b = computerPlay();
    


    let a = playerSelection.toLowerCase();
    let wins = 0;
    let loss = 0;
    if(a == b) {
        console.log("That´s a tie!")
    }else if(a == "rock" && b == "scissors") {
        console.log("You win! Rock beats scissors!");
        wins = wins++;
    }else if(a == "paper" && b == "rock") {
        console.log("You win! Paper beats rock!");
        wins = wins++;
    }else if(a == "scissors" && b == "paper") {
        console.log("You win! Scissors beat paper!");
        wins = wins++;
    }else if(a == "rock" && b == "paper") {
        console.log("You lose! Paper beats rock!");
        loss = loss++;
    }else if(a =="paper" && b == "scissor") {
        console.log("You lose! Scissors beat paper!");
        ++loss;
    }else if(a =="scissors" && b =="rock") {
        console.log("You lose! Rock beats scissors!")
        ++loss;
    }else{
        console.log("Please enter Rock, Paper or Scissors");
       
    }
   
    
    }
    
    /*if(console.count() == 5){
        if(wins > loss){
            console.log("You win the game with wins[i] to loss[i]!")
        }else if(wins<loss) {
            console.log("You lose!")
        }
    }*/

    
    
