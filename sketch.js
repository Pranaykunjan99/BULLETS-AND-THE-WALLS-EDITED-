var bullet ,wall;
var speed,weight;
var thickness;
var bulletRightEdge,bulletLeftEdge;


function setup(){
    createCanvas(1600,400);
    speed = random(223,321)
    weight= random(30,52)
    bullet = createSprite(50,200,50,50)
    wall=createSprite(1200,200,thickness,200)
    thickness=random(22,83)

}
function draw(){
    
    background("white")
    wall.shapeColor=color(80,80,80)
    bullet.velocityX=speed;
    if(hascollided(bullet,wall))
{
    bullet.velocityX= 0;
     damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10)
    {
        wall.shapeColor=color(255,0,0)
    }


if(damage<10)
{
    wall.shapeColor=color(0,255,0)
}
}
drawSprites();
}
function hascollided (bullet,wall){

    bulletRightEdge=bullet.x+bullet.width;
    wallLeftEdge=wall.x
    if(bulletRightEdge>=wallLeftEdge)
    {
        return true
    }
    else{
    return false
}
}


