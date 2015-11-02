var chai = require('chai')
var jsdom = require('mocha-jsdom')
var expect = chai.expect
var Canvas = require('../diyfractal/fractal/canvas')
var Canvas = require('../diyfractal/fractal/fractal.html')


describe('Canvas', function() {
  describe('creates a canvas', function() {
  var $
  jsdom()
    before(function () {
    $=require('jquery')
  })
      var canvas = new Canvas();
    });
   expect('canvas').to.have.ownProperty('width');
    })

    it('prints the fractal ', function() {

    })

    it('has the correct number of fractals', function() {

    })


