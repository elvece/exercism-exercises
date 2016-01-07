
function Hamming(){

  this.compute = function(originalStrand, mutatedStrand){
    var length = Math.min(mutatedStrand.length, originalStrand.length),
        count = 0;
        for (var i = 0; i < length; i++) {
          if(mutatedStrand[i] !== originalStrand[i]){
            count ++;
          }
        }
        return count;
  };
}

module.exports = Hamming;
