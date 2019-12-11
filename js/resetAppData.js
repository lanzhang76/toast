function resetAppData() {
	listOfPoints = []; // Empty list of points
	getRandomTarget(); // Pick new starter word from the current wordbank
	currentNearestword = "toast"; // Reset seed word
	viewport.removeChildren(); // Clear the previous game's path
    document.getElementById('textInput').style.display = 'inline-block';
    document.getElementById('endGame').style.display = 'none';
}
