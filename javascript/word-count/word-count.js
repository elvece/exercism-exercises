
function words(input){
  var result = {};

  var word = input.split(" ");

  if(word.length <= 1){
    word = word[0];
    result.word = 1;
    return result;
  }
  // console.log(result)

  for (var i = 0; i < word.length; i++) {
    if (word[i] === word[i + 1]){
      result.word == word[i];
      // word.value == ++
      console.log(result)
    };
  }
  return result;

}

// words('test test test hey you there')

module.exports = words;
