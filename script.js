let butnn = document.getElementById('butnn');
let check = document.getElementById('check');
let output = document.getElementById('ouroutput');
let stageOutPut = document.getElementById('stage');
let random = document.getElementById('random');
let pointBody = document.getElementById('points');
let input = document.getElementById('userinput');
let username = document.getElementById('username');
let userNameDiv = document.getElementById('userNameDiv');
let player = document.getElementById('player');


// Function to generate random numbers
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// start the game
function startGame(){
    player.style.display = 'block';
    player.innerHTML = `Player: ${username.value}`;
    butnn.style.display = 'none';
    input.style.display = 'block';
    userNameDiv.style.display = 'none';
    output.style.display = 'block';
    random.style.display = 'block';
    pointBody.style.display = 'block';
    stageOutPut.style.display = 'block';
    check.style.display = 'block';
    let min = 1;
    let max = 2;
    let stage = 1;
    let points = 0;
    let correct = true;
    let randomNumber = 1;
    if(correct){
        check.addEventListener('click', function(){
            randomNumber = generateRandomNumber(min, max);
            if( input.value > randomNumber){
                correct = false;
                random.innerHTML = "GAME OVER";
                output.innerHTML = "too high, restart again!";
                pointBody.innerHTML = `Total Points: ${points}`;
            } else if ( input.value < randomNumber){
                correct = false;
                output.innerHTML = "too low, restart again!";
                random.innerHTML = "GAME OVER";
                pointBody.innerHTML = `Total Points: ${points}`
            } else {
                output.innerHTML = "correct!";
                random.innerHTML = `Guess a number between ${min} to ${max}`;
                points += 3;
                pointBody.innerHTML = `Points: ${points}`
                stage += 1;
                max += 1;
                stageOutPut.innerHTML = `LEVEL ${stage}`;
            }
        })
    }
}

butnn.addEventListener('click', startGame);