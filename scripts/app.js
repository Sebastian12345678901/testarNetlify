let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;

var config = {
  type: Phaser.AUTO,
  width: screenWidth,
  height: screenHeight,
  physics: {
    default: "arcade",
    arcade: {
      debug: false
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

let game = new Phaser.Game(config);

let planes = [];
let enemyProjectiles = [];
let hitAnimationArray = [];
let cursors;
let ground;
let trees;
let stones;
let hills;
let player;
let playerProjectiles = [];
let seppelinarePlural = [];

//laddar in alla assests, som bilder ljud osv...
function preload() {
  this.load.image("ground-grass", "/images/map/ground-grass.svg");
  this.load.image("tree", "/images/map/tree.svg");
  this.load.image("hill", "/images/map/kullar.svg");
  this.load.image("stone", "/images/map/stones.svg");
  this.load.image("house", "/images/map/hus.svg");
  this.load.image("player", "/images/player/player.svg");
  this.load.image("player-projectile", "/images/player/playerProjectile.svg");
  this.load.image("enemy", "/images/enemys/enemy.svg");
  this.load.image("enemy-projectile", "/images/enemys/enemyProjectile.svg");
  this.load.spritesheet("seppelinare", "/images/enemys/seppelinare.png", {
    frameWidth: 177,
    frameHeight: 223
  });

  this.load.spritesheet(
    "enemy-animation",
    "/images/enemys/enemyAnimation.png",
    {
      frameWidth: 916,
      frameHeight: 542
    }
  );

  this.load.spritesheet(
    "playerAnimation",
    "/images/player/playerAnimation.png",
    {
      frameWidth: 248,
      frameHeight: 103
    }
  );
  this.load.spritesheet("hit-animation", "/images/enemys/hit.png", {
    frameWidth: 125,
    frameHeight: 125
  });
}

function create() {
  let score = scoreBoard.displayScore();
  createMap.greenGrass();

  planes.push(new GreenPlane("enemy-animation"));
  greenPlaneAi.left();
  greenPlaneAi.right();

  hills = createMap.createHills(this);
  stones = createMap.createStones(this);
  trees = createMap.createTrees(this);

  player = new Player(
    "playerAnimation",
    screenWidth / 2,
    screenHeight - 100,
    3,
    1,
    1
  );

  playerControlls.still();
  playerControlls.left();
  playerControlls.right();
  //sätt denna for loopen i seppelinare "spawn"...
  /* for (let i = 0; i < seppelinarePlural.length; i++) {
    this.physics.add.collider(seppelinarePlural[i].body, player.body);
  } */

  /* this.physics.add.collider(planes, planes); */

  cursors = this.input.keyboard.createCursorKeys();
  seppelinareAi.spawnSeppelinare();
  setInterval(() => {
    if (Math.round(Math.random() * 3) == 2) {
      greenPlaneAi.shoot(planes);
    }

    seppelinareAi.getRidOfSeppelinareBelowY();
    greenPlaneAi.getRidOfPlanesBelowY();
    greenPlaneAi.controlls(planes);
    greenPlaneAi.spawnPlanes(Math.round(Math.random() * 0.7));
    if (stones.length < 2) {
      stones = createMap.createStones();
    }
    moveGround.moveGround(stones);

    if (hills.length < 5) {
      hills = createMap.createHills();
    }
    moveGround.moveGround(hills);

    if (trees.length < 10) {
      trees = createMap.createTrees();
    }
  }, 500);
}

function update() {
  playerControlls.controlls();

  moveGround.moveGround(trees);
}
