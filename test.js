

var palette = require('./')
  , fs = require('fs')
  , Canvas = require('canvas')
  , Image = Canvas.Image
  , canvas = new Canvas
  , ctx = canvas.getContext('2d')
  , path = process.argv[2]
  , n = ~~process.argv[3] || 20
  , out = '/tmp/out.png';

if (!path) {
  console.error('Usage: test <image> [colors]');
  process.exit(1);
}

var img = new Image;

img.onload = function(){
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0);
  paintPalette();
};

img.src = path;

function paintPalette() {
    
  var x = 0;
  var colors = palette(canvas, n);
  var total = colors.map(function(c) {
    return c[1];
  }).reduce((a, b) => a + b, 0);
  colors.forEach(function(c){
    color = c[0]
    var r = color[0]
      , g = color[1]
      , b = color[2]
      , val = r << 16 | g << 8 | b
      , str = '#' + val.toString(16);
    console.log(str, round((c[1]/total*100),2) + '%')
  });
}

function round(number, places) {
  return +(Math.round(number + "e+" + places)  + "e-" + places);
}

// function save() {
//   fs.writeFile(out, canvas.toBuffer(), function(err){
//     if (err) throw err;
//     console.log('saved %s', out);
//   });
// }