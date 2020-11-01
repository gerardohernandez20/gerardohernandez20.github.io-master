var distances = [];
var maxDistance;
var spacer;

function setup() {
  createCanvas(800, 600);
  maxDistance = dist(width/2, height/2, width, height);
  for (var x = 0; x < width; x++) {
    distances[x] = []; // create nested array
   
    for (var y = 0; y < height; y++) {
      var distance = dist(width/2, height/2, x, y);
      distances[x][y] = distance/maxDistance * 255;
       
    }
    
  } 
  spacer = 10;
  noLoop();  // Run once and stop
}

function draw() {
  background(0);
  fill(255,0,0);
   ellipse(252, 144, 200, 172);
  quad(489, 128, 756, 788, 416, 160, 20, 260);
  arc(479, 300, 280, 280, PI, TWO_PI);
  // This embedded loop skips over values in the arrays based on
  // the spacer variable, so there are more values in the array
  // than are drawn here. Change the value of the spacer variable
  // to change the density of the points
  for (var x = 0; x < width; x += spacer) {
    for (var y = 0; y < height; y += spacer) {
      stroke(distances[x][y]);
      point(x + spacer/2, y + spacer/2);
    }
  }
}
