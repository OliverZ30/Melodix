var clicked = false;
var fade_timer = 0;
var start_timer = 0;

function mouseClicked() {
  if (game_position == "start") {
    if (!clicked) clicked = true;
  }
}

function startDisplay() {
  ++start_timer;
  start_timer %= 120;
  if (clicked == true) {
    ++fade_timer;
    if (fade_timer <= 60) {
      let T = 255 - fade_timer * 255 / 60;
      graphics.push();
      graphics.noStroke();
      graphics.textSize(30 * C);
      graphics.textAlign(CENTER, CENTER);
      graphics.fill(255, T);
      graphics.text("Click anywhere to start", 0, 0);
      graphics.pop();
    } else {
      game_position = "intro";
    }
  } else {
    graphics.push();
    graphics.noStroke();
    graphics.textSize(30 * C);
    graphics.textAlign(CENTER, CENTER);
    let T;
    if (start_timer < 60) {
      T = 200 - start_timer * 125 / 60;
    } else {
      T = 200 - (120 - start_timer) * 125 / 60;
    }
    graphics.fill(255, T);
    graphics.text("Click anywhere to start", 0, 0);
    graphics.pop();
  }
}