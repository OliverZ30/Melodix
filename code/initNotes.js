function HF(x) {
  if (x > 0) {
    return 1;
  } else {
    return 0;
  }
}

function calcYpos(t_chart, t_note, noteid, SP) {

  let ITG_note = 0;
  let ITG_chart = 0;

  // ==========
  // fail-safe feature, not necessary
  if (speedCheckpoints[chart_num][noteid].checkpoint.length == 2) {
    ITG_note = speedCheckpoints[chart_num][noteid].checkpoint[0][2] * SP * t_note;
    ITG_chart = speedCheckpoints[chart_num][noteid].checkpoint[0][2] * SP * t_chart;
    return ITG_note - ITG_chart;
  }
  // ==========

  for (let i = 1; i < speedCheckpoints[chart_num][noteid].checkpoint.length; i++) {
    let x1 = speedCheckpoints[chart_num][noteid].checkpoint[i - 1][0] * 24 + speedCheckpoints[chart_num][noteid].checkpoint[i - 1][1];
    let x2 = speedCheckpoints[chart_num][noteid].checkpoint[i][0] * 24 + speedCheckpoints[chart_num][noteid].checkpoint[i][1];
    let y1 = speedCheckpoints[chart_num][noteid].checkpoint[i - 1][2];
    let y2 = speedCheckpoints[chart_num][noteid].checkpoint[i][2];

    if (x2 != x1) { // WE NEED A BETTER WAY TO DEAL WITH THIS CASE
      x1 *= (60000 / bpm[chart_num] / 24);
      x2 *= (60000 / bpm[chart_num] / 24);
      y1 *= SP;
      y2 *= SP;

      let ITG_Def = (x2 - x1) * (y2 + y1) / 2;
      let ITG_N = (t_note - x1) * (2 * y1 + (t_note - x1) * (y2 - y1) / (x2 - x1)) / 2;
      let ITG_C = (t_chart - x1) * (2 * y1 + (t_chart - x1) * (y2 - y1) / (x2 - x1)) / 2;
      let H1_N = HF(1 - HF(x2 - t_note));
      let H2_N = HF(x2 - t_note) * HF(t_note - x1);
      let H1_C = HF(1 - HF(x2 - t_chart));
      let H2_C = HF(x2 - t_chart) * HF(t_chart - x1);

      ITG_note += ITG_Def * H1_N + ITG_N * H2_N;
      ITG_chart += ITG_Def * H1_C + ITG_C * H2_C;
    }
  }

  return ITG_note - ITG_chart;
}

function initNotes() {
  ++framecount;
  if (musicplaying) {
    if (framecount % 10 == 0) chart_time = music[floor(chart_num / 2)].currentTime() * 1000;
    else chart_time += deltaTime;
  }
  //if(musicplaying)chart_time=music[floor(chart_num/2)].currentTime()*1000;
  for (let i = 0; i < total_notes[chart_num]; i++) {

    let noteid = 0;
    if (chart[chart_num][i][4] != undefined) {
      noteid = chart[chart_num][i][4];
    }

    let notetime = (chart[chart_num][i][0] * 24 + chart[chart_num][i][1] + offset[chart_num]) * 60 * 1000 / bpm[chart_num] / 24 + custom_offset - auto * autodelay;

    py[i] = 150 * C;
    let Sp = speed;
    if (chart_num == 0) {
      Sp = default_speed;
    }

    py[i] -= calcYpos(chart_time, notetime, noteid, Sp);
    //py[i] -= (((chart[chart_num][i][0] * 24 + chart[chart_num][i][1] + offset[chart_num]) * 60 * 1000 / bpm[chart_num] / 24 + custom_offset - auto * autodelay) - chart_time) * Sp;
  }
}