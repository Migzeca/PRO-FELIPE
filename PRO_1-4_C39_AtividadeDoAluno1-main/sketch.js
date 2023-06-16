var canvas;
var backgroundImage, bgImg, player1_img, player2_img, track;
var database, gameState;
var form, player, playerCount;
var allPlayers, player1, player2;
var players = [];

//BP
function preload() {
  backgroundImage = loadImage("./assets/background.png");
  player1_img = loadImage("../assets/car1.png");
  player2_img = loadImage("../assets/car2.png");
  track = loadImage("../assets/track.jpg");
}

//BP
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
 
}

//BP
function draw() {
  background(0);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
