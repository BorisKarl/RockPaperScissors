const buttons = document.querySelectorAll('input');


    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }
    
    function computerPlay(){
        let r = "Stein";
        let p = "Papier";
        let s = "Schere";
        let answer = [r, p, s];
        let i = getRandomInt(0,3);
        return answer[i];
    }
    function disableButtons() {
        buttons.forEach(elem => {
            elem.disabled = true
        })
    }
  
let playerScore = 0;
    let computerScore = 0;
    let result = "";


function game(playerSelection){
    
    const a = playerSelection;
    const b = computerPlay();
    
    if(
             (a == "Stein" && b == "Schere") ||
             (a == "Papier" && b == "Stein") ||
             (a == "Schere" && b == "Papier")
            ) 
            {    
                playerScore += 1;
                result = (`Gewonnen! ${a} schlägt ${b} ! <br><br>Spieler: ${playerScore} <br>Computer: ${computerScore}`)
                if (playerScore == 5) {
                    result += '<br><br>Du hast gewonnen! Lade die Seite neu, um nochmal zu spielen'
                    disableButtons();
                }
    }else if (a == b){
        result = (`Unentschieden! Beide Spieler wählten ${a}.<br><br>Spieler: ${playerScore}<br>Computer: ${computerScore}`);       
  }else{
        computerScore += 1;
        result = (`Verloren! ${b} schlägt ${a} ! <br><br>Spieler: ${playerScore} <br>Computer: ${computerScore}` )
        if (computerScore == 5) {
            result += '<br><br>Der Computer hat gewonnen! Lade die Seite neu, um nochmal zu spielen'
            disableButtons();
    }
 
}
document.getElementById('result').innerHTML = result
return
}
    
buttons.forEach(button => {
        button.addEventListener('click', function(){
            game(button.value)
        })
    })

