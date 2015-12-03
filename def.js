function showSource(_x, _y) {
  this.x = _x + 12;
  this.y = _y + 540;

  // create dom elements for source links
  source = select('#source');
  dronestream = select('#dronestream');
  intercept = select('#intercept');
  bij = select('#bij');
  fp = select('#fp');
  dronewars = select('#dronewars');
  book = select('#book');
  killchain = select('#killchain');
  ianmacky = select('#ianmacky');

  source.position(this.x + 10, this.y - 1);
  dronestream.position(this.x + 67, this.y + 15);
  intercept.position(this.x + 157, this.y + 15);
  bij.position(this.x + 251, this.y + 15);
  fp.position(this.x + 510, this.y + 15);
  dronewars.position(this.x + 610, this.y + 15);
  book.position(this.x + 709, this.y + 15);
  killchain.position(this.x + 67, this.y + 37);
  ianmacky.position(this.x+209,this.y+37);
}

function showIntro(_x, _y) {
  this.x = _x;
  this.y = _y;

  title = select('#title');
  title.position(this.x + 20, this.y - 145);

  subtitle = select('#subtitle');
  subtitle.position(this.x + 20, this.y - 105);

  zoom = select('#zoom');
  zoom.position(this.x + 20, this.y - 55);

  // let people go back to timeline
  backButton = createButton("Go back to timeline");
  backButton.position(this.x + 20, 675);
  backButton.style("font-family", "Roboto");
  backButton.style("font-size", "12pt");
  backButton.mousePressed(goBack);
}

function loadText() {
  var x = 930;
  var y = 145;

  //usa
  DC.text = select('#DC');
  DC.text.position(x, y);
  DC.text.hide();

  FL.text = select('#FL');
  FL.text.position(x, y);
  FL.text.hide();

  hTX.text = select('#hTX');
  hTX.text.position(x, y);
  hTX.text.hide();

  sTX.text = select('#sTX');
  sTX.text.position(x, y);
  sTX.text.hide();

  NV.text = select('#NV')
  NV.text.position(x, y);
  NV.text.hide();

  //midEast/Africa drones
  So.text = select('#Somalia');
  So.text.position(x, y);
  So.text.hide();

  Ye.text = select('#Yemen');
  Ye.text.position(x, y);
  Ye.text.hide();

  Pa.text = select('#Pakistan');
  Pa.text.position(x, y);
  Pa.text.hide();

  Af.text = select('#Afghanistan');
  Af.text.position(x, y);
  Af.text.hide();

  Iq.text = select('#Iraq');
  Iq.text.position(x, y);
  Iq.text.hide();

  Ir.text = select('#Iran');
  Ir.text.position(x, y);
  Ir.text.hide();

  Bo.text = select('#Bosnia');
  Bo.text.position(x, y);
  Bo.text.hide();

  //midEast/Africa bases
  DJ.text = select('#DJ');
  DJ.text.position(x, y);
  DJ.text.hide();

  bEth.text = select('#bEth');
  bEth.text.position(x, y);
  bEth.text.hide();

  bYemen.text = select('#bYemen');
  bYemen.text.position(x, y);
  bYemen.text.hide();

  bUAE.text = select('#bUAE');
  bUAE.text.position(x, y);
  bUAE.text.hide();

  bQatar.text = select('#bQatar');
  bQatar.text.position(x, y);
  bQatar.text.hide();

  bAfgh.text = select('#bAfgh');
  bAfgh.text.position(x, y);
  bAfgh.text.hide();

  bTurk.text = select('#bTurk');
  bTurk.text.position(x, y);
  bTurk.text.hide();

  bMor.text = select('#bMor');
  bMor.text.position(x, y);
  bMor.text.hide();

  bItaly.text = select('#bItaly');
  bItaly.text.position(x, y);
  bItaly.text.hide();

  // world
  worldSurvDrone.text = select('#world');
  worldSurvDrone.text.position(x, y);
  worldSurvDrone.text.hide();

  worldArmedDrone.text = select('#world');
  worldArmedDrone.text.position(x, y);
  worldArmedDrone.text.hide();

  DCantenna.text = select('#world');
  DCantenna.text.position(x, y);
  DCantenna.text.hide();

  NVantenna.text = select('#world');
  NVantenna.text.position(x, y);
  NVantenna.text.hide();

  RGantenna.text = select('#Germany');
  RGantenna.text.position(x, y);
  RGantenna.text.hide();

  keytext = select('#drones');
  keytext.position(x, y);
  keytext.hide();
}

// green signals showing information flow
function infoFlow(_startX, _startY, _endX, _dir, slopeX, slopeY) {
  this.x = _startX;
  this.y = _startY;
  this.end = _endX;
  this.dir = _dir;
  this.sx = slopeX;
  this.sy = slopeY;

  this.isDone = false;

  this.update = function() {
    if (this.dir < 0) {
      if (this.x > this.end) {
        this.x += (this.sx) * this.dir;
        this.y += (this.sy) * this.dir;
      } else {
        this.isDone = true;
      }
    } else if (this.dir > 0) {
      if (this.x < this.end) {
        this.x += (this.sx) * this.dir;
        this.y += (this.sy) * this.dir;
      } else {
        this.isDone = true;
      }
    }
  }

  this.display = function() {
    strokeWeight(1);
    noFill();
    stroke(76, 277, 0, 255);
    // somalia to djibouti, afghan base to afghan drone
    if (this.sy == -.16 || this.sy == -.35 || this.sy == -2 || this.sy == -1) {
      arc(this.x, this.y, 20, 20, 100, 200);
    } else {
      arc(this.x, this.y, 20, 20, 350, 90);
    }
  }
}

function worldDisplay() {
  displayMap(world);
  stroke(255);
  noFill();

  // create rectangles for zooming - maybe create buttons instead
  rect(5, 25, 290, 180);
  rect(375, 85, 340, 196);

  // surveillance drone info stuff
  survDrone(worldSurvDrone.x, worldSurvDrone.y); //around Yemen
  armedDrone(worldArmedDrone.x, worldArmedDrone.y); //around Pakistan
  antenna(DCantenna.x, DCantenna.y); //around DC
  antenna(NVantenna.x, NVantenna.y); //around NV
  antenna(RGantenna.x, RGantenna.y); //around Ramstein, Germany

  //surveillance info from midEast/Africa drone
  if (frameCount % 30 == 0) {
    infos1.push(new infoFlow(572, 180, RGantenna.x, -1, 2, 1.6));
  }

  for (var i = infos1.length - 1; i >= 0; i--) {
    infos1[i].display();
    infos1[i].update();

    if (infos1[i].isDone) {
      infos1.splice(i, 1);
    }
  }

  //info from germany to US
  if (frameCount % 30 == 0) {
    infos2.push(new infoFlow(RGantenna.x, RGantenna.y, NVantenna.x, -1, 2, -.35));
  }

  for (var i = infos2.length - 1; i >= 0; i--) {
    infos2[i].display();
    infos2[i].update();

    if (infos2[i].isDone) {
      infos2.splice(i, 1);
    }
  }

  //drone control from US to midEast/norAfrica
  if (frameCount % 30 == 0) {
    infos3.push(new infoFlow(52, 100, 618, 1, 2, .1));
  }

  for (var i = infos3.length - 1; i >= 0; i--) {
    infos3[i].display();
    infos3[i].update();

    if (infos3[i].isDone) {
      infos3.splice(i, 1);
    }
  }

  // draw key
  mapkey(690, 325);

  if (frameCount % 20 == 0) {
    key_infos.push(new infoFlow(860, 380, 790, -1, 2, .8));
  }

  for (var i = key_infos.length - 1; i >= 0; i--) {
    key_infos[i].display();
    key_infos[i].update();

    if (key_infos[i].isDone) {
      key_infos.splice(i, 1);
    }
  }
}

function usaDisplay() {
  displayMap(USA);

  // mark cities
  antenna(VA.x, VA.y - 21); // langley, VA
  antenna(DC.x, DC.y - 25); // washington, DC
  antenna(FL.x, FL.y - 25); // hulburt field, FL
  antenna(hTX.x, hTX.y - 25); // houston, TX
  antenna(sTX.x, sTX.y - 25); //san antonio, TX
  antenna(NV.x, NV.y - 25); // indian springs, county, NV

  // Analysis from Fl to NV
  if (frameCount % 20 == 0) {
    usa_infos1.push(new infoFlow(FL.x, FL.y, NV.x, -1, 2, .66));
  }

  for (var i = usa_infos1.length - 1; i >= 0; i--) {
    usa_infos1[i].display();
    usa_infos1[i].update();

    if (usa_infos1[i].isDone) {
      usa_infos1.splice(i, 1);
    }
  }

  //tactical info from operators in NV to DC/Langley
  if (frameCount % 20 == 0) {
    usa_infos2.push(new infoFlow(NV.x, NV.y, DC.x, 1, 2, -.16));
  }

  for (var i = usa_infos2.length - 1; i >= 0; i--) {
    usa_infos2[i].display();
    usa_infos2[i].update();

    if (usa_infos2[i].isDone) {
      usa_infos2.splice(i, 1);
    }
  }

  // communications from NV to Houston, TX
  if (frameCount % 20 == 0) {
    usa_infos3.push(new infoFlow(NV.x, NV.y, hTX.x, 1, 2, .9));
  }

  for (var i = usa_infos3.length - 1; i >= 0; i--) {
    usa_infos3[i].display();
    usa_infos3[i].update();

    if (usa_infos3[i].isDone) {
      usa_infos3.splice(i, 1);
    }
  }

  // from offscreen //
  // infos4 to DC
  if (frameCount % 20 == 0) {
    usa_infos4.push(new infoFlow(900, 300, DC.x, -1, 2, .35));
  }

  for (var i = usa_infos4.length - 1; i >= 0; i--) {
    usa_infos4[i].display();
    usa_infos4[i].update();

    if (usa_infos4[i].isDone) {
      usa_infos4.splice(i, 1);
    }
  }

  //infos5 to FL
  if (frameCount % 20 == 0) {
    usa_infos5.push(new infoFlow(900, 300, FL.x, -1, 2, -.1));
  }

  for (var i = usa_infos5.length - 1; i >= 0; i--) {
    usa_infos5[i].display();
    usa_infos5[i].update();

    if (usa_infos5[i].isDone) {
      usa_infos5.splice(i, 1);
    }
  }

  // infos6 to San Antonio
  if (frameCount % 20 == 0) {
    usa_infos6.push(new infoFlow(900, 300, sTX.x, -1, 2, -.12));
  }

  for (var i = usa_infos6.length - 1; i >= 0; i--) {
    usa_infos6[i].display();
    usa_infos6[i].update();

    if (usa_infos6[i].isDone) {
      usa_infos6.splice(i, 1);
    }
  }

  // draw key
  mapkey(690, 25);

  if (frameCount % 20 == 0) {
    key_infos.push(new infoFlow(860, 80, 790, -1, 2, .8));
  }

  for (var i = key_infos.length - 1; i >= 0; i--) {
    key_infos[i].display();
    key_infos[i].update();

    //remove the old particles
    if (key_infos[i].isDone) {
      key_infos.splice(i, 1);
    }
  }
}

function midEastDisplay() {
  //image
  displayMap(midEast);

  //Bases
  antenna(DJ.x, DJ.y - 25); //Djibouti
  antenna(DJ.x, DJ.y - 25); //Djibouti
  antenna(bEth.x, bEth.y); //Arba Minch, Ethiopia
  antenna(bYemen.x, bYemen.y); //Al-Anad Air Base, Yemen
  antenna(bUAE.x, bUAE.y); //Al-Dhafra Air Base, United Arab Emirates
  antenna(bQatar.x, bQatar.y); //Al-Udeid Air Base, Qatar
  antenna(bAfgh.x, bAfgh.y); //Jalalabad Airfield, Afghanistan
  antenna(bTurk.x, bTurk.y); //Incirlik, Turkey
  antenna(bMor.x, bMor.y); //apprx. morocco from intercept
  antenna(bItaly.x, bItaly.y); ///apprx. north africa from intercept

  // Drones
  armedDrone(So.x, So.y); //Somalia 
  armedDrone(Ye.x, Ye.y); //Yemen
  armedDrone(Pa.x, Pa.y); //Pakistan
  armedDrone(Af.x, Af.y); //Afghanistan
  armedDrone(Iq.x, Iq.y); //Iraq
  survDrone(Ir.x, Ir.y); //Iran
  survDrone(Bo.x, Bo.y); //Bosnia

  // Iran drone to German air base (offscreen)
  if (frameCount % 20 == 0) {
    Ir_infos.push(new infoFlow(Ir.x, Ir.y, Ir.x - 350, -1, 2, .8));
  }

  for (var i = Ir_infos.length - 1; i >= 0; i--) {
    Ir_infos[i].display();
    Ir_infos[i].update();

    if (Ir_infos[i].isDone) {
      Ir_infos.splice(i, 1);
    }
  }

  // Djibouti to Yemen drone
  if (frameCount % 20 == 0) {
    Ye_infos.push(new infoFlow(DJ.x, DJ.y, Ye.x, 1, 2, -2));
  }

  for (var i = Ye_infos.length - 1; i >= 0; i--) {
    Ye_infos[i].display();
    Ye_infos[i].update();

    if (Ye_infos[i].isDone) {
      Ye_infos.splice(i, 1);
    }
  }

  // Somalia drone to Djibouti
  if (frameCount % 20 == 0) {
    So_infos.push(new infoFlow(So.x, So.y, DJ.x, -1, 1, 6));
  }

  for (var i = So_infos.length - 1; i >= 0; i--) {
    So_infos[i].display();
    So_infos[i].update();

    if (So_infos[i].isDone) {
      So_infos.splice(i, 1);
    }
  }

  // Pakistan drone to Afghan base
  if (frameCount % 20 == 0) {
    Pa_infos.push(new infoFlow(Pa.x, Pa.y, Pa.x - 500, -1, 2, .8));
  }

  for (var i = Pa_infos.length - 1; i >= 0; i--) {
    Pa_infos[i].display();
    Pa_infos[i].update();

    if (Pa_infos[i].isDone) {
      Pa_infos.splice(i, 1);
    }
  }

  //Afghan base to Afghan drone
  if (frameCount % 20 == 0) {
    Af_infos.push(new infoFlow(bAfgh.x, bAfgh.y, Af.x, -1, 2, -1));
  }

  for (var i = Af_infos.length - 1; i >= 0; i--) {
    Af_infos[i].display();
    Af_infos[i].update();

    if (Af_infos[i].isDone) {
      Af_infos.splice(i, 1);
    }
  }

  //Turkey base to Iraq drone
  if (frameCount % 20 == 0) {
    Iq_infos.push(new infoFlow(bTurk.x, bTurk.y, Iq.x, 1, 2, .8));
  }

  for (var i = Iq_infos.length - 1; i >= 0; i--) {
    Iq_infos[i].display();
    Iq_infos[i].update();

    if (Iq_infos[i].isDone) {
      Iq_infos.splice(i, 1);
    }
  }

  // bases
  //Germany base to Afghan base
  if (frameCount % 25 == 0) {
    Iq_infos.push(new infoFlow(bAfgh.x - 400, 0, bAfgh.x, 1, 2, .4));
  }

  for (var i = Iq_infos.length - 1; i >= 0; i--) {
    Iq_infos[i].display();
    Iq_infos[i].update();

    if (Iq_infos[i].isDone) {
      Iq_infos.splice(i, 1);
    }
  }

  //Djibouti base to German base
  if (frameCount % 25 == 0) {
    DJ_infos.push(new infoFlow(DJ.x, DJ.y, DJ.x - 400, -1, 2, 2));
  }

  for (var i = DJ_infos.length - 1; i >= 0; i--) {
    DJ_infos[i].display();
    DJ_infos[i].update();

    if (DJ_infos[i].isDone) {
      DJ_infos.splice(i, 1);
    }
  }


  // draw key
  mapkey(690, 325);

  if (frameCount % 20 == 0) {
    key_infos.push(new infoFlow(860, 380, 790, -1, 2, .8));
  }

  for (var i = key_infos.length - 1; i >= 0; i--) {
    key_infos[i].display();
    key_infos[i].update();

    if (key_infos[i].isDone) {
      key_infos.splice(i, 1);
    }
  }
}

// zoom in/out
function mouseClicked() {
  //click to display USA info
  if (clicked == false && mouseX > 5 && mouseX < 295 && mouseY > 25 && mouseY < 205) {

    //map image
    displayMap(USA);

    // mark cities
    antenna(DC.x, DC.y - 25); // washington, DC
    antenna(FL.x, FL.y - 25); // hulburt field, FL
    antenna(hTX.x, hTX.y - 25); // houston, TX
    antenna(sTX.x, sTX.y - 25); // san antonio, TX
    antenna(NV.x, NV.y - 25); // indian springs, NV

    // reset vars/html text
    clicked = true;
    usa_flag = true;
    zoom.html("Click to zoom out | Mouse over to view text");

    //click to display midEast image
  } else if (clicked == false && mouseX > 375 && mouseX < 715 && mouseY > 85 && mouseY < 281) {
    //map image
    displayMap(midEast);

    //mark bases
    antenna(DJ.x, DJ.y - 25); //Djibouti
    antenna(bEth.x, bEth.y); //Arba Minch, Ethiopia
    antenna(bYemen.x, bYemen.y); //Al-Anad Air Base, Yemen
    antenna(bUAE.x, bUAE.y); //Al-Dhafra Air Base, United Arab Emirates
    antenna(bQatar.x, bQatar.y); //Al-Udeid Air Base, Qatar
    antenna(bAfgh.x, bAfgh.y); //Jalalabad Airfield, Afghanistan
    antenna(bTurk.x, bTurk.y); //Incirlik, Turkey
    antenna(bMor.x, bMor.y); //morocco from intercept
    antenna(bItaly.x, bItaly.y); ///north africa from intercept

    //reset vars/html text
    clicked = true;
    midEast_flag = true;
    zoom.html("Click to zoom out | Mouse over to view text");

  } else {

    displayMap(world);
    stroke(255);
    noFill();

    //clickable areas
    rect(120, 75, 220, 120);
    rect(490, 145, 220, 120);

    //reset vars/html text
    clicked = false;
    midEast_flag = false;
    usa_flag = false;
    zoom.html("Click on a region to zoom | Mouse over to view text");
  }
}

// display map
function displayMap(img) {
  this.x = xpos;
  this.y = ypos;
  image(img, this.x, this.y);
}

// surveillance drone
function survDrone(_x, _y) {
  this.x = _x;
  this.y = _y;

  stroke(255);
  fill(0);
  quad(this.x - 15, this.y + 25, this.x - 5, this.y + 25, this.x - 17, this.y + 42, this.x - 21, this.y + 42);
  quad(this.x + 5, this.y + 25, this.x + 15, this.y + 25, this.x + 22, this.y + 42, this.x + 19, this.y + 42);
  quad(this.x, this.y, this.x + 15, this.y + 25, this.x, this.y + 42, this.x - 15, this.y + 25);
}

// armed drone
function armedDrone(_x, _y) {
  this.x = _x;
  this.y = _y;

  stroke(255);
  fill(0);
  quad(this.x, this.y - 2, this.x + 25, this.y - 2, this.x + 25, this.y, this.x, this.y + 4);
  quad(this.x, this.y + 15, this.x + 15, this.y + 15, this.x + 15, this.y + 17, this.x, this.y + 19);
  quad(this.x, this.y - 2, this.x - 25, this.y - 2, this.x - 25, this.y, this.x, this.y + 4);
  quad(this.x, this.y + 15, this.x - 15, this.y + 15, this.x - 15, this.y + 17, this.x, this.y + 19);
  ellipse(this.x, this.y, 8, 60);
}

//antenna
function antenna(_x, _y) {
  this.x = _x;
  this.y = _y;

  stroke(255);
  fill(0);
  strokeWeight(2);
  line(this.x, this.y, this.x, this.y + 25);
  strokeWeight(1);
  ellipse(this.x, this.y, 6, 6);
}

function mapkey(_mapx, _mapy) {
  this.x = _mapx;
  this.y = _mapy;

  //outline
  stroke(0);
  strokeWeight(2);
  fill(140);
  rect(this.x, this.y, 190, 162);
  strokeWeight(1);
  stroke(255);
  line(this.x + 93, this.y + 1, this.x + 93, this.y + 160);

  //text
  textSize(12);
  strokeWeight(1);
  fill(0);
  stroke(0);
  text("Drone Activity", this.x + 8, this.y + 15);
  text("Unarmed", this.x + 15, this.y + 77);
  text("Armed", this.x + 22, this.y + 155);
  text("Information", this.x + 110, this.y + 15);
  text("Directional flow", this.x + 102, this.y + 77);
  text("Transmission", this.x + 107, this.y + 141);
  text("or receipt", this.x + 107, this.y + 155);

  //figures
  armedDrone(this.x + 40, this.y + 112);
  survDrone(this.x, this.y - 90);
  antenna(this.x + 97, this.y + 75);
}

function hideAll() {
  worldSurvDrone.text.hide();
  worldArmedDrone.text.hide();
  DCantenna.text.hide();
  NVantenna.text.hide();
  RGantenna.text.hide();
  DC.text.hide();
  FL.text.hide();
  hTX.text.hide();
  sTX.text.hide();
  NV.text.hide();
  So.text.hide();
  Ye.text.hide();
  Pa.text.hide();
  Af.text.hide();
  Iq.text.hide();
  Ir.text.hide();
  Bo.text.hide();
  DJ.text.hide();
  bEth.text.hide();
  bYemen.text.hide();
  bUAE.text.hide();
  bQatar.text.hide();
  bAfgh.text.hide();
  bTurk.text.hide();
  bMor.text.hide();
  bItaly.text.hide();
  keytext.hide();
}

function goBack() {
  window.location = "http://www.itp.jasminesoltani.com/ICM/F3EA_intro/";
}