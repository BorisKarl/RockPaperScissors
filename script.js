
let wins = 0;
let loss = 0;
function game(){
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
    
    let b = computerPlay();
    
    let playerSelection = prompt("Stein, Schere oder Papier?").toLowerCase();
    alert("Computer: " + b);
    let a = playerSelection;
    if(a == b) {
        alert("Unentschieden!")
    }else if(a == "stein" && b == "schere") {
        alert("Gewonnen! Stein schlägt Schere!");
        wins += 1;
    }else if(a == "papier" && b == "stein") {
        alert("Gewonnen! Papier schlägt Stein!");
        wins+= 1;
    }else if(a == "schere" && b == "papier") {
        alert("Gewonnen! Schere schlägt Papier!");
        wins+= 1;
    }else if(a == "stein" && b == "papier") {
        alert("Gewonnen! Papier schlägt stein!");
        loss+= 1;
    }else if(a =="papier" && b == "schere") {
        alert("Gewonnen! Schere schlägt Papier!");
        loss+= 1;
    }else if(a =="schere" && b =="stein") {
        alert("Gewonnen! Stein schlägt Schere!")
        loss+= 1;
    }else{
        prompt("Bitte gib Papier, Stein oder Schere ein!");
       
    }
   alert("Spielstand: Spieler " + wins + " Computer " + loss);
   //alert("Spielerwahl: " + a);
   
    }

    for(i = 0; i < 5; i++){
    game();
    };
    if (wins > loss) {
        alert("Du hast mit " + wins + " Siegen gewonnen!", "Stein, Schere, Papier");

    }else if(loss > wins){
        alert("Du hast mit " + wins + " zu " + loss + " verloren.");
    }else{
        alert("Unentschieden!");
    };