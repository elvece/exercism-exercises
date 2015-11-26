
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
    //another thought, but not working?
    // arr[arr[i].indexOf('A')] ='U';
    // arr[arr[i].indexOf('T')] ='A';
    // arr[arr[i].indexOf('C')] ='x';
    // arr[arr[i].indexOf('G')] ='C';
    // arr[arr[i].indexOf('x')] ='G';
  }
    var rna = arr.join("");
    return rna;
};

DnaTranscriber.prototype.toDna = function(rna) {
  var arr = rna.split("");
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] === 'A'){
      arr[i] = 'T';
    }
    if(arr[i] === 'U'){
      arr[i] = 'A';
    }
    if(arr[i] === 'G'){
      arr[i] = 'x';
    }
    if(arr[i] === 'C'){
      arr[i] = 'G';
    }
    if(arr[i] === 'x'){
      arr[i] = 'C';
    }
  }
    var dna = arr.join("");
    return dna;
};

module.exports = DnaTranscriber;
