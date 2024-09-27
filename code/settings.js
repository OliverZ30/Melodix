var uparrow = -1;
var downarrow = -1;
var leftarrow = -1;
var rightarrow = -1;

var exithover = false;
var uparrowhover = false;
var downarrowhover = false;
var leftarrowhover = false;
var rightarrowhover = false;

function settings() {

  mousex = mouseX - W / 2;
  mousey = mouseY - H / 2;
  exithover = false;
  uparrowhover = false;
  downarrowhover = false;
  leftarrowhover = false;
  rightarrowhover = false;

  if (mouseIsPressed) {
    if (mousejustpressed == -1) {
      mousejustpressed = 1;
    } else if (mousejustpressed == 1) {
      mousejustpressed = 0;
    }
  } else mousejustpressed = -1;

  graphics.noStroke();

  graphics.push();
  graphics.textAlign(CENTER);
  graphics.textSize(10 * C);
  graphics.noFill();
  if (mousex > -W / 2 + C * 20 && mousex < -W / 2 + C * 60 && mousey > -H / 2 + C * 20 && mousey < -H / 2 + C * 60) {
    exithover = true;
    graphics.fill(255, 255, 255, 50);
  }
  graphics.stroke(150);
  graphics.square(-W / 2 + C * 40, -H / 2 + C * 40, C * 40);
  graphics.strokeWeight(2 * C);
  graphics.line(-W / 2 + C * 30, -H / 2 + C * 40, -W / 2 + C * 50, -H / 2 + C * 40);
  graphics.line(-W / 2 + C * 30, -H / 2 + C * 40, -W / 2 + C * 40, -H / 2 + C * 30);
  graphics.line(-W / 2 + C * 30, -H / 2 + C * 40, -W / 2 + C * 40, -H / 2 + C * 50);
  graphics.noStroke();
  graphics.fill(150);
  graphics.text("EXIT (ESC)", -W / 2 + C * 40, -H / 2 + C * 75);
  graphics.pop();

  graphics.fill(255);
  graphics.textSize(C * 50);
  graphics.text(custom_offset, 0, -H / 6);
  let Sp = floor((speed + 0.0001) * 100) / 10;
  graphics.text(Sp, 0, H / 6);

  graphics.textSize(C * 15);
  graphics.text("OFFSET", 0, -H / 6 + H / 15);
  graphics.text("SPEED", 0, H / 6 + H / 15);
  graphics.textSize(C * 10);
  graphics.text("positive = shift chart 'up'", 0, -H / 6 + H / 15 + H / 20);
  graphics.text("speed in tutorial = 5", 0, H / 6 + H / 15 + H / 20);

  graphics.textSize(C * 8);
  graphics.fill(150);
  graphics.text("Right Arrow", W / 8 + C * 2, H / 6 - C * 20 + C * 25);
  graphics.fill(255);
  if (sqrt(pow(mousex - (W / 8 + C * 2), 2) + pow(mousey - (H / 6 - C * 20), 2)) <= C * 10) {
    rightarrowhover = true;
    graphics.fill(150);
  }
  graphics.triangle(W / 8 - C * 5, H / 6 - C * 30, W / 8 - C * 5, H / 6 - C * 10, W / 8 + C * 12.5, H / 6 - C * 20);

  graphics.fill(150);
  graphics.text("Left Arrow", -W / 8 - C * 2, H / 6 - C * 20 + C * 25);
  graphics.fill(255);
  if (sqrt(pow(mousex - (-W / 8 - C * 2), 2) + pow(mousey - (H / 6 - C * 20), 2)) <= C * 10) {
    leftarrowhover = true;
    graphics.fill(150);
  }
  graphics.triangle(-W / 8 + C * 5, H / 6 - C * 30, -W / 8 + C * 5, H / 6 - C * 10, -W / 8 - C * 12.5, H / 6 - C * 20);

  graphics.fill(150);
  graphics.text("Up Arrow", W / 8, -H / 6 - C * 12 + C * 25);
  graphics.fill(255);
  if (sqrt(pow(mousex - (W / 8 + C * 0), 2) + pow(mousey - (-H / 6 - C * 12), 2)) <= C * 10) {
    uparrowhover = true;
    graphics.fill(150);
  }
  graphics.triangle(W / 8 - C * 10, -H / 6 - C * 3, W / 8 + C * 10, -H / 6 - C * 3, W / 8, -H / 6 - C * 22);

  graphics.fill(150);
  graphics.text("Down Arrow", -W / 8, -H / 6 - C * 12 + C * 25);
  graphics.fill(255);
  if (sqrt(pow(mousex - (-W / 8 + C * 0), 2) + pow(mousey - (-H / 6 - C * 12), 2)) <= C * 10) {
    downarrowhover = true;
    graphics.fill(150);
  }
  graphics.triangle(-W / 8 + C * 10, -H / 6 - C * 22, -W / 8 - C * 10, -H / 6 - C * 22, -W / 8, -H / 6 - C * 3);

  if (!inTransition) {
    if (keyIsDown(UP_ARROW) || (uparrowhover && mouseIsPressed)) {
      if (uparrow == -1) uparrow = 1;
      else if (uparrow >= 1) uparrow++;
    } else uparrow = -1;
    if (keyIsDown(DOWN_ARROW) || (downarrowhover && mouseIsPressed)) {
      if (downarrow == -1) downarrow = 1;
      else if (downarrow >= 1) downarrow++;
    } else downarrow = -1;
    if (keyIsDown(LEFT_ARROW) || (leftarrowhover && mouseIsPressed)) {
      if (leftarrow == -1) leftarrow = 1;
      else if (leftarrow == 1) leftarrow = 0;
    } else leftarrow = -1;
    if (keyIsDown(RIGHT_ARROW) || (rightarrowhover && mouseIsPressed)) {
      if (rightarrow == -1) rightarrow = 1;
      else if (rightarrow == 1) rightarrow = 0;
    } else rightarrow = -1;
  }

  if (custom_offset < 500) {
    if (uparrow == 1 || (uparrow >= 30 && uparrow % 2 == 0)) {
      ++custom_offset;
    }
    if (custom_offset + 1 <= 500 && uparrow >= 120) {
      ++custom_offset;
    }
    if (custom_offset + 1 <= 500 && uparrow >= 250) {
      ++custom_offset;
    }
  }
  if (custom_offset > -500) {
    if (downarrow == 1 || (downarrow >= 30 && downarrow % 2 == 0)) {
      --custom_offset;
    }
    if (custom_offset - 1 >= -500 && downarrow >= 120) {
      --custom_offset;
    }
    if (custom_offset - 1 >= -500 && downarrow >= 250) {
      --custom_offset;
    }
  }

  if (speed < 1.1) {
    if (rightarrow == 1) speed += 0.02;
  }
  if (speed > 0.3) {
    if (leftarrow == 1) speed -= 0.02;
  }

  if (exithover == true && mousejustpressed == 1) {
    game_position = "settings_levelselect";
    storeItem('custom_offset', custom_offset);
    storeItem('speed', speed);
  }
}