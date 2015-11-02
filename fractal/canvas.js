var changeTree = require('./changeTree')
var contoller = require('./controller')


$(document).ready(function(){
var Canvas = (function(){

   this.screenWidth = $('body').width()
   this.screenHeight = $('body').height()
   this.createCanvas = document.createElement("canvas")
   createCanvas.width = screenWidth;
   createCanvas.height = screenHeight;
   createCanvas.id = "canvas";
   createCanvas.background = getRandomColor(5);
   this.fractaldiv = document.getElementById("fractal")
   fractaldiv.appendChild(createCanvas);
   this.elem = document.getElementById('canvas');
   this.context = elem.getContext('2d');
});

})()

module.exports = Canvas
