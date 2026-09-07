/* DM3008 Generative Art, Cheng Ziren Alex 2026
 * Week 4 - Waves & Distribution
 * Wave Composition B
*/

var magnify = 300; // how much to magnify the wave function
var rotation = 0; // how much to rotate the wave
var radius = 0; // how far the wave extends
var elements = 256; // how many points to draw

function setup() {
  createCanvas(800, 800);
}
 
function draw() {
  background(0); // set background color to black
  elements = 10; // speed up the animation by reducing the number of elements drawn
  // how far the wave extends, based on the cosine of the frame count
  radius = (cos(frameCount * 0.005) + 2) 
  * 1; // speed up the animation by increasing the multiplier
  // how much to rotate the wave, based on the sine of the frame count
  rotation = (sin(frameCount * 0.0001) + 1) 
  * 1; // speed up the animation by increasing the multiplier
  
  var spacing = TWO_PI / elements; // how far apart each 'node' will be
  // translate the whole sketch to the centre of the screen
  translate(width * 0.5, height * 0.5);
  // set the fill color to a random color
  fill(random(0, 255), random(0, 255), random(0, 255));
  stroke(0,0,0)// set the stroke color to black
  beginShape(); // start drawing the shape
  
  // loop through each element and calculate its position
  for (var i = 0; i < 256; i++) 
    // keep adding i until it reaches 256, which is the number of elements to draw
     {
      // create a vector at the origin
      var p = createVector(0,0);
      // add a vector to the point based on the sine of the spacing, radius, and magnify
      p.add(sin(spacing * i * radius) * magnify, 0);
      // rotate the point based on the spacing, rotation, and index
      p.rotate(spacing * i * rotation);
      vertex(p.x, p.y); // add the point to the shape
  }
  
  endShape(); // finish drawing the shape
}