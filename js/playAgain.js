var playAgainButton = document.getElementById("play-again");

playAgainButton.addEventListener(
  "click",
  function(event) {
    resetAppData();
  },
  false
);
