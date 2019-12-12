var hintButton = document.getElementById("hint_button");

hintButton.addEventListener(
  "click",
  function(event) {
    if (hintButton.innerHTML === "show<br>hints") {
      // Update main UI
      drawAllHint("show<br>hints");
      hintButton.innerHTML = "hide<br>hints";
    } else {
      // Update main UI
      drawAllHint("hide<br>hints");
      hintButton.innerHTML = "show<br>hints";
    }
  },
  false
);
