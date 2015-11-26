// Write a program that, given a DNA strand, returns its RNA complement (per RNA transcription).
// * `G` -> `C`
// * `C` -> `G`
// * `T` -> `A`
// * `A` -> `U`

function DnaTranscriber(){}

DnaTranscriber.prototype.toRna = function(dna) {
  var arr = dna.split("");
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] === 'A'){
      arr[i] = 'U';
    }
    if(arr[i] === 'T'){
      arr[i] = 'A';
    }
    if(arr[i] === 'C'){
      arr[i] = 'x';
    }
    if(arr[i] === 'G'){
      arr[i] = 'C';
    }
    if(arr[i] === 'x'){
      arr[i] = 'G';
    }

    // arr[arr[i].indexOf('A')] ='U';
    // arr[arr[i].indexOf('T')] ='A';
    // arr[arr[i].indexOf('C')] ='x';
    // arr[arr[i].indexOf('G')] ='C';
    // arr[arr[i].indexOf('x')] ='G';
  }
    var rna = arr.join("");
    return rna;
};

module.exports = DnaTranscriber;
