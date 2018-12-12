module.exports = require('palette');

exports.printMsg = () => {
    
    var quantize = require('quantize');
    var arrayOfPixels = [[190,197,190], [202,204,200], [207,214,210], [211,214,211], [205,207,207]];
    var maximumColorCount = 4;

    var colorMap = quantize(arrayOfPixels, maximumColorCount);

    console.log(colorMap.palette());
    console.log(rgbToHex(190,197,190))
     
}


function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

