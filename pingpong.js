function setup() {
	canvas = createCanvas(800,400);
	canvas.parent('canvas');

	video = createCapture(VIDEO);
	video.size(800,400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
	

}

function modelLoaded() {
	console.log('Model Loaded!');
  }

function draw() {
    image(video, 0, 0, 800, 400);
}