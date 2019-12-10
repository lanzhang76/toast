var hintButton = document.getElementById("hint_button");

hintButton.addEventListener(
  "click",
  function(event) {
    if (hintButton.innerHTML === "Show Hints") {
      // Update main UI
      // app.stage.addChild(viewport);
      drawAllHint();
      hintButton.innerHTML = "Hide Hints";
    } else {
      // Update main UI
      hintButton.innerHTML = "Show Hints";
      //viewport.parent.removeChild(viewport); // This hides the whole view port
    }
  },
  false
);
