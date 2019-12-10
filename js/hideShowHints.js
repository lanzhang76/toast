var hintButton = document.getElementById("hint_button");

hintButton.addEventListener(
  "click",
  function(event) {
    if (hintButton.innerHTML === "Show Hints") {
      // Update main UI
      drawAllHint("Show Hints");
      hintButton.innerHTML = "Hide Hints";
    } else {
      // Update main UI
      drawAllHint("Hide Hints");
      hintButton.innerHTML = "Show Hints";
    }
  },
  false
);
