// set up vars
var canvas;
var xpos;
var ypos;
var backButton;

//source links
var dronestream, intercept, book, killchain, dronewars, bij, fp, ianmacky;

//zoom indicators 
var clicked = false;
var midEast_flag;
var usa_flag;

// info flow arrays
//usa
var usa_infos1 = [];
var usa_infos2 = [];
var usa_infos3 = [];
var usa_infos4 = [];
var usa_infos5 = [];
var usa_infos6 = [];

//mideast/africa
var Ir_infos = [];
var Ye_infos = [];
var So_infos = [];
var Pa_infos = [];
var Af_infos = [];
var Iq_infos = [];
var bAfgh_infos = [];
var DJ_infos = [];

//world
var infos1 = [];
var infos2 = [];
var infos3 = [];

//all
var key_infos = [];

//pics
var world;
var USA;
var midEast;

// US - city js objects
var DC = {
  x: 540,
  y: 233,
  text: ''
};
var FL = {
  x: 425,
  y: 325,
  text: ''
};
var hTX = {
  x: 320,
  y: 310,
  text: ''
};
var sTX = {
  x: 350,
  y: 340,
  text: ''
};
var NV = {
  x: 200,
  y: 255,
  text: ''
};
var VA = {
  x: 530,
  y: 230
};

// midEast/Africa - countries js objects (drones)
var So = {
  x: 500,
  y: 440,
  text: ''
};
var Ye = {
  x: 530,
  y: 310,
  text: ''
};
var Pa = {
  x: 690,
  y: 180,
  text: ''
};
var Af = {
  x: 655,
  y: 130,
  text: ''
};
var Iq = {
  x: 475,
  y: 125,
  text: ''
};
var Ir = {
  x: 570,
  y: 125,
  text: ''
};
var Bo = {
  x: 258,
  y: 8,
  text: ''
};

//mideast/north africa bases
var DJ = {
  x: 480,
  y: 350,
  text: ''
};
var bEth = {
    x: 430,
    y: 370,
    text: ''
  } //arba minch, ethiopia
var bYemen = {
    x: 500,
    y: 300,
    text: ''
  } //Al-Anad Air Base, Yemen
var bUAE = {
    x: 580,
    y: 200,
    text: ''
  } //Al-Dhafra Air Base, United Arab Emirates
var bQatar = {
    x: 549,
    y: 187,
    text: ''
  } //Al-Udeid Air Base, Qatar
var bAfgh = {
    x: 695,
    y: 80,
    text: ''
  } //Jalalabad Airfield, Afghanistan
var bTurk = {
    x: 405,
    y: 73,
    text: ''
  } //Incirlik, Turkey
var bMor = {
    x: 68,
    y: 80,
    text: ''
  } //morocco from intercept
var bItaly = {
    x: 235,
    y: 70,
    text: ''
  } //north africa from intercept


//world - js objects
var worldSurvDrone = {
  x: 580,
  y: 180,
  text: ''
};
var worldArmedDrone = {
  x: 630,
  y: 150,
  text: ''
};
var DCantenna = {
  x: 160,
  y: 100,
  text: ''
};
var NVantenna = {
  x: 50,
  y: 100,
  text: ''
};
var RGantenna = {
  x: 437,
  y: 50,
  text: ''
};

//intro/world text
var title, subtitle, zoom, keytext;

function preload() {
  //images
  world = loadImage("assets/world_resized.png");
  USA = loadImage("assets/usa_resized.png");
  midEast = loadImage("assets/midEast_resized.png");
}

function setup() {
  angleMode(DEGREES);

  // create canvas with image of world
  canvas = createCanvas(900, 500);
  var xpos = 20;
  var ypos = (windowHeight - height) / 1.8;
  canvas.position(xpos, ypos);

  // html roll-over text 
  loadText();

  //present source relative to canvas area
  showSource(xpos, ypos);

  //show header & back button relative to canvas area
  showIntro(xpos, ypos);

  for (i = 0; i < 6; i++) {
    //world arrays
    infos1.push(new infoFlow(572, 180, RGantenna.x, -1, 2, 1.6));
    infos2.push(new infoFlow(RGantenna.x, RGantenna.y, NVantenna.x, -1, 2, -.35));
    infos3.push(new infoFlow(52, 100, 628, 1, 2, .1));

    //usa arrays
    usa_infos1.push(new infoFlow(FL.x, FL.y, NV.x, -1, 2, .66));
    usa_infos2.push(new infoFlow(NV.x, NV.y, DC.x, 1, 2, -.16));
    usa_infos3.push(new infoFlow(NV.x, NV.y, hTX.x, 1, 2, .9));
    //from offscreen
    usa_infos4.push(new infoFlow(300, 900, DC.x, -1, 2, .6));
    usa_infos5.push(new infoFlow(300, 900, FL.x, -1, 2, .13));
    usa_infos6.push(new infoFlow(300, 900, sTX.x, -1, 2, .2));

    //mideast/africa arrays
    // Iran drone to German air base (offscreen)
    Ir_infos.push(new infoFlow(Ir.x, Ir.y, Ir.x - 350, -1, 2, .8));
    Ye_infos.push(new infoFlow(DJ.x, DJ.y, Ye.x, 1, 2, -2));
    So_infos.push(new infoFlow(So.x, So.y, DJ.x, -1, 1, 6));
    Pa_infos.push(new infoFlow(Pa.x, Pa.y, Pa.x - 500, -1, 2, .8));
    Af_infos.push(new infoFlow(bAfgh.x, bAfgh.y, Af.x, -1, 2, -1));
    Iq_infos.push(new infoFlow(bTurk.x, bTurk.y, Iq.x, 1, 2, .8));
    Iq_infos.push(new infoFlow(bAfgh.x - 400, 0, bAfgh.x, 1, 2, .4));
    DJ_infos.push(new infoFlow(DJ.x, DJ.y, DJ.x - 400, -1, 2, 2));

    //for key
    key_infos.push(new infoFlow(860, 380, 790, -1, 2, .8));
  }
}

function draw() {

  // click out of zoom, or default
  if (clicked == false) {
    //image
    worldDisplay();

    // explain infoFlow when you mouseOver
    if (dist(mouseX, mouseY, worldSurvDrone.x, worldSurvDrone.y) < 40) { //gen explanation
      worldSurvDrone.text.show();
    } else if (dist(mouseX, mouseY, worldArmedDrone.x, worldArmedDrone.y) < 40) { //gen explanation
      worldArmedDrone.text.show();
    } else if (dist(mouseX, mouseY, DCantenna.x, DCantenna.y) < 40) { //gen explanation
      DCantenna.text.show();
    } else if (dist(mouseX, mouseY, NVantenna.x, NVantenna.y) < 40) { //gen explanation
      NVantenna.text.show();
    } else if (dist(mouseX, mouseY, RGantenna.x, RGantenna.y) < 50) { //Ramstein base
      RGantenna.text.show();
    } else if (mouseX > 690 && mouseX < 880 && mouseY > 325 && mouseY < 487) { //key
      keytext.show();
    } else {
      hideAll();
    }
  }

  // click USA
  if (clicked == true && usa_flag == true) {
    //image
    usaDisplay();

    // mouse over
    strokeWeight(0.2);
    if (dist(mouseX, mouseY, DC.x, DC.y - 10) < 25) { // washington, DC
      DC.text.show();
    } else if (dist(mouseX, mouseY, FL.x, FL.y - 10) < 25) { // hulburt field, FL
      FL.text.show();
    } else if (dist(mouseX, mouseY, hTX.x, hTX.y - 10) < 12) { // houston, TX
      hTX.text.show();
    } else if (dist(mouseX, mouseY, sTX.x, sTX.y - 10) < 12) { // san antonio, TX
      sTX.text.show();
    } else if (dist(mouseX, mouseY, NV.x, NV.y - 10) < 25) { // indian springs, NV
      NV.text.show();
    } else if (mouseX > 690 && mouseX < 880 && mouseY > 25 && mouseY < 187) { //key
      keytext.show();
    } else {
      hideAll();
    }
  } //end usa piece

  //midEast piece
  if (clicked == true && midEast_flag == true) {
    //image
    midEastDisplay();

    //mouseOver stuff
    if (dist(mouseX, mouseY, So.x, So.y + 10) < 20) { //Somalia
      So.text.show();
    } else if (dist(mouseX, mouseY, Ye.x + 5, Ye.y + 10) < 15) { //Yemen
      Ye.text.show();
    } else if (dist(mouseX, mouseY, Pa.x, Pa.y + 10) < 20) { //Pakistan
      Pa.text.show();
    } else if (dist(mouseX, mouseY, Af.x + 5, Af.y) < 20) { //Afghanistan
      Af.text.show(dist());
    } else if (dist(mouseX, mouseY, Iq.x, Iq.y + 10) < 20) { //Iraq
      Iq.text.show();
    } else if (dist(mouseX, mouseY, Ir.x, Ir.y + 10) < 20) { //Iran
      Ir.text.show();
    } else if (dist(mouseX, mouseY, Bo.x, Bo.y + 10) < 20) { //Bosnia
      Bo.text.show();
    } else if (dist(mouseX, mouseY, DJ.x, DJ.y) < 20) { //Djibouti base
      DJ.text.show();
    } else if (dist(mouseX, mouseY, bEth.x, bEth.y + 10) < 20) { //Ethiopia base
      bEth.text.show();
    } else if (dist(mouseX, mouseY, bYemen.x - 5, bYemen.y + 10) < 15) { //Yemen base
      bYemen.text.show();
    } else if (dist(mouseX, mouseY, bUAE.x, bUAE.y + 10) < 10) { //UAE base
      bUAE.text.show();
    } else if (dist(mouseX, mouseY, bQatar.x, bQatar.y + 10) < 10) { //Qatar base
      bQatar.text.show();
    } else if (dist(mouseX, mouseY, bAfgh.x, bAfgh.y + 10) < 20) { //Afghan base
      bAfgh.text.show();
    } else if (dist(mouseX, mouseY, bTurk.x, bTurk.y + 10) < 20) { //Turkey base
      bTurk.text.show();
    } else if (dist(mouseX, mouseY, bMor.x, bMor.y + 10) < 20) { //apprx. Morocco base
      bMor.text.show();
    } else if (dist(mouseX, mouseY, bItaly.x, bItaly.y + 10) < 20) { //apprx. Italy base
      bItaly.text.show();
    } else if (mouseX > 690 && mouseX < 880 && mouseY > 325 && mouseY < 487) { //key
      keytext.show();
    } else {
      hideAll();
    }
  }
} // end draw paren