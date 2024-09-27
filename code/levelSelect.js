var level_index = 0;
var page = 0;
var T = 0;

var playing = false;
var playinglvl = -1;
var musictime = 0;
var fadetime = 2;
var faded = false;
var endrange = 100;

var lslFrame = 0;

var mousex, mousey;

function loadSoundAsync(path, index) {
  return new Promise((resolve, reject) => {
    loadSound(path, (sound) => {
      music[index] = sound;
      onSoundLoaded(index);
      resolve(sound);
    }, reject);
  });
}

function onSoundLoaded(x) {
  loaded[x] = true;
}

function musiclogic() {

  // push();
  // textSize(20 * C);
  // fill(255);
  // for (let i = 0; i < loaded.length; i++) {
  //   text(loaded[i], 0, -100 + i * 20);
  // }
  // pop();

  if (playinglvl == -1 && !inTransition && music[floor(level_index / 2)] == undefined && !beginLoad[floor(level_index / 2)]) {
    framecount = 0;
    musictime = menuoffset[playinglvl] * 1000;
    faded = false;
    // playinglvl = floor(level_index / 2);
    //music[floor(level_index / 2)] = loadSound('music/' + songname[floor(level_index / 2)] + '.mp3', () => onSoundLoaded(floor(level_index / 2)));
    loadSoundAsync('music/' + songname[floor(level_index / 2)] + '.mp3', floor(level_index / 2));
    beginLoad[floor(level_index / 2)] = true;
    //print("begin", floor(level_index / 2))
  } else if (playinglvl == -1 && !inTransition && loaded[floor(level_index / 2)]) {
    framecount = 0;
    musictime = menuoffset[playinglvl] * 1000;
    faded = false;
    playinglvl = floor(level_index / 2);
    //print(playinglvl, loaded[playinglvl]);
    if (music[playinglvl].isPlaying()) music[playinglvl].stop();
    if (WorldCollapseUnlocked == false && (level_index == WorldCollapseIndex || level_index == WorldCollapseIndex + 1)) {
    } else {
      music[playinglvl].play(0, 1, 0, menuoffset[playinglvl], menuduration[playinglvl]);
      music[playinglvl].setVolume(1, fadetime, 0);
    }
  } else if (playinglvl >= 0 && !inTransition) {
    if (framecount % 10 == 0) musictime = music[playinglvl].currentTime() * 1000;
    else musictime += deltaTime;
    if (!faded && musictime >= (menuoffset[playinglvl] + menuduration[playinglvl] - fadetime) * 1000) {
      music[playinglvl].setVolume(0, fadetime, 0);
      faded = true;
    }
    if (musictime >= (menuoffset[playinglvl] + menuduration[playinglvl]) * 1000 - endrange) {
      playinglvl = -1;
    }
  }
}

var barcount = 10;
var bars = [];
function initfft() {
  if (playinglvl != -1) {
    fft.setInput(music[playinglvl]);
    spectrum = fft.analyze();
    for (let i = 0; i < barcount; i++) {
      bars[i] = pow(pow(6, spectrum[floor(spectrum.length / (barcount + 2) * i)] / 255) / 6, 2);
    }
  }
}

var mousepos = -1;
var rightarrowhover = false;
var leftarrowhover = false;
var settingshover = false;
var difficultyhover = false;
var autohover = true;
var mousejustpressed = -1;

function levelSelect() {

  mousex = mouseX - W / 2;
  mousey = mouseY - H / 2;
  rightarrowhover = false;
  leftarrowhover = false;
  settingshover = false;
  difficultyhover = false;
  autohover = false;

  if (mouseIsPressed) {
    if (mousejustpressed == -1) {
      mousejustpressed = 1;
    } else if (mousejustpressed == 1) {
      mousejustpressed = 0;
    }
  } else mousejustpressed = -1;

  ++framecount;
  ++lslFrame;
  lslFrame %= 100;

  graphics.rectMode(CENTER);

  graphics.push();
  graphics.textAlign(CENTER);
  graphics.textSize(10 * C);
  graphics.noFill();
  if (mousex > -W / 2 + C * 20 && mousex < -W / 2 + C * 60 && mousey > -H / 2 + C * 20 && mousey < -H / 2 + C * 60) {
    settingshover = true;
    graphics.fill(255, 255, 255, 50);
  }
  graphics.stroke(255, 255, 255, 150);
  graphics.square(-W / 2 + C * 40, -H / 2 + C * 40, C * 40);
  graphics.strokeWeight(2 * C);
  graphics.line(-W / 2 + C * 28, -H / 2 + C * 30, -W / 2 + C * 52, -H / 2 + C * 30);
  graphics.line(-W / 2 + C * 28, -H / 2 + C * 40, -W / 2 + C * 52, -H / 2 + C * 40);
  graphics.line(-W / 2 + C * 28, -H / 2 + C * 50, -W / 2 + C * 52, -H / 2 + C * 50);
  graphics.fill(255, 255, 255, 150);
  graphics.circle(-W / 2 + C * 34, -H / 2 + C * 30, 3 * C);
  graphics.circle(-W / 2 + C * 47, -H / 2 + C * 40, 3 * C);
  graphics.circle(-W / 2 + C * 40, -H / 2 + C * 50, 3 * C);
  graphics.noStroke();
  graphics.fill(150);
  graphics.text("SETTINGS (S)", -W / 2 + C * 40, -H / 2 + C * 75);
  graphics.pop();

  graphics.push();
  graphics.textAlign(CENTER, CENTER);
  graphics.textSize(20 * C);
  graphics.noFill();
  graphics.stroke(255, 150);
  if (!hardmode) {
    graphics.square(W / 2 - C * 80, -H / 2 + C * 40, C * 40);
    graphics.stroke(255, 50);
    if (mousex > W / 2 - C * 60 && mousex < W / 2 - C * 20 && mousey > -H / 2 + C * 20 && mousey < -H / 2 + C * 60) {
      graphics.fill(255, 255, 255, 25);
      difficultyhover = true;
    }
    graphics.square(W / 2 - C * 40, -H / 2 + C * 40, C * 40);
    graphics.noStroke();
    graphics.fill(150);
    graphics.text("EZ", W / 2 - C * 80, -H / 2 + C * 36);
    graphics.fill(50);
    graphics.text("HD", W / 2 - C * 40, -H / 2 + C * 36);
  }
  else {
    graphics.square(W / 2 - C * 40, -H / 2 + C * 40, C * 40);
    graphics.stroke(255, 50);
    if (mousex > W / 2 - C * 100 && mousex < W / 2 - C * 60 && mousey > -H / 2 + C * 20 && mousey < -H / 2 + C * 60) {
      graphics.fill(255, 255, 255, 25);
      difficultyhover = true;
    }
    graphics.square(W / 2 - C * 80, -H / 2 + C * 40, C * 40);
    graphics.noStroke();
    graphics.fill(50);
    graphics.text("EZ", W / 2 - C * 80, -H / 2 + C * 36);
    graphics.fill(150);
    graphics.text("HD", W / 2 - C * 40, -H / 2 + C * 36);
  }
  graphics.textSize(10 * C);
  graphics.fill(150);
  graphics.text("SPACE to switch", W / 2 - C * 60, -H / 2 + C * 75);
  graphics.strokeWeight(2 * C);
  graphics.pop();

  var hshift = -175 * C;
  var vshift = -40 * C;

  // right side AUTO indicator

  graphics.push();
  if (auto) {
    graphics.stroke(240, 60, 60);
    graphics.fill(240, 60, 60, 128);
    if (mousex > C * 170 - hshift - C * 19 && mousex < C * 170 - hshift + C * 19 && mousey > C * 31 + vshift - C * 19 && mousey < C * 31 + vshift + C * 19) {
      graphics.fill(240, 60, 60, 75);
      autohover = true;
    }
    graphics.square(C * 170 - hshift, C * 31 + vshift, C * 38);
    graphics.noStroke();
    graphics.fill(255);
    graphics.textSize(12 * C);
    graphics.textAlign(CENTER, CENTER);
    graphics.text("AUTO", C * 170 - hshift, C * 29 + vshift);
  } else {
    graphics.stroke(128);
    graphics.noFill();
    if (mousex > C * 170 - hshift - C * 19 && mousex < C * 170 - hshift + C * 19 && mousey > C * 31 + vshift - C * 19 && mousey < C * 31 + vshift + C * 19) {
      graphics.fill(255, 255, 255, 50);
      autohover = true;
    }
    graphics.square(C * 170 - hshift, C * 31 + vshift, C * 38);
    graphics.noStroke();
    graphics.fill(128);
    graphics.textSize(12 * C);
    graphics.textAlign(CENTER, CENTER);
    graphics.text("AUTO", C * 170 - hshift, C * 29 + vshift);
  }
  graphics.pop();

  // Left / Right Arrows

  graphics.push();
  if ((page + 1) * 10 < total_charts) {
    graphics.stroke(200);
    graphics.noFill();
    if (sqrt(pow(mousex - (C * 187 + hshift), 2) + pow(mousey - (C * 0), 2)) <= C * 10) {
      graphics.fill(100);
      rightarrowhover = true;
    }
    graphics.triangle(C * 195 + hshift, 0, C * 180 + hshift, C * 10, C * 180 + hshift, -C * 10);
    graphics.noStroke();
    graphics.fill(150);
    graphics.textSize(8 * C);
    graphics.text("Right Arrow", C * 187 + hshift, C * 30);
  }
  if (page > 0) {
    graphics.stroke(200);
    graphics.noFill();
    if (sqrt(pow(mousex - (-C * 187 + hshift), 2) + pow(mousey - (-C * 0), 2)) <= C * 10) {
      graphics.fill(100);
      leftarrowhover = true;
    }
    graphics.triangle(-C * 195 + hshift, 0, -C * 180 + hshift, C * 10, -C * 180 + hshift, -C * 10);
    graphics.noStroke();
    graphics.fill(150);
    graphics.textSize(8 * C);
    graphics.text("Left Arrow", -C * 187 + hshift, C * 30);
  }
  graphics.stroke(200, 120);
  graphics.strokeCap(SQUARE);
  graphics.line(45 * C, -160 * C, 45 * C, 160 * C);
  graphics.strokeCap(ROUND);
  graphics.pop();

  // ===============
  // left side level select bar

  var i_initial = 0;
  var displayflag = false;

  if (hardmode) i_initial = 1;
  mousepos = -1;
  for (i = i_initial; i < 10; i += 2) {

    if (!WorldCollapseUnlocked && (page * 10 + i == WorldCollapseIndex || page * 10 + i == WorldCollapseIndex + 1)) {
      displayflag = true;
    }

    if (page * 10 + i < total_charts && isHidden[page * 10 + i] != true) {
      let frameCenterX = 0 + hshift;
      let frameCenterY = -C * 150 + C * floor(i / 2) * 75;
      if (level_index == page * 10 + i) {
        if (difficulty[page * 10 + i] <= 3) {
          graphics.fill(170, 230, 170, 50);
          graphics.stroke(170, 230, 170);
        } else if (difficulty[page * 10 + i] <= 6) {
          graphics.fill(170, 200, 230, 50);
          graphics.stroke(170, 200, 230);
        } else if (difficulty[page * 10 + i] <= 9) {
          graphics.fill(230, 170, 170, 50);
          graphics.stroke(230, 170, 170);
        } else {
          graphics.fill(200, 170, 230, 50);
          graphics.stroke(200, 170, 230);
        }
        if (displayflag) {
          graphics.fill(50);
          graphics.stroke(150);
        }
      } else if (mousex > frameCenterX - C * 150 && mousex < frameCenterX + C * 150 && mousey > frameCenterY - C * 25 && mousey < frameCenterY + C * 25) {
        mousepos = i;
        if (difficulty[page * 10 + i] <= 3) {
          graphics.fill(170, 230, 170, 20);
          graphics.stroke(170, 230, 170);
        } else if (difficulty[page * 10 + i] <= 6) {
          graphics.fill(170, 200, 230, 20);
          graphics.stroke(170, 200, 230);
        } else if (difficulty[page * 10 + i] <= 9) {
          graphics.fill(230, 170, 170, 20);
          graphics.stroke(230, 170, 170);
        } else {
          graphics.fill(200, 170, 230, 20);
          graphics.stroke(200, 170, 230);
        }
        if (displayflag) {
          graphics.fill(20);
          graphics.stroke(150);
        }
      } else {
        graphics.noFill();
        if (difficulty[page * 10 + i] <= 3) {
          graphics.stroke(170, 230, 170);
        } else if (difficulty[page * 10 + i] <= 6) {
          graphics.stroke(170, 200, 230);
        } else if (difficulty[page * 10 + i] <= 9) {
          graphics.stroke(230, 170, 170);
        } else {
          graphics.stroke(200, 170, 230);
        }
        if (displayflag) {
          graphics.stroke(150);
        }
      }
      graphics.strokeWeight(3 * C);
      graphics.rect(frameCenterX, frameCenterY, C * 300, C * 50); //frame

      graphics.push();
      graphics.noStroke();
      graphics.fill(255);
      graphics.textSize(20 * C);
      graphics.textAlign(LEFT);
      if (!specialTitle[page * 10 + i]) {
        graphics.textFont(fontRegular);
      } else {
        graphics.textFont('Georgia');
      }
      if (displayflag) {
        graphics.text("???", -C * 135 + hshift, -C * 143 + C * floor(i / 2) * 75);
      } else {
        graphics.text(title[page * 10 + i], -C * 135 + hshift, -C * 143 + C * floor(i / 2) * 75); //title
      }

      // =================
      // right side title

      if (level_index == page * 10 + i) {

        // title + artist

        graphics.push();
        graphics.textSize(25 * C);
        if (displayflag) {
          graphics.text("???", C * 70 - hshift, -C * 35 + vshift);
        } else {
          graphics.text(title[page * 10 + i], C * 70 - hshift, -C * 35 + vshift);
        }
        
        graphics.textFont(fontRegular);
        graphics.textSize(15 * C);
        if (displayflag) {
          graphics.text("???", C * 70 - hshift, -C * 10 + vshift);
        } else {
          graphics.text(artist[page * 10 + i], C * 70 - hshift, -C * 10 + vshift);
        }
        graphics.noFill();

        // image
        graphics.imageMode(CENTER);
        if (displayflag) {
          graphics.image(WorldCollapseImg2, -C * 30 - hshift, -C * 20, C * 150, C * 150);
        } else {
          graphics.image(img[floor((page * 10 + i) / 2)], -C * 30 - hshift, -C * 20, C * 150, C * 150);
        }

        //audio visualization 
        if (loaded[floor((page * 10 + i) / 2)]) {
          let Rc = bgColor[floor((page * 10 + i) / 2)][0];
          let Gc = bgColor[floor((page * 10 + i) / 2)][1];
          let Bc = bgColor[floor((page * 10 + i) / 2)][2];
          let barwidth = 1;
          for (let j = 0; j < barcount; j++) {
            graphics.push();
            graphics.noStroke();
            //stroke(Rc * 0.5, Gc * 0.5, Bc * 0.5);
            //strokeWeight(C);
            graphics.fill(Rc, Gc, Bc);
            graphics.rectMode(CORNER);
            graphics.rect(-C * 30 - hshift - C * 75 + C * 300 / barcount * j + C * 300 / barcount * (1 - barwidth), C * 80, C * 300 / barcount * barwidth, C * 100 * (bars[j] + 0.05));
            graphics.pop();
          }
        } else {
          graphics.push();
          graphics.fill(255);
          graphics.noStroke();
          graphics.textSize(30 * C);
          graphics.textAlign(RIGHT, CENTER);
          graphics.text("Loading", C * 75 - hshift, C * 100);
          graphics.textAlign(LEFT, CENTER);
          if (lslFrame / 25 < 1) {
            graphics.text(".", C * 80 - hshift, C * 100);
          } else if (lslFrame / 25 < 2) {
            graphics.text("..", C * 80 - hshift, C * 100);
          } else if (lslFrame / 25 < 3) {
            graphics.text("...", C * 80 - hshift, C * 100);
          } else {
            //text("...", C * 80 - hshift, C * 100);
          }
          graphics.pop();
        }

        // difficulty

        if (difficulty[page * 10 + i] <= 3) {
          graphics.stroke(170, 230, 170);
        } else if (difficulty[page * 10 + i] <= 6) {
          graphics.stroke(170, 200, 230);
        } else if (difficulty[page * 10 + i] <= 9) {
          graphics.stroke(230, 170, 170);
        } else {
          graphics.stroke(200, 170, 230);
        }
        if (displayflag) {
          graphics.stroke(150);
        }
        graphics.rectMode(CORNER);
        graphics.rect(C * 70 - hshift, C * 12 + vshift, C * 65, C * 38);
        graphics.textSize(25 * C);
        graphics.noStroke();

        graphics.fill(255);
        if (hardmode) graphics.text("HD ", C * 77 - hshift, C * 40 + vshift);
        else graphics.text("EZ ", C * 77 - hshift, C * 40 + vshift);
        graphics.textAlign(RIGHT);
        if (displayflag) {
          graphics.text("?", C * 127 - hshift, C * 40 + vshift);
        } else {
          graphics.text(difficulty[page * 10 + i], C * 127 - hshift, C * 40 + vshift);
        }

        // Text

        graphics.textAlign(LEFT);
        graphics.fill(150);
        graphics.textSize(10 * C);
        if (displayflag) {
          graphics.text("Level Locked...", C * 70 - hshift, C * 80 + vshift);
          graphics.text("Go try some other hard levels!", C * 70 - hshift, C * 95 + vshift);
        } else {
          graphics.text("Press ENTER to start", C * 70 - hshift, C * 80 + vshift);
          graphics.text("Press A to toggle on/off AUTO mode", C * 70 - hshift, C * 95 + vshift);
        }
        graphics.pop();
      }

      // =================
      // left side score

      graphics.textFont(fontRegular);
      graphics.textSize(20 * C);
      graphics.textAlign(RIGHT);
      graphics.fill(255);

      let ratingrank;
      let accstr = "";
      let acc;
      let ratingtable = ['X', 'V', 'V', 'S', 'A', 'B', 'C', 'F'];
      ratingrank = scoredata[datapos[page * 10 + i]][1];
      acc = scoredata[datapos[page * 10 + i]][0];

      if (ratingrank == -1) {
        graphics.fill(125);
        graphics.textSize(15 * C);
        graphics.text("New", C * 135 + hshift, -C * 145 + C * floor(i / 2) * 75);
      } else if (ratingrank == 0) {
        graphics.fill(255, 125, 125);
        graphics.textSize(20 * C);
        graphics.text("X", C * 130 + hshift, -C * 145 + C * floor(i / 2) * 75);
      } else if (ratingrank == 1) {
        graphics.fill(255, 255, 125);
        graphics.textSize(20 * C);
        graphics.text("V", C * 130 + hshift, -C * 145 + C * floor(i / 2) * 75);
      } else {
        graphics.fill(255);
        graphics.textSize(20 * C);
        graphics.text(ratingtable[ratingrank], C * 130 + hshift, -C * 145 + C * floor(i / 2) * 75);
      }

      if (ratingrank == -1) {
        graphics.textSize(15 * C);
        graphics.fill(125);
      } else {
        graphics.textSize(15 * C);
        graphics.fill(225);
      }
      if (acc == 100) accstr += floor(acc / 100);
      accstr += floor(acc / 10) % 10;
      accstr += floor(acc) % 10;
      accstr += ".";
      accstr += floor(acc * 10) % 10;
      accstr += floor(acc * 100) % 10;
      accstr += "%";
      graphics.text(accstr, C * 100 + hshift, -C * 145 + C * floor(i / 2) * 75);

      // if(hardmode)text("HD ",C*120+hshift,-C*145+C*floor(i/2)*75);
      // else text("EZ ",C*120+hshift,-C*145+C*floor(i/2)*75);
      // text(difficulty[page*10+i],C*135+hshift,-C*145+C*floor(i/2)*75); //difficulty
      graphics.pop();

    }
  }

  if (mousepos != -1 && mouseIsPressed && page * 10 + mousepos != level_index) {
    if (loaded[floor(level_index / 2)]) music[floor(level_index / 2)].setVolume(0, 0.4, 0);
    playinglvl = -1;
    lslFrame = 0;
    level_index = page * 10 + mousepos;
  }

  if (rightarrowhover == true && mousejustpressed == 1) {
    if (level_index + 10 < total_charts && isHidden[level_index + 10] != true) {
      if (loaded[floor(level_index / 2)]) music[floor(level_index / 2)].setVolume(0, 0.4, 0);
      playinglvl = -1;
      page += 1;
      level_index += 10;
      lslFrame = 0;
    }
    else if (floor((total_charts - 1) / 10) != floor(level_index / 10)) {
      if (loaded[floor(level_index / 2)]) music[floor(level_index / 2)].setVolume(0, 0.4, 0);
      playinglvl = -1;
      page += 1;
      for (let i = total_charts - 2; i >= 0; i -= 2) {
        if (isHidden[i] != true) {
          level_index = i;
          if (hardmode) level_index++;
          lslFrame = 0;
          break;
        }
      }
    }
  }

  if (leftarrowhover == true && mousejustpressed == 1) {
    if (page > 0) {
      if (loaded[floor(level_index / 2)]) music[floor(level_index / 2)].setVolume(0, 0.4, 0);
      playinglvl = -1;
      page -= 1;
      level_index -= 10;
      lslFrame = 0;
    }
  }

  if (settingshover == true && mousejustpressed == 1) {
    if (loaded[floor(level_index / 2)]) music[playinglvl].setVolume(0, 0.4, 0);
    playinglvl = -2;
    custom_offset = getItem('custom_offset');
    speed = getItem('speed');
    game_position = "levelselect_settings";
  }

  if (difficultyhover == true && mousejustpressed == 1) {
    if (hardmode) level_index--;
    else level_index++;
    hardmode = !hardmode;
  }

  if (autohover == true && mousejustpressed == 1) {
    auto = !auto;
  }
}