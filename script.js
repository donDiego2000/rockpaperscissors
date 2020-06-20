var round = 1;
var scoreComputer = 0;
var scorePlayer = 0;
var computerWeapon;
var roundResult;
var rockPlayer = document.getElementById("rockPlayer");
var paperPlayer = document.getElementById("paperPlayer");
var scissorsPlayer = document.getElementById("scissorsPlayer");
var weaponOpponent = document.getElementById("iconWeaponOpponent");


function Computer (name, style, weaponOpponent) {
    this.name = name;
    this.style = style;
    this.weaponOpponent = weaponOpponent;
}

// Functions that are re-used

function computerPlay() { // en fait, c'est la fonction qui = style
    var style = (Math.random() * 3);
    if (style <1) {
        computerWeapon="rock";
        weaponOpponent.setAttribute("src", "rock.png");
    } else if (style <2) {
        computerWeapon="paper"
        weaponOpponent.setAttribute("src", "paper.png");
    } else {
        computerWeapon="scissors"
        weaponOpponent.setAttribute("src", "scissors.png");
    }
    weaponOpponent.setAttribute("class","iconWeaponSelected");
}

function compareWeapons (playerWeapon) {
    if (playerWeapon == computerWeapon) {
        roundResult = "Draw!";
    } else if (playerWeapon == "rock") {
        if (computerWeapon == "scissors") {
            roundResult = "You win!";
            scorePlayer += 1;
        } else {
            roundResult = "Computer wins!";
            scoreComputer += 1;
        }
    } else if (playerWeapon == "paper") {
        if (computerWeapon == "rock") {
            roundResult = "You win!";
            scorePlayer += 1;
        } else {
            roundResult = "Computer wins!";
            scoreComputer += 1;
        }
    } else if (playerWeapon == "scissors") {
        if (computerWeapon == "paper") {
            roundResult = "You win!";
            scorePlayer += 1;
        } else {
            roundResult = "Computer wins!";
            scoreComputer += 1;
        } 
    }
}

function displayResult() {
    document.getElementById("displayResult").innerHTML = roundResult;
    document.getElementById("playerScore").innerHTML = scorePlayer;
    document.getElementById("computerScore").innerHTML = scoreComputer;
    document.getElementById("countdown3").setAttribute("id", "countdown3Hidden");
    document.getElementById("countdown2").setAttribute("id", "countdown2Hidden");
    document.getElementById("countdown1").setAttribute("id", "countdown1Hidden");
}

function play(playerWeapon) {
    //document.getElementById("roundDisplay").innerHTML = round;
    computerPlay();
    compareWeapons(playerWeapon);
    displayResult();
    round ++;
    nextRound();
}

function nextRound() {
    document.getElementById("roundDisplay").innerHTML = round;
    setTimeout(function(){document.getElementById("countdown3Hidden").setAttribute("id", "countdown3")}, 600);
    setTimeout(function(){document.getElementById("countdown2Hidden").setAttribute("id", "countdown2")}, 1200);
    setTimeout(function(){document.getElementById("countdown1Hidden").setAttribute("id", "countdown1")}, 1800);
    setTimeout(function(){ 
        rockPlayer.setAttribute("class", "iconWeapon");
        paperPlayer.setAttribute("class", "iconWeapon");
        scissorsPlayer.setAttribute("class", "iconWeapon flipIcon");
        weaponOpponent.setAttribute("src", "oktogo.png");
        weaponOpponent.setAttribute("class", "iconWeapon");
    }, 1800);
    setTimeout(function(){document.getElementById("displayResult").innerHTML = ""}, 1800)

}

// Functions for player's play

function startGame() {
    document.getElementById("roundDisplay").innerHTML = round;
    setTimeout(function(){document.getElementById("countdownHidden").setAttribute("id", "countdown")}, 100);
    setTimeout(function(){document.getElementById("countdown3Hidden").setAttribute("id", "countdown3")}, 600);
    setTimeout(function(){document.getElementById("countdown2Hidden").setAttribute("id", "countdown2")}, 1200);
    setTimeout(function(){document.getElementById("countdown1Hidden").setAttribute("id", "countdown1")}, 1800);
    setTimeout(function(){
        rockPlayer.setAttribute("class", "iconWeapon");
        paperPlayer.setAttribute("class", "iconWeapon");
        scissorsPlayer.setAttribute("class", "iconWeapon flipIcon");
        weaponOpponent.setAttribute("src", "oktogo.png");
        weaponOpponent.setAttribute("class", "iconWeapon");
    }, 1800);
    setTimeout(function(){scissorsPlayer.setAttribute("src", "scissors.png")},1800);
    scissorsPlayer.setAttribute("onclick", "scissorsPlay()");
}


function rematch() {
    round = 1;
    scoreComputer = 0;
    scorePlayer = 0;
    rockPlayer.setAttribute("class", "iconWeaponNotSelected");
    paperPlayer.setAttribute("class", "iconWeaponNotSelected");
    scissorsPlayer.setAttribute("src", "oktogo.png");
    scissorsPlayer.setAttribute("class", "iconWeapon flipIcon");

}

function rockPlay() {
    rockPlayer.setAttribute("class", "iconWeaponSelected");
    paperPlayer.setAttribute("class", "iconWeaponNotSelected");
    scissorsPlayer.setAttribute("class", "iconWeaponNotSelected");
    play("rock");
}

function paperPlay() {
    rockPlayer.setAttribute("class", "iconWeaponNotSelected");
    paperPlayer.setAttribute("class", "iconWeaponSelected");
    scissorsPlayer.setAttribute("class", "iconWeaponNotSelected");
    play("paper");
}

function scissorsPlay() {
    rockPlayer.setAttribute("class", "iconWeaponNotSelected");
    paperPlayer.setAttribute("class", "iconWeaponNotSelected");
    scissorsPlayer.setAttribute("class", "iconWeaponSelected flipIcon");
    play("scissors");
}


/* Improvements:
- changer mon icône par une icône emoji de mec >> améliorer en laissant le choix de couleur et sexe
- mettre le round au-dessus du "rock-paper-scissors!" ∆ aux changements d'ID pour le JS
- fix ma rotation de starter image qui fait du bon boulot aussi sur scissors, mais il faut que je trouve un moyen de l'agrandir comme les autres
- finaliser le design :
    > voir comment je peux changer le format des 3 images, car ce sont elles qui font remonter le truc
    > si j'y arrive pas, mettre la partie robot en y absolute, idem pour photo hero et l'arme choisie
- créer un bouton re-start dans le footer, et y mettre aussi les instructions
- stop the game after N rounds
>>>> POSTER DANS M1M0

- trouver un moyen de passer par une classe pour rapidement coder le nom et l'weaponOpponente displayed par chaque joueur
- essayer faire plusieurs "ordi" avec méthode choisir différentes : total random (existe déjà), copycat (copie toujours le dernier), celui 
qui préfère un objet ou l'autre (genre 50-25-25%) et celui qui snobe un 
- essayer faire une version où 2 jouers peuvent se connecter et jouer l'un contre l'autre (plus dur...)
*/