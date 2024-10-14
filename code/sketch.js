/*
Difficulty at a glance:
(FC difficulties)
Melodix - Phigros - PJSK
EZ 1   =  1~3    =  1~5
EZ 2   =  4~6    =  6~10
EZ 3   =  7~8    =  11~14

HD 4   =  9~10   =  15~18
HD 5   =  11~12  =  19~21
HD 6   =  13     =  22~24

IN 7   =  14     =  25~27
IN 8   =  15-    =  28~29
IN 9   =  15     =  30

EX 10  =  15+    =  31
EX 11  =  16-    =  32
EX 12  =  16     =  33
*/

var W, H;
const R = 450;
const IR = 600;
var noteWidth = 4;
var speed = 0.6;
var framecount = 0;
var musicplaying = false;
var musicbegin = false;
var C;
var hardmode = false;

var game_position = "start";
var transitionTimer = -1;
var transitionTime = 20;
var inTransition = false;

var music = [];
var loaded = [];
var beginLoad = [];
var beat;
var beep;
var tap = [];
var tapnum = 0;

var py = [];
var dthold = [];
var total_charts = 0;
var total_notes = [];
var chart_num = 0;
var chart_time = 0;
var tapping = [-1, -1, -1, -1, -1, -1, -1];
var hitnote = [-1, -1, -1, -1, -1, -1, -1];
var tapped = [-1];

var effect_time = [-1];
var effect_opacity = [-1];
var gradient = [];

var ap = 1;
var combo = 0;
var passed_notes = 0;
var bad = 0;
var great = 0;
var good = 0;
var perfect = 0;

const PERFECT = 80;
const GREAT = 120;
const GOOD = 160;
const BAD = 200;

const KEY = [83, 68, 70, 74, 75, 76];

var sdown = -1;
var escdown = -1;

var custom_offset = 0;

var text_fade = 400;
var default_speed = 0.5;

var fontRegular;
var fontTitle;

var scoredata = [];
var firstplay = false;

var img = [];
var fft;
var spectrum;

var intro_music;
var intro_num = 0;
var intro_timer = 0;
var intro_framecount = 0;
var introfft;

var bgaavant;
var avant_firstplay = false;

var firstrescale = false;

var rgbShiftShader;
var graphics;
var randomNoise;
var IC = 1.0;
var currentIntensity = 0.0;
var screenEffectTime = 10000.0;

var WorldCollapseUnlocked = false;
var WorldCollapseImg2;
var glitch;
var WorldCollapseFirstplay = false;
var musicstopped = false;

function draw() {
  screenEffectTime += deltaTime;
  shader(rgbShiftShader);
  
  graphics.background(10);
  graphics.translate(W / 2, H / 2);
  graphics.textAlign(CENTER);
  graphics.textFont(fontRegular);
  
  randomNoise = noise(frameCount / 10);
  
  randomNoise = pow(randomNoise - 0.3, 2);
  
  let ctime = 0;
  if (WorldCollapseFirstplay == true) {
    if (music[floor(WorldCollapseIndex / 2)].currentTime() > 0) {
      ctime = music[floor(WorldCollapseIndex / 2)].currentTime();
    }else ctime = 0;
    if (music[floor(WorldCollapseIndex / 2)].currentTime() >= 125.04) {
      game_position = "endscreen_avantBGA";
      WorldCollapseFirstplay = false;
    }
    if (music[floor(WorldCollapseIndex / 2)].currentTime() >= 90.81) {
      stretch_4kLanes = (95.13 - music[floor(WorldCollapseIndex / 2)].currentTime()) / 4.32 * (1 / 3) + (2 / 3);
    }
    if (music[floor(WorldCollapseIndex / 2)].currentTime() >= 95.13) {
      fourkey[WorldCollapseIndex] = fourkey[WorldCollapseIndex + 1] = false;
    }
    chart[WorldCollapseIndex] = worldCollapse6kChart[0];
    chart[WorldCollapseIndex + 1] = worldCollapse6kChart[1];
    total_notes[WorldCollapseIndex] = worldCollapse6kEZNotes;
    total_notes[WorldCollapseIndex + 1] = worldCollapse6kHDNotes;
  } else {
    chart[WorldCollapseIndex] = worldCollapse4kChart[0];
    chart[WorldCollapseIndex + 1] = worldCollapse4kChart[1];
    total_notes[WorldCollapseIndex] = worldCollapse4kEZNotes;
    total_notes[WorldCollapseIndex + 1] = worldCollapse4kHDNotes;
  }
  
  for (let i = 0; i < intensity.length - 1; i ++) {
    if (ctime >= intensity[i][0] && ctime <= intensity[i + 1][0]) {
      let m = (intensity[i + 1][1] - intensity[i][1]) / (intensity[i + 1][0] - intensity[i][0]);
      currentIntensity = m * (ctime - intensity[i][0]) + intensity[i][1];
    }
  }
  
  for (let i = 0; i < flashtime.length; i ++) {
    if (ctime >= flashtime[i][0] && flashtime[i][1] == false) {
      flashtime[i][1] = true;
      screenEffectTime = 0.0;
    }
  }

  if (WorldCollapseFirstplay == false) {
    screenEffectTime = 10000.0;
    currentIntensity = 0.0;
  }

  if (keyIsDown(83)) {
    if (sdown == -1) sdown = 1;
    else if (sdown == 1) sdown = 0;
  } else sdown = -1;
  if (keyIsDown(ESCAPE)) {
    if (escdown == -1) escdown = 1;
    else if (escdown == 1) escdown = 0;
  } else escdown = -1;
  if (keyIsDown(ENTER)) {
    if (enterkey == -1) enterkey = 1;
    else if (enterkey == 1) enterkey = 0;
  } else enterkey = -1;

  if (game_position == "level") {
    if (!musicplaying && musicbegin == false) {
      music[floor(chart_num / 2)].play(0, 1, 1, songoffset[floor(chart_num / 2)]);
      musicplaying = true;
      musicbegin = true;
    }
    initNotes();
    initTaps();
    printNotes();
    printLanes();
    calcTaps();
    initEffects();
    printEffects();
    calcScore();
    if (firstplay == false && avant_firstplay == false && WorldCollapseFirstplay == false) pausescreen();
    if (chart_num == 0) tutorialDisplay();
    if (chart_time / 1000 > music[floor(chart_num / 2)].duration()) {
      musicplaying = false;
      musicbegin = false;
      game_position = "level_endscreen";
    }
  } else if (game_position == "level_transition") {
    levelTransition();
    calcScore();
    initTaps();
    printLanes();
  } else if (game_position == "start") {
    startDisplay();
  } else if (game_position == "intro") {
    introDisplay();
  } else if (game_position == "title") {
    introMusic();
    titleDisplay();
  } else if (game_position == "maintenance") {
    maintenance();
  } else if (game_position == "level_select") {
    levelSelect();
    musiclogic();
    initfft();
    // if (sdown == 1) {
    //   if (loaded[floor(level_index / 2)]) music[playinglvl].setVolume(0, 0.4, 0);
    //   playinglvl = -2;
    //   custom_offset = getItem('custom_offset');
    //   speed = getItem('speed');
    //   game_position = "levelselect_settings";
    // }
  } else if (game_position == "endscreen") {
    endscreen();
  } else if (game_position == "settings") {
    settings();
    if (escdown == 1 || enterkey == 1 || sdown == 1) {
      game_position = "settings_levelselect";
      storeItem('custom_offset', custom_offset);
      storeItem('speed', speed);
    }
  } else if (game_position == "avantBGA") {
    avantBGA();
    avant_firstplay = true;
  }
  else if (game_position == "avantBGA_level") {
    if (transitionTimer == -1) transitionTimer = 0;
    else ++transitionTimer;
    if (transitionTimer < 60) {
      graphics.push();
      graphics.noStroke();
      graphics.fill(0, 0, 0, 255 * transitionTimer / 60);
      graphics.rectMode(CENTER);
      graphics.rect(0, 0, W, H);
      graphics.pop();
    } else {
      if (chart_num != avantindex && chart_num != avantindex + 1) {
        chart_num = avantindex + chart_num % 2;
      }
      init();
      calcScore();
      initTaps();
      printLanes();
      graphics.push();
      graphics.noStroke();
      graphics.fill(0, 0, 0, 255 * (1 - (transitionTimer - 60) / 60));
      graphics.rectMode(CENTER);
      graphics.rect(0, 0, W, H);
      graphics.pop();
    }
    if (transitionTimer >= 120) {
      init();
      game_position = "level_transition";
      inTransition = false;
      transitionTimer = -1;
    }
  }
  else if (game_position == "endscreen_WorldCollapse") {
    WorldCollapseFirstplay = true;
    WorldCollapseUnlocked = true;
    if (transitionTimer == -1) transitionTimer = 0;
    else ++transitionTimer;
    if (transitionTimer < 60) {
      endscreen();
      graphics.push();
      graphics.noStroke();
      graphics.fill(0, 0, 0, 255 * transitionTimer / 60);
      graphics.rectMode(CENTER);
      graphics.rect(0, 0, W, H);
      graphics.pop();
    } else {
      if (chart_num != WorldCollapseIndex && chart_num != WorldCollapseIndex + 1) {
        chart_num = WorldCollapseIndex + chart_num % 2;
      }
      init();
      calcScore();
      initTaps();
      printLanes();
      graphics.push();
      graphics.noStroke();
      graphics.fill(0, 0, 0, 255 * (1 - (transitionTimer - 60) / 60));
      graphics.rectMode(CENTER);
      graphics.rect(0, 0, W, H);
      graphics.pop();
    }
    if (transitionTimer >= 120) {
      init();
      game_position = "level_transition";
      inTransition = false;
      transitionTimer = -1;
    }
  }
  else if (game_position == "endscreen_avantBGA") {
    if (transitionTimer == -1) transitionTimer = 0;
    else ++transitionTimer;
    if (transitionTimer < transitionTime) {
      transitionRect(1);
    } else {
      transitionRect(2);
    }
    if (transitionTimer >= 2 * transitionTime) {
      game_position = "avantBGA";
      inTransition = false;
      transitionTimer = -1;
    }
  }
  else if (game_position == "levelselect_level") {
    if (transitionTimer == -1) transitionTimer = 0;
    else ++transitionTimer;
    if (transitionTimer < transitionTime) {
      levelSelect();
      transitionRect(1);
    } else {
      calcScore();
      initTaps();
      printLanes();
      transitionRect(2);
    }
    if (transitionTimer >= 2 * transitionTime) {
      game_position = "level_transition";
      inTransition = false;
      transitionTimer = -1;
    }
  }
  else if (game_position == "pausescreen_levelselect") {
    if (transitionTimer == -1) transitionTimer = 0;
    else ++transitionTimer;
    if (transitionTimer < transitionTime) {
      initNotes();
      initTaps();
      printNotes();
      printLanes();
      calcTaps();
      initEffects();
      printEffects();
      calcScore();
      pausescreen();
      transitionRect(1);
    } else {
      init();
      levelSelect();
      transitionRect(2);
    } if (transitionTimer >= 2 * transitionTime) {
      game_position = "level_select";
      avant_firstplay = false;
      playinglvl = -1;
      inTransition = false;
      transitionTimer = -1;
    }
  }
  else if (game_position == "pausescreen_level") {
    if (transitionTimer == -1) transitionTimer = 0;
    else ++transitionTimer;
    if (transitionTimer < transitionTime) {
      initNotes();
      initTaps();
      printNotes();
      printLanes();
      calcTaps();
      initEffects();
      printEffects();
      calcScore();
      pausescreen();
      transitionRect(1);
    } else {
      init();
      calcScore();
      initTaps();
      printLanes();
      transitionRect(2);
    }
    if (transitionTimer >= 2 * transitionTime) {
      init();
      game_position = "level_transition";
      inTransition = false;
      transitionTimer = -1;
    }
  }
  else if (game_position == "level_endscreen") {
    if (transitionTimer == -1) transitionTimer = 0;
    else ++transitionTimer;
    if (transitionTimer < transitionTime) {
      initNotes();
      initTaps();
      printNotes();
      printLanes();
      calcTaps();
      initEffects();
      printEffects();
      calcScore();
      transitionRect(1);
    } else {
      endscreen();
      transitionRect(2);
    }
    if (transitionTimer >= 2 * transitionTime) {
      game_position = "endscreen";
      inTransition = false;
      transitionTimer = -1;
    }
  }
  else if (game_position == "endscreen_levelselect") {
    if (WorldCollapseFirstplay == true) WorldCollapseFirstplay = false;
    if (firstplay == true) firstplay = false;
    if (transitionTimer == -1) transitionTimer = 0;
    else ++transitionTimer;
    if (transitionTimer < transitionTime) {
      endscreen();
      transitionRect(1);
    } else {
      levelSelect();
      transitionRect(2);
    }
    if (transitionTimer >= 2 * transitionTime) {
      game_position = "level_select";
      fourkey[WorldCollapseIndex] = fourkey[WorldCollapseIndex + 1] = true;
      if (avant_firstplay == true) {
        game_position = "start";
      }
      avant_firstplay = false;
      playinglvl = -1;
      inTransition = false;
      transitionTimer = -1;
    }
  }
  else if (game_position == "settings_levelselect") {
    if (transitionTimer == -1) transitionTimer = 0;
    else ++transitionTimer;
    if (transitionTimer < transitionTime) {
      settings();
      transitionRect(1);
    } else {
      levelSelect();
      transitionRect(2);
    }
    if (transitionTimer >= 2 * transitionTime) {
      game_position = "level_select";
      playinglvl = -1;
      inTransition = false;
      transitionTimer = -1;
    }
  }
  else if (game_position == "levelselect_settings") {
    if (transitionTimer == -1) transitionTimer = 0;
    else ++transitionTimer;
    if (transitionTimer < transitionTime) {
      levelSelect();
      transitionRect(1);
    } else {
      settings();
      transitionRect(2);
    }
    if (transitionTimer >= 2 * transitionTime) {
      game_position = "settings";
      inTransition = false;
      transitionTimer = -1;
    }
  }
  else if (game_position == "title_levelselect") {
    if (firstplay) {
      game_position = "title_tutorial";
    }
    if (transitionTimer == -1) transitionTimer = 0;
    else ++transitionTimer;
    if (transitionTimer < transitionTime) {
      introMusic();
      titleDisplay();
      transitionRect(1);
    } else {
      levelSelect();
      transitionRect(2);
    }
    if (transitionTimer >= 2 * transitionTime) {
      game_position = "level_select";
      playinglvl = -1;
      inTransition = false;
      transitionTimer = -1;
    }
  }
  else if (game_position == "title_tutorial") {
    if (transitionTimer == -1) transitionTimer = 0;
    else ++transitionTimer;
    if (transitionTimer < transitionTime) {
      introMusic();
      titleDisplay();
      transitionRect(1);
    } else {
      calcScore();
      initTaps();
      printLanes();
      transitionRect(2);
    }
    if (transitionTimer >= 2 * transitionTime) {
      chart_num = 0;
      game_position = "level_transition";
      playinglvl = -1;
      inTransition = false;
      transitionTimer = -1;
    }
  }

  if (windowWidth <= 500) {
    graphics.textSize(20 * C);
    graphics.noStroke();
    graphics.fill(255, 128, 128);
    graphics.text("WINDOW TOO SMALL!", 0, 0);
  }

  rgbShiftShader.setUniform('uResolution', [width, height]);
  rgbShiftShader.setUniform('noise', [randomNoise + random(-0.1, 0.1), randomNoise + random(-0.1, 0.1)]);
  rgbShiftShader.setUniform('frame', frameCount);
  rgbShiftShader.setUniform('IT', currentIntensity / IC);
  rgbShiftShader.setUniform('effectTime', screenEffectTime);
  rgbShiftShader.setUniform('uTex', graphics);
  rect(0, 0, width, height);
  graphics.translate(-width / 2, -height / 2);
}

function setup() {
  frameRate(10000);
  createCanvas(windowWidth, windowHeight, WEBGL);
  graphics = createGraphics(width, height);
  W = windowWidth;
  H = windowHeight;
  C = H / R;
  IC = W / IR;

  do {
    ++total_charts;
  } while (chart[total_charts] != -1);

  custom_offset = getItem('custom_offset');
  if (custom_offset == null) {
    custom_offset = 0;
    storeItem('custom_offset', custom_offset);
  }
  speed = getItem('speed');
  if (speed == null) {
    speed = default_speed;
    storeItem('speed', speed);
  }
  scoredata = getItem('scoredata');
  if (scoredata == null) {
    firstplay = true;
    scoredata = [];
    for (let i = 0; i < total_charts; i++) {
      scoredata[i] = [0, -1];
    }
    storeItem('scoredata', scoredata);
  }
  if (scoredata.length < total_charts) {
    for (let i = 0; i <= total_charts - scoredata.length; i++) {
      scoredata[scoredata.length + i] = [0, -1];
    }
    storeItem('scoredata', scoredata);
  }
  for (let i = 0; i < scoredata.length; i++) {
    if (scoredata[i] == undefined || scoredata[i] == null) {
      scoredata[i] = [0, -1];
    }
  }
  let operator = getItem('operator');
  if ((operator == false || operator == null) && game_position == "maintenance") {
    noLoop();
  } else if (operator == true) {
    //game_position = "level_select";
    game_position = "start";
  }
  isHidden[avantindex] = false;
  isHidden[avantindex + 1] = false;
  let hasavant = getItem('hasavant');
  if (hasavant == false || hasavant == null) {
    isHidden[avantindex] = true;
    isHidden[avantindex + 1] = true;
    storeItem('hasavant', false);
    WorldCollapseUnlocked = false;
    bgaavant = createVideo("misc/Avantgarde.MOV");
    music[WorldCollapseIndex / 2] = loadSound("music/WorldCollapse.mp3");
    music[avantindex / 2] = loadSound("music/Avantgarde.mp3");
    bgaavant.hide();
  }

  if(hasavant == true) {
    WorldCollapseUnlocked = true;
  }

  let counter = 0;
  for (let i = 0; i < total_charts; i++) {
    counter = 0;
    total_notes[i] = 0;
    do {
      ++total_notes[i];
      ++counter;
      tapped[counter] = -1;
    } while (chart[i][counter][0] != -1);
  }

  for (let i = 0; i < total_charts; i++) {
    for (let j = 0; j < total_notes[i]; j++) {
      if (fourkey[chart_num] == true) ++chart[i][j][2];
    }
  }
  for (let i = 0; i < tutorial.length; i++) {
    tutorial[i].time *= (60000 / bpm[0]);
    tutorial[i].duration *= (60000 / bpm[0]);
  }
  for (let i = 0; i < total_charts; i++) {
    for (let x = 0; x < total_notes[chart_num]; x++) {
      for (let y = 0; y < total_notes[chart_num] - x - 1; y++) {
        let j = y;
        let k = y + 1;
        let flag = false;
        if (chart[chart_num][j][0] * 24 + chart[chart_num][j][1] > chart[chart_num][k][0] * 24 + chart[chart_num][k][1]) {
          flag = true;
        }
        if (chart[chart_num][j][0] * 24 + chart[chart_num][j][1] == chart[chart_num][k][0] * 24 + chart[chart_num][k][1]) {
          if (chart[chart_num][j][2] > chart[chart_num][k][2]) {
            flag = true;
          }
        }
        if (flag) {
          let c0 = chart[chart_num][j][0];
          let c1 = chart[chart_num][j][1];
          let c2 = chart[chart_num][j][2];
          let c3 = chart[chart_num][j][3];
          chart[chart_num][j][0] = chart[chart_num][k][0];
          chart[chart_num][j][1] = chart[chart_num][k][1];
          chart[chart_num][j][2] = chart[chart_num][k][2];
          chart[chart_num][j][3] = chart[chart_num][k][3];
          chart[chart_num][k][0] = c0;
          chart[chart_num][k][1] = c1;
          chart[chart_num][k][2] = c2;
          chart[chart_num][k][3] = c3;
        }
      }
    }
  }

  worldCollapse4kChart[0] = chart[WorldCollapseIndex];
  worldCollapse4kChart[1] = chart[WorldCollapseIndex + 1];

  fft = new p5.FFT();
  introfft = new p5.FFT();
  introfft.setInput(intro_music);

  for (let i = 0; i < speedCheckpoints.length; i++) {
    for (let j = 0; j < speedCheckpoints[i].length; j++) {
      let N = speedCheckpoints[i][j].checkpoint.length;
      let s = speedCheckpoints[i][j].checkpoint[N - 1][2];
      speedCheckpoints[i][j].checkpoint[N] = [10000, 0, s];
    }
  }

  for (let i = 1; i < total_charts / 2; i++) {
    if (i != avantindex / 2 && i != WorldCollapseIndex / 2) {
      loaded[i] = false;
      beginLoad[i] = false;
    } else if (hasavant != true) {
      loaded[i] = true;
      beginLoad[i] = true;
    } else {
      loaded[i] = false;
      beginLoad[i] = false;
    }
  }
  loaded[0] = beginLoad[0] = true;
  loaded[avantindex] = beginLoad[avantindex] = true;

  init();

  if (windowWidth >= 500) {
    resizeCanvas(windowWidth, windowHeight);
    W = windowWidth;
    H = windowHeight;
    C = H / R;
  }
}

function preload() {
  rgbShiftShader = loadShader('shader.vert', 'shader.frag');

  music[0] = loadSound('music/Rain.mp3');
  glitch = loadSound('misc/Glitch10.mp3');

  WorldCollapseImg2 = loadImage('images/WorldCollapse2.jpg');

  img[0] = loadImage('images/Rain.jpg');
  img[1] = loadImage('images/WN.jpg');
  img[2] = loadImage('images/Press.jpg');
  img[3] = loadImage('images/Luminescence.jpg');
  img[4] = loadImage('images/Waterfall.jpg');
  img[5] = loadImage('images/Originally.jpg');
  img[6] = loadImage('images/IW.jpg');
  img[7] = loadImage('images/RIP.jpg');
  img[8] = loadImage('images/dataError.jpg');
  img[9] = loadImage('images/FinalStep.jpg');
  img[10] = loadImage('images/syzg.jpg');
  img[11] = loadImage('images/Concvssion.jpg');
  img[12] = loadImage('images/TinyFate.jpg');
  img[13] = loadImage('images/Abatement.jpg');
  img[14] = loadImage('images/Nhelv.jpg');
  img[15] = loadImage('images/Vacuum.jpg');
  img[16] = loadImage('images/FracturedAngel.jpg');
  img[17] = loadImage('images/WorldCollapse.jpg');
  img[18] = loadImage('images/Avantgarde.jpg');

  beat = loadSound('misc/beat.mp3');
  beep = loadSound('misc/beep.mp3');
  intro_music = loadSound('misc/intro.mp3');

  fontRegular = loadFont('fonts/Saira.ttf');
  fontTitle = loadFont('fonts/JSans.ttf');
  // for(let i=0;i<10;i++){
  //   tap[i]=loadSound('misc/tap.mp3');
  // }

//   if (windowWidth >= 500) {
//     resizeCanvas(windowWidth, windowHeight);
//     W = windowWidth;
//     H = windowHeight;
//     C = H / R;
//   }
}

function windowResized() {
  if (windowWidth >= 500) {
    resizeCanvas(windowWidth, windowHeight);
    graphics = createGraphics(width, height);
    W = windowWidth;
    H = windowHeight;
    C = H / R;
    IC = W / IR;
  }
}

function transitionRect(num) {
  if (num == 1) {
    graphics.push();
    graphics.noStroke();
    graphics.fill(0, 0, 0, 255 * transitionTimer / transitionTime);
    graphics.rectMode(CENTER);
    graphics.rect(0, 0, W, H);
    graphics.pop();
  } else {
    graphics.push();
    graphics.noStroke();
    graphics.fill(0, 0, 0, 255 * (1 - (transitionTimer - transitionTime) / transitionTime));
    graphics.rectMode(CENTER);
    graphics.rect(0, 0, W, H);
    graphics.pop();
  }
}

class sfx { //Credits to Ryan M
  constructor(path, volume) {
    this.volume = volume;
    this.path = path;
  }

  play() {
    try {
      let s = new Audio(this.path);
      s.volume = this.volume;
      s.play();
    }
    catch (e) {
      //"Repent for my habit to use terrible solutions like this to avoid errors" --Ryan Moriya 2024
    }
  }

}
