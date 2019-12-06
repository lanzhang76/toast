var currentWordbank = alice;


//Below is circle drawing
const radius = 10;
//for(let i = 0; i < currentWordbank.length; i ++) {
for (let key in currentWordbank) {
    //const animalInfo = currentWordbank[i];
    //console.log(key, currentWordbank[key]);
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
    const text = new PIXI.Text(name, {
        fontFamily: "Roboto Mono",
        fontSize: 17,
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
    currentWordbank["bee"],
    currentWordbank["puma"],
    currentWordbank["bass"],
    currentWordbank["snipe"]
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