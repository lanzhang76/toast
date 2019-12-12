var buttonText = document.getElementById("collections_button");

buttonText.addEventListener(
  "click",
  function(event) {
    var collectionInfo = document.getElementById("toggleable-elements");

    if (collectionInfo.style.display === "block") {
      collectionInfo.style.display = "none";
      buttonText.innerHTML = "show<br>collections";
    } else {
      collectionInfo.style.display = "block";
      buttonText.innerHTML = "hide<br>collections";
    }
  },
  false
);
