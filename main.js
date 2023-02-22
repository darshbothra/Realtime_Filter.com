nose_x=0;
nose_y=0;

function preload(){
clownnose=loadImage('https://i.postimg.cc/qvLys6My/clown-removebg-preview.png');
}

function setup(){
canvas=createCanvas(250,250);
canvas.center();
video=createCapture(VIDEO);
video.size(250,250);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose',gotPoses);
}

function gotPoses(results){
if(results.length > 0)
{
    console.log(results);
    nose_x=results[0].pose.nose.x-50;
    nose_y=results[0].pose.nose.y-50;
    console.log("nose x= " + nose_x);
    console.log("nose y= " + nose_y ); 
}
}

function modelLoaded(){
    console.log("PoseNet is initialized");
}

function draw()
 { 
 image(video, 0, 0, 250, 250);
 image(clownnose,nose_x,nose_y,100,100);
}

function takeSnapshot(){
save('Realtime_Filter.png');
}