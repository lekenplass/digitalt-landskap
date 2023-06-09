let t = 0;
let img;
function preload() {
  img = loadImage("sopp.jpg");
}
function setup() {

  canvas=createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index','-1')
  
  

}

function draw() {

  background(0, 255, 0);



  let tw = 50; //tile width
  let th = 50; //tile height
  beginShape();
  for (let x = 0; x < canvas.width; x += tw) {
    for (let y = 0; y < canvas.height; y += tw) {
      let nw = map(noise(x, y, t), 0, 1, 0, tw);
      let nh = map(noise(x, y, t), 0, 1, 0, th);

      image(img, x, y, tw, th, x, y, nw + tw, nh + th);
    }
    endShape();
    t += 0.0002;
    imageMode(CENTER)
  }
}

function mousePressed() {
  let fs = fullscreen();
  fullscreen(!fs);
    img.resize(displayWidth,displayHeight);
  
  
}


/* full screening will change the size of the canvas */
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

/* prevents the mobile browser from processing some default
 * touch events, like swiping left for "back" or scrolling the page.
 */
document.ontouchmove = function (event) {
  event.preventDefault();
};
