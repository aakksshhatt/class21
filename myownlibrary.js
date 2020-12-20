function bounceoff(b , a){
    if (b.x - a.x < a.width/2 + b.width/2
      && a.x - b.x < a.width/2 + b.width/2) {
    b.velocityX = b.velocityX * (-1);
    a.velocityX = a.velocityX * (-1);
  }
  if (b.y - a.y < a.height/2 + b.height/2
    && a.y - b.y < a.height/2 + b.height/2){
    b.velocityY = b.velocityY * (-1);
    a.velocityY = a.velocityY * (-1);
  }
  }
  function isTouching(){
    if (movingRect.x - obj1.x < obj1.width/2 + movingRect.width/2
      && obj1.x - movingRect.x < obj1.width/2 + movingRect.width/2
      && movingRect.y - obj1.y < obj1.height/2 + movingRect.height/2
      && obj1.y - movingRect.y < obj1.height/2 + movingRect.height/2) {
        return true;
      }
      else{
        return false;
      }
    
  
  }