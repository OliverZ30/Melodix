var isHidden = [];
var avant_req = [14, 15, 16];
var WorldCollapseIndex = 36;
var avantindex = 38;

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
  "Concvssion", "Concvssion", //11
  "Tiny Fate", "Tiny Fate", //12
  "Abatement", "Abatement", //13
  "Nhelv", "Nhelv", //14
  "无人区", "无人区", //15
  "Fractured Angel", "Fractured Angel", //16
  "Unfinished", "World of Scarlet", //17
  "World_Collapse", "World_Collapse", //18
  "Avantgarde", "Avantgarde" //19
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
  38, 39,
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
  "OfficialAz3", "OfficialAz3",
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
  [255, 100, 100],
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
  6, 10,
  6, 11,
  7, 11,
  7, 11,
  7, 11
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
  11.9, 11.9,

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

  //World of Scarlet
  10, 10,

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

let worldCollapse4kChart = [];
let worldCollapse4kEZNotes = 1;
let worldCollapse4kHDNotes = 1416;
let worldCollapse6kEZNotes = 1;
let worldCollapse6kHDNotes = 1474;

let worldCollapse6kChart = [
  [
    [0, 0, 0, 0],
    [-1, -1, -1, -1]
  ],
  [ 
    [2, 12, 5, 0], 
    [3, 0, 3, 0], 
    [3, 12, 4, 0], 
    [4, 0, 2, -24], 
    [4, 0, 5, 0], 
    [4, 12, 4, 0], 
    [5, 0, 3, 0], 
    [5, 12, 4, 0], 
    [6, 0, 2, 0], 
    [6, 12, 4, 0], 
    [7, 0, 3, 0], 
    [7, 12, 5, 0], 
    [8, 0, 2, 0], 
    [8, 0, 4, -24], 
    [8, 12, 3, 0], 
    [9, 0, 5, 0], 
    [9, 12, 2, 0], 
    [10, 0, 4, 0], 
    [10, 12, 3, 0], 
    [11, 0, 4, 0], 
    [11, 0, 5, 0], 
    [11, 12, 2, 0], 
    [12, 0, 3, -24], 
    [12, 0, 5, 0], 
    [12, 12, 4, 0], 
    [13, 0, 2, 0], 
    [13, 12, 4, 0], 
    [14, 0, 2, 0], 
    [14, 12, 5, 0], 
    [15, 0, 4, 0], 
    [15, 12, 2, 0], 
    [16, 0, 4, 0], 
    [16, 12, 3, 0], 
    [17, 0, 2, 0], 
    [17, 12, 4, 0], 
    [18, 0, 2, 0], 
    [18, 0, 3, 0], 
    [18, 12, 5, 0], 
    [19, 0, 3, 0], 
    [19, 12, 4, 0], 
    [20, 0, 2, 0], 
    [20, 0, 5, -24], 
    [20, 12, 4, 0], 
    [21, 0, 3, 0], 
    [21, 12, 4, 0], 
    [22, 0, 2, 0], 
    [22, 12, 5, 0], 
    [23, 0, 2, 0], 
    [23, 0, 3, 0], 
    [23, 12, 4, 0], 
    [24, 0, 2, -24], 
    [24, 0, 5, 0], 
    [24, 12, 3, 0], 
    [25, 0, 4, 0], 
    [25, 12, 5, 0], 
    [26, 0, 4, -24], 
    [26, 12, 2, 0], 
    [27, 0, 3, 0], 
    [27, 12, 4, 0], 
    [28, 0, 2, 0], 
    [28, 0, 5, -24], 
    [28, 12, 3, 0], 
    [29, 0, 4, 0], 
    [29, 12, 3, 0], 
    [30, 0, 5, 0], 
    [30, 12, 4, 0], 
    [31, 0, 3, 0], 
    [31, 12, 4, 0], 
    [32, 0, 2, -24], 
    [32, 0, 5, 0], 
    [32, 12, 4, 0], 
    [33, 0, 3, 0], 
    [33, 12, 4, 0], 
    [34, 0, 2, 0], 
    [34, 12, 5, 0], 
    [35, 0, 2, 0], 
    [35, 0, 4, 0], 
    [35, 12, 3, 0], 
    [35, 12, 5, 0], 
    [36, 0, 2, 0], 
    [36, 0, 5, -24], 
    [36, 12, 3, 0], 
    [37, 0, 4, 0], 
    [37, 12, 2, 0], 
    [38, 0, 3, 0], 
    [38, 12, 5, 0], 
    [39, 0, 3, 0], 
    [39, 0, 4, 0], 
    [39, 12, 4, 0], 
    [39, 12, 5, 0], 
    [40, 0, 2, -24], 
    [40, 0, 5, 0], 
    [40, 12, 4, 0], 
    [41, 0, 3, 0], 
    [41, 12, 4, 0], 
    [42, 0, 2, 0], 
    [42, 12, 3, 0], 
    [43, 0, 4, 0], 
    [43, 0, 5, 0], 
    [43, 12, 2, 0], 
    [44, 0, 3, 0], 
    [44, 0, 4, 0], 
    [44, 0, 5, -24], 
    [44, 12, 2, 0], 
    [45, 0, 3, 0], 
    [45, 12, 4, 0], 
    [46, 0, 2, 0], 
    [46, 12, 4, 0], 
    [46, 12, 5, 0], 
    [47, 0, 3, 0], 
    [47, 0, 4, 0], 
    [47, 12, 2, 0], 
    [47, 12, 3, 0], 
    [48, 0, 2, 0], 
    [48, 0, 4, 0], 
    [48, 0, 5, 0], 
    [48, 12, 3, 0], 
    [49, 0, 4, 0], 
    [49, 12, 2, 0], 
    [50, 0, 5, 0], 
    [50, 12, 3, 0], 
    [51, 0, 2, 0], 
    [51, 0, 4, 0], 
    [51, 12, 3, 0], 
    [51, 12, 5, 0], 
    [52, 0, 2, -24], 
    [52, 0, 4, 0], 
    [52, 0, 5, 0], 
    [52, 12, 3, 0], 
    [53, 0, 4, 0], 
    [53, 12, 5, 0], 
    [54, 0, 2, 0], 
    [54, 12, 5, 0], 
    [55, 0, 2, 0], 
    [55, 0, 3, 0], 
    [55, 12, 3, 0], 
    [55, 12, 4, 0], 
    [56, 0, 2, 0], 
    [56, 0, 5, -24], 
    [56, 12, 4, 0], 
    [57, 0, 3, 0], 
    [57, 12, 2, 0], 
    [58, 0, 3, 0], 
    [58, 0, 4, 0], 
    [58, 0, 5, -24], 
    [58, 12, 2, 0], 
    [59, 0, 4, 0], 
    [59, 12, 2, 0], 
    [60, 0, 3, 0], 
    [60, 0, 4, -24], 
    [60, 12, 2, 0], 
    [61, 0, 3, 0], 
    [61, 12, 5, 0], 
    [62, 0, 3, 0], 
    [62, 12, 4, 0], 
    [63, 0, 3, 0], 
    [63, 12, 2, 0], 
    [64, 0, 3, 0], 
    [64, 0, 4, 0], 
    [64, 0, 5, 0], 
    [64, 12, 2, 0], 
    [65, 0, 4, 0], 
    [65, 12, 3, 0], 
    [66, 0, 4, 0], 
    [66, 0, 5, 0], 
    [66, 12, 3, 0], 
    [66, 12, 4, 0], 
    [66, 18, 5, 0], 
    [67, 0, 3, 0], 
    [67, 0, 4, 0], 
    [67, 12, 2, 0], 
    [67, 12, 3, 0], 
    [68, 0, 2, 0], 
    [68, 0, 3, 0], 
    [68, 0, 4, 0], 
    [68, 0, 5, 0], 
    [70, 0, 2, 0], 
    [70, 0, 3, 0], 
    [71, 0, 5, 0], 
    [71, 12, 4, 0], 
    [72, 0, 2, 0], 
    [72, 0, 3, 0], 
    [74, 0, 2, 0], 
    [74, 0, 3, 0], 
    [75, 0, 4, 0], 
    [75, 12, 2, 0], 
    [76, 0, 4, 0], 
    [76, 0, 5, 0], 
    [78, 0, 4, 0], 
    [78, 0, 5, 0], 
    [79, 0, 2, 0], 
    [79, 12, 3, 0], 
    [80, 0, 4, 0], 
    [80, 0, 5, 0], 
    [82, 0, 4, 0], 
    [82, 0, 5, 0], 
    [83, 0, 4, 0], 
    [83, 12, 5, 0], 
    [84, 0, 2, 0], 
    [84, 0, 3, 0], 
    [84, 0, 4, 0], 
    [84, 12, 3, 0], 
    [85, 0, 4, 0], 
    [85, 0, 5, 0], 
    [85, 12, 3, 0], 
    [85, 18, 4, 0], 
    [85, 18, 5, 0], 
    [86, 0, 2, 0], 
    [86, 6, 4, 0], 
    [86, 12, 2, 0], 
    [86, 12, 3, 0], 
    [87, 0, 4, 0], 
    [87, 0, 5, 0], 
    [87, 12, 3, 0], 
    [87, 18, 4, 0], 
    [88, 0, 2, 0], 
    [88, 0, 3, 0], 
    [88, 12, 3, 0], 
    [88, 12, 4, 0], 
    [89, 0, 4, 0], 
    [89, 0, 5, 0], 
    [89, 12, 4, 0], 
    [89, 12, 5, 0], 
    [89, 18, 2, 0], 
    [89, 18, 3, 0], 
    [90, 0, 5, 0], 
    [90, 6, 2, 0], 
    [90, 6, 3, 0], 
    [90, 12, 4, 0], 
    [91, 0, 2, 0], 
    [91, 0, 5, 0], 
    [91, 12, 3, 0], 
    [91, 12, 4, 0], 
    [92, 0, 2, 0], 
    [92, 0, 3, 0], 
    [92, 12, 3, 0], 
    [92, 12, 5, 0], 
    [93, 0, 2, 0], 
    [93, 0, 5, 0], 
    [93, 12, 2, 0], 
    [93, 12, 3, 0], 
    [93, 18, 5, 0], 
    [94, 0, 2, 0], 
    [94, 6, 4, 0], 
    [94, 12, 2, 0], 
    [94, 12, 3, 0], 
    [95, 0, 4, 0], 
    [95, 0, 5, 0], 
    [95, 12, 2, 0], 
    [95, 12, 3, 0], 
    [96, 0, 2, 0], 
    [96, 0, 3, 0], 
    [96, 3, 4, 0], 
    [96, 6, 5, 0], 
    [96, 18, 4, 0], 
    [96, 18, 5, 0], 
    [96, 21, 3, 0], 
    [97, 0, 2, 0], 
    [97, 12, 2, 0], 
    [97, 12, 5, 0], 
    [97, 15, 4, 0], 
    [97, 18, 3, 0], 
    [98, 6, 2, 0], 
    [98, 6, 5, 0], 
    [98, 9, 3, 0], 
    [98, 12, 4, 0], 
    [99, 0, 5, 0], 
    [99, 2, 4, 0], 
    [99, 4, 3, 0], 
    [99, 6, 2, 0], 
    [99, 12, 4, 0], 
    [99, 12, 5, 0], 
    [100, 0, 2, 0], 
    [100, 0, 3, 0], 
    [100, 0, 4, 0], 
    [100, 0, 5, 0], 
    [100, 12, 2, 0], 
    [101, 0, 2, 0], 
    [101, 12, 2, 0], 
    [102, 0, 2, 0], 
    [102, 0, 5, 0], 
    [102, 12, 2, 0], 
    [102, 12, 4, 0], 
    [103, 0, 2, 0], 
    [103, 0, 3, 0], 
    [103, 12, 2, 0], 
    [104, 0, 2, 0], 
    [104, 0, 3, 0], 
    [104, 0, 4, 0], 
    [104, 0, 5, 0], 
    [106, 0, 3, 0], 
    [106, 0, 5, 0], 
    [106, 6, 4, 0], 
    [106, 18, 3, 0], 
    [107, 0, 4, 0], 
    [107, 0, 5, 0], 
    [107, 12, 2, 0], 
    [107, 12, 3, 0], 
    [108, 0, 4, 0], 
    [108, 0, 5, 0], 
    [108, 6, 3, 0], 
    [108, 12, 4, 0], 
    [108, 12, 5, 0], 
    [108, 18, 2, 0], 
    [109, 0, 4, 0], 
    [109, 0, 5, 0], 
    [109, 6, 2, 0], 
    [109, 12, 3, 0], 
    [109, 12, 5, 0], 
    [109, 18, 4, 0], 
    [110, 0, 2, 0], 
    [110, 0, 3, 0], 
    [110, 6, 4, 0], 
    [110, 12, 2, 0], 
    [110, 12, 3, 0], 
    [110, 18, 5, 0], 
    [111, 0, 2, 0], 
    [111, 0, 3, 0], 
    [111, 6, 5, 0], 
    [111, 12, 2, 0], 
    [111, 12, 4, 0], 
    [111, 18, 3, 0], 
    [112, 0, 4, 0], 
    [112, 0, 5, 0], 
    [112, 6, 2, 0], 
    [112, 12, 4, 0], 
    [112, 12, 5, 0], 
    [112, 18, 3, 0], 
    [113, 0, 4, 0], 
    [113, 0, 5, 0], 
    [113, 6, 2, 0], 
    [113, 12, 5, 0], 
    [113, 18, 5, 0], 
    [114, 0, 2, 0], 
    [114, 0, 3, 0], 
    [114, 6, 5, 0], 
    [114, 12, 2, 0], 
    [114, 12, 3, 0], 
    [114, 18, 4, 0], 
    [115, 0, 2, 0], 
    [115, 0, 3, 0], 
    [115, 6, 5, 0], 
    [115, 12, 2, 0], 
    [115, 18, 2, 0], 
    [116, 0, 4, 0], 
    [116, 0, 5, 0], 
    [116, 6, 2, 0], 
    [116, 6, 3, 0], 
    [116, 12, 4, 0], 
    [116, 12, 5, 0], 
    [116, 18, 3, 0], 
    [117, 0, 4, 0], 
    [117, 0, 5, 0], 
    [117, 6, 2, 0], 
    [117, 6, 3, 0], 
    [117, 12, 4, 0], 
    [117, 18, 3, 0], 
    [118, 0, 4, 0], 
    [118, 0, 5, 0], 
    [118, 6, 2, 0], 
    [118, 6, 3, 0], 
    [118, 12, 4, 0], 
    [118, 12, 5, 0], 
    [118, 18, 2, 0], 
    [119, 0, 4, 0], 
    [119, 0, 5, 0], 
    [119, 6, 2, 0], 
    [119, 6, 3, 0], 
    [119, 12, 4, 0], 
    [119, 12, 5, 0], 
    [119, 18, 2, 0], 
    [119, 18, 3, 0], 
    [120, 0, 5, 0], 
    [120, 2, 4, 0], 
    [120, 6, 3, 0], 
    [120, 8, 2, 0], 
    [120, 18, 2, 0], 
    [120, 20, 3, 0], 
    [121, 0, 4, 0], 
    [121, 2, 5, 0], 
    [121, 12, 5, 0], 
    [121, 14, 4, 0], 
    [121, 18, 3, 0], 
    [121, 20, 2, 0], 
    [122, 6, 2, 0], 
    [122, 8, 3, 0], 
    [122, 12, 4, 0], 
    [122, 14, 5, 0], 
    [123, 0, 2, 0], 
    [123, 0, 3, 0], 
    [123, 0, 4, 0], 
    [123, 0, 5, 0], 
    [124, 0, 2, 0], 
    [124, 0, 3, 0], 
    [124, 6, 4, 0], 
    [124, 12, 2, 0], 
    [124, 12, 3, 0], 
    [124, 18, 5, 0], 
    [125, 0, 2, 0], 
    [125, 0, 3, 0], 
    [125, 6, 5, 0], 
    [125, 12, 2, 0], 
    [125, 12, 4, 0], 
    [125, 18, 3, 0], 
    [126, 0, 4, 0], 
    [126, 0, 5, 0], 
    [126, 6, 3, 0], 
    [126, 12, 4, 0], 
    [126, 12, 5, 0], 
    [126, 18, 2, 0], 
    [127, 0, 4, 0], 
    [127, 0, 5, 0], 
    [127, 6, 2, 0], 
    [127, 12, 3, 0], 
    [127, 12, 5, 0], 
    [127, 18, 4, 0], 
    [128, 0, 2, 0], 
    [128, 0, 3, 0], 
    [128, 6, 3, 0], 
    [128, 12, 3, 0], 
    [129, 0, 2, 0], 
    [129, 0, 3, 0], 
    [129, 6, 4, 0], 
    [129, 6, 5, 0], 
    [129, 12, 3, 0], 
    [129, 18, 2, 0], 
    [130, 0, 4, 0], 
    [130, 0, 5, 0], 
    [130, 6, 4, 0], 
    [130, 12, 4, 0], 
    [131, 0, 4, 0], 
    [131, 0, 5, 0], 
    [131, 12, 3, 0], 
    [131, 18, 4, 0], 
    [132, 0, 2, 0], 
    [132, 0, 3, 0], 
    [132, 6, 4, 0], 
    [132, 6, 5, 0], 
    [132, 12, 2, 0], 
    [132, 15, 3, 0], 
    [132, 18, 4, 0], 
    [132, 21, 5, 0], 
    [133, 0, 2, 0], 
    [133, 0, 3, 0], 
    [133, 6, 4, 0], 
    [133, 6, 5, 0], 
    [133, 12, 3, 0], 
    [133, 18, 4, 0], 
    [134, 0, 2, 0], 
    [134, 0, 3, 0], 
    [134, 6, 4, 0], 
    [134, 6, 5, 0], 
    [134, 12, 2, 0], 
    [134, 15, 3, 0], 
    [134, 18, 4, 0], 
    [134, 21, 5, 0], 
    [135, 0, 2, 0], 
    [135, 0, 3, 0], 
    [135, 6, 4, 0], 
    [135, 6, 5, 0], 
    [135, 12, 2, 0], 
    [135, 12, 3, 0], 
    [135, 18, 4, 0], 
    [135, 18, 5, 0], 
    [136, 0, 2, 0], 
    [136, 2, 3, 0], 
    [136, 6, 4, 0], 
    [136, 8, 5, 0], 
    [136, 18, 5, 0], 
    [136, 20, 4, 0], 
    [137, 0, 3, 0], 
    [137, 2, 2, 0], 
    [137, 12, 5, 0], 
    [137, 14, 4, 0], 
    [137, 18, 5, 0], 
    [137, 20, 4, 0], 
    [138, 6, 2, 0], 
    [138, 8, 3, 0], 
    [138, 12, 2, 0], 
    [138, 14, 3, 0], 
    [139, 0, 2, 0], 
    [139, 0, 3, 0], 
    [139, 0, 4, 0], 
    [139, 0, 5, 0], 
    [140, 0, 3, 0], 
    [140, 0, 4, 0], 
    [140, 12, 4, 0], 
    [140, 18, 3, 0], 
    [141, 0, 4, 0], 
    [141, 0, 5, 0], 
    [141, 6, 2, 0], 
    [141, 6, 3, 0], 
    [141, 12, 4, 0], 
    [141, 12, 5, 0], 
    [141, 18, 2, 0], 
    [141, 18, 3, 0], 
    [142, 0, 5, 0], 
    [142, 6, 5, 0], 
    [142, 12, 2, 0], 
    [142, 18, 2, 0], 
    [143, 0, 5, 0], 
    [143, 3, 4, 0], 
    [143, 6, 3, 0], 
    [143, 9, 2, 0], 
    [143, 12, 4, 0], 
    [143, 12, 5, 0], 
    [144, 0, 2, 0], 
    [144, 0, 3, 0], 
    [144, 6, 4, 0], 
    [144, 6, 5, 0], 
    [144, 12, 2, 0], 
    [144, 12, 3, 0], 
    [144, 18, 4, 0], 
    [144, 18, 5, 0], 
    [145, 0, 2, 0], 
    [145, 6, 2, 0], 
    [145, 12, 5, 0], 
    [145, 18, 5, 0], 
    [146, 0, 2, 0], 
    [146, 3, 3, 0], 
    [146, 6, 4, 0], 
    [146, 9, 5, 0], 
    [146, 12, 2, 0], 
    [146, 12, 3, 0], 
    [146, 18, 4, 0], 
    [146, 18, 5, 0], 
    [147, 0, 2, 0], 
    [147, 0, 3, 0], 
    [147, 6, 4, 0], 
    [147, 12, 3, 0], 
    [147, 18, 4, 0], 
    [148, 0, 2, 0], 
    [148, 0, 3, 0], 
    [148, 0, 5, 0], 
    [148, 6, 4, 0], 
    [148, 12, 2, 0], 
    [149, 0, 2, 0], 
    [149, 0, 4, 0], 
    [149, 0, 5, 0], 
    [149, 6, 3, 0], 
    [149, 12, 5, 0], 
    [150, 0, 2, 0], 
    [150, 0, 4, 0], 
    [150, 0, 5, 0], 
    [150, 6, 3, 0], 
    [150, 12, 4, 0], 
    [150, 12, 5, 0], 
    [151, 0, 2, 0], 
    [151, 0, 3, 0], 
    [151, 0, 5, 0], 
    [151, 6, 4, 0], 
    [151, 12, 2, 0], 
    [151, 12, 3, 0], 
    [151, 18, 2, 0], 
    [151, 18, 3, 0], 
    [152, 0, 5, 0], 
    [152, 3, 3, 0], 
    [152, 6, 5, 0], 
    [152, 9, 3, 0], 
    [152, 18, 2, 0], 
    [152, 21, 4, 0], 
    [153, 0, 2, 0], 
    [153, 3, 4, 0], 
    [153, 12, 4, 0], 
    [153, 15, 3, 0], 
    [153, 18, 4, 0], 
    [153, 21, 3, 0], 
    [154, 6, 3, 0], 
    [154, 9, 4, 0], 
    [154, 12, 3, 0], 
    [154, 15, 4, 0], 
    [155, 0, 5, 0], 
    [155, 3, 4, 0], 
    [155, 6, 3, 0], 
    [155, 9, 2, 0], 
    [156, 0, 4, 0], 
    [156, 0, 5, 0], 
    [156, 6, 2, 0], 
    [156, 6, 3, 0], 
    [156, 12, 4, 0], 
    [156, 12, 5, 0], 
    [156, 18, 2, 0], 
    [156, 18, 3, 0], 
    [157, 0, 5, 0], 
    [157, 6, 5, 0], 
    [157, 12, 3, 0], 
    [157, 18, 3, 0], 
    [158, 0, 4, 0], 
    [158, 0, 5, 0], 
    [158, 6, 2, 0], 
    [158, 6, 3, 0], 
    [158, 12, 4, 0], 
    [158, 12, 5, 0], 
    [158, 18, 2, 0], 
    [158, 18, 3, 0], 
    [159, 0, 4, -12], 
    [159, 0, 5, -12], 
    [160, 0, 2, 0], 
    [160, 0, 3, 0], 
    [160, 6, 4, 0], 
    [160, 6, 5, 0], 
    [160, 12, 2, 0], 
    [160, 12, 3, 0], 
    [160, 18, 4, 0], 
    [160, 18, 5, 0], 
    [161, 0, 2, 0], 
    [161, 6, 2, 0], 
    [161, 12, 4, 0], 
    [161, 18, 4, 0], 
    [162, 0, 2, 0], 
    [162, 0, 3, 0], 
    [162, 6, 4, 0], 
    [162, 6, 5, 0], 
    [162, 12, 2, 0], 
    [162, 12, 3, 0], 
    [162, 18, 4, 0], 
    [162, 18, 5, 0], 
    [163, 0, 2, -12], 
    [163, 0, 3, -12], 
    [164, 0, 4, 0], 
    [164, 0, 5, 0], 
    [164, 3, 3, 0], 
    [164, 6, 2, 0], 
    [164, 18, 4, 0], 
    [164, 18, 5, 0], 
    [164, 21, 2, 0], 
    [165, 0, 3, 0], 
    [165, 12, 4, 0], 
    [165, 12, 5, 0], 
    [165, 18, 2, 0], 
    [166, 0, 2, 0], 
    [166, 6, 4, 0], 
    [166, 6, 5, 0], 
    [166, 12, 3, 0], 
    [166, 18, 3, 0], 
    [167, 0, 4, 0], 
    [167, 0, 5, 0], 
    [168, 0, 2, 0], 
    [168, 0, 3, 0], 
    [168, 3, 4, 0], 
    [168, 6, 5, 0], 
    [168, 18, 2, 0], 
    [168, 18, 3, 0], 
    [168, 21, 5, 0], 
    [169, 0, 4, 0], 
    [169, 12, 2, 0], 
    [169, 12, 3, 0], 
    [169, 18, 5, 0], 
    [170, 0, 5, 0], 
    [170, 6, 2, 0], 
    [170, 6, 3, 0], 
    [170, 12, 4, 0], 
    [170, 18, 4, 0], 
    [171, 0, 2, 0], 
    [171, 0, 3, 0], 
    [172, 0, 2, 0], 
    [172, 0, 3, 0], 
    [172, 0, 4, 0], 
    [172, 0, 5, 0], 
    [174, 6, 4, 0], 
    [174, 6, 5, 0], 
    [174, 12, 2, 0], 
    [174, 18, 3, 0], 
    [175, 0, 4, 0], 
    [175, 0, 5, 0], 
    [175, 6, 3, 0], 
    [175, 12, 2, 0], 
    [175, 18, 4, 0], 
    [175, 18, 5, 0], 
    [176, 0, 2, 0], 
    [176, 6, 3, 0], 
    [176, 6, 5, 0], 
    [176, 12, 4, 0], 
    [176, 18, 2, 0], 
    [177, 0, 4, 0], 
    [177, 0, 5, 0], 
    [177, 6, 3, 0], 
    [177, 12, 2, 0], 
    [177, 18, 4, 0], 
    [177, 18, 5, 0], 
    [178, 0, 2, 0], 
    [178, 6, 3, 0], 
    [178, 6, 5, 0], 
    [178, 12, 4, 0], 
    [178, 18, 2, 0], 
    [179, 0, 4, 0], 
    [179, 0, 5, 0], 
    [179, 6, 2, 0], 
    [179, 12, 3, 0], 
    [179, 18, 4, 0], 
    [179, 18, 5, 0], 
    [180, 0, 2, 0], 
    [180, 6, 4, 0], 
    [180, 6, 5, 0], 
    [182, 6, 2, 0], 
    [182, 6, 3, 0], 
    [182, 12, 5, 0], 
    [182, 18, 4, 0], 
    [183, 0, 2, 0], 
    [183, 0, 3, 0], 
    [183, 6, 4, 0], 
    [183, 12, 5, 0], 
    [183, 18, 2, 0], 
    [183, 18, 3, 0], 
    [184, 0, 5, 0], 
    [184, 6, 2, 0], 
    [184, 6, 4, 0], 
    [184, 12, 3, 0], 
    [184, 18, 5, 0], 
    [185, 0, 4, 0], 
    [185, 6, 2, 0], 
    [185, 6, 3, 0], 
    [185, 12, 4, 0], 
    [185, 12, 5, 0], 
    [185, 18, 2, 0], 
    [185, 18, 3, 0], 
    [186, 0, 5, 0], 
    [186, 6, 3, 0], 
    [186, 12, 4, 0], 
    [186, 18, 2, 0], 
    [187, 0, 4, 0], 
    [187, 0, 5, 0], 
    [188, 0, 2, 0], 
    [188, 0, 3, 0], 
    [188, 0, 4, 0], 
    [188, 0, 5, 0], 
    [188, 12, 4, 0], 
    [189, 0, 2, 0], 
    [189, 0, 3, 0], 
    [189, 0, 5, 0], 
    [189, 6, 4, 0], 
    [189, 12, 5, 0], 
    [189, 18, 3, 0], 
    [190, 0, 2, 0], 
    [190, 0, 4, 0], 
    [190, 0, 5, 0], 
    [190, 6, 3, 0], 
    [190, 18, 4, 0], 
    [191, 0, 2, 0], 
    [191, 0, 3, 0], 
    [191, 0, 5, 0], 
    [191, 12, 3, 0], 
    [191, 12, 4, 0], 
    [192, 0, 2, 0], 
    [192, 0, 3, 0], 
    [192, 0, 4, 0], 
    [192, 0, 5, 0], 
    [192, 12, 3, 0], 
    [193, 0, 2, 0], 
    [193, 0, 4, 0], 
    [193, 0, 5, 0], 
    [193, 6, 3, 0], 
    [193, 12, 2, 0], 
    [193, 18, 4, 0], 
    [194, 0, 2, 0], 
    [194, 0, 3, 0], 
    [194, 0, 5, 0], 
    [194, 6, 4, 0], 
    [194, 18, 3, 0], 
    [195, 0, 2, 0], 
    [195, 0, 4, 0], 
    [195, 0, 5, 0], 
    [195, 12, 3, 0], 
    [195, 12, 4, 0], 
    [196, 0, 3, -18], 
    [196, 0, 4, 0], 
    [196, 0, 5, 0], 
    [196, 18, 2, 0], 
    [196, 18, 4, -18], 
    [196, 18, 5, 0], 
    [197, 12, 2, 0], 
    [197, 12, 3, -12], 
    [197, 12, 5, 0], 
    [198, 6, 2, 0], 
    [198, 6, 3, 0], 
    [198, 6, 4, -12], 
    [199, 0, 3, 0], 
    [199, 0, 4, 0], 
    [199, 0, 5, 0], 
    [199, 12, 2, 0], 
    [199, 12, 3, 0], 
    [199, 12, 4, 0], 
    [200, 0, 2, -24], 
    [200, 0, 3, 0], 
    [200, 0, 4, 0], 
    [200, 0, 5, -24], 
    [201, 0, 3, 0], 
    [201, 0, 4, 0], 
    [201, 12, 4, 0], 
    [201, 18, 3, 0], 
    [202, 0, 4, 0], 
    [202, 0, 5, 0], 
    [202, 12, 3, 0], 
    [202, 12, 5, 0], 
    [203, 0, 2, 0], 
    [203, 0, 4, 0], 
    [203, 12, 2, 0], 
    [203, 12, 3, 0], 
    [204, 0, 2, 0], 
    [204, 0, 3, 0], 
    [204, 0, 4, 0], 
    [204, 0, 5, -96], 
    [208, 0, 3, -96], 
    [212, 0, 4, -192], 
    [216, 0, 2, 0], 
    [216, 0, 3, 0], 
    [217, 0, 5, 0], 
    [218, 0, 3, 0], 
    [219, 0, 2, 0], 
    [220, 0, 2, 0], 
    [220, 0, 5, -96], 
    [224, 0, 2, -96], 
    [224, 0, 4, 0], 
    [228, 0, 3, -144], 
    [228, 0, 4, 0], 
    [232, 0, 4, 0], 
    [232, 0, 5, 0], 
    [234, 0, 2, 0], 
    [234, 0, 4, 0], 
    [234, 12, 5, 0], 
    [235, 0, 3, 0], 
    [235, 12, 4, 0], 
    [236, 0, 2, -24], 
    [236, 0, 5, 0], 
    [236, 12, 3, 0], 
    [237, 0, 4, 0], 
    [237, 12, 3, 0], 
    [237, 12, 5, 0], 
    [238, 0, 2, 0], 
    [238, 12, 5, 0], 
    [239, 0, 3, 0], 
    [239, 0, 4, 0], 
    [239, 12, 2, 0], 
    [239, 12, 3, 0], 
    [240, 0, 3, 0], 
    [240, 0, 5, -24], 
    [240, 12, 4, 0], 
    [241, 0, 3, 0], 
    [241, 12, 2, 0], 
    [241, 12, 4, 0], 
    [242, 0, 5, 0], 
    [242, 12, 2, 0], 
    [243, 0, 4, 0], 
    [243, 0, 5, 0], 
    [243, 12, 2, 0], 
    [244, 0, 3, 0], 
    [244, 0, 4, 0], 
    [244, 0, 5, -48], 
    [244, 12, 2, 0], 
    [245, 0, 3, 0], 
    [245, 12, 4, 0], 
    [246, 0, 2, 0], 
    [246, 12, 4, 0], 
    [247, 0, 2, 0], 
    [247, 0, 3, 0], 
    [247, 0, 5, 0], 
    [247, 12, 4, 0], 
    [248, 0, 4, 0], 
    [248, 0, 5, 0], 
    [248, 12, 2, 0], 
    [249, 0, 4, 0], 
    [249, 12, 2, 0], 
    [249, 12, 5, 0], 
    [250, 0, 3, 0], 
    [250, 12, 5, 0], 
    [251, 0, 3, 0], 
    [251, 0, 4, 0], 
    [251, 12, 4, 0], 
    [251, 12, 5, 0], 
    [252, 0, 2, 0], 
    [252, 0, 3, 0], 
    [252, 0, 4, -24], 
    [252, 12, 2, 0], 
    [252, 12, 3, 0], 
    [253, 0, 2, 0], 
    [253, 0, 3, 0], 
    [253, 12, 2, 0], 
    [253, 12, 3, 0], 
    [254, 0, 2, 0], 
    [254, 0, 3, 0], 
    [254, 12, 2, 0], 
    [254, 12, 3, 0], 
    [254, 12, 5, 0], 
    [255, 0, 2, 0], 
    [255, 0, 3, 0], 
    [255, 0, 4, 0], 
    [255, 12, 2, 0], 
    [255, 12, 3, 0], 
    [255, 12, 5, 0], 
    [256, 0, 2, -12], 
    [256, 0, 5, 0], 
    [256, 6, 4, 0], 
    [256, 12, 5, 0], 
    [256, 18, 4, 0], 
    [257, 0, 3, 0], 
    [257, 0, 5, 0], 
    [257, 6, 2, 0], 
    [257, 12, 3, 0], 
    [257, 18, 2, 0], 
    [258, 0, 3, -12], 
    [258, 0, 4, 0], 
    [258, 6, 5, 0], 
    [258, 12, 4, 0], 
    [258, 18, 5, 0], 
    [259, 0, 2, 0], 
    [259, 0, 4, 0], 
    [259, 6, 3, 0], 
    [259, 12, 2, 0], 
    [259, 18, 3, 0], 
    [260, 0, 2, 0], 
    [260, 0, 5, 0], 
    [260, 6, 4, 0], 
    [260, 12, 3, 0], 
    [260, 18, 4, 0], 
    [261, 0, 2, 0], 
    [261, 6, 3, 0], 
    [261, 12, 4, 0], 
    [261, 18, 3, 0], 
    [262, 0, 2, 0], 
    [262, 0, 5, 0], 
    [262, 4, 4, 0], 
    [262, 8, 3, 0], 
    [262, 12, 2, 0], 
    [262, 16, 3, 0], 
    [262, 20, 4, 0], 
    [263, 0, 5, 0], 
    [263, 6, 3, 0], 
    [263, 12, 4, 0], 
    [263, 18, 3, 0], 
    [264, 0, 4, -72], 
    [264, 0, 5, -72], 
    [265, 0, 2, 0], 
    [265, 0, 3, 0], 
    [266, 0, 2, 0], 
    [266, 0, 3, 0], 
    [267, 0, 1, 0], 
    [267, 0, 2, 0], 
    [267, 6, 5, 0], 
    [267, 6, 6, 0], 
    [267, 12, 1, 0], 
    [267, 12, 2, 0], 
    [267, 18, 5, 0], 
    [267, 18, 6, 0], 
    [268, 0, 1, 0], 
    [268, 0, 2, 0], 
    [268, 12, 1, 0], 
    [268, 12, 2, 0], 
    [269, 0, 1, 0], 
    [269, 0, 2, 0], 
    [269, 12, 1, 0], 
    [269, 12, 2, 0], 
    [270, 0, 1, 0], 
    [270, 0, 2, 0], 
    [270, 0, 5, 0], 
    [270, 0, 6, 0], 
    [270, 12, 1, 0], 
    [270, 12, 2, 0], 
    [270, 12, 4, 0], 
    [270, 12, 5, 0], 
    [271, 0, 1, 0], 
    [271, 0, 2, 0], 
    [271, 0, 4, 0], 
    [271, 0, 5, 0], 
    [271, 12, 1, 0], 
    [271, 12, 4, 0], 
    [272, 0, 6, 0], 
    [272, 1, 3, 0], 
    [272, 1, 5, 0], 
    [272, 2, 2, 0], 
    [272, 2, 4, 0], 
    [272, 3, 1, 0], 
    [272, 12, 1, 0], 
    [272, 13, 2, 0], 
    [272, 13, 4, 0], 
    [272, 14, 3, 0], 
    [272, 14, 5, 0], 
    [272, 15, 6, 0], 
    [273, 0, 3, 0], 
    [273, 0, 6, 0], 
    [273, 1, 2, 0], 
    [273, 1, 5, 0], 
    [273, 2, 1, 0], 
    [273, 2, 4, 0], 
    [274, 0, 6, 0], 
    [274, 6, 3, 0], 
    [274, 12, 5, 0], 
    [274, 18, 2, 0], 
    [275, 0, 4, 0], 
    [275, 6, 1, 0], 
    [275, 12, 3, 0], 
    [276, 0, 1, 0], 
    [276, 0, 5, 0], 
    [276, 0, 6, 0], 
    [276, 6, 3, 0], 
    [276, 12, 1, 0], 
    [276, 12, 5, 0], 
    [276, 12, 6, 0], 
    [276, 18, 3, 0], 
    [277, 0, 2, 0], 
    [277, 0, 4, 0], 
    [277, 0, 5, 0], 
    [277, 6, 3, 0], 
    [277, 12, 2, 0], 
    [277, 12, 4, 0], 
    [277, 12, 5, 0], 
    [277, 18, 3, 0], 
    [278, 0, 1, 0], 
    [278, 0, 6, 0], 
    [278, 6, 4, 0], 
    [278, 12, 1, 0], 
    [278, 12, 2, 0], 
    [278, 12, 6, 0], 
    [278, 18, 4, 0], 
    [279, 0, 2, 0], 
    [279, 0, 3, 0], 
    [279, 0, 5, 0], 
    [279, 6, 4, 0], 
    [279, 12, 2, 0], 
    [279, 12, 3, 0], 
    [279, 12, 5, 0], 
    [279, 18, 4, 0], 
    [280, 0, 1, 0], 
    [280, 0, 6, 0], 
    [280, 6, 3, 0], 
    [280, 12, 1, 0], 
    [280, 12, 5, 0], 
    [280, 12, 6, 0], 
    [280, 18, 3, 0], 
    [281, 0, 2, 0], 
    [281, 0, 4, 0], 
    [281, 0, 5, 0], 
    [281, 6, 3, 0], 
    [281, 12, 2, 0], 
    [281, 12, 4, 0], 
    [281, 12, 5, 0], 
    [281, 18, 3, 0], 
    [282, 0, 1, 0], 
    [282, 0, 6, 0], 
    [282, 12, 2, 0], 
    [282, 12, 3, 0], 
    [282, 12, 4, 0], 
    [282, 12, 5, 0], 
    [283, 0, 5, 0], 
    [283, 0, 6, 0], 
    [283, 6, 1, 0], 
    [283, 6, 2, 0], 
    [283, 12, 4, 0], 
    [283, 18, 3, 0], 
    [284, 0, 5, 0], 
    [284, 0, 6, 0], 
    [284, 6, 1, 0], 
    [284, 12, 5, 0], 
    [284, 12, 6, 0], 
    [284, 18, 2, 0], 
    [285, 0, 5, 0], 
    [285, 0, 6, 0], 
    [285, 6, 3, 0], 
    [285, 12, 5, 0], 
    [285, 12, 6, 0], 
    [285, 18, 4, 0], 
    [286, 0, 1, 0], 
    [286, 0, 2, 0], 
    [286, 6, 6, 0], 
    [286, 12, 1, 0], 
    [286, 12, 2, 0], 
    [286, 18, 5, 0], 
    [287, 0, 1, 0], 
    [287, 0, 2, 0], 
    [287, 6, 4, 0], 
    [287, 12, 1, 0], 
    [287, 12, 2, 0], 
    [287, 18, 3, 0], 
    [288, 0, 6, 0], 
    [288, 2, 5, 0], 
    [288, 4, 4, 0], 
    [288, 6, 3, 0], 
    [288, 8, 2, 0], 
    [288, 10, 1, 0], 
    [288, 18, 6, 0], 
    [288, 20, 5, 0], 
    [288, 22, 4, 0], 
    [289, 0, 3, 0], 
    [289, 2, 2, 0], 
    [289, 12, 5, 0], 
    [289, 14, 4, 0], 
    [289, 16, 3, 0], 
    [289, 18, 2, 0], 
    [289, 20, 1, 0], 
    [290, 6, 6, 0], 
    [290, 8, 5, 0], 
    [290, 10, 4, 0], 
    [290, 12, 3, 0], 
    [290, 14, 2, 0], 
    [290, 16, 1, 0], 
    [291, 0, 4, 0], 
    [291, 0, 5, 0], 
    [291, 0, 6, 0], 
    [291, 12, 1, 0], 
    [291, 12, 2, 0], 
    [291, 12, 3, 0], 
    [292, 0, 2, 0], 
    [292, 0, 6, 0], 
    [292, 6, 3, 0], 
    [292, 12, 2, 0], 
    [292, 12, 4, 0], 
    [292, 12, 5, 0], 
    [292, 18, 3, 0], 
    [293, 0, 1, 0], 
    [293, 0, 5, 0], 
    [293, 6, 4, 0], 
    [293, 12, 2, 0], 
    [293, 12, 3, 0], 
    [293, 12, 5, 0], 
    [293, 18, 4, 0], 
    [294, 0, 1, 0], 
    [294, 0, 6, 0], 
    [294, 6, 2, 0], 
    [294, 12, 3, 0], 
    [294, 12, 4, 0], 
    [294, 12, 5, 0], 
    [294, 18, 2, 0], 
    [295, 0, 1, 0], 
    [295, 0, 6, 0], 
    [295, 6, 5, 0], 
    [295, 12, 2, 0], 
    [295, 12, 3, 0], 
    [295, 12, 4, 0], 
    [295, 18, 5, 0], 
    [296, 0, 3, 0], 
    [296, 0, 6, 0], 
    [296, 6, 2, 0], 
    [296, 6, 5, 0], 
    [296, 12, 1, 0], 
    [296, 12, 4, 0], 
    [297, 0, 3, 0], 
    [297, 0, 4, 0], 
    [297, 0, 5, 0], 
    [297, 12, 4, 0], 
    [297, 14, 3, 0], 
    [297, 16, 2, 0], 
    [298, 0, 1, 0], 
    [298, 0, 4, 0], 
    [298, 6, 2, 0], 
    [298, 6, 5, 0], 
    [298, 12, 3, 0], 
    [298, 12, 6, 0], 
    [299, 0, 1, 0], 
    [299, 0, 2, 0], 
    [299, 0, 4, 0], 
    [299, 12, 3, 0], 
    [299, 12, 5, 0], 
    [299, 12, 6, 0], 
    [300, 0, 1, 0], 
    [300, 0, 5, 0], 
    [300, 0, 6, 0], 
    [300, 6, 3, 0], 
    [300, 12, 1, 0], 
    [300, 12, 5, 0], 
    [300, 12, 6, 0], 
    [300, 18, 3, 0], 
    [301, 0, 2, 0], 
    [301, 0, 5, 0], 
    [301, 0, 6, 0], 
    [301, 6, 3, 0], 
    [301, 12, 2, 0], 
    [301, 12, 5, 0], 
    [301, 12, 6, 0], 
    [301, 18, 3, 0], 
    [302, 0, 1, 0], 
    [302, 0, 2, 0], 
    [302, 0, 6, 0], 
    [302, 6, 4, 0], 
    [302, 12, 1, 0], 
    [302, 12, 2, 0], 
    [302, 12, 6, 0], 
    [302, 18, 4, 0], 
    [303, 0, 1, 0], 
    [303, 0, 2, 0], 
    [303, 0, 5, 0], 
    [303, 6, 4, 0], 
    [303, 12, 1, 0], 
    [303, 12, 2, 0], 
    [303, 12, 5, 0], 
    [303, 18, 4, 0], 
    [304, 0, 1, 0], 
    [304, 2, 2, 0], 
    [304, 4, 3, 0], 
    [304, 6, 4, 0], 
    [304, 8, 5, 0], 
    [304, 10, 6, 0], 
    [304, 18, 2, 0], 
    [304, 20, 3, 0], 
    [304, 22, 4, 0], 
    [305, 0, 5, 0], 
    [305, 2, 6, 0], 
    [305, 12, 1, 0], 
    [305, 14, 2, 0], 
    [305, 16, 3, 0], 
    [305, 18, 4, 0], 
    [305, 20, 5, 0], 
    [306, 6, 1, 0], 
    [306, 8, 2, 0], 
    [306, 10, 3, 0], 
    [306, 12, 4, 0], 
    [306, 14, 5, 0], 
    [306, 16, 6, 0], 
    [307, 0, 2, 0], 
    [307, 0, 3, 0], 
    [307, 0, 4, 0], 
    [307, 0, 5, 0], 
    [308, 0, 5, 0], 
    [308, 3, 4, 0], 
    [308, 6, 3, 0], 
    [308, 9, 2, 0], 
    [308, 12, 5, 0], 
    [308, 12, 6, 0], 
    [308, 18, 1, 0], 
    [308, 18, 2, 0], 
    [309, 0, 5, 0], 
    [309, 0, 6, 0], 
    [309, 12, 2, 0], 
    [309, 15, 3, 0], 
    [309, 18, 4, 0], 
    [309, 21, 5, 0], 
    [310, 0, 1, 0], 
    [310, 0, 2, 0], 
    [310, 6, 5, 0], 
    [310, 6, 6, 0], 
    [310, 12, 1, 0], 
    [310, 12, 2, 0], 
    [311, 0, 6, 0], 
    [311, 3, 5, 0], 
    [311, 6, 3, 0], 
    [311, 9, 2, 0], 
    [311, 12, 5, 0], 
    [311, 12, 6, 0], 
    [311, 18, 1, 0], 
    [311, 18, 2, 0], 
    [312, 0, 5, 0], 
    [312, 0, 6, 0], 
    [312, 12, 1, 0], 
    [312, 15, 2, 0], 
    [312, 18, 4, 0], 
    [312, 21, 5, 0], 
    [313, 0, 1, 0], 
    [313, 0, 2, 0], 
    [313, 6, 5, 0], 
    [313, 6, 6, 0], 
    [313, 12, 1, 0], 
    [313, 12, 2, 0], 
    [314, 0, 6, 0], 
    [314, 2, 5, 0], 
    [314, 4, 2, 0], 
    [314, 6, 1, 0], 
    [314, 12, 5, 0], 
    [314, 12, 6, 0], 
    [314, 18, 2, 0], 
    [314, 18, 3, 0], 
    [315, 0, 4, 0], 
    [315, 0, 5, 0], 
    [315, 6, 1, 0], 
    [315, 6, 2, 0], 
    [315, 12, 5, 0], 
    [315, 14, 4, 0], 
    [315, 16, 3, 0], 
    [315, 18, 2, 0], 
    [316, 0, 6, 0], 
    [316, 2, 5, 0], 
    [316, 4, 3, 0], 
    [316, 6, 2, 0], 
    [316, 12, 4, 0], 
    [316, 12, 5, 0], 
    [316, 18, 1, 0], 
    [316, 18, 2, 0], 
    [317, 0, 5, 0], 
    [317, 0, 6, 0], 
    [317, 12, 1, 0], 
    [317, 14, 2, 0], 
    [317, 16, 4, 0], 
    [317, 18, 5, 0], 
    [318, 0, 2, 0], 
    [318, 0, 3, 0], 
    [318, 6, 5, 0], 
    [318, 6, 6, 0], 
    [318, 12, 1, 0], 
    [318, 12, 2, 0], 
    [319, 0, 6, 0], 
    [319, 2, 5, 0], 
    [319, 4, 3, 0], 
    [319, 6, 1, 0], 
    [319, 12, 5, 0], 
    [319, 12, 6, 0], 
    [319, 18, 1, 0], 
    [319, 18, 3, 0], 
    [320, 0, 4, 0], 
    [320, 0, 5, 0], 
    [320, 12, 1, 0], 
    [320, 14, 2, 0], 
    [320, 16, 4, 0], 
    [320, 18, 6, 0], 
    [321, 0, 1, 0], 
    [321, 0, 2, 0], 
    [321, 6, 4, 0], 
    [321, 6, 6, 0], 
    [321, 12, 2, 0], 
    [321, 12, 3, 0], 
    [322, 0, 6, 0], 
    [322, 2, 5, 0], 
    [322, 4, 4, 0], 
    [322, 6, 3, 0], 
    [322, 8, 2, 0], 
    [322, 10, 1, 0], 
    [322, 18, 5, 0], 
    [322, 19, 4, 0], 
    [322, 20, 3, 0], 
    [322, 21, 2, 0], 
    [323, 12, 6, 0], 
    [323, 13, 5, 0], 
    [323, 14, 4, 0], 
    [323, 15, 3, 0], 
    [323, 16, 2, 0], 
    [323, 17, 1, 0], 
    [324, 0, 6, 0], 
    [324, 2, 4, 0], 
    [324, 4, 3, 0], 
    [324, 6, 2, 0], 
    [324, 12, 4, 0], 
    [324, 12, 6, 0], 
    [324, 18, 2, 0], 
    [324, 18, 3, 0], 
    [325, 0, 4, 0], 
    [325, 0, 5, 0], 
    [325, 12, 1, 0], 
    [325, 14, 3, 0], 
    [325, 16, 4, 0], 
    [325, 18, 5, 0], 
    [326, 0, 1, 0], 
    [326, 0, 3, 0], 
    [326, 6, 4, 0], 
    [326, 6, 5, 0], 
    [326, 12, 2, 0], 
    [326, 12, 3, 0], 
    [327, 0, 5, 0], 
    [327, 2, 3, 0], 
    [327, 4, 2, 0], 
    [327, 6, 1, 0], 
    [327, 12, 5, 0], 
    [327, 12, 6, 0], 
    [327, 18, 1, 0], 
    [327, 18, 2, 0], 
    [328, 0, 4, 0], 
    [328, 0, 5, 0], 
    [328, 12, 2, 0], 
    [328, 14, 4, 0], 
    [328, 16, 5, 0], 
    [328, 18, 6, 0], 
    [329, 0, 1, 0], 
    [329, 0, 2, 0], 
    [329, 6, 5, 0], 
    [329, 6, 6, 0], 
    [329, 12, 2, 0], 
    [329, 12, 3, 0], 
    [330, 0, 3, 0], 
    [330, 0, 6, 0], 
    [330, 6, 2, 0], 
    [330, 6, 5, 0], 
    [330, 12, 1, 0], 
    [330, 12, 4, 0], 
    [330, 18, 2, 0], 
    [330, 18, 5, 0], 
    [331, 0, 6, 0], 
    [331, 3, 5, 0], 
    [331, 6, 4, 0], 
    [331, 9, 3, 0], 
    [331, 12, 2, 0], 
    [331, 15, 1, 0], 
    [332, 0, 6, 0], 
    [332, 2, 4, 0], 
    [332, 4, 3, 0], 
    [332, 6, 1, 0], 
    [332, 12, 4, 0], 
    [332, 12, 6, 0], 
    [332, 18, 2, 0], 
    [332, 18, 3, 0], 
    [333, 0, 4, 0], 
    [333, 0, 6, 0], 
    [333, 12, 1, 0], 
    [333, 14, 3, 0], 
    [333, 16, 4, 0], 
    [333, 18, 6, 0], 
    [334, 0, 1, 0], 
    [334, 0, 3, 0], 
    [334, 6, 4, 0], 
    [334, 6, 5, 0], 
    [334, 12, 1, 0], 
    [334, 12, 3, 0], 
    [335, 0, 6, 0], 
    [335, 2, 5, 0], 
    [335, 4, 4, 0], 
    [335, 6, 3, 0], 
    [335, 8, 2, 0], 
    [335, 10, 1, 0], 
    [336, 0, 5, 0], 
    [336, 3, 4, 0], 
    [336, 6, 3, 0], 
    [336, 9, 2, 0], 
    [336, 12, 6, 0], 
    [336, 14, 5, 0], 
    [336, 16, 4, 0], 
    [336, 18, 3, 0], 
    [336, 20, 2, 0], 
    [336, 22, 1, 0], 
    [337, 0, 6, 0], 
    [337, 2, 5, 0], 
    [337, 4, 4, 0], 
    [337, 6, 3, 0], 
    [337, 8, 2, 0], 
    [337, 10, 1, 0], 
    [337, 12, 5, 0], 
    [337, 15, 4, 0], 
    [337, 18, 3, 0], 
    [337, 21, 2, 0], 
    [338, 0, 6, 0], 
    [338, 2, 5, 0], 
    [338, 4, 4, 0], 
    [338, 6, 3, 0], 
    [338, 8, 2, 0], 
    [338, 10, 1, 0], 
    [338, 12, 6, 0], 
    [338, 14, 5, 0], 
    [338, 16, 4, 0], 
    [338, 18, 3, 0], 
    [338, 20, 2, 0], 
    [338, 22, 1, 0], 
    [339, 0, 6, 0], 
    [339, 2, 5, 0], 
    [339, 4, 4, 0], 
    [339, 6, 3, 0], 
    [339, 8, 2, 0], 
    [339, 10, 1, 0], 
    [339, 12, 6, 0], 
    [339, 14, 5, 0], 
    [339, 16, 4, 0], 
    [339, 18, 3, 0], 
    [339, 20, 2, 0], 
    [339, 22, 1, 0], 
    [340, 0, 6, 0], 
    [344, 0, 6, 0], 
    [344, 2, 5, 0], 
    [344, 4, 4, 0], 
    [344, 6, 3, 0], 
    [344, 8, 2, 0], 
    [344, 10, 1, 0], 
    [344, 18, 6, 0], 
    [344, 20, 5, 0], 
    [344, 22, 4, 0], 
    [345, 0, 3, 0], 
    [345, 2, 2, 0], 
    [345, 12, 6, 0], 
    [345, 14, 5, 0], 
    [345, 16, 4, 0], 
    [345, 18, 3, 0], 
    [345, 20, 2, 0], 
    [345, 22, 1, 0], 
    [346, 6, 6, 0], 
    [346, 8, 5, 0], 
    [346, 10, 4, 0], 
    [346, 12, 3, 0], 
    [347, 0, 1, 0], 
    [347, 0, 2, 0], 
    [347, 0, 3, 0], 
    [347, 0, 4, 0], 
    [347, 0, 5, 0], 
    [347, 0, 6, 0], 
    [-1,-1,-1,-1], 
  ], 
]