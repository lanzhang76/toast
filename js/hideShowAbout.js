var aboutButton = document.getElementById("info_realbutton");

aboutButton.addEventListener(
  "click",
  function(event) {
    var info = document.getElementById("info_panel");
    if (info.style.display === "block") {
      info.style.display = "none";
      aboutButton.innerHTML = "about";
      viewport.snap(window.innerWidth - 800, window.innerHeight / 2);
    } else {
      info.style.display = "block";
      aboutButton.innerHTML = "close";
      viewport.snap(window.innerWidth + 800, window.innerHeight / 2);
      viewport.setZoom(0.6);
    }
  },
  false
);
