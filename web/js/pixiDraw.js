var hint = true;

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
    circle.lineStyle(1, 0x000000, 1);
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

function drawAllLine(list) {
  //drawing lines that connect circlces
  //covert the coordinate to viewport coordinate
  function convertPos(co) {
    coPos = app.renderer.width * (co / 1000);
    return coPos;
  }
  //create new line drawing
  var line = new PIXI.Graphics();
  line.lineStyle(5, 0x000000);

  function drawAllpoints() {
    line.moveTo(convertPos(list[0][0]), convertPos(list[0][1]));
    for (i = 1; i < listOfPoints.length; i++) {
      line.lineTo(convertPos(list[i][0]), convertPos(list[i][1]));
    }
  }

  drawAllpoints();
  viewport.addChild(line);
}

var listOfPoints = [];
function appendToList(list, word) {
  list.push(word);
  return list;
}

appendToList(listOfPoints, "notebook");
appendToList(listOfPoints, "rope");
drawAllHint();
//drawAllLine(listOfPoints);
//console.log(currentWordbank[listOfPoints[0]], currentWordbank[listOfPoints[1]]);
animateLine(currentWordbank[listOfPoints[0]], currentWordbank[listOfPoints[1]]);

let count = 0;
function animateLine(pointFrom, pointTo) {
  function convertPos(co) {
    coPos = app.renderer.width * (co / 1000);
    return coPos;
  }

  //draw line
  var line = new PIXI.Graphics();
  line.lineStyle(5, 0x000000);
  var xFrom = convertPos(pointFrom[0]);
  var yFrom = convertPos(pointFrom[1]);
  var xTo = convertPos(pointTo[0]);
  var yTo = convertPos(pointTo[1]);
  console.log(xFrom, xTo);
  console.log(yFrom, yTo);
  var distanceX = xTo - xFrom;
  var distanceY = yTo - yFrom;
  var magnitude = Math.hypot(distanceX, distanceY);
  var directionX = distanceX / magnitude;
  var directionY = distanceY / magnitude;

  line.moveTo(xFrom, yFrom);
  app.ticker.add(() => {
    count += 0.01;
    speed = 0.000000001;
    line.lineTo(xFrom + directionX * speed, yFrom + directionY * speed);
  });
  viewport.addChild(line);
}
