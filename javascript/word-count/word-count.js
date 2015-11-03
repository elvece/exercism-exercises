//iffy wrap
(function() {
  'use strict';

function words(input){
  var result = {};

  input = input.replace(/ +?/g, " ");
  //trim white space also .trim()
  var word = input.split(" ");

  // if(word.length <= 1){
  //   word = word[0];
  //   result.word = 1;
  //   return result;
  // } else {

//to string for last problem

    for (var i = 0; i < word.length; i++) {
      var count = result[word[i]] || 0;
      count ++;
      result[word[i]] = count;
    }
    return result;
}

module.exports = words;

})();

// average = arr.reduce(function(prev, curr){ return prev + curr;}) / arr.length
// arr.reduce(function(prev, curr){ return prev[curr] = 1;}, {});
// arr.reduce(function(prev, curr){ (prev[curr]) ? prev[curr]++ : prev[curr] = 1; return prev;}, {});



// var arr = [11,20,89,1131];

// arr.reduce(function(prev, curr, index, array){
//   prev[curr] = array[index + 1] || array[0];
//   return prev;
// }, {});







