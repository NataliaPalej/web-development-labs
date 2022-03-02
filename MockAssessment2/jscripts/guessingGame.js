var guess = 0, randNum = 0, attempts = 0;

function $ (id) {
    return document.getElementById(id);
};

GenerateNewNumber = function () {
    randNum = Math.floor(Math.random() * 100) + 1;
    console.log("Random number: " + randNum);
    $("userGuess").disabled = false;
    $("attempts").disabled = true;
    $("generteRandom").disabled = true;
    $("guess").disabled = false;
    
    //go through drop down of guesses and show how many left
    if ($("attempts").value == "5")
    {
        attempts = 5;
        $("guessLeft").innerHTML = "5 attempts left";
        console.log("5 guesses selected")
    }
    if ($("attempts").value == "10")
    {
        attempts = 10;
        $("guessLeft").innerHTML = "10 attempts left";
        console.log("10 guesses selected")
    }
    if ($("attempts").value == "15")
    {
        attempts = 15;
        $("guessLeft").innerHTML = "15 attempts left";
        console.log("15 guesses selected")
    }
    
}

ResetTextFields = function () {
    guess = 0;
    randNum = 0;
    attempts = 0;
    $("hint").src = "images/guess.png";
    $("guessLeft").innerHTML = "Attempts left";
    //to reset the input, use .value and put 0 or space!
    $("userGuess").value = " ";
    $("userGuess").disabled = true;
    $("guess").disabled = true;
    $("attempts").disabled = false;
    $("generteRandom").disabled = false;
    console.log("Reset button pressed")
}

win_GameOver = function () {
    $("userGuess").disabled = true;
    $("guess").disabled = true;
    $("guessLeft").innerHTML = "Congrats, you guessed the number!";
    console.log("Number guessed, win!");
}

guessNumber = function () {
    if(attempts <= 1)
	{
        $("userGuess").disabled = true;
        $("guess").disabled = true;
		alert("Game over. Try again!")
		console.log("Game Over");
	}
    else
    guess = parseInt($("userGuess").value);

    if(isNaN(guess))
    {
        alert("Only numbers allowed, try again!")
        console.log("Error, numbers only.");
    }
    
    if(guess < randNum)
    {
        $("hint").src = "images/low.png";
        attempts = attempts - 1;
        console.log("\tAttempts left: " + attempts);
        console.log("Number guessed: " + guess);
        $("guessLeft").innerHTML = "Attempts left: " + attempts;
    }
    if(guess > randNum)
    {
        $("hint").src = "images/high.png";
        attempts = attempts - 1;
        console.log("\tAttempts left: " + attempts);
        console.log("Number guessed: " + guess);
        $("guessLeft").innerHTML = "Attempts left: " + attempts; 
    }
   if(guess == randNum)
    {
        $("hint").src = "images/happy_Grogu.jpg";
        win_GameOver();
    }
}

window.onload = function () {
    $("guess").onclick = function(){guessNumber();}
	$("generteRandom").onclick = function(){GenerateNewNumber();}
    $("reset").onclick = function(){ResetTextFields();}
};