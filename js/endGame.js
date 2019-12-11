function endGame() {
    document.getElementById('end-word').innerText = targetword;
    document.getElementById('textInput').style.display = 'none';
    document.getElementById('endGame').style.display = 'inline-block';
    currentNearestword = "toast"; placeholder = document.getElementById("word1");
    placeholder.innerHTML = currentNearestword; targetword = "";
}