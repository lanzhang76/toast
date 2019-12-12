function resetAppData() {
  currentNearestword = "toast"; // Reset seed word
  listOfPoints = []; // Empty list of points
  getRandomTarget(); // Pick new starter word from the current wordbank
  viewport.removeChildren(); // Clear the previous game's path
  document.getElementById("textInput").style.display = "inline-block";
  document.getElementById("endGame").style.display = "none";
  hintButton.innerHTML = "Show Hints";
}
