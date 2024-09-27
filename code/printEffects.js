function printEffects() {
  for (i = 0; i < total_notes[chart_num]; i++) {
    if (effect_time[i] > 0 && tapped[i] != -1) {
      if (!fourkey) gradient[i] = graphics.drawingContext.createLinearGradient(-C * 100 + C * 100 / 3 * (chart[chart_num][i][2] - 1), C * 150, -C * 100 + C * 100 / 3 * (chart[chart_num][i][2] - 1), C * 100);
      else gradient[i] = graphics.drawingContext.createLinearGradient(-C * 150 + C * 50 * (chart[chart_num][i][2] - 1), C * 150, -C * 150 + C * 50 * (chart[chart_num][i][2] - 1), C * 100);
      if ((tapped[i] > -4000 && abs(tapped[i]) <= PERFECT) || (tapped[i] <= -4000 && abs(tapped[i] + 5000) <= PERFECT)) {
        if (avant_firstplay == true) {
          gradient[i].addColorStop(0, color(255, 255, 255, 255 * (1 - effect_opacity[i])));
          gradient[i].addColorStop(1, color(255, 255, 255, 0));
        } else {
          gradient[i].addColorStop(0, color(255, 200, 255, 255 * (1 - effect_opacity[i])));
          gradient[i].addColorStop(1, color(255, 200, 255, 0));
        }
      } else if ((tapped[i] > -4000 && abs(tapped[i]) <= GREAT) || (tapped[i] <= -4000 && abs(tapped[i] + 5000) <= GREAT)) {
        if (avant_firstplay == true) {
          gradient[i].addColorStop(0, color(200, 200, 200, 255 * (1 - effect_opacity[i])));
          gradient[i].addColorStop(1, color(200, 200, 200, 0));
        } else {
          gradient[i].addColorStop(0, color(255, 255, 200, 255 * (1 - effect_opacity[i])));
          gradient[i].addColorStop(1, color(255, 255, 200, 0));
        }
      } else if ((tapped[i] > -4000 && abs(tapped[i]) <= GOOD) || (tapped[i] <= -4000 && abs(tapped[i] + 5000) <= GOOD)) {
        if (avant_firstplay == true) {
          gradient[i].addColorStop(0, color(200, 200, 200, 255 * (1 - effect_opacity[i])));
          gradient[i].addColorStop(1, color(200, 200, 200, 0));
        } else {
          gradient[i].addColorStop(0, color(200, 255, 255, 255 * (1 - effect_opacity[i])));
          gradient[i].addColorStop(1, color(200, 255, 255, 0));
        }
      }
      graphics.drawingContext.fillStyle = gradient[i];
      graphics.rectMode(CORNER);
      graphics.noStroke();
      if (!fourkey[chart_num]) graphics.rect(-C * 100 + C * 100 / 3 * (chart[chart_num][i][2] - 1), C * 100, C * 100 / 3, C * 50);
      else graphics.rect(-C * 150 + C * 50 * (chart[chart_num][i][2] - 1), C * 50, C * 50, C * 100);
    }
  }
}