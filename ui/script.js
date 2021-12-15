const buttons = document.querySelectorAll('input');
buttons.addEventListener('click', game());

function game(playerSelection){
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
        return answer[i];
    }
    let wins = 0;
    let loss = 0;    
    let b = computerPlay();
    let a = playerSelection;
    let result = "";
    if(a == b) {
        result = "Unentschieden!";
    }else if(a == "stein" && b == "schere") {
        result = "Gewonnen! Stein schlägt Schere!";
        wins += 1;
    }else if(a == "papier" && b == "stein") {
        result = "Gewonnen! Papier schlägt Stein!";
        wins+= 1;
    }else if(a == "schere" && b == "papier") {
        result = "Gewonnen! Schere schlägt Papier!";
        wins+= 1;
    }else if(a == "stein" && b == "papier") {
        result = "Gewonnen! Papier schlägt stein!";
        loss+= 1;
    }else if(a =="papier" && b == "schere") {
        result = "Gewonnen! Schere schlägt Papier!";
        loss+= 1;
    }else if(a =="schere" && b =="stein") {
        result = "Gewonnen! Stein schlägt Schere!";
        loss+= 1;
    }else{
        //rompt("Bitte gib Papier, Stein oder Schere ein!");
       
    }
   
   /*result = "Spielstand: Spieler " + wins + " Computer " + loss + ".";
   document.getElementById('result').innerHTML = result;
   return result;*/

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            game(button.value)
        })
    });

   //alert("Spielerwahl: " + a);
   
    }
    
    for(i = 0; i < 5; i++){
    game();
    };
    /*
    if (wins > loss) {
        alert("Du hast mit " + wins + " Siegen gewonnen!", "Stein, Schere, Papier");

    }else if(loss > wins){
        alert("Du hast mit " + wins + " zu " + loss + " verloren.");
    }else{
        alert("Unentschieden!");
    };
    */