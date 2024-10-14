var laneTransp = [];
var laneFadeTime = 150;

function initTaps() {
  graphics.noStroke();
  graphics.rectMode(CORNER);

  let Rc = bgColor[floor(chart_num / 2)][0];
  let Gc = bgColor[floor(chart_num / 2)][1];
  let Bc = bgColor[floor(chart_num / 2)][2];

  for (let i = 0; i < 6; i++) {
    if (keyIsDown(KEY[i])) {
      if (tapping[i] == -1) tapping[i] = 1;
      else if (tapping[i] == 1) tapping[i] = 0;
    } else tapping[i] = hitnote[i] = -1;

    if (keyIsDown(KEY[i])) {
      laneTransp[i] = laneFadeTime;
    } else if (laneTransp[i] > 0) {
      laneTransp[i] -= deltaTime;
    }
    if (laneTransp[i] <= 0) laneTransp[i] = 0;
  }

  for (let i = 0; i < 6; i++) {
    if (!fourkey) {
      if (i == 1 || i == 4) graphics.fill(Rc, Gc, Bc, 50 * laneTransp[i] / laneFadeTime);
      else graphics.fill(Rc, Gc, Bc, 30 * laneTransp[i] / laneFadeTime);
    } else {
      if (i == 2 || i == 3) graphics.fill(Rc, Gc, Bc, 50 * laneTransp[i] / laneFadeTime);
      else graphics.fill(Rc, Gc, Bc, 30 * laneTransp[i] / laneFadeTime);
    }
    if (fourkey[chart_num] == false && auto == false) {
      if (laneTransp[i] > 0) {
        graphics.rect(-C * 100 + C * 100 / 3 * i, -C * 200, C * 100 / 3, C * 350);
      }
    } else if (fourkey[chart_num] == true && auto == false && i >= 1 && i <= 4) {
      if (laneTransp[i] > 0) {
        graphics.rect(-C * 150 * stretch_4kLanes + C * 50 * stretch_4kLanes * i, -C * 200, C * 50 * stretch_4kLanes, C * 350);
      }
    }
  }
}