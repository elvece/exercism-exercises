
function Hamming(){

  this.compute = function(originalStrand, mutatedStrand){
    var mutatedLength = mutatedStrand.length,
        originalLength = originalStrand.length,
        length = Math.min(mutatedLength, originalLength),
        count = 0;

        if(mutatedLength !== originalLength)
          throw 'DNA strands must be of equal length.';

        for (var i = 0; i < length; i++) {
          if(mutatedStrand[i] !== originalStrand[i])
            count ++;
        }
        return count;
  };
}

module.exports = Hamming;
