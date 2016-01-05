
function Hamming(){

  this.compute = function(originalStrand, mutatedStrand){
    var ham,
        workingOriginal = originalStrand.split(""),
        workingMutated = mutatedStrand.split(""),
        diff = workingOriginal.filter(function(i) {return workingMutated.indexOf(i) < 0;});
        ham = diff.length;
        return ham;
  };
}

module.exports = Hamming;
//compare the length of each strands
