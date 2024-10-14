var intro_time = 3500;
var intro_played = false;

var cuttime = 196250;
var introspectrum;
var introbarcount = 150;
var introbars = [];

var title_framecount = 0;

function introDisplay() {
  ++intro_framecount;
  if (intro_timer == 0 && intro_played == false) {
    intro_music.play(0, 1, 2, 0);
    intro_played = true;
  } else {
    if (intro_framecount % 10 == 0) intro_timer = intro_music.currentTime() * 1000;
    else intro_timer += deltaTime;
    if (intro_timer > intro_time) {
      game_position = "title";
    }
  }

  let T;
  if (intro_timer < intro_time / 2) {
    T = 255 * intro_timer / (intro_time / 2);
  }
  else if (intro_timer >= intro_time / 2) {
    T = 255 - 255 * (intro_timer - intro_time / 2) / (intro_time / 2);
  }

  push();
  graphics.noStroke();
  graphics.fill(255, T);
  graphics.textSize(40 * C);
  graphics.textAlign(CENTER);
  graphics.text("OZ Presents...", C * 5, -C * 0);
  graphics.textSize(12 * C);
  graphics.fill(175, T);
  graphics.text("(Headphones & Fullscreen Recommended)", C * 5, C * 35);
  pop();
}

function introMusic() {
  ++title_framecount;
  ++intro_framecount;

  if (title_framecount <= 150) {
    let T = 175;
    T -= 175 * (title_framecount) / 150;
    push();
    graphics.rectMode(CENTER);
    graphics.noStroke();
    graphics.fill(255, T);
    graphics.rect(0, 0, windowWidth, windowHeight);
    pop();
  }

  if (intro_timer >= cuttime) {
    intro_num = 1 - intro_num;
    intro_timer = 0;
    intro_music.play(0, 1, 2, 0);
  }

  if (intro_framecount % 10 == 0 && intro_timer >= intro_time) intro_timer = intro_music.currentTime() * 1000;
  else intro_timer += deltaTime;

  introspectrum = introfft.analyze();
  for (let i = 0; i < introbarcount; i++) {
    let val = introspectrum[floor(introspectrum.length / (introbarcount + 80) * i)];
    introbars[i] = pow(20, val / 250) / 20;
  }
  for (let i = 0; i < introbarcount; i++) {
    let angle = TWO_PI / introbarcount * i + TWO_PI / 6400 * (intro_framecount % 6400) - PI / 4;
    let x1 = cos(angle) * (introbars[i] * 15 * C + 180 * C);
    let y1 = sin(angle) * (introbars[i] * 15 * C + 180 * C);
    let x2 = cos(angle) * (-introbars[i] * 15 * C + 180 * C);
    let y2 = sin(angle) * (-introbars[i] * 15 * C + 180 * C);
    graphics.push();
    graphics.strokeCap(SQUARE);
    graphics.colorMode(HSL);
    graphics.strokeWeight(3 * C);
    graphics.stroke((intro_framecount % 3600) / 10, 100, 90);
    graphics.noFill();
    graphics.line(x1, y1, x2, y2);
    graphics.pop();
  }
}