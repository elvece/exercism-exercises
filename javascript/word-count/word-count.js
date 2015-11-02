
function words(input){
  var result = {};

  input = input.replace("\n", " ");
  var word = input.split(" ");

  // if(word.length <= 1){
  //   word = word[0];
  //   result.word = 1;
  //   return result;
  // } else {


    for (var i = 0; i < word.length; i++) {
      var count = result[word[i]] || 0;
      count ++;
      result[word[i]] = count;
    }
    return result;
}

module.exports = words;
