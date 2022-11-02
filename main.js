function preload(){

}

function setup(){
    video=createCapture(VIDEO)
video.hide()
}
 function draw(){
    canvas= createCanvas(480,330)
    //for 1 side

fill(0,250,0)
stroke(0,250,0)
circle(80,40,70)

 fill(250,0,0)
stroke(250,0,0)
 rect(115,30,320,10)

 //for 2 side
 fill(0,250,0)
stroke(0,250,0)
circle(420 ,40,70)

 
//3
 fill(0,250,0)
stroke(0,250,0)
circle(80,290,70)

 fill(250,0,0)
stroke(250,0,0)

 rect(115,290,320,10)
//2


 fill(250,0,0)
stroke(250,0,0)
 rect(72,75,10,180)
//4
 fill(0,250,0)
stroke(0,250,0)
circle(420,290,70)

 fill(250,0,0)
stroke(250,0,0)
 rect(420,75,10,180)
 

 img= image(video,82,40,338,250)

 }

 function takeSnapShot(){
    save("myFavIamge.png")
 }
