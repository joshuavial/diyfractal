var Controller = (function() {
  function Controller() {
   this.canvas = new canvas();
   this.changeTree = new ChangeTree();
   this.fractalInterval = setInterval(function(){changeTree(coreAngle,anglechange,depth, lineThickness,lineLengthLimit)}, duration)
   this.coreAngle = parseInt(document.getElementById('coreAngle').value)
   this.anglechange = parseInt(document.getElementById('anglechange').value)
   this.depth = parseInt(document.getElementById('depth').value)
   this.lineThickness = parseInt(document.getElementById('lineThickness').value)
   this.lineLengthLimit = parseInt(document.getElementById('lineLengthLimit').value)
   this.fractalTotal = parseInt(document.getElementById('fractalTotal').value)
   this.duration= parseInt(document.getElementById('duration').value )
   this.render();
  }
  Controller.prototype.fractalRun = function(){
      if(document.getElementById('zoom').checked){lineLength+=1;}
      else{lineLength -=1;}
      if (colorCount=== 7){colorCount=0};
      if(document.getElementById('zoom').checked) {
          if(lineLength===lineLengthLimit){lineLength= 0};
      }
        else{
          if(lineLength === 0){lineLength=lineLengthLimit};
        }
      if(fractalCount===fractalTotal){
          clearInterval(fractalInterval);
          context.fillRect(0, 0, screenWidth,screenHeight);
          Fractal(coreAngle,anglechange,depth, lineThickness,lineLengthLimit,fractalTotal,duration);
      }

  }
    Controller.prototype.effects = function(){
      $(document).keydown(function(e){
       if(e.keyCode == 39){
        $('canvasx').attr(canvasx+=50)
      }
        if(e.keyCode == 37){
        $('canvasx').attr(canvasx-=50)
      }
      if(e.keyCode == 38){
        $('canvasy').attr(canvasy-=50)
      }
      if(e.keyCode == 40){
       $('canvasy').attr(canvasy+=50)
      }
     if(e.keyCode == 17){
      $('depth').attr(depth+=1)
      }
    })
  }
    return Controller;
})()
