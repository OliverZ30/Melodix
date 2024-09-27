function keyPressed() {
  if (game_position == "level_select" && !inTransition) {
    if (keyCode == UP_ARROW) {
      if (level_index - 2 >= 0) {
        if (loaded[floor(level_index / 2)]) music[floor(level_index / 2)].setVolume(0, 0.4, 0);
        //new sfx("misc/beep.mp3", 0.1).play();
        playinglvl = -1;
        if (floor(level_index / 2) % 5 == 0) {
          page -= 1;
        }
        level_index -= 2;
        lslFrame = 0;
      }
    }
    if (keyCode == DOWN_ARROW) {
      if (level_index + 2 < total_charts && isHidden[level_index + 2] != true) {
        if (loaded[floor(level_index / 2)]) music[floor(level_index / 2)].setVolume(0, 0.4, 0);
        //new sfx("misc/beep.mp3", 0.1).play();
        playinglvl = -1;
        level_index += 2;
        if (floor(level_index / 2) % 5 == 0) {
          page += 1;
        }
        lslFrame = 0;
      }
    }
    if (keyCode == RIGHT_ARROW) {
      if (level_index + 10 < total_charts && isHidden[level_index + 10] != true) {
        if (loaded[floor(level_index / 2)]) music[floor(level_index / 2)].setVolume(0, 0.4, 0);
        //new sfx("misc/beep.mp3", 0.1).play();
        playinglvl = -1;
        page += 1;
        //print("over 1");
        level_index += 10;
        lslFrame = 0;
      }
      else if (floor((total_charts - 1) / 10) != floor(level_index / 10)) {
        if (loaded[floor(level_index / 2)]) music[floor(level_index / 2)].setVolume(0, 0.4, 0);
        //new sfx("misc/beep.mp3", 0.1).play();
        playinglvl = -1;
        page += 1;
        //print("over 2");
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
    if (keyCode == LEFT_ARROW) {
      if (page > 0) {
        if (loaded[floor(level_index / 2)]) music[floor(level_index / 2)].setVolume(0, 0.4, 0);
        //new sfx("misc/beep.mp3", 0.1).play();
        playinglvl = -1;
        page -= 1;
        level_index -= 10;
        lslFrame = 0;
      }
    }
    if (keyCode == ENTER && loaded[floor(level_index / 2)]) {
      if (!(WorldCollapseUnlocked == false && (level_index == WorldCollapseIndex || level_index == WorldCollapseIndex + 1))) {
        music[floor(level_index / 2)].setVolume(0, 0.4, 0);
        playinglvl = -2;
        chart_num = level_index;
        game_position = "levelselect_level";
        inTransition = true;
        init();
      }
    }
    if (keyCode == 32) {
      //new sfx("misc/beep.mp3", 0.1).play();
      if (hardmode) level_index--;
      else level_index++;
      hardmode = !hardmode;
    }
    if (keyCode == 65) {
      auto = !auto;
    }
    if(keyCode == 83) {
      if (loaded[floor(level_index / 2)]) music[playinglvl].setVolume(0, 0.4, 0);
      playinglvl = -2;
      custom_offset = getItem('custom_offset');
      speed = getItem('speed');
      game_position = "levelselect_settings";
    }
    // if(keyCode==82){
    //   scoredata=[];
    //   for(let i=0;i<total_charts;i++){
    //     scoredata[i]=[0,-1];
    //     storeItem('scoredata',scoredata);
    //   }
    // }
  }
  if (game_position == "endscreen" && !inTransition) {
    if (keyCode == ENTER || keyCode == ESCAPE) {
      let avantpass = true;
      let hasavant = getItem('hasavant');
      if (hasavant == false || hasavant == null) {
        for (let i = 0; i < avant_req.length; i++) {
          if (chart_num % 2 == 0) {
            if (scoredata[datapos[avant_req[i] * 2]][1] > 3 || scoredata[datapos[avant_req[i] * 2]][1] < 0) {
              avantpass = false;
            }
          } else {
            if (scoredata[datapos[avant_req[i] * 2 + 1]][1] > 3 || scoredata[datapos[avant_req[i] * 2 + 1]][1] < 0) {
              avantpass = false;
            }
          }
        }
        // for (let i = 0; i < total_charts; i++) {
        //   if (i != avantindex && i != avantindex + 1) {
        //     if (chart_num % 2 == 0 && i % 2 == 0 && difficulty[i] == 6) {
        //       //print(title[i], difficulty[i], scoredata[datapos[i]][1]);
        //       if (scoredata[datapos[i]][1] > 3 || scoredata[datapos[i]][1] < 0) {
        //         avantpass = false;
        //       }
        //     } else if (chart_num % 2 == 1 && i % 2 == 1 && difficulty[i] >= 10) {
        //       //print(title[i], difficulty[i], scoredata[datapos[i]][1]);
        //       if (scoredata[datapos[i]][1] > 3 || scoredata[datapos[i]][1] < 0) {
        //         avantpass = false;
        //       }
        //     }
        //   }
        // }
        // if (chart_num % 2 == 1) {
        //   avantpass = false;
        // }
        if (avantpass) {
          //print("over");
          inTransition = true;
          musicplaying = false;
          storeItem('hasavant', true);
          isHidden[avantindex] = false;
          isHidden[avantindex + 1] = false;
          game_position = "endscreen_WorldCollapse";
        } else {
          //print("over 2");
          game_position = "endscreen_levelselect";
          inTransition = true;
          musicplaying = false;
        }
      } else {
        //print("over 3");
        game_position = "endscreen_levelselect";
        inTransition = true;
        musicplaying = false;
      }
    }
  }
  if (game_position == "title" && !inTransition) {
    if (keyCode != 173 && keyCode != 174 && keyCode != 175) {
      intro_music.setVolume(0, 0.4, 0);
      game_position = "title_levelselect";
      inTransition = true;
    }
  }
}