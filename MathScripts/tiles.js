"use strict";

var roomX = 15;
var roomY = 20;

var areaOfRoom = roomX * roomY;
var numberOfTilesInBox = 12;

var numberOfBoxes = areaOfRoom / numberOfTilesInBox;

numberOfBoxes = Math.ceil(numberOfBoxes);

console.log(numberOfBoxes);