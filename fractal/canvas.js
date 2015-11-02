//var changeTree = require('./changeTree')
//var contoller = require('./controller')

var Canvas = (function(){
  function Canvas(params) {
    this.screenWidth = params.screenWidth
    this.screenHeight = params.screenHeight
    this.createCanvas = document.createElement("canvas")
    createCanvas.width = screenWidth;
    createCanvas.height = screenHeight;
    createCanvas.id = "canvas";
    createCanvas.background = getRandomColor(5);
    this.fractaldiv = document.getElementById("fractal")
    fractaldiv.appendChild(createCanvas);
    this.elem = document.getElementById('canvas');
    this.context = elem.getContext('2d');
  }

  return Canvas;

})()

module.exports = Canvas
