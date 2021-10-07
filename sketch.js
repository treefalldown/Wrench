//draw a spinning wrench
let wrench;

function preload() {
  // Load model with normalise parameter set to true
  wrench = loadModel('wrench.obj', true);
}

function setup() {
  createCanvas(500, 500, WEBGL);
}

function draw() {
  background(200);
  scale(1.8); // Scaled to make model fit into canvas
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  normalMaterial(); // For effect
  model(wrench);
}
