class Game {
  constructor() {}
  //BP
  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }
  //BP
  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  // TA
  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();

    player1 = createSprite(width / 2 - 50, height - 100);
    player1.addImage("carro1", car1_img);
    player1.scale = 0.07;

    player2 = createSprite(width / 2 + 100, height - 100);
    player2.addImage("carro2", car2_img);
    player2.scale = 0.07;

    players = [player1, player2];
  }

  //BP
  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }

  //SA
  play() {
    this.handleElements();

    //Player.getPlayersInfo();

   
      drawSprites();
    }
  }

