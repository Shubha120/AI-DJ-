song="";
song1="";
song_status="";
song1_status="";

function preload(){
    song = loadSound("music.mp3");
    song1 = loadSound("music2.mp3");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.position(420,250);

    video = createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("Posenet is intialized");
}
function gotPoses(results){

    console.log(results);
    leftwristX = results[0].pose.leftWrist.x;
    leftwristY = results[0].pose.leftWrist.y;

     
    rightwristX = results[0].pose.rightWrist.x;
    rightwristY = results[0].pose.righttWrist.y;
    console.log("rightwristX = "+ rightwristX+ "rightwristY = "+ rightwristY+ "leftwristX = "+ leftwristX+ "leftwristY = "+ leftwristY );
    
}

function draw(){
    image(video, 0,0, 600,500);

song_status=song.isPlaying();
song1_status=song1.isPlaying();

fill("blue");
stroke("blue");
circle(rightwristX,rightwristY,20);
 if(song_status == false){
     song.play();
     document.getElementById("song").innerHTML="Playing Harry Potter Theme Song";
 }


 
  
}