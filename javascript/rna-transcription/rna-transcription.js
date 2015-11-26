// Write a program that, given a DNA strand, returns its RNA complement (per RNA transcription).
// * `G` -> `C`
// * `C` -> `G`
// * `T` -> `A`
// * `A` -> `U`

function DnaTranscriber(){}

DnaTranscriber.prototype.toRna = function(dna) {
  var arr = dna.split("");
  // var rna;
  // console.log('nuc: ' + nuc)
  //go down one at a time not whole thing
  for (var i = 0; i < arr.length; i++) {
    console.log('arr: ' +arr)
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
  }
    var rna = arr.join("");
    return rna;

    // var rna = dna.map(function(nuc){
    //   var copy = nuc;
    //   console.log('copy: ' + copy)
    //   nuc[nuc.indexOf('G')] ='C';
    //   nuc[nuc.indexOf('C')] ='G';
    //   nuc[nuc.indexOf('T')] ='A';
    //   nuc[nuc.indexOf('A')] ='U';
    //   return copy;
    // });

    // nuc[i] === 'A' ? 'U' : nuc[i];
    // nuc[i] ==='T'? 'A' : nuc[i];
    // nuc[i] === 'G' ? 'C' : nuc[i];
    // nuc[i] === 'C' ? 'G' : nuc[i];
  // }

  // nuc[nuc.indexOf('G')] ='C';
  // nuc[nuc.indexOf('C')] ='G';
  // nuc[nuc.indexOf('T')] ='A';
  // nuc[nuc.indexOf('A')] ='U';

  // var rna = nuc.map(function(nuc){
  //   nuc === 'A' ? 'U' : nuc;
  //   nuc ==='T'? 'A' : nuc;
  //   nuc === 'G' ? 'C' : nuc;
  //   nuc === 'C' ? 'G' : nuc;
  // });

  // rna.join("");
  // console.log('rna: ' + rna);
  // return rna;
}

module.exports = DnaTranscriber;
