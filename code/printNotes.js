function printNotes() {
  var T = 255;
  let Rc = bgColor[floor(chart_num / 2)][0];
  let Gc = bgColor[floor(chart_num / 2)][1];
  let Bc = bgColor[floor(chart_num / 2)][2];
  for (i = 0; i < total_notes[chart_num]; i++) {
    if (py[i] >= -C * 200 && py[i] <= C * 200 && tapped[i] == -1) {
      T = 255;
      if (py[i] >= C * 150) {
        T = 255 - (py[i] - C * 150) / (C * 10) * 255;
        if (chart[chart_num][i][3] < 0) T = 0;
      }
      if (!fourkey[chart_num]) {
        if (chart[chart_num][i][2] == 2 || chart[chart_num][i][2] == 5) {
          graphics.fill(220, 235, 220, T);
        } else {
          graphics.fill(Rc, Gc, Bc, T); //
        }
      } else {
        if (chart[chart_num][i][2] == 3 || chart[chart_num][i][2] == 4) {
          graphics.fill(220, 235, 220, T);
        } else {
          graphics.fill(Rc, Gc, Bc, T); //
        }
      }
      graphics.noStroke();
      graphics.rectMode(CORNER);
      if (fourkey[chart_num] == false) graphics.rect(-C * 100 + C * 100 / 3 * (chart[chart_num][i][2] - 1), py[i] - noteWidth, C * 100 / 3, 2 * noteWidth);
      else graphics.rect(-C * 150 * stretch_4kLanes + C * 50 * stretch_4kLanes * (chart[chart_num][i][2] - 1), py[i] - 1.5 * noteWidth, C * 50 * stretch_4kLanes, 3 * noteWidth);
    }
    let Sp = speed;
    if (chart_num == 0) {
      Sp = default_speed;
    }
    if (chart[chart_num][i][3] < 0 && py[i] >= -C * 200 && (tapped[i] == -1 || (tapped[i] != -1 && chart_time <= (chart[chart_num][i][0] * 24 + chart[chart_num][i][1] + offset[chart_num]) * 60 * 1000 / bpm[chart_num] / 24 + custom_offset - auto * autodelay + floor(60000 * (0 - chart[chart_num][i][3]) / bpm[chart_num] / 24)))) {
      if (tapped[i] != -500 && tapped[i] > -4000) {
        if (!fourkey[chart_num]) {
          if (chart[chart_num][i][2] == 2 || chart[chart_num][i][2] == 5) {
            graphics.fill(220, 235, 220);
          } else {
            graphics.fill(Rc, Gc, Bc);
          }
        } else {
          if (chart[chart_num][i][2] == 3 || chart[chart_num][i][2] == 4) {
            graphics.fill(220, 235, 220);
          } else {
            graphics.fill(Rc, Gc, Bc); //
          }
        }
      } else if (tapped[i] == -500 || tapped[i] <= -4000) {
        if (!fourkey[chart_num]) {
          if (chart[chart_num][i][2] == 2 || chart[chart_num][i][2] == 5) {
            graphics.fill(90, 96, 90);
          } else {
            graphics.fill(Rc / 4, Gc / 4, Bc / 4);
          }
        } else {
          if (chart[chart_num][i][2] == 3 || chart[chart_num][i][2] == 4) {
            graphics.fill(90, 96, 90);
          } else {
            graphics.fill(Rc / 4, Gc / 4, Bc / 4); //
          }
        }
      }
      graphics.rectMode(CORNERS);

      let noteid = 0;
      if (chart[chart_num][i][4] != undefined) {
        noteid = chart[chart_num][i][4];
      }

      let holdendtime = (chart[chart_num][i][0] * 24 + chart[chart_num][i][1] - chart[chart_num][i][3] + offset[chart_num]) * 60 * 1000 / bpm[chart_num] / 24 + custom_offset - auto * autodelay;

      let holdendY = 150 * C;
      let Sp = speed;
      if (chart_num == 0) {
        Sp = default_speed;
      }

      holdendY -= calcYpos(chart_time, holdendtime, noteid, Sp);

      if (!fourkey[chart_num]) graphics.rect(-C * 100 + C * 100 / 3 * (chart[chart_num][i][2] - 1), min(C * 150, max(-C * 200, holdendY)), -C * 100 + C * 100 / 3 * (chart[chart_num][i][2]), min(C * 150, py[i]));
      else graphics.rect(-C * 150 * stretch_4kLanes + C * 50 * stretch_4kLanes * (chart[chart_num][i][2] - 1), min(C * 150, max(-C * 200, holdendY)), -C * 150 * stretch_4kLanes + C * 50 * stretch_4kLanes * (chart[chart_num][i][2]), min(C * 150, py[i]));
    }
  }
}