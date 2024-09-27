var metronome_count = 0;
var metronome_time = 0;
function levelTransition() {
  chart_time = songoffset[chart_num] * 1000;
  metronome_time += deltaTime;
  if (metronome_time >= 60000 / bpm[chart_num]) {
    metronome_time = 0;
    if (metronome_count == 0) beat.play(0, 1, 1, 0);
    else if (metronome_count < beats[chart_num]) beat.play(0, 0.7, 1, 0);
    ++metronome_count;
  }
  if (metronome_count == beats[chart_num] + 1) {
    game_position = "level";
    init();
    if (music[floor(chart_num / 2)].isPlaying()) music[floor(chart_num / 2)].stop();
    music[floor(chart_num / 2)].play(0, 1, 1, songoffset[floor(chart_num / 2)]);
    musicplaying = true;
    musicbegin = true;
  }
}