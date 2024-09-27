function init() {
  ap = 1;
  combo = 0;
  chart_time = 0;
  hit = good = perfect = 0;
  metronome_count = 0;
  metronome_time = 0;
  framecount = 0;
  for (let i = 0; i < total_notes[chart_num]; i++) {
    tapped[i] = -1;
    effect_time[i] = effect_opacity[i] = -1;
    gradient[i] = 0;
  }
  for (let i = 0; i <= 6; i++) {
    tapping[i] = hitnote[i] = -1;
    laneTransp[i] = 0;
  }
}