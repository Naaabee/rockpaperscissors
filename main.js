let images = ['./images/paper.png', 
'./images/rock.png',
'./images/scissors.png'
]

let int = 0;
let comscore = 0;
let score = 0;
let playerChoice = document.getElementById('playerImg').src=images[0];
let computerChoice = document.getElementById('comImg').src=images[0];
const scissors = document.getElementById('playerImg').src=images[2];
const rock = document.getElementById('playerImg').src=images[1];
const paper = document.getElementById('playerImg').src=images[0];


//Player select image
function right() {
    if (int < 2) {
        int ++;
        playerChoice = document.getElementById('playerImg').src=images[int];
    } else {
        int = 0;
        playerChoice = document.getElementById('playerImg').src=images[int];
    }
    console.log(int)
}

function left() {
    if (int > 0) {
        int --;
        playerChoice = document.getElementById('playerImg').src=images[int];
    } else {
        int = 2;
        playerChoice = document.getElementById('playerImg').src=images[int];
    }
    console.log(int)
}

//Computer generate image

function playGame() {
    let randomInt = Math.floor(Math.random()*3);
    computerChoice = document.getElementById('comImg').src=images[randomInt];

    document.getElementById('restart-section').style.display = 'block';
    document.getElementById('shoot-button').disabled = true;

    
    if (playerChoice === computerChoice) {
        document.getElementById('wnl').innerHTML = "It's a tie";
        return;
    } 
 
    if (playerChoice === rock) {
        if (computerChoice === paper) {
            document.getElementById('wnl').innerHTML = 'Computer Won';
            comscore += 1;
            document.getElementById('comscore').innerHTML = comscore;
        } else {
            document.getElementById('wnl').innerHTML = 'You Won';
            score += 1;
            document.getElementById('score').innerHTML = score;
        }
    }

    if (playerChoice === paper) {
        if (computerChoice === scissors) {
            document.getElementById('wnl').innerHTML = 'Computer Won';
            comscore += 1;
            document.getElementById('comscore').innerHTML = comscore;
        } else {
            document.getElementById('wnl').innerHTML = 'You Won';
            score += 1;
            document.getElementById('score').innerHTML = score;
        }
    }    

    if (playerChoice === scissors) {
        if (computerChoice === rock) {
            document.getElementById('wnl').innerHTML = 'Computer Won';
            comscore += 1;
            document.getElementById('comscore').innerHTML = comscore;
        } else {
            document.getElementById('wnl').innerHTML = 'You Won';
            score += 1;
            document.getElementById('score').innerHTML = score;
        }
    }    
    //console.log(playerChoice)
    //console.log(computerChoice)
}



function restart() {
    document.getElementById('restart-section').style.display = 'none';
    playerChoice = document.getElementById('playerImg').src=images[0];
    computerChoice = document.getElementById('comImg').src=images[0];
    document.getElementById('shoot-button').disabled = false;
    //console.log(int)
}
