var radios = document.getElementsByName("collection");

for(radio in radios) {
    radios[radio].onclick = function() {
    	var prettyCollectionName = this.value.replace(/_/g,  ' ').toUpperCase();
    	var message = `By changing the collection, you are about to start a new session. Continue to ${prettyCollectionName} collection?`
    	if (window.confirm(message)) {
			drawAllHint("hide<br>hints");
      		hintButton.innerHTML = "show<br>hints";
			if (this.value === "animals") {
				currentWordbank = animals;
			} else if (this.value === "alice") {
				currentWordbank = alice;
			} else {
				currentWordbank = bag_of_nouns;
			}
			resetAppData();
		} else {
			return false;
		}
    }
}
