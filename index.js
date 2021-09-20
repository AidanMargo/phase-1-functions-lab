// Code your solution in this file!
function distanceFromHqInBlocks(street){
  const distanceInBlocks = Math.abs(street-42);
  return distanceInBlocks
}

function distanceFromHqInFeet(street){
  const blocks = distanceFromHqInBlocks(street)
  return blocks*264;
}

function distanceTravelledInFeet(start, end) {
  const feet = distanceFromHqInFeet();
  const distanceTravelled = Math.abs((start - end) * 264);
  return distanceTravelled;
}

function calculatesFarePrice(start, end){
  let distance = distanceTravelledInFeet(start, end);
  let cost;

  if(distance < 400){
    return 0
  } else if(distance > 400 && distance < 2000){
    return (distance - 400)*0.02
  } else if(distance > 2000 && distance < 2500){
    return 25
  } else {
    return 'cannot travel that far'
  }
}


distanceFromHqInBlocks()
distanceFromHqInFeet()
distanceTravelledInFeet()
calculatesFarePrice()