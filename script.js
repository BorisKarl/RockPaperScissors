let wins = 0;
let loss = 0;
let gameCountPlayer = 0;
let gameCountComputer = 0;


const playButtons = document.querySelectorAll('button');
const result = document.getElementById('result');
const points = document.getElementById('points');
const current = document.getElementById('current');
const reset = document.createElement('button'); 
const container = document.querySelector('container')
const gameCount = document.getElementById('gameCount')
const flexcontainer = document.getElementById('flexcontainer')

gameCount.style.fontFamily = "monospace"
gameCount.style.fontSize = "2rem"
//gameCount.style.alignItems = "center"
//gameCount.style.marginLeft = "90vh"


reset.addEventListener('click', resetGame)



 playButtons.forEach((button) => {
     button.addEventListener('click', (e)=> {
         game(e.target.innerHTML.toLowerCase(), computerPlay())
     //console.log(e.target.innerHTML.toLowerCase())
     })
});


function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

function computerPlay(){
        let r = "stein";
        let p = "papier";
        let s = "schere";
        let answer = [r, p, s];
        let i = getRandomInt(0,3);
        //console.log(answer[i])
        return answer[i];
    }

function getPlayerSelection(playerSelection) {
    return playerSelection;
}

function resetGame(){
    wins = 0;
    loss = 0;
    playerSelection = "";
    answer = [];
    current.textContent = "Spieler: 0 Computer: 0"
    result.textContent = "";
    playButtons.forEach((button) => {
        button.style.display = "inline-block";
        
    })
    reset.style.display = "none"
}

function game(a, b) {
    console.log(a,b)

    if(a === b) {
        current.textContent = "Unentschieden!";
    }
    else if(a === "stein" && b === "schere") {
        current.textContent = "Gewonnen! Stein schlägt Schere!";
        wins += 1;
    }else if(a == "papier" && b == "stein") {
        current.textContent = "Gewonnen! Papier schlägt Stein!";
        wins+= 1;
    }else if(a == "schere" && b == "papier") {
        current.textContent = "Gewonnen! Schere schlägt Papier!";
        wins+= 1;
    }else if(a == "stein" && b == "papier") {
        current.textContent = "Verloren! Papier schlägt Stein!";
        loss+= 1;
    }else if(a =="papier" && b == "schere") {
        current.textContent = "Verloren! Schere schlägt Papier!";
        loss+= 1;
    }else if(a =="schere" && b =="stein") {
        current.textContent = "Verloren! Stein schlägt Schere!";
        loss+= 1;
    }
    result.textContent = "Spieler: " + wins + " Computer: " + loss;
    if(wins + loss == 5){
        result.textContent = 'Spielende'
        if (wins > loss) {
            gameCountPlayer += 1;
            result.textContent = "Du hast mit " + wins + " zu "+ loss + " gewonnen!";
            current.textContent = "Glückwunsch!"
            gameCount.textContent = gameCountPlayer + " : " + gameCountComputer;

        }else{
            gameCountComputer += 1;
            result.textContent = "Du hast mit " + wins + " zu " + loss + " verloren.";
            current.textContent = "Probier's nochmal!"
            
        }
        playButtons.forEach((button) => {
                    button.style.display = "none";
        })
        document.body.appendChild(reset)        
        reset.textContent = "Nochmal";        
        //reset.style.marginLeft = "90vh"
        reset.style.display = "block"
        gameCount.textContent = "Mensch " + gameCountPlayer + "  Computer " + gameCountComputer;
        return;
    }
}
