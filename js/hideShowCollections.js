var buttonText = document.getElementById("collections_button");

buttonText.addEventListener(
  "click",
  function(event) {
    var collectionInfo = document.getElementById("toggleable-elements");

    if (collectionInfo.style.display === "block") {
      collectionInfo.style.display = "none";
      buttonText.innerHTML = "Show Collections";
    } else {
      collectionInfo.style.display = "block";
      buttonText.innerHTML = "Hide Collections";
    }
  },
  false
);
