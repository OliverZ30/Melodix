var auto = false;
var autodelay = 60;
function calcTaps() {
  if (musicplaying) {
    for (let i = 0; i < total_notes[chart_num]; i++) {
      let note_time = (chart[chart_num][i][0] * 24 + chart[chart_num][i][1] + offset[chart_num]) * 60 * 1000 / bpm[chart_num] / 24;
      note_time += (custom_offset - auto * autodelay);
      let dy = note_time - chart_time;
      if (auto) {
        if (dy <= PERFECT / 4) {
          tapped[i] = 0;
        }
      } else {
        if (chart[chart_num][i][3] == 0) {
          if (dy < -BAD && tapped[i] == -1) {
            tapped[i] = -1000;
          } else if (tapped[i] == -1) {
            if (tapping[chart[chart_num][i][2] - 1] == 1 && hitnote[chart[chart_num][i][2] - 1] == -1) {
              if (abs(dy) <= BAD) {
                tapped[i] = floor(dy);
                if (tapped[i] == -1) tapped[i] = -2;
                hitnote[chart[chart_num][i][2] - 1] = 1;
              }
            }
          }
        } else if (chart[chart_num][i][3] < 0) { //hold notes
          if (dy < -BAD && tapped[i] == -1) {
            tapped[i] = -500;
          } else {
            if (tapped[i] == -1) {
              if (tapping[chart[chart_num][i][2] - 1] == 1 && hitnote[chart[chart_num][i][2] - 1] == -1) {
                if (abs(dy) <= BAD) {
                  tapped[i] = floor(dy);
                  if (tapped[i] == -1) tapped[i] = -2;
                  hitnote[chart[chart_num][i][2] - 1] = 1;
                }
              }
            } else if (tapped[i] != -500) {
              let Sp = speed;
              if (chart_num == 0) {
                Sp = default_speed;
              }
              if (chart_time >= note_time && chart_time <= note_time - (0 - floor(60000 * (0 - chart[chart_num][i][3]) / bpm[chart_num] / 24) * Sp) / Sp - BAD) {
                stroke(255);
                if (tapping[chart[chart_num][i][2] - 1] == -1 && tapped[i] > -4000) tapped[i] -= 5000;
              }
            }
          }
        }
      }
    }
  }
}