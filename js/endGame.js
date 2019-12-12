function endGame() {
    document.getElementById('end-word').innerText = targetword;
    if (guessCounter == 1) {
        var guessText = `${guessCounter} guess`;
    } else {
        var guessText = `${guessCounter} guesses`;
    }
    document.getElementById('num-guesses').innerText = guessText;
    document.getElementById('textInput').style.display = 'none';
    document.getElementById('endGame').style.display = 'inline-block';
    currentNearestword = "toast"; placeholder = document.getElementById("word1");
    placeholder.innerHTML = currentNearestword; targetword = "";
    guessCounter = 0;
}