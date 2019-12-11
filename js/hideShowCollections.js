var buttonText = document.getElementById("collections_button");

buttonText.addEventListener(
  "click",
  function(event) {
    var collectionInfo = document.getElementById("toggleable-elements");

    if (collectionInfo.style.display === "block") {
      collectionInfo.style.display = "none";
      buttonText.innerHTML = "Hide Collections";
    } else {
      collectionInfo.style.display = "block";
      buttonText.innerHTML = "Show Collections";
    }
  },
  false
);
