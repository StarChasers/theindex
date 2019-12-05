var logo;
var snd = [];
var vfx;
var playing = 1;

function preload() {
  snd[0] = loadImage("./resources/mute.png");
  snd[1] = loadImage("./resources/unmute.png");
  logo = loadImage("./resources/icon_512.png");
  vfx = loadSound("./resources/185_Gravity.mp3");
}

function setup() {
  let cnv = createCanvas(300, 300);
  cnv.parent("sketch");
  background(0, 0, 0, 0);
  vfx.setVolume(0.1);
  vfx.play();
  cnv.mouseClicked(muteSound);
}

function draw() {
  clear();
  background(0, 0, 0, 0);
  imageMode(CENTER);
  image(logo, width / 2, height / 2, 256, 256);
  image(
    snd[playing],
    width - 35,
    height - 25,
    snd[playing] * 0.1,
    snd[playing] * 0.1
  );
}

var muteSound = function() {
  if (playing == 1) {
    playing = 0;
    vfx.setVolume(0);
  } else {
    playing = 1;
    vfx.setVolume(0.1);
  }
};
