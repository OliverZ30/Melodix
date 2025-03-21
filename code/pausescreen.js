const WT = 120;
var ESC;
var enterkey;
var space;
var r_key;
var pausetimer = -1;

var keyisdown = -1;

var pausehover = false;
var pause_continuehover = false;
var pause_exithover = false;
var pause_restarthover = false;

function pausescreen() {

  if (firstplay == false) {

  mousex = mouseX - W / 2;
  mousey = mouseY - H / 2;
  pausehover = false;
  pause_continuehover = false;
  pause_exithover = false;
  pause_restarthover = false;

  if (mouseIsPressed) {
    if (mousejustpressed == -1) {
      mousejustpressed = 1;
    } else if (mousejustpressed == 1) {
      mousejustpressed = 0;
    }
  } else mousejustpressed = -1;

  if (!inTransition) {
    if (keyIsDown(ESCAPE) && keyisdown != 1 && keyisdown != 2) {
      if (ESC == -1) { ESC = 1; keyisdown = 0; }
      else if (ESC == 1) { ESC = 0; keyisdown = 0; }
    } else ESC = -1;
    if (keyIsDown(ENTER) && keyisdown != 0 && keyisdown != 2) {
      if (enterkey == -1) { enterkey = 1; keyisdown = 1; }
      else if (enterkey == 1) { enterkey = 0; keyisdown = 1; }
    } else enterkey = -1;
    if (keyIsDown(32)) {
      if (space == -1) space = 1;
      else if (space == 1) space = 0;
    } else space = -1;
    if (keyIsDown(82) && keyisdown != 0 && keyisdown != 1) {
      if (r_key == -1) { r_key = 1; keyisdown = 2; }
      else if (r_key == 1) { r_key = 0; keyisdown = 2; }
    } else r_key = -1;
    if (r_key == -1 && enterkey == -1 && ESC == -1) keyisdown = -1;

    if (mousex > -185 * C && mousex < -155 * C && mousey > -185 * C && mousey < -155 * C) {
      graphics.push();
      graphics.rectMode(CENTER);
      graphics.strokeCap(SQUARE);
      graphics.stroke(175);
      graphics.strokeWeight(2 * C);
      graphics.noFill();
      graphics.square(-170 * C, -170 * C, 30 * C);
      pausehover = true;
      graphics.pop();
    }

    if (pausehover == true && mousejustpressed == 1) {
      if(musicplaying == true) {
        music[floor(chart_num / 2)].pause();
        musicplaying = false;
      }
    }
    
    if (ESC >= 0 && pausetimer == -1 ) {
      if (musicplaying == true && ESC == 1) {
        music[floor(chart_num / 2)].pause();
        musicplaying = false;
      } else if (musicplaying == false && space == 1) {
        music[floor(chart_num / 2)].stop();
        game_position = "pausescreen_levelselect";
      }
    }
    if (abs(mousex - (-W / 5)) <= H / 14 && abs(mousey) <= H / 14 && mousejustpressed == 1) {
      if (musicplaying == false) {
        music[floor(chart_num / 2)].stop();
        game_position = "pausescreen_levelselect";
      }
    }

    if (r_key >= 0 && pausetimer == -1) {
      if (musicplaying == false && space == 1) {
        music[floor(chart_num / 2)].stop();
        game_position = "pausescreen_level";
      }
    }
    if (abs(mousex) <= H / 14 && abs(mousey) <= H / 14 && mousejustpressed == 1) {
      if (musicplaying == false) {
        music[floor(chart_num / 2)].stop();
        game_position = "pausescreen_level";
      }
    }
  }

  if (enterkey >= 0 && musicplaying == false) {
    if (space == 1 && pausetimer == -1) {
      pausetimer = 0;
    }
  }
  if (abs(mousex - (W / 5)) <= H / 14 && abs(mousey) <= H / 14 && mousejustpressed == 1) {
    if (musicplaying == false && pausetimer == -1) {
      pausetimer = 0;
    }
  }

  if (pausetimer >= 0) {
    ++pausetimer;
  }

  if (musicplaying == false && pausetimer == -1) {
    graphics.rotate(0);
    graphics.rectMode(CENTER);
    graphics.noStroke();
    graphics.fill(0, 0, 0, 210);
    graphics.rect(0, 0, 2 * W, 2 * H);
    //shade

    if (ESC >= 0 || (abs(mousex - (-W / 5)) <= H / 14 && abs(mousey) <= H / 14)) {
      pause_exithover = true;
      push();
      graphics.noFill();
      graphics.strokeWeight(4 * C);
      graphics.stroke(255, 255, 255, 128);
      graphics.rect(-W / 5, 0, H / 7, H / 7);
      pop();
    }
    graphics.fill(255);
    graphics.noStroke();
    graphics.rectMode(CORNERS);
    graphics.rect(-W / 5 - C * 17, -H / 200, -W / 5 + C * 20, H / 200);
    graphics.triangle(-W / 5 - 15 * C, 7 * C, -W / 5 - 15 * C, -7 * C, -W / 5 - 22 * C, 0);
    //exit

    if (r_key >= 0 || (abs(mousex) <= H / 14 && abs(mousey) <= H / 14)) {
      pause_restarthover = true;
      push();
      graphics.rectMode(CENTER);
      graphics.noFill();
      graphics.strokeWeight(4 * C);
      graphics.stroke(255, 255, 255, 128);
      graphics.rect(0, 0, H / 7, H / 7);
      pop();
    }
    graphics.rectMode(CENTER);
    graphics.noFill();
    graphics.strokeWeight(4 * C);
    graphics.stroke(255);
    graphics.arc(0, 0, H / 10, H / 10, 0, PI + HALF_PI);
    graphics.fill(255);
    graphics.noStroke();
    graphics.triangle(0, -H / 20 + 7 * C, 0, -H / 20 - 7 * C, 0 + 10 * C, -H / 20);
    //restart

    if (enterkey >= 0 || (abs(mousex - (W / 5)) <= H / 14 && abs(mousey) <= H / 14)) {
      pause_continuehover = true;
      push();
      graphics.noFill();
      graphics.strokeWeight(4 * C);
      graphics.stroke(255, 255, 255, 128);
      graphics.rect(W / 5, 0, H / 7, H / 7);
      pop();
    }
    graphics.noStroke();
    graphics.fill(255);
    graphics.triangle(W / 5 - C * 15, H / 20, W / 5 - C * 15, -H / 20, W / 5 + C * 20, 0);
    //continue

    graphics.noStroke();
    graphics.fill(255);
    graphics.textSize(10 * C);
    graphics.textAlign(CENTER);
    graphics.text("hold ESC,", -W / 5, H / 10 + 10 * C);
    graphics.text("hold R,", 0, H / 10 + 10 * C);
    graphics.text("hold ENTER,", W / 5, H / 10 + 10 * C);
    graphics.text("then press SPACE", -W / 5, H / 10 + 25 * C);
    graphics.text("then press SPACE", 0, H / 10 + 25 * C);
    graphics.text("then press SPACE", W / 5, H / 10 + 25 * C);
  }

  if (musicplaying == false && pausetimer >= 0) {
    graphics.rotate(0);
    graphics.rectMode(CENTER);
    graphics.noStroke();
    graphics.fill(0, 0, 0, 192 - 192 / WT * pausetimer);
    graphics.rect(0, 0, 2 * W, 2 * H);
  }

  graphics.textAlign(CENTER);
  if (pausetimer >= 0 && pausetimer <= WT / 6) {
    graphics.stroke(255, 255, 255, 255 - 255 / WT * 6 * pausetimer);
    graphics.fill(255, 255, 255, 255 - 255 / WT * 6 * pausetimer);
    graphics.textSize(40 * C);
    graphics.text("3", 6, 16);
  }
  if (pausetimer >= WT / 3 && pausetimer <= WT / 2) {
    graphics.stroke(255, 255, 255, 255 - 255 / WT * 6 * (pausetimer - WT / 3));
    graphics.fill(255, 255, 255, 255 - 255 / WT * 6 * (pausetimer - WT / 3));
    graphics.textSize(40 * C);
    graphics.text("2", 6, 16);
  }
  if (pausetimer >= 2 * WT / 3 && pausetimer <= 5 * WT / 6) {
    graphics.stroke(255, 255, 255, 255 - 255 / WT * 6 * (pausetimer - 2 * WT / 3));
    graphics.fill(255, 255, 255, 255 - 255 / WT * 6 * (pausetimer - 2 * WT / 3));
    graphics.textSize(40 * C);
    graphics.text("1", 6, 16);
  }

  if (pausetimer == WT) {
    music[floor(chart_num / 2)].play();
    musicplaying = true;
    pausetimer = -1;
  }

  }

}