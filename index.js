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

function calculatesFarePrice (start, end) {
  const distance = distanceTravelledInFeet(start, end);

  if (distance <= 400) {
    return "$0";
  } else if (distance > 400 && distance <= 2000) {
    return .02 * (distance - 400);
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}

