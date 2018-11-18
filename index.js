// Code your solution in this file!
function distanceFromHqInBlocks(num){
if (num > 42) {
  return num - 42
}
else {
  return 42 - num
}
}

function distanceFromHqInFeet(num){
  return distanceFromHqInBlocks(num) * 264
}

function distanceTravelledInFeet(start,destination){
  if (start < destination){
    return (destination - start) * 264
  }
  else {
    return (start - destination) * 264
  }
}

function calculatesFarePrice(start, distance) {
let end = distanceTravelledInFeet(start, distance);

if (end <= 400) {
     return 0;
   } else if (end > 400 && end <= 2000) {
     return .02 * (end - 400);
   } else if (end > 2000 && end < 2500) {
     return 25;
   } else {
     return 'cannot travel that far';
   }
 }
