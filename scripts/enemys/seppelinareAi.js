let seppelinareAi = {
  controlls: () => {
    for (let i = 0; i < seppelinarePlural.length; i++) {
      seppelinarePlural[i].body.setVelocityY(+100);
    }
  },
  getRidOfSeppelinareBelowY: () => {
    for (let i = 0; i < seppelinarePlural.length; i++) {
      if (seppelinarePlural[i].body.y > screenHeight + 300) {
        seppelinarePlural[i].body.destroy();
        seppelinarePlural.splice(i, 1);
      }
    }
  },

  spawnSeppelinare: () => {
    setInterval(() => {
      seppelinarePlural.push(new Seppelinare("seppelinare", 1, 2, 2));
      seppelinareAi.controlls();
      //player sepp collider
      for (let i = 0; i < seppelinarePlural.length; i++) {
        game.scene.scenes[0].physics.add.collider(
          seppelinarePlural[i].body,
          player.body
        );
      }
      //sepp to sepp coll
      for (let i = 0; i < seppelinarePlural.length; i++) {
        for (let j = 0; j < seppelinarePlural.length; j++) {
          if (
            seppelinarePlural[i] == undefined ||
            seppelinarePlural[j] == undefined
          ) {
          } else {
            game.scene.scenes[0].physics.add.collider(
              seppelinarePlural[i].body,
              seppelinarePlural[j].body
            );
          }
        }
      }
      //planes to sepp collider
      for (let i = 0; i < seppelinarePlural.length; i++) {
        for (let j = 0; j < planes.length; j++) {
          if (seppelinarePlural[i] == undefined || planes[j] == undefined) {
          } else {
            game.scene.scenes[0].physics.add.collider(
              seppelinarePlural[i].body,
              planes[j].unit
            );
          }
        }
      }
    }, 5000);
  }
};
