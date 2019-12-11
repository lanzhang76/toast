//below is inserting the closest word to the current question slot1
var currentNearestword = "toast";
var placeholder = document.getElementById("word1");
placeholder.innerHTML = currentNearestword;
var targetword = "";

$("#word2").keydown(function(e) {
  var key = e.which;
  var word2value = document.getElementById("word2").value;
  if (key == 13) {
    if (word2value == targetword) {
      appendToList(listOfPoints, word2value);
      endGame();
      document.getElementById("word2").value = "";
    } else {
      if (currentWordbank.hasOwnProperty(word2value)) {
        console.log(`hello. ${word2value} is submitted`);
        getDistance(targetword, currentNearestword, word2value);
        document.getElementById("word2").value = "";
      } else {
        alert("sorry, I don't know that word.");
        document.getElementById("word2").value = "";
      }
    }
  }
  document.getElementById('word2').placeholder = "";

});

function getRandomTarget() {
  var randomIndex = Math.floor(
    Math.random() * Object.keys(currentWordbank).length
  );
  targetword = Object.keys(currentWordbank)[randomIndex];
  console.log(`The target word is ${targetword}.`);
}

function getDistance(targetword, word1, word2) {
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

  var nearest = "";
  if (distance1 > distance2) {
    console.log(
      `${word2} is closer to the target word ${targetword} than ${word1}.`
    );
    nearest = word2;
  } else {
    console.log(
      `${word1} is closer to the target word ${targetword} than ${word2}.`
    );
    nearest = word1;
  }
  currentNearestword = nearest;
  placeholder.innerHTML = nearest;
  appendToList(listOfPoints, nearest);
}

getRandomTarget();
