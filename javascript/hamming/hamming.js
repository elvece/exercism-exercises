//use OOP?

function compute(originalStrand, mutatedStrand){
  //split each string into an array
  //compare each index in first array to second array
  //if differnce, add to counter

  //return counter number
  var counter = 0;
  //splits into an array
  var workingOriginal = originalStrand.split("");
  var workingMutated = mutatedStrand.split("");

  for (var i = 0; i < workingOriginal.length; i++) {
    for (var j = 0; j < workingMutated.length; j++) {
      if (workingOriginal[i] !== workingMutated[j])
        counter ++;
    }
  }
  return counter;
}

module.exports = compute;
//compare the length of each strands
