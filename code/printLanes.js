var stretch_4kLanes = 1.0;

function printLanes() {

  let Rc = bgColor[floor(chart_num / 2)][0];
  let Gc = bgColor[floor(chart_num / 2)][1];
  let Bc = bgColor[floor(chart_num / 2)][2];

  graphics.stroke(Rc, Gc, Bc);
  graphics.strokeWeight(2.5 * C);
  graphics.line(-100 * C, 150 * C, 100 * C, 150 * C); //judgement line

  graphics.push();
  graphics.strokeCap(SQUARE);
  if (firstplay == false && avant_firstplay == false && WorldCollapseFirstplay == false) {
    graphics.stroke(200);
  } else graphics.stroke(50);
  graphics.strokeWeight(2 * C);
  graphics.line(-175 * C, -180 * C, -175 * C, -160 * C);
  graphics.line(-165 * C, -180 * C, -165 * C, -160 * C);
  graphics.noStroke();
  if (firstplay == false && avant_firstplay == false && WorldCollapseFirstplay == false) {
    graphics.fill(200);
  } else graphics.fill(50);
  graphics.textAlign(CENTER, CENTER);
  graphics.textSize(10 * C);
  if (firstplay == false && avant_firstplay == false && WorldCollapseFirstplay == false) {
    graphics.text("Pause (ESC)", -170 * C, -145 * C);
  } else graphics.text("Pause (Disabled)", -170 * C, -145 * C);
  graphics.pop(); //pause indicator

  graphics.rectMode(CENTER);
  graphics.strokeWeight(5 * C);
  graphics.stroke(Rc, Gc, Bc, 150);
  graphics.noFill();
  graphics.rect(0, 0, 200 * C, 400 * C);
  graphics.strokeWeight(2 * C);
  graphics.stroke(255);
  graphics.noFill();
  graphics.rect(0, 0, 200 * C, 400 * C); //frame

  graphics.stroke(255, 255, 255, 50);
  if (!fourkey[chart_num]) {
    graphics.line(100 * C / 3, -200 * C, 100 * C / 3, 150 * C);
    graphics.line(-100 * C / 3, -200 * C, -100 * C / 3, 150 * C);
    graphics.line(0, -200 * C, 0, 150 * C);
    graphics.line(200 * C / 3, -200 * C, 200 * C / 3, 150 * C);
    graphics.line(-200 * C / 3, -200 * C, -200 * C / 3, 150 * C); //6K lanes
  } else {
    graphics.line(-50 * C * stretch_4kLanes, -200 * C, -50 * C * stretch_4kLanes, 150 * C);
    graphics.line(0, -200 * C, 0, 150 * C);
    graphics.line(50 * C * stretch_4kLanes, -200 * C, 50 * C * stretch_4kLanes, 150 * C); //4K lanes
  }


  graphics.noStroke();
  graphics.fill(255, 255, 255, 50);
  graphics.textSize(15 * C);
  if (!fourkey[chart_num]) {
    graphics.text("S", -C * 200 / 3 - C * 100 / 6, 0);
    graphics.text("D", -C * 100 / 3 - C * 100 / 6, 0);
    graphics.text("F", -C * 100 / 6, 0);
    graphics.text("J", C * 100 / 6, 0);
    graphics.text("K", C * 100 / 3 + C * 100 / 6, 0);
    graphics.text("L", C * 200 / 3 + C * 100 / 6, 0); //6K keybind indication
  } else {
    graphics.text("D", -C * 75 * stretch_4kLanes, 0);
    graphics.text("F", -C * 25 * stretch_4kLanes, 0);
    graphics.text("J", C * 25 * stretch_4kLanes, 0);
    graphics.text("K", C * 75 * stretch_4kLanes, 0); //4K keybind indication
  }

  let ratio = (chart_time / 1000 - songoffset[floor(chart_num / 2)]) / (music[floor(chart_num / 2)].duration() - songoffset[floor(chart_num / 2)]);
  if (isNaN(ratio)) ratio = 0;
  graphics.rectMode(CORNER);
  graphics.fill(Rc, Gc, Bc, 100);
  graphics.noStroke();
  graphics.rect(-100 * C, 150 * C, ratio * 200 * C, 50 * C); //duration bar

  if (auto) {
    graphics.push();
    graphics.fill(255, 100, 100);
    graphics.stroke(255, 100, 100);
    graphics.strokeWeight(2 * C);
    graphics.textSize(20 * C);
    graphics.text("AUTO", 0, C * 180);
    graphics.pop();
  }
}