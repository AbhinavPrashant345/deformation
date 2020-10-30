var car1,car2,car3,car4;
var wall1,wall2,wall3,wall4;
var speed,weight;

function setup() {
createCanvas(800,450);
speed = random(55,90);
weight = random(400,1500);
speed1 = random(55,90);
weight1 = random(400,1500);
speed2 = random(55,90);
weight2 = random(400,1500);
speed3 = random(55,90);
weight3 = random(400,1500);

car1 =  createSprite(40,40,50,50);
car2 =  createSprite(40,150,50,50);
car3 =  createSprite(40,260,50,50);
car4 = createSprite(40,370,50,50);
wall1 = createSprite(760,370,10,80);
wall2 = createSprite(760,260,10,80);
wall3 = createSprite(760,150,10,80);
wall4 = createSprite(760,40,10,80);

car1.shapeColor = "white"
car2.shapeColor = "white"
car3.shapeColor = "white"
car4.shapeColor = "white"
car1.velocityX = speed;

}

function draw() {
  background("black");  
  
  
  rectMode(CENTER); 
  
  rect(400,95,800,10)
  rect(400,205,800,10)
  rect(400,315,800,10)
  rect(400,425,800,10)
  
  if(wall4.x-car1.x<(car1.width+wall4.width)/2){
   car1.velocityX = 0
   car1.x = 740;
    var deformation = 0.5 * weight * speed * speed / 22509;
    if(deformation>180){
      car1.shapeColor = color(255,0,0)
    
      } 
      if(deformation<180&&deformation>100){
        car1.shapeColor = color(230,230,0)
      
        } 
        if(deformation<100){
          car1.shapeColor = color(0,255,0)
        
          } 
          
          car2.velocityX = speed;
}
if(wall3.x-car2.x<(car2.width+wall3.width)/2){
  car2.velocityX = 0
  car2.x = 740;
   var deformation = 0.5 * weight1 * speed1 * speed1 / 22509;
   if(deformation>180){
     car2.shapeColor = color(255,0,0)
   
     } 
     if(deformation<180&&deformation>100){
       car2.shapeColor = color(230,230,0)
     
       } 
       if(deformation<100){
         car2.shapeColor = color(0,255,0)
       
         }  
  car3.velocityX = speed;
        }
        if(wall2.x-car3.x<(car3.width+wall2.width)/2){
          car3.velocityX = 0
          car3.x = 740;
           var deformation = 0.5 * weight2 * speed2 * speed2 / 22509;
           if(deformation>180){
             car3.shapeColor = color(255,0,0)
           
             } 
             if(deformation<180&&deformation>100){
               car3.shapeColor = color(230,230,0)
             
               } 
               if(deformation<100){
                 car3.shapeColor = color(0,255,0)
               
                 }  
          car4.velocityX = speed;
                }
                if(wall1.x-car4.x<(car4.width+wall1.width)/2){
                  car4.velocityX = 0
                  car4.x = 740;
                   var deformation = 0.5 * weight3 * speed3 * speed3 / 22500;
                   if(deformation>180){
                     car4.shapeColor = color(255,0,0)
                   
                     } 
                     if(deformation<180&&deformation>100){
                       car4.shapeColor = color(230,230,0)
                     
                       } 
                       if(deformation<100){
                         car4.shapeColor = color(0,255,0)
                       
                         }  
                 
                        }
  
  
  drawSprites();
}
function isTouching (obj1,obj2){
if(obj1.x-obj2.x<(obj2.width+obj2.width)/2&&obj2.x-obj1.x<(obj2.width+obj2.width)) {
obj1.velocityX= 0 ;
obj2.velocityX = 0;

}


}