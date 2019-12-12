var listOfPoints = [];

// This function maps a coordinate data to the viewport value
function convertPos(co) {
  coPos = app.renderer.width * (co / 1000);
  return coPos;
}

// We will pass the hint value to this function that will
// We will add/remove children from the viewport based on the message
function drawAllHint(showMessage) {
  const radius = 10;
  for (let key in currentWordbank) {
    const name = key;
    const xPos = app.renderer.width * (currentWordbank[key][0] / 1000);
    const yPos = app.renderer.width * (currentWordbank[key][1] / 1000);
    const circle = new PIXI.Graphics();
    const text = new PIXI.Text(name, {
      fontFamily: "Roboto Mono",
      align: "left"
    });
    //drawing circles
    circle.hitArea = new PIXI.Circle(xPos, yPos, radius);
    circle.interactive = true;
    circle.lineStyle(1, 0x000000, 0);
    circle.beginFill(0xffffff * Math.random(), 0.6);
    circle.drawCircle(xPos, yPos, radius);
    circle.endFill();
    //drawing captions
    text.style.fill = 0x666666;
    text.position.set(xPos, yPos + 15);
    text.interactive = true;

    circle.addChild(text);
    if (showMessage == "show<br>hints") {
      //console.log("show hints");
      viewport.addChild(circle);
    } else {
      //console.log("hide hints");
      viewport.removeChildren();
      drawActiveOnes();
    }
  }
}

// Draw all active elements in the currentlist
function drawActiveOnes() {
  //create new line drawing
  if (listOfPoints.length >= 1) {
    var line = new PIXI.Graphics();
    line.lineStyle(4, 0x646464);
    line.moveTo(
      convertPos(currentWordbank[listOfPoints[0]][0]),
      convertPos(currentWordbank[listOfPoints[0]][1])
    );
    for (i = 1; i < listOfPoints.length; i++) {
      line.lineTo(
        convertPos(currentWordbank[listOfPoints[i]][0]),
        convertPos(currentWordbank[listOfPoints[i]][1])
      );
    }
    viewport.addChild(line);
  }
  const radius = 10;
  for (let item in listOfPoints) {
    name = listOfPoints[item];
    const key = name;
    const xPos = app.renderer.width * (currentWordbank[key][0] / 1000);
    const yPos = app.renderer.width * (currentWordbank[key][1] / 1000);
    const circle = new PIXI.Graphics();
    const text = new PIXI.Text(name, {
      fontFamily: "Roboto Mono",
      align: "left"
    });
    //drawing circles
    circle.hitArea = new PIXI.Circle(xPos, yPos, radius);
    circle.interactive = true;
    circle.lineStyle(1, 0x000000, 0);
    circle.beginFill(0xffffff * Math.random(), 0.6);
    circle.drawCircle(xPos, yPos, radius);
    circle.endFill();
    //drawing captions
    text.style.fill = 0x666666;
    text.position.set(xPos, yPos + 15);
    text.interactive = true;

    circle.addChild(text);
    viewport.addChild(circle);
  }
}

// Append a new word to the current listOfPoints
function appendToList(list, word) {
  list.push(word);
  if (listOfPoints.length > 1) {
    drawLastLine();
  }
  drawLastCircle();
  return list;
}

// Only draw the line between the latest addition word and the second to the last
function drawLastLine() {
  var last = listOfPoints.length - 1;
  var secondTolast = listOfPoints.length - 2;
  var line = new PIXI.Graphics();
  line.lineStyle(4, 0x646464);
  line.moveTo(
    convertPos(currentWordbank[listOfPoints[secondTolast]][0]),
    convertPos(currentWordbank[listOfPoints[secondTolast]][1])
  );
  line.lineTo(
    convertPos(currentWordbank[listOfPoints[last]][0]),
    convertPos(currentWordbank[listOfPoints[last]][1])
  );
  viewport.addChild(line);
}

// Draws the last circle for winning purpose
function drawLastCircle() {
  var last = listOfPoints.length - 1;
  xPos = convertPos(currentWordbank[listOfPoints[last]][0]);
  yPos = convertPos(currentWordbank[listOfPoints[last]][1]);
  name = listOfPoints[last];
  const circle = new PIXI.Graphics();
  const radius = 10;
  circle.hitArea = new PIXI.Circle(xPos, yPos, radius);
  circle.interactive = true;
  circle.lineStyle(1, 0x000000, 0);
  circle.beginFill(0xffffff * Math.random(), 0.6);
  circle.drawCircle(xPos, yPos, radius);
  circle.endFill();
  const text = new PIXI.Text(name, {
    fontFamily: "Roboto Mono",
    align: "left"
  });
  text.style.fill = 0x666666;
  text.position.set(xPos, yPos + 15);
  text.interactive = true;
  circle.addChild(text);
  viewport.addChild(circle);
  viewport.snap(xPos, yPos);
}
