var avg;
function calcScore() {
  combo = 0;
  ap = 1;
  perfect = great = good = bad = passed_notes = 0;
  avg = 0;
  let maxcombo = -1;
  for (let i = 0; i < total_notes[chart_num]; i++) {
    if (tapped[i] != -1) {
      ++passed_notes;
      if (abs(tapped[i]) <= BAD) avg += tapped[i];
      if (abs(tapped[i]) <= PERFECT) { ++perfect; }
      else if (abs(tapped[i]) <= GREAT) { ++great; if (ap == 1) ap = 0; }
      else if (abs(tapped[i]) <= GOOD) { ++good; ap = -1; }
      else if (abs(tapped[i]) <= BAD) { ++bad; ap = -1; }
      else ap = -1;
      if (abs(tapped[i]) > GREAT) {
        combo = 0;
      } else {
        ++combo;
        if (maxcombo < combo) maxcombo = combo;
      }
    }
  }

  if (maxcombo == -1) maxcombo = 0;
  if (perfect == total_notes[chart_num]) maxcombo = combo;

  let accuracy = (perfect + great * 0.8 + good * 0.5) / total_notes[chart_num];
  let combopercentage = maxcombo / total_notes[chart_num];
  let score = floor(95000 * accuracy + 5000 * combopercentage);
  if (score > 0 && score < 100000) {
    for (i = 0; i < 7 - ceil(log(score + 1) / log(10)); i++) {
      score = "0" + score;
    }
  } else if (score == 0) score = "000000";

  graphics.textAlign(RIGHT);
  graphics.textSize(10 * C);
  graphics.noStroke();
  graphics.fill(255);
  let miss = passed_notes - perfect - great - good - bad;
  graphics.text("PERFECT:  ", -C * 160, -C * 50);
  graphics.text("GREAT:  ", -C * 160, -C * 25);
  graphics.text("GOOD:  ", -C * 160, 0);
  graphics.text("BAD:  ", -C * 160, C * 25);
  graphics.text("MISS:  ", -C * 160, C * 50);
  graphics.text("Avg timing:  ", -C * 160, C * 75);

  var avg_timing = 0;
  if (!isNaN(floor(avg / (passed_notes - miss) * 10) / 10)) {
    avg_timing = floor(avg / (passed_notes - miss) * 10) / 10;
  }
  graphics.textAlign(LEFT);
  graphics.textSize(15 * C);
  graphics.text(perfect, -C * 160, -C * 50);
  graphics.text(great, -C * 160, -C * 25);
  graphics.text(good, -C * 160, 0);
  graphics.text(bad, -C * 160, C * 25);
  graphics.text(miss, -C * 160, C * 50);
  graphics.text(avg_timing + "ms", -C * 160, C * 75);

  graphics.textAlign(CENTER);
  graphics.noStroke();
  graphics.fill(255);
  graphics.strokeWeight(2 * C);
  graphics.textSize(20 * C);

  let Rc = bgColor[floor(chart_num / 2)][0];
  let Gc = bgColor[floor(chart_num / 2)][1];
  let Bc = bgColor[floor(chart_num / 2)][2];

  if (!auto) graphics.text(score, 0, C * 180);
  if (ap < 0) graphics.fill(255, 255, 255, 200);
  else graphics.fill(255, 255, 255, 100);
  if (combo >= 3) {
    if (ap == 1) {
      graphics.strokeWeight(3 * C);
      graphics.stroke(Rc, Gc, Bc, 150);
    } else if (ap == 0) {
      graphics.strokeWeight(3 * C);
      graphics.stroke(255, 255, 255, 150);
    } else {
      graphics.noStroke();
    }

    if (avant_firstplay == true) {
      if (ap >= 0) {
        graphics.stroke(200, 200, 200, 150);
      } else {
        graphics.noStroke();
      }
    }
    graphics.textSize(C * 30);
    graphics.text(combo, C * 170, C * 20);
    graphics.textSize(C * 10);
    graphics.strokeWeight(C);
    graphics.text("COMBO", C * 170, -C * 15);
  }
}