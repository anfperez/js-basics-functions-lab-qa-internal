// Code your solution in this file!
/* here's my solution using absolute value 
function distanceFromHqInBlocks(location) {
  let numBlocks = 42 - location;
  return Math.abs(location);
}

distanceFromHqInBlocks(43);

distanceFromHqInBlocks(50);

distanceFromHqInBlocks(34);
*/

function distanceFromHqInBlocks (blockNumber) {
  if (blockNumber > 42) {
    return blockNumber - 42;
  } else {
    return 42 - blockNumber;
  }
}

function distanceFromHqInFeet(blockNumber) {
  return distanceFromHqInBlocks(blockNumber) * 264;
}

function distanceTravelledInFeet(start, end) {
  let startBlock = start * 264;
  let endBlock = end * 264;
  return Math.abs(startBlock - endBlock);
}

function calculatesFarePrice(start, end) {
  let numFeet = distanceTravelledInFeet(start, end);
  numFeet = numFeet - 400;
  if ( numFeet > 400 && numFeet < 2000) {
    return numFeet * 0.02;
    }
  else if 
}

