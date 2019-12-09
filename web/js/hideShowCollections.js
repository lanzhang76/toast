var buttonText = document.getElementById("collections_button");

buttonText.addEventListener('click', function (event) {
	var collectionInfo = document.getElementById("toggleable_elements");

	if (collectionInfo.style.display === "none") {
		collectionInfo.style.display = "block";
		buttonText.innerHTML = 'Hide Collections'; 
	} else {
		collectionInfo.style.display = "none";
		buttonText.innerHTML = 'Show Collections'; 
	}
}, false);