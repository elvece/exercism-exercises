function accumulate(input, callback){
  //solution with functional programming
  // return input.map(callback);

  //solution with non-functional programming
  var result = [];
  for (var i = 0; i < input.length; i++) {
    result.push(callback(input[i]));
  }
  return result;
}

module.exports = accumulate;
