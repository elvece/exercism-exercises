//iffy wrap
(function() {
  'use strict';

function words(input){
  var result = {};
  input = input.replace(/\s+/g, " ").trim();

  var word = input.split(" ");

    for (var i = 0; i < word.length; i++) {
      var count = result[word[i]] || 0;
      //janky
      if(isNaN(count)){
        count = 1;
      } else {
        count ++;
      }

      result[word[i]] = count;
    }

    return result;


}

module.exports = words;

})();









