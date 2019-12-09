//below is inserting the closest word to the current question slot1
var currentNearestword = "blueberry";
var placeholder = document.getElementById("word1");
placeholder.innerHTML = currentNearestword;

$("#word2").keydown(function(e) {
  var key = e.which;
  var word2value = document.getElementById("word2").value;
  if (key == 13) {
    console.log(`hello. ${word2value} is submitted`);
    //$("word2").submit(); // Submit form code
  }
});

function getDistance(targetword, word1, word2, currentWordbank) {
  //convert to world position:
  function convertPos(co) {
    coPos = app.renderer.width * (co / 1000);
    return coPos;
  }

  distance1 = Math.hypot(
    currentWordbank[targetword][0] - currentWordbank[word1][0],
    currentWordbank[targetword][1] - currentWordbank[word1][1]
  );
  distance2 = Math.hypot(
    currentWordbank[targetword][0] - currentWordbank[word2][0],
    currentWordbank[targetword][1] - currentWordbank[word2][1]
  );

  if (distance1 > distance2) {
    console.log(
      `${word2} is closer to the target word ${targetword} than ${word1}.`
    );
  } else {
    console.log(
      `${word1} is closer to the target word ${targetword} than ${word2}.`
    );
  }
}

// for testing:
getDistance("ocarina", "window", "ice pick", currentWordbank);
