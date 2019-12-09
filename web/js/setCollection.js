var radios = document.getElementsByName("collection");

for(radio in radios) {
    radios[radio].onclick = function() {
        currentWordbank = this.value;
    }
}