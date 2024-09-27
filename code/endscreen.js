function endscreen() {

  let Hshift = 90 * C;
  let Vshift = 60 * C;

  if (keyIsDown(ESCAPE)) {
    if (ESC == -1) ESC = 1;
    else if (ESC == 1) ESC = 0;
  } else ESC = -1;
  if (keyIsDown(ENTER)) {
    if (enterkey == -1) enterkey = 1;
    else if (enterkey == 1) enterkey = 0;
  } else enterkey = -1;

  // if (!inTransition) {
  //   if (ESC == 1 || enterkey == 1) {

  //   }
  // }

  if (avant_firstplay == true) {
    avant_firstplay = false;
  }

  if (auto) {
    graphics.push();
    graphics.rotate(-PI / 2);
    graphics.textAlign(CENTER, CENTER);
    graphics.fill(255, 100, 100, 100);
    graphics.stroke(255, 100, 100, 100);
    graphics.strokeWeight(2 * C);
    graphics.textSize(120 * C);
    graphics.text("AUTO", 0, -C * 25 - Hshift);
    graphics.rotate(PI / 2);
    graphics.pop();
  }

  perfect = great = good = bad = 0;
  let miss = 0;
  ap = 1;
  let maxcombo = -1;
  for (i = 0; i < total_notes[chart_num]; i++) {
    if (tapped[i] != -1) {
      if (abs(tapped[i]) <= GREAT && abs(tapped[i]) > PERFECT) {
        if (ap == 1) ap = 0;
      }
      if (abs(tapped[i]) > GREAT) ap = -1;

      if (abs(tapped[i]) <= PERFECT) ++perfect;
      else if (abs(tapped[i]) <= GREAT) ++great;
      else if (abs(tapped[i]) <= GOOD) ++good;
      else if (abs(tapped[i]) <= BAD) ++bad;
      else ++miss;
    }
  }

  combo = 0;
  for (i = 0; i < total_notes[chart_num]; i++) {
    if (abs(tapped[i]) > GREAT) {
      combo = 0;
    } else {
      ++combo;
      if (maxcombo < combo) maxcombo = combo;
    }
  }
  if (maxcombo == -1) maxcombo = 0;
  if (perfect == total_notes[chart_num]) maxcombo = combo;

  let accuracy = (perfect + great * 0.8 + good * 0.5) / total_notes[chart_num];
  let combopercentage = maxcombo / total_notes[chart_num];
  let score = floor(95000 * accuracy + 5000 * combopercentage);

  var rating;
  graphics.textAlign(CENTER);
  graphics.textSize(120 * C);

  let ratingrank = 0;

  if (ap == 1) {
    ratingrank = 0;
    graphics.fill(255, 125, 125);
    graphics.push();
    graphics.text("X", 0 - Hshift, -C * 60);
    // text("V",-C*15,-C*50);
    // textSize(50*C);
    // stroke(255,125,125);
    // strokeWeight(2*C);
    // text("+",C*40,-C*80);
    graphics.pop();
  } else {

    if (score >= 97000) { rating = "V"; ratingrank = 2; }
    else if (score >= 93000) { rating = "S"; ratingrank = 3; }
    else if (score >= 90000) { rating = "A"; ratingrank = 4; }
    else if (score >= 85000) { rating = "B"; ratingrank = 5; }
    else if (score >= 80000) { rating = "C"; ratingrank = 6; }
    else { rating = "F"; ratingrank = 7; }

    if (ap == 0 && score >= 80000) {
      ratingrank = 1;
      graphics.fill(255, 255, 125);
    } else {
      graphics.fill(255);
    }

    graphics.text(rating, 0 - Hshift, -C * 60);
  }

  if (scoredata[datapos[chart_num]][1] > ratingrank || scoredata[datapos[chart_num]][1] == -1) {
    if (!auto) {
      scoredata[datapos[chart_num]][1] = ratingrank;
      storeItem('scoredata', scoredata);
    }
  }

  let Rc = bgColor[floor(chart_num / 2)][0];
  let Gc = bgColor[floor(chart_num / 2)][1];
  let Bc = bgColor[floor(chart_num / 2)][2];

  graphics.rectMode(CENTER);
  graphics.strokeWeight(5 * C);
  graphics.stroke(Rc, Gc, Bc, 150);
  graphics.noFill();
  graphics.rect(0, 0, 400 * C, 400 * C);
  graphics.strokeWeight(2 * C);
  graphics.stroke(255);
  graphics.noFill();
  graphics.rect(0, 0, 400 * C, 400 * C); //frame

  graphics.textSize(20 * C);
  graphics.noStroke();
  graphics.fill(255);

  // textAlign(CENTER);
  // if (!specialTitle[chart_num]) {
  //   textFont(fontRegular);
  // } else {
  //   textFont('Calibri');
  // }
  // text(title[chart_num], 0 - Hshift, -C * 150);
  // textFont(fontRegular);

  graphics.textSize(12 * C);
  graphics.textAlign(RIGHT);
  graphics.text("SCORE:  ", -C * 5 - Hshift, -C * 5);
  graphics.text("ACC:  ", -C * 5 - Hshift, C * 25);

  if (score > 0 && score < 100000) {
    for (i = 0; i < 7 - ceil(log(score + 1) / log(10)); i++) {
      score = "0" + score;
    }
  } else if (score == 0) score = "000000";

  graphics.textSize(20 * C);
  graphics.textAlign(LEFT);
  graphics.text(score, -C * 5 - Hshift, -C * 5);
  graphics.text(floor(accuracy * 10000) / 100 + "%", -C * 5 - Hshift, C * 25);

  if (floor(accuracy * 10000) / 100 > scoredata[datapos[chart_num]][0]) {
    if (!auto) {
      scoredata[datapos[chart_num]][0] = floor(accuracy * 10000) / 100;
      storeItem('scoredata', scoredata);
    }
  }

  let hshift = C * 5;

  graphics.textAlign(RIGHT);
  graphics.textSize(15 * C);
  graphics.noStroke();
  graphics.fill(255);
  graphics.text("PERFECT: ", hshift - Hshift, C * 70);
  graphics.text("GREAT: ", hshift - Hshift, C * 90);
  graphics.text("GOOD: ", hshift - Hshift, C * 110);
  graphics.text("BAD: ", hshift - Hshift, C * 130);
  graphics.text("MISS: ", hshift - Hshift, C * 150);

  graphics.textAlign(LEFT);
  graphics.textSize(20 * C);
  graphics.text("   " + perfect, hshift - Hshift, C * 70);
  graphics.text("   " + great, hshift - Hshift, C * 90);
  graphics.text("   " + good, hshift - Hshift, C * 110);
  graphics.text("   " + bad, hshift - Hshift, C * 130);
  graphics.text("   " + miss, hshift - Hshift, C * 150);

  graphics.textAlign(CENTER);

  // ==========
  // Right Side
  // ==========
  
  // title
  graphics.push();
  graphics.textAlign(LEFT);
  graphics.textSize(25 * C);
  graphics.text(title[chart_num], -C * 75 + Hshift, -C * 25 + Vshift);
  graphics.textFont(fontRegular);
  graphics.textSize(15 * C);
  graphics.text(artist[chart_num], -C * 75 + Hshift, C * 0 + Vshift);
  graphics.noFill();

  // image
  graphics.imageMode(CENTER);
  graphics.image(img[floor(chart_num / 2)], 0 + Hshift, -25 * C - Vshift, C * 150, C * 150);

  // difficulty

  if (difficulty[chart_num] <= 3) {
    graphics.stroke(170, 230, 170);
  } else if (difficulty[chart_num] <= 6) {
    graphics.stroke(170, 200, 230);
  } else if (difficulty[chart_num] <= 9) {
    graphics.stroke(230, 170, 170);
  } else {
    graphics.stroke(200, 170, 230);
  }
  graphics.rectMode(CORNER);
  graphics.rect(-C * 75 + Hshift, C * 22 + Vshift, C * 65, C * 38);
  graphics.textSize(25 * C);
  graphics.noStroke();

  graphics.fill(255);
  if (hardmode) graphics.text("HD ", -C * 75 + Hshift + C * 7, C * 50 + Vshift);
  else graphics.text("EZ ", -C * 75 + Hshift + C * 7, C * 50 + Vshift);
  graphics.textAlign(RIGHT);
  graphics.text(difficulty[chart_num], -C * 25 + Hshift + C * 7, C * 50 + Vshift);

  // text
  graphics.textAlign(LEFT);
  graphics.fill(150);
  graphics.textSize(10 * C);
  graphics.text("Press ENTER to continue", -C * 75 + Hshift, C * 90 + Vshift);
  graphics.pop();
}