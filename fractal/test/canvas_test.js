var chai = require('chai')
//var jsdom = require('mocha-jsdom')
var expect = chai.expect
var Canvas = require('../canvas')
//var Canvas = require('../fractal.html')


describe('Canvas', function() {
  describe('creates a canvas', function() {
    before(function () { 
      this.canvas = new Canvas({screenWidth: '300'});
    })
    it('tests something', function() {
      expect('canvas').to.have.ownProperty('width');
    })

    it('prints the fractal ', function() {

    })

    it('has the correct number of fractals', function() {

    })


