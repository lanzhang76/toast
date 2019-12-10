var listOfPoints = [];

function convertPos(co) {
  coPos = app.renderer.width * (co / 1000);
  return coPos;
}

function drawAllHint() {
  //Drawing all circles
  const radius = 10;
  for (let key in currentWordbank) {
    const name = key;
    const xPos = app.renderer.width * (currentWordbank[key][0] / 1000);
    const yPos = app.renderer.width * (currentWordbank[key][1] / 1000);

    const circle = new PIXI.Graphics();
    //drawing circles
    circle.hitArea = new PIXI.Circle(xPos, yPos, radius);
    circle.interactive = true;
    circle.lineStyle(1, 0x000000, 0);
    circle.beginFill(0xffffff * Math.random(), 0.6);
    circle.drawCircle(xPos, yPos, radius);
    circle.endFill();
    //drawing captions
    //new PIXI.BitmapText
    const text = new PIXI.Text(name, {
      fontFamily: "Roboto Mono",
      // fontSize: 17,
      align: "left"
    });
    text.style.fill = 0x666666;
    text.position.set(xPos, yPos + 15);
    text.interactive = true;

    circle.addChild(text);
    viewport.addChild(circle);
  }
}

//Draw everything in the list
function drawActiveOnes(list) {
  //create new line drawing
  var line = new PIXI.Graphics();
  line.lineStyle(5, 0x000000);

  function drawAllpoints() {
    line.moveTo(convertPos(list[0][0]), convertPos(list[0][1]));
    for (i = 1; i < listOfPoints.length; i++) {
      line.lineTo(convertPos(list[i][0]), convertPos(list[i][1]));
    }
  }

  viewport.addChild(line);
}

function appendToList(list, word) {
  list.push(word);
  if (listOfPoints.length > 1) {
    drawLastLine();
  }
  drawLastCircle();
  return list;
}

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
  //viewport.moveCenter(xPos, yPos);
}

// drawAllHint();
// appendToList(listOfPoints, "notebook");
// appendToList(listOfPoints, "rope");
// appendToList(listOfPoints, "whip");
