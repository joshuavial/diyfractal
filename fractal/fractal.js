var canvas = require('./canvas')
var changeTree = require('./changeTree')

var Fractal = function(coreAngle,anglechange,depth, lineThickness,lineLengthLimit) {
     this.coreAngle = parseInt(document.getElementById('coreAngle').value)
     this.anglechange = parseInt(document.getElementById('anglechange').value)
     this.depth = parseInt(document.getElementById('depth').value)
     this.lineThickness = parseInt(document.getElementById('lineThickness').value)
     this.lineLengthLimit = parseInt(document.getElementById('lineLengthLimit').value)
     this.fractalTotal = parseInt(document.getElementById('fractalTotal').value)
     this.duration= parseInt(document.getElementById('duration').value )
     this.fractalInterval = setInterval(function(){changeTree(coreAngle,anglechange,depth, lineThickness,lineLengthLimit)}, duration)

 }
Fractal.prototype.effects = function(){
  $(document).keydown(function(e){
   if(e.keyCode == 39){
    $('canvasx').attr(canvasx+=50)
  }
    if(e.keyCode == 37){
     $('canvasx').attr(canvasx-=50)
   }
   if(e.keyCode == 38){
     $('canvasy').attr(canvasy-=50)
   }  if(e.keyCode == 40){
     $('canvasy').attr(canvasy+=50)
   }
   if(e.keyCode == 17){
    $('depth').attr(depth+=1)
  }
  })

}

