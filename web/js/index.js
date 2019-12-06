const app = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight,
  antialias: true
});

app.renderer.backgroundColor = 0xffffff;

document.body.appendChild(app.view);

const viewport = new Viewport.Viewport({
  screenWidth: window.innerWidth,
  screenHeight: window.innerHeight,
  worldWidth: 1000,
  worldHeight: 1000,

  interaction: app.renderer.plugins.interaction // the interaction module is important for wheel to work properly when renderer.view is placed or scaled
});

// add the viewport to the stage
app.stage.addChild(viewport);

// activate plugins
viewport
  .drag()
  .pinch()
  .wheel()
  .decelerate();

const radius = 10;

//for(let i = 0; i < animals_coord.length; i ++) {
for (let key in animals_coord) {
  //const animalInfo = animals_coord[i];
  //console.log(key, animals_coord[key]);
  const name = key;
  const xPos = app.renderer.width * (animals_coord[key][0] / 1000);
  const yPos = app.renderer.width * (animals_coord[key][1] / 1000);

  const circle = new PIXI.Graphics();
  //drawing circles
  circle.hitArea = new PIXI.Circle(xPos, yPos, radius);
  circle.interactive = true;
  circle.lineStyle(1, 0x000000, 1);
  circle.beginFill(0xffffff * Math.random(), 0.6);
  circle.drawCircle(xPos, yPos, radius);
  circle.endFill();
  //drawing captions
  const text = new PIXI.Text(name, {
    fontFamily: "Roboto Mono",
    fontSize: 30,
    align: "left"
  });
  text.style.fill = 0x666666;
  text.position.set(xPos, yPos + 15);
  text.interactive = true;

  circle.addChild(text);
  viewport.addChild(circle);
}

//drawing lines that connect circlces
//covert the coordinate to viewport coordinate
function convertPos(co) {
  coPos = app.renderer.width * (co / 1000);
  return coPos;
}
//create new line drawing
var line = new PIXI.Graphics();
line.lineStyle(5, 0x000000);
//creating a list of all points that will be drawn
//we can just append the new dot
var listOfPoints = [
  animals_coord["bee"],
  animals_coord["puma"],
  animals_coord["bass"],
  animals_coord["snipe"]
];
function drawAllpoints() {
  line.moveTo(convertPos(listOfPoints[0][0]), convertPos(listOfPoints[0][1]));
  for (i = 1; i < listOfPoints.length; i++) {
    console.log(listOfPoints[i][0]);
    line.lineTo(convertPos(listOfPoints[i][0]), convertPos(listOfPoints[i][1]));
  }
}
drawAllpoints();
viewport.addChild(line);
