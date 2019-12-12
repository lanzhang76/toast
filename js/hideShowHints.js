var hintButton = document.getElementById("hint_button");

hintButton.addEventListener(
  "click",
  function(event) {
    if (hintButton.innerHTML === "show<br>hints") {
      // Update main UI
      drawAllHint("Show Hints");
      hintButton.innerHTML = "hide<br>hints";
    } else {
      // Update main UI
      drawAllHint("Hide Hints");
      hintButton.innerHTML = "show<br>hints";
    }
  },
  false
);
