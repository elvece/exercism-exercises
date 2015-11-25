// Write a program that, given a DNA strand, returns its RNA complement (per RNA transcription).
// * `G` -> `C`
// * `C` -> `G`
// * `T` -> `A`
// * `A` -> `U`

function DnaTranscriber(){}

DnaTranscriber.prototype.toRna = function(nuc) {
  if(nuc === 'C'){
    return nuc = 'G'
  }
};

module.exports = DnaTranscriber;
