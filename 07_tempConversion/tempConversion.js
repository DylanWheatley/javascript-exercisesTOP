
const convertToCelsius = function(tempToC) {

    tempC = (tempToC - 32) / 1.8;

    let roundC = Math.round(tempC * 10) / 10;

    return roundC;
};

const convertToFahrenheit = function(tempToF) {

    tempF = (tempToF * 1.8) + 32;
    
    let roundF = Math.round(tempF * 10) /10

    return roundF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
