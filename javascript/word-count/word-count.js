
function words(input){
  var result = {};

  var word = input.split(" ");

  if(word.length <= 1){
    word = word[0];
    result.word = 1;
  }
  // console.log(result)

  for (var i = 0; i < input.length; i++) {
    if (input[i] === input[i + 1]){
      result.input == input[i];
      // word.value == ++
      console.log(result)
    };
  }
  return result;

}

// words('test test test hey you there')

module.exports = words;
