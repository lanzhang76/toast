var radios = document.getElementsByName("collection");

for(radio in radios) {
    radios[radio].onclick = function() {
    	var prettyCollectionName = this.value.replace(/_/g,  ' ').toUpperCase();
    	var message = `By changing the collection, you are about to start a new session. Continue to ${prettyCollectionName} collection?`
    	if (window.confirm(message)) {
    		currentWordbank = this.value;
		} else {
			return false;
		}
    }
}
