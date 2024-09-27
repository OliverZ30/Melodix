var isHidden = [];
var avant_req = [14, 15, 16];
var WorldCollapseIndex = 34;
var avantindex = 36;

var title = [
  "Tutorial", "Rain", //0
  "White Noise", "White Noise", //1
  "Press", "Press", //2
  "Luminescence", "Luminescence", //3
  "Unfinished", "Waterfall", //4
  "Originally", "Originally", //5
  "Inverted World", "Inverted World", //6
  "R.I.P", "R.I.P", //7
  "Unfinished", "DataError", //8
  "Final Step!", "Final Step!", //9
  "聖夜讃歌", "聖夜讃歌", //10
  "Unfinished", "Concvssion", //11
  "Tiny Fate", "Tiny Fate", //12
  "Abatement", "Abatement", //13
  "Nhelv", "Nhelv", //14
  "无人区", "无人区", //15
  "Fractured Angel", "Fractured Angel", //16
  "Unfinished", "World_Collapse", //17
  "Avantgarde", "Avantgarde" //18
];

var datapos = [
  0, 1,
  2, 3,
  12, 13,
  26, 27,
  32, 33,
  18, 19,
  4, 5,
  6, 7,
  30, 31,
  14, 15,
  8, 9,
  34, 35,
  20, 21,
  28, 29,
  10, 11,
  16, 17,
  22, 23,
  36, 37,
  24, 25,
]

var artist = [
  "TsukiP", "TsukiP",
  "ARForest", "ARForest",
  "VeetaCrush", "VeetaCrush",
  "Fomiki/Cloudie", "Fomiki/Cloudie",
  "Kotori/JVNA", "Kotori/JVNA",
  "SNKS/Mizku", "SNKS/Mizku",
  "ARForest", "ARForest",
  "eicateve", "eicateve",
  "Cosmograph", "Cosmograph",
  "Lime", "Lime",
  "A-39", "A-39",
  "Halv", "Halv",
  "Capchii", "Capchii",
  "SNKS/Mizku", "SNKS/Mizku",
  "Silentroom", "Silentroom",
  "NoKANY", "NoKANY",
  "DJ Raisei", "DJ Raisei",
  "EndCat", "EndCat",
  "Raimukun", "Raimukun"
]

var bgColor = [
  [120, 220, 230],
  [230, 230, 140],
  [120, 230, 180],
  [140, 210, 230],
  [140, 230, 230],
  [230, 160, 120],
  [120, 190, 230],
  [230, 150, 120],
  [120, 150, 230],
  [230, 120, 230],
  [230, 200, 120],
  [140, 180, 230],
  [140, 230, 230],
  [235, 255, 200],
  [230, 120, 120],
  [120, 120, 230],
  [230, 160, 140],
  [160, 200, 190],
  [150, 150, 150]
]

var specialTitle = [
  false, false,
  false, false,
  false, false,
  false, false,
  false, false,
  false, false,
  false, false,
  false, false,
  false, false,
  false, false,
  true, true,
  false, false,
  false, false,
  false, false,
  false, false,
  true, true,
  false, false,
  false, false,
  false, false
]

var difficulty = [
  1, 7,
  2, 7,
  2, 7,
  3, 7,
  3, 8,
  3, 8,
  3, 8,
  4, 8,
  4, 8,
  4, 9,
  5, 9,
  5, 9,
  5, 9,
  5, 10,
  6, 10,
  6, 11,
  6, 11,
  7, 11,
  7, 12
];

var offset = [

  //tutorial
  9.5, 9.5,

  //White Noise
  12.2, 12.2,

  //Press
  12, 12,

  //Luminescence
  9.2, 9.2,

  //Waterfall
  9, 9,

  //Originally
  12, 12,

  //Inverted World 
  12, 106.5,

  //R.I.P
  11, 11,

  //DataError
  11.5, 11.5,

  //Final Step
  10.5, 10.5,

  //圣夜赞歌
  19, 19,

  //Concvssion
  11.7, 11.7,

  //Tiny Fate
  12.6, 12.6,

  //Abatement
  10, 10,

  //Nhelv
  12.1, 12.1,

  //无人区
  12, 12,

  //Fractured Angel
  9, 9,

  //World_Collapse
  11, 11,

  //Avantgarde
  11.5, 11.5
];

var fourkey = [
  true, true,
  true, true,
  true, true,
  true, true,
  true, true,
  true, true,
  true, true,
  true, true,
  true, true,
  true, true,
  true, true,
  true, true,
  true, true,
  true, true,
  true, true,
  true, true,
  true, true,
  true, true,
  true, true
]

var tutorial = [
  { time: 12, txt: "Welcome!", duration: 6, x: 130, y: -4, align: 0 },
  { time: 20, txt: "Let's get started.", duration: 6, x: 130, y: -4, align: 0 },
  { time: 28, txt: "< This is the judgement line.", duration: 6, x: 120, y: 150, align: 0 },
  { time: 36, txt: "Notes are going to fall towards it.", duration: 6, x: 120, y: 150, align: 0 },
  { time: 44, txt: "^", duration: 6, x: -75, y: 20, align: 1 },
  { time: 44, txt: "^", duration: 6, x: -25, y: 20, align: 1 },
  { time: 44, txt: "^", duration: 6, x: 25, y: 20, align: 1 },
  { time: 44, txt: "^", duration: 6, x: 75, y: 20, align: 1 },
  { time: 44, txt: "Use these keys", duration: 6, x: 0, y: 35, align: 1 },
  { time: 44, txt: "to control the lanes.", duration: 6, x: 0, y: 50, align: 1 },
  { time: 52, txt: "First off, tap notes.", duration: 3, x: 120, y: -4, align: 0 },
  { time: 56, txt: "Tap the lane when the note", duration: 4, x: 120, y: -15, align: 0 },
  { time: 56, txt: "hits the judgement line!", duration: 4, x: 120, y: 15, align: 0 },

  { time: 61, txt: "Just like that!", duration: 4, x: 130, y: -4, align: 0 },
  { time: 76, txt: "Great!", duration: 3, x: 0, y: 30, align: 1 },
  { time: 80, txt: "By the way,", duration: 4, x: 220, y: -12, align: 0 },
  { time: 80, txt: "this is your combo.", duration: 4, x: 220, y: 12, align: 0 },
  { time: 84, txt: "Let's add some more!", duration: 6, x: 0, y: 30, align: 1 },

  { time: 180, txt: "Perfect!", duration: 6, x: 0, y: 20, align: 1 },
  { time: 184, txt: "You're getting the hang of it.", duration: 6, x: 0, y: 40, align: 1 },
  { time: 188, txt: "Now...", duration: 4, x: 0, y: 60, align: 1 },
  { time: 192, txt: "Here is your score", duration: 4, x: 0, y: 130, align: 1 },
  { time: 196, txt: "< Here is the progress bar of the song", duration: 4, x: 120, y: 175, align: 0 },
  { time: 200, txt: "And next up...", duration: 6, x: 0, y: 20, align: 1 },
  { time: 204, txt: "Hold notes!", duration: 4, x: 0, y: 40, align: 1 },

  { time: 208, txt: "Hold notes are", duration: 6, x: 0, y: 20, align: 1 },
  { time: 208, txt: "just like tap notes.", duration: 6, x: 0, y: 40, align: 1 },
  { time: 216, txt: "Tap them when they", duration: 6, x: 0, y: 20, align: 1 },
  { time: 216, txt: "hit the judgement line,", duration: 6, x: 0, y: 40, align: 1 },
  { time: 224, txt: "and don't let go until", duration: 6, x: 0, y: 20, align: 1 },
  { time: 224, txt: "they completely pass by.", duration: 6, x: 0, y: 40, align: 1 },
  { time: 232, txt: "Give it a try!", duration: 6, x: 0, y: 20, align: 1 },

  { time: 256, txt: "Exactly!", duration: 6, x: 0, y: 20, align: 1 },
  { time: 264, txt: "Now...", duration: 8, x: 0, y: 20, align: 1 },
  { time: 268, txt: "Let's mix them up!", duration: 4, x: 0, y: 40, align: 1 },
  { time: 368, txt: "You're ready...", duration: 8, x: 0, y: 20, align: 1 },
  { time: 372, txt: "Good luck!", duration: 4, x: 0, y: 40, align: 1 },
]

let intensity = [
  [0.0, 0.0],
  [12.96, 0.0],
  [12.97, 0.3],
  [13.97, 0.0],
  
  [24.49, 0.0],
  [24.50, 0.3],
  [25.00, 0.0],
  
  [27.37, 0.0],
  [27.38, 0.3],
  [27.88, 0.0],
  
  [30.27, 0.0],
  [34.58, 0.4],
  [34.59, 0.6],
  [36.03, 0.6],
  [37.47, 0.1],
  
  [38.90, 0.1],
  [38.91, 0.6],
  [44.32, 0.6],
  [44.67, 0.0],
  [44.68, 0.6],
  [50.44, 0.6],
  [50.45, 0.0],
  
  [50.80, 0.0],
  [50.81, 0.7],
  [53.15, 0.7],
  [53.32, 0.1],
  [53.33, 0.5],
  [54.76, 0.5],
  [54.77, 0.7],
  [55.85, 0.7],
  [56.20, 0.1],
  
  [56.21, 0.7],
  [57.29, 0.7],
  [57.64, 0.1],
  [57.65, 0.7],
  [58.73, 0.7],
  [59.08, 0.1],
  [59.09, 0.7],
  [60.17, 0.7],
  [60.52, 0.1],
  [60.53, 0.7],
  [61.98, 0.7],
  [62.70, 0.1],
  
  [67.73, 0.1],
  [67.74, 0.7],
  [70.62, 0.7],
  [70.63, 0.8],
  [72.07, 0.8],
  [72.78, 0.2],
  [73.50, 0.1],
  [73.51, 0.1],
  [73.52, 0.7],
  [74.52, 0.0],
  
  // rest
  
  [85.01, 0.0],
  [85.02, 0.4],
  [86.02, 0.0],
  
  [90.80, 0.0],
  [90.81, 0.4],
  [91.81, 0.1],
  [95.13, 0.6],
  [95.14, 0.1],
  
  [96.56, 0.1],
  [96.57, 0.6],
  [98.00, 0.1],
  [98.02, 0.8],
  [98.38, 0.8],
  [98.73, 0.1],
  [99.44, 0.3],
  
  // last drop
  
  [99.45, 1.2],
  
  [104.86, 1.2],
  [105.21, 0.2],
  [105.22, 1.2],
  [110.63, 1.2],
  [110.98, 0.0],
  
  [110.99, 1.3],
  [116.57, 1.3],
  [116.75, 0.3],
  [116.76, 1.4],
  [119.62, 1.4],
  [119.63, 1.5],
  [122.52, 1.5],
  [123.96, 0.1],
  
  [123.97, 2.0],
  [125.03, 2.0],
  [125.04, 4.0],
];

let flashtime = [
  [73.5, false],
  [99.45, false],
]