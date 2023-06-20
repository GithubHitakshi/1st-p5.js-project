function take_pic(){
    save("mypic.png");

}

function setup(){
    canvas=createCanvas(640,480);
    canvas.position(800,190);
    video=createCapture(VIDEO);
    video.hide();
    
}


function draw(){
image(video,0,0,640,480);

}