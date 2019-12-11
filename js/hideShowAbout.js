var aboutButton = document.getElementById("info_realbutton");

aboutButton.addEventListener(
  "click",
  function(event) {
    var info = document.getElementById("info_panel");
    if (info.style.display === "block") {
      info.style.display = "none";
      aboutButton.innerHTML = "about";
    } else {
      info.style.display = "block";
      aboutButton.innerHTML = "close";
    }
  },
  false
);
