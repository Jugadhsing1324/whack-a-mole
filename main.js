nose_x=0;
nose_y=0

function setup(){
    img=loadImage("https://c.tenor.com/M0k61sHYYCwAAAAi/hammer-break.gif");
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,450);
    canvas.position(560,100);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    //image
    fill('darkblue');
    stroke('lightpink');
    image(img,nose_x,nose_y);
}

function modelLoaded(){
    console.log('Done Done Done!!');
}

function gotPoses(results){
    if(results.length>0)
{
     console.log(results);
     nose_x=results[0].pose.nose.x;
    nose_y=results[0].pose.nose.y;
    console.log("nose_x="+nose_x);
    console.log("nose_y="+nose_y);
}
}