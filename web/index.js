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
  console.log(key, animals_coord[key]);
  const name = key;
  const xPos = app.renderer.width * (animals_coord[key][0] / 1000);
  const yPos = app.renderer.width * (animals_coord[key][1] / 1000);

  const circle = new PIXI.Graphics();
  circle.hitArea = new PIXI.Circle(xPos, yPos, radius);

  circle.interactive = true;
  circle.lineStyle(1, 0x000000, 1);
  circle.beginFill(0xffffff * Math.random(), 0.6);
  circle.drawCircle(xPos, yPos, radius);
  circle.endFill();

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
