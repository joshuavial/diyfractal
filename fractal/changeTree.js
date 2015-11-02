var canvas = require('./canvas')
var contoller = require('./controller')

var Changetree = (function() {
  function Changetree(coreAngle,anglechange,depth, lineThickness,lineLengthLimit){
    this.coreAngle = coreAngle;
    this.anglechange = anglechange;
    this.depth = depth;
    this.lineThickness = lineThickness;
    this.lineLengthLimit = lineLengthLimit;
    this.canvasx = Math.floor((Math.random() * (screenWidth*.5 -200)) + 400);
    this.canvasy = Math.floor((Math.random() * (screenHeight*.5 -200)) + 400);
    this.deg_to_rad = Math.PI / coreAngle ;
    this.fractalCount = 0;
    this.angle = 0;
    this.colors1 =[getRandomColor(6),getRandomColor(2),getRandomColor(2),getRandomColor(2)]
    this.colorCount= 0;
}
  Changetree.prototype.beginDraw = function(){
        context.beginPath();
        drawBranch(canvasx, canvasy, angle, depth);
        context.closePath();
        context.stroke();
        angle-=anglechange;
        colorCount +=1;
        depth+=1;
        fractalCount++;
  }
  Changetree.prototype.drawTrunk = function (x1,y1,x2,y2){
      context.moveTo(x1, y1);
      context.lineTo(x2, y2);
  }
  Changetree.prototype.drawBranch = function(x1,y1, angle, depth){
        context.strokeStyle = colors1[colorCount];
        context.lineWidth = lineThickness;
          if (depth !== 0){
             var x2 = x1 + (Math.cos(angle * deg_to_rad) * depth * lineLength );
             var y2 = y1 + (Math.sin(angle * deg_to_rad) * depth * lineLength );
               drawTrunk(x1, y1, x2, y2, depth);
               drawBranch(x2, y2, angle - 40, depth - 1);
               drawBranch(x2, y2, angle + 40, depth - 1);
            }
    }
  Changetree.prototype.getRandomColor = function(brightness){
      var rgb = [Math.random() * 256, Math.random() * 256, Math.random() * 256];
      var mix = [brightness*51, brightness*51, brightness*51]; //51 => 255/5
      var mixedrgb = [rgb[0] + mix[0], rgb[1] + mix[1], rgb[2] + mix[2]].map(function(x){ return Math.round(x/2.0)})
      return "rgb(" + mixedrgb.join(",") + ")";
  }
})();


  module.exports = Changetree
