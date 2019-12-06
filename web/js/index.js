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
