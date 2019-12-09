var hintButton = document.getElementById("hint_button");

hintButton.addEventListener('click', function (event) {
	if (hintButton.innerHTML === "Show Hints") {
		// Update main UI
		hintButton.innerHTML = 'Hide Hints'; 
	} else {
		// Update main UI
		hintButton.innerHTML = 'Show Hints'; 
	}
}, false);