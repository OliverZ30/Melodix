var BGAplaying = false;
var vW, vH;

function avantBGA() {
  
  if (!BGAplaying) {
    bgaavant.play();
    BGAplaying = true;
  }

  vW = bgaavant.width;
  vH = bgaavant.height;
  vW = vW * windowHeight / vH;
  vH = windowHeight;

  vW *= 1.35;
  vH *= 1.35;

  if (bgaavant.time() >= bgaavant.duration()) {
    BGAplaying = false;
    game_position = "avantBGA_level";
  }

  if (BGAplaying) {
    graphics.push();
    graphics.imageMode(CENTER);
    graphics.image(bgaavant, 0, 0, vW, vH);
    graphics.pop();
  }
}