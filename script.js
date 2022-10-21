let butnn = document.getElementById('butnn');
let output = document.getElementById('ouroutput');

let number = [Math.floor(Math.random() * 2)]

butnn.addEventListener('click', function(){
    let input = document.getElementById('userinput').value;
    if(input == number){
        output.innerHTML = 'correct!'
    } else if (input < number){
        output.innerHTML = "too low, try again!"
    };
    if (input > number){
        output.innerHTML = "too high, try again!"
    }
})