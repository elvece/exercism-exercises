
function compute(originalStrand, mutatedStrand){
  //split each string into an array
  //compare each index in first array to second array
  //if differnce, add to counter

  //return counter number
  var counter = 0;
  //splits into an array
  var workingOriginal = originalStrand.split();
  var workingMutated = mutatedStrand.split();

  for (var i = 0; i < originalStrand.length; i++) {
    for (var j = 0; j < mutatedStrand.length; j++) {
      if (mutatedStrand[j] !==     originalStrand[i])
        counter ++;
    }
  }
  return counter;
}

module.exports = compute;
