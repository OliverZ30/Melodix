function initEffects() {
  for (i = 0; i < total_notes[chart_num]; i++) {
    if (tapped[i] != -1 && tapped[i] != -1000 && tapped[i] != -500) {
      if (effect_time[i] == -1) {
        effect_time[i] = 1;
        if (auto) {
          tap = new sfx('misc/tap.mp3', 1)
          tap.play();
        }
      } else if (effect_time[i] > 0) {
        effect_time[i] -= 0.03;
      } else {
        effect_time[i] = -2;
      }
      effect_opacity[i] = 2 - 2 * effect_time[i];
      effect_opacity[i] = min(max(effect_opacity[i], 0), 1);
    }
  }
}