const number = Math.floor(Math.random() * 10) + 1;


function checkGuess() {
    let guess = document.getElementById("guessInput").value;


    let result = document.querySelector(".result");

    guess = Number(guess); 
    if (guess === number) {
        result.textContent = '✅ hurray Correct!';
        result.style.color = "green";



    } else if (guess > number) {
        result.textContent = '📈 you are little ';
        
        result.style.color = "red";
    } else
    
    {
        result.textContent = '📉 you are little loow ';
        result.style.color = "red";
    }
}
