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
